<div align="center">

# Fedi Naimi

<a href="https://fnc-lab.vercel.app">
  <img src="https://readme-typing-svg.demolab.com?font=JetBrains+Mono&weight=600&size=20&duration=3400&pause=1000&color=8B5CF6&center=true&vCenter=true&width=680&lines=I+build+agents+that+run+at+3am+without+me;LangGraph+%C2%B7+Claude+API+%C2%B7+NestJS+%C2%B7+Next.js;15+paying+customers+in+the+first+20+days" alt="I build agents that run at 3am without me" />
</a>

<br/>

[![Portfolio](https://img.shields.io/badge/Portfolio-fnc--lab-8B5CF6?style=for-the-badge&logo=vercel&logoColor=white)](https://fnc-lab.vercel.app)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/fedi-naimi-035753198)
[![Email](https://img.shields.io/badge/Email-Reach%20out-EA4335?style=for-the-badge&logo=gmail&logoColor=white)](mailto:fedi.naimi20@gmail.com)

</div>

---

I'm a software engineer in Grand Rapids, Michigan, and I spend most of my time on the unglamorous half of AI products: the queue that has to drain, the retry that has to be idempotent, the third-party API that rate-limits you at the worst possible moment.

Demos are easy. I care about the version that still works on day 90, when a paying customer is on the phone.

Right now that means multi-agent systems: LangGraph state machines, Claude and Gemini in the loop, NestJS and FastAPI behind them, and enough observability to know which agent made the bad call. I'm finishing an M.S. in Health Informatics at GVSU, which is how I ended up building clinical assessment tooling — a domain where "the model was confidently wrong" is not an acceptable postmortem.

<br/>

## Currently building

| Project | What it is | Stack |
| :--- | :--- | :--- |
| **[Wayloom](https://wayloom-ai.com)** | Multi-agent platform for cognitive assessment. Automates 10+ structured tasks and replaces a 60–90 minute paper workflow with a self-guided digital one. I built the scoring engine and the eval protocol that checks agent output against expert-labeled ground truth. | `LangGraph` `Next.js` `PostgreSQL` |
| **[Prospecter](https://prospecter.io)** | Multi-tenant B2B SaaS for AI outbound. Went from zero to 15 paying customers in 20 days. I led a team of four and owned the async job pipeline behind the long-running agent workloads. | `NestJS` `Claude API` `Redis` `Azure` |
| **Parlivo** | A 4-stage agent pipeline — Analyze, Strategize, Draft, Critique — running 5k+ interactions per customer per month across 5 channels. 64 data models, which taught me a lot about migrations. | `FastAPI` `Gemini` `BullMQ` |
| **Drchopp** | An autonomous commerce agent wired into Shopify and CJDropshipping. Does product research, supplier sourcing, SEO copy, campaign automation. 10k+ organic interactions, zero ad spend. | `Node.js` `LLM tooling` |

<br/>

## The part you can't see

Most of what I build ships under NDA or lives in product repos that will never be public. The cards below only know about my public repos, so here's the honest shape of the whole thing:

<!-- PRIVATE-STATS:START -->
```text
Repositories        71 total, 47 private (66%)
Last 12 months      1,368 contributions, 91% in private repos
Active this year    21 repos pushed to

TypeScript        ██████████████░░░░░░░░░░░  56.0%
Python            ████░░░░░░░░░░░░░░░░░░░░░  15.2%
Jupyter Notebook  ████░░░░░░░░░░░░░░░░░░░░░  15.1%
JavaScript        ███░░░░░░░░░░░░░░░░░░░░░░  11.9%
```

<sub>Counted across public <em>and</em> private repos, refreshed daily by <a href="./.github/workflows/profile-cards.yml">a workflow</a>. Aggregates only, no private repo is named.</sub>
<!-- PRIVATE-STATS:END -->

<br/>

## What I actually do

```text
Agent orchestration    LangGraph state machines, tool calling, eval harnesses
Backend architecture   Multi-tenant data models, async job pipelines, DDD
Reliability            Retry semantics, idempotency keys, rate-limit backoff
Ship to production     Docker, CI/CD, Stripe billing, observability
```

If I had to pick the skill I lean on most, it's drawing the boundary between what the model decides and what the code decides. Almost every agent bug I've chased came from putting that line in the wrong place.

<br/>

## Stack

<div align="center">

![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white)
![Python](https://img.shields.io/badge/Python-3776AB?style=flat-square&logo=python&logoColor=white)
![NestJS](https://img.shields.io/badge/NestJS-E0234E?style=flat-square&logo=nestjs&logoColor=white)
![Next.js](https://img.shields.io/badge/Next.js-000000?style=flat-square&logo=nextdotjs&logoColor=white)
![FastAPI](https://img.shields.io/badge/FastAPI-009688?style=flat-square&logo=fastapi&logoColor=white)
![React Native](https://img.shields.io/badge/React_Native-61DAFB?style=flat-square&logo=react&logoColor=black)

![LangGraph](https://img.shields.io/badge/LangGraph-1C3C3C?style=flat-square&logo=langchain&logoColor=white)
![Claude API](https://img.shields.io/badge/Claude_API-D97757?style=flat-square&logo=anthropic&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-4169E1?style=flat-square&logo=postgresql&logoColor=white)
![Redis](https://img.shields.io/badge/Redis-DC382D?style=flat-square&logo=redis&logoColor=white)
![Prisma](https://img.shields.io/badge/Prisma-2D3748?style=flat-square&logo=prisma&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=flat-square&logo=mongodb&logoColor=white)

![Docker](https://img.shields.io/badge/Docker-2496ED?style=flat-square&logo=docker&logoColor=white)
![Azure](https://img.shields.io/badge/Azure-0078D4?style=flat-square&logo=microsoftazure&logoColor=white)
![AWS](https://img.shields.io/badge/AWS-232F3E?style=flat-square&logo=amazonwebservices&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=flat-square&logo=vercel&logoColor=white)
![Stripe](https://img.shields.io/badge/Stripe-635BFF?style=flat-square&logo=stripe&logoColor=white)
![GitHub Actions](https://img.shields.io/badge/Actions-2088FF?style=flat-square&logo=githubactions&logoColor=white)

</div>

<br/>

## Some things that went well

- **NSF I-Corps**, University of Michigan track — accepted 2026
- **3rd place**, GR DeepTech Competition 2026
- **Start Garden 100** — advanced from Top 100 to Top 50
- **IEEE Xtreme 15.0** — global rank 559 of 2,589 teams
- Wayloom featured by the **GVSU College of Computing** (03/2026)
- Backed by the **Anthropic Startup Program**, **NVIDIA Inception**, **Microsoft for Startups**, and **GitHub for Startups**
- **Web Summit Qatar** Alpha Program
- 3rd place, Orange Summer Challenge · 4th place, Metaverse Tunisian Summit
- **Chair, IEEE EMBS Tunisia Section** (2025–2026), after two years as General Secretary
- M.S. Health Informatics & Bioinformatics, GVSU — GPA 3.83/4.00

<br/>

## GitHub

<!--
  These SVGs are generated by .github/workflows/profile-cards.yml and committed
  into this repo, so they are served by raw.githubusercontent.com and cannot be
  rate-limited by a third-party host.
-->

<div align="center">

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/fedinaimi/fedinaimi/main/profile-summary-card-output/github_dark/0-profile-details.svg" />
  <img src="https://raw.githubusercontent.com/fedinaimi/fedinaimi/main/profile-summary-card-output/default/0-profile-details.svg" alt="profile details" width="820" />
</picture>

<br/><br/>

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/fedinaimi/fedinaimi/main/profile-summary-card-output/github_dark/3-stats.svg" />
  <img src="https://raw.githubusercontent.com/fedinaimi/fedinaimi/main/profile-summary-card-output/default/3-stats.svg" alt="stats" height="200" />
</picture>
<picture>
  <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/fedinaimi/fedinaimi/main/profile-summary-card-output/github_dark/2-most-commit-language.svg" />
  <img src="https://raw.githubusercontent.com/fedinaimi/fedinaimi/main/profile-summary-card-output/default/2-most-commit-language.svg" alt="most used languages" height="200" />
</picture>

<br/><br/>

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/fedinaimi/fedinaimi/main/profile-summary-card-output/github_dark/1-repos-per-language.svg" />
  <img src="https://raw.githubusercontent.com/fedinaimi/fedinaimi/main/profile-summary-card-output/default/1-repos-per-language.svg" alt="repos per language" height="200" />
</picture>
<picture>
  <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/fedinaimi/fedinaimi/main/profile-summary-card-output/github_dark/4-productive-time.svg" />
  <img src="https://raw.githubusercontent.com/fedinaimi/fedinaimi/main/profile-summary-card-output/default/4-productive-time.svg" alt="productive time" height="200" />
</picture>

</div>

<br/>

## Contribution activity

<!-- Generated by .github/workflows/snake.yml into the `output` branch. -->

<div align="center">

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/fedinaimi/fedinaimi/output/snake-dark.svg" />
  <img alt="contribution snake" src="https://raw.githubusercontent.com/fedinaimi/fedinaimi/output/snake.svg" />
</picture>

</div>

<br/>

<div align="center">

**Always up for a conversation about agentic systems, clinical AI, or anything that has to hold up unattended at 3am.**

<sub>If something here is relevant to what you're building, email me — I'm happy to walk through the architecture of the private work.</sub>

</div>
