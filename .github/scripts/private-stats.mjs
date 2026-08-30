// Regenerates the PRIVATE-STATS block in README.md.
//
// The profile-summary cards can only describe repos their token can see. This
// script runs on the same PAT and reports the aggregate shape of ALL the work,
// public and private, so the README does not quietly under-sell 47 repos.
//
// It deliberately emits only aggregates: counts, percentages, language names.
// No repo names, descriptions, commit messages, or SHAs ever reach the README.

const TOKEN = process.env.GITHUB_TOKEN;
const USER = process.env.PROFILE_USER;
if (!TOKEN || !USER) throw new Error('GITHUB_TOKEN and PROFILE_USER are required');

async function gql(query, variables = {}) {
  const res = await fetch('https://api.github.com/graphql', {
    method: 'POST',
    headers: {
      Authorization: `bearer ${TOKEN}`,
      'Content-Type': 'application/json',
      'User-Agent': 'private-stats-script',
    },
    body: JSON.stringify({ query, variables }),
  });
  if (!res.ok) throw new Error(`GraphQL HTTP ${res.status}: ${await res.text()}`);
  const body = await res.json();
  if (body.errors) throw new Error(`GraphQL: ${JSON.stringify(body.errors)}`);
  return body.data;
}

// Every owned repo, paginated, with its language byte counts.
async function allRepos() {
  const out = [];
  let cursor = null;
  do {
    const data = await gql(
      `query($cursor: String, $login: String!) {
         user(login: $login) {
           repositories(first: 100, after: $cursor, ownerAffiliations: [OWNER],
                        isFork: false, orderBy: {field: PUSHED_AT, direction: DESC}) {
             pageInfo { hasNextPage endCursor }
             nodes {
               isPrivate
               pushedAt
               languages(first: 12, orderBy: {field: SIZE, direction: DESC}) {
                 edges { size node { name } }
               }
             }
           }
         }
       }`,
      { cursor, login: USER },
    );
    const page = data.user.repositories;
    out.push(...page.nodes);
    cursor = page.pageInfo.hasNextPage ? page.pageInfo.endCursor : null;
  } while (cursor);
  return out;
}

const contrib = (
  await gql(
    `query($login: String!) {
       user(login: $login) {
         contributionsCollection {
           restrictedContributionsCount
           contributionCalendar { totalContributions }
         }
       }
     }`,
    { login: USER },
  )
).user.contributionsCollection;

const repos = await allRepos();
const priv = repos.filter((r) => r.isPrivate).length;
const total = repos.length;

// Without a PAT that can read private repos, every number below would describe
// only the public half. Publishing that as the whole picture is worse than
// publishing nothing, so leave the existing block untouched.
if (priv === 0) {
  console.log(
    'private-stats: token cannot see private repos (set SUMMARY_GITHUB_TOKEN). ' +
      'Leaving the existing block unchanged.',
  );
  process.exit(0);
}

// Language mix across everything, weighted by bytes.
const bytes = new Map();
for (const r of repos) {
  for (const e of r.languages.edges) {
    bytes.set(e.node.name, (bytes.get(e.node.name) ?? 0) + e.size);
  }
}
// Markup and lockfile-ish languages say nothing about how someone builds.
const SKIP = new Set(['HTML', 'CSS', 'SCSS', 'Dockerfile', 'Makefile', 'Procfile']);
const ranked = [...bytes].filter(([n]) => !SKIP.has(n)).sort((a, b) => b[1] - a[1]);
const sum = ranked.reduce((a, [, n]) => a + n, 0) || 1;

const yearTotal = contrib.contributionCalendar.totalContributions;
const privShare = Math.round((contrib.restrictedContributionsCount / (yearTotal || 1)) * 100);
const yearAgo = new Date(Date.now() - 365 * 864e5).toISOString();
const active = repos.filter((r) => r.pushedAt > yearAgo).length;

const bar = (pct) => '█'.repeat(Math.round(pct / 4)) + '░'.repeat(25 - Math.round(pct / 4));
// A sub-1% bar renders as an empty trough, which reads as a rendering bug.
const langLines = ranked
  .map(([name, n]) => [name, (n / sum) * 100])
  .filter(([, pct]) => pct >= 1)
  .slice(0, 5)
  .map(([name, pct]) => {
    return `${name.padEnd(18)}${bar(pct)} ${pct.toFixed(1).padStart(5)}%`;
  })
  .join('\n');

const block = `\`\`\`text
Repositories        ${total} total, ${priv} private (${Math.round((priv / total) * 100)}%)
Last 12 months      ${yearTotal.toLocaleString()} contributions, ${privShare}% in private repos
Active this year    ${active} repos pushed to

${langLines}
\`\`\`

<sub>Counted across public <em>and</em> private repos, refreshed daily by <a href="./.github/workflows/profile-cards.yml">a workflow</a>. Aggregates only, no private repo is named.</sub>`;

const START = '<!-- PRIVATE-STATS:START -->';
const END = '<!-- PRIVATE-STATS:END -->';
const readme = await import('node:fs/promises');
const src = await readme.readFile('README.md', 'utf8');
const a = src.indexOf(START);
const b = src.indexOf(END);
if (a === -1 || b === -1) throw new Error('PRIVATE-STATS markers missing from README.md');

const next = `${src.slice(0, a + START.length)}\n${block}\n${src.slice(b)}`;
if (next === src) {
  console.log('private-stats: no change');
} else {
  await readme.writeFile('README.md', next);
  console.log(`private-stats: updated (${total} repos, ${priv} private, ${yearTotal} contributions)`);
}
