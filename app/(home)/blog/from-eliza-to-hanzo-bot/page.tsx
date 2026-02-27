import Link from 'next/link';
import { ArrowLeftIcon, ArrowRightIcon, CalendarIcon } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'The Road to Hanzo Bot: Ten Years of Building AI Infrastructure',
  description:
    'From the first Hanzo API in 2014 to Jin hypermodal research, Zen MoDE models, Enso diffusion, and a 260-repo AI platform — the full story of how Hanzo Bot was born.',
  openGraph: {
    title: 'The Road to Hanzo Bot: Ten Years of Building AI Infrastructure',
    description:
      'Ten years of AI infrastructure. 260+ repos. Jin, Zen, Enso, and the agent platform that ties it all together.',
  },
};

export default function FromElizaToHanzoBotPage() {
  return (
    <main className="relative z-[1] max-w-[860px] mx-auto px-4 sm:px-6 pt-8 sm:pt-16 pb-10 overflow-x-hidden">
      <div className="stars" />
      <div className="nebula" />

      <Link
        href="/blog"
        className="inline-flex items-center gap-1.5 text-sm text-fd-muted-foreground hover:text-white transition-colors no-underline mb-8"
      >
        <ArrowLeftIcon className="w-3.5 h-3.5" /> All posts
      </Link>

      <header className="mb-10 animate-[fadeInUp_0.8s_ease-out]">
        <div className="flex items-center gap-3 text-xs mb-4">
          <span className="px-2.5 py-0.5 rounded-full border font-medium text-white border-neutral-600/30 bg-white/8">
            Origin Story
          </span>
          <span className="flex items-center gap-1.5 text-fd-muted-foreground">
            <CalendarIcon className="size-3" />
            February 20, 2026
          </span>
        </div>
        <h1 className="text-3xl lg:text-4xl font-bold tracking-tight mb-4 text-fd-foreground">
          The Road to Hanzo Bot: Ten Years of Building AI Infrastructure
        </h1>
        <p className="text-lg text-fd-muted-foreground leading-relaxed">
          Hanzo Bot didn&apos;t appear overnight. It&apos;s the culmination of ten years of
          infrastructure, three model families, and 260+ open-source repositories.
          Here&apos;s how we got here.
        </p>
      </header>

      <article className="prose prose-invert max-w-none animate-[fadeInUp_0.8s_ease-out_0.15s_both]">
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-fd-foreground mb-4">2014 — 2018: The Foundation</h2>
          <div className="p-6 rounded-xl border border-fd-border bg-[rgba(10,15,26,0.4)]">
            <p className="text-sm text-fd-muted-foreground leading-relaxed mb-4">
              Hanzo AI started in 2014 as a data-driven platform built in Go. By 2015
              we had shipped{' '}
              <a href="https://github.com/hanzo-js" className="text-white hover:text-neutral-300 transition-colors" target="_blank" rel="noopener noreferrer">
                hanzo.js
              </a>
              {' '}— our JavaScript SDK for commerce, payments, and blockchain. We went through
              Techstars in 2017. By 2018 we had a Rust-based search engine, crypto payment
              SDKs, and smart contracts in production.
            </p>
            <p className="text-sm text-fd-muted-foreground leading-relaxed">
              The early years built the commerce and crypto infrastructure that still powers
              Hanzo today — the same payment rails, the same identity layer, the same API-first
              architecture. We were building developer tools and SDKs before AI was the focus.
            </p>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-fd-foreground mb-4">2022 — 2023: The AI Pivot</h2>
          <div className="p-6 rounded-xl border border-fd-border bg-[rgba(10,15,26,0.4)]">
            <p className="text-sm text-fd-muted-foreground leading-relaxed mb-4">
              In October 2022, we initialized{' '}
              <a href="https://github.com/hanzoai/chat" className="text-white hover:text-neutral-300 transition-colors" target="_blank" rel="noopener noreferrer">
                Hanzo Chat
              </a>
              . By February 2023, we had active development on Chat and{' '}
              <a href="https://github.com/hanzoai/flow" className="text-white hover:text-neutral-300 transition-colors" target="_blank" rel="noopener noreferrer">
                Flow
              </a>
              {' '}(our visual workflow builder). The AI infrastructure push had begun.
            </p>
            <p className="text-sm text-fd-muted-foreground leading-relaxed mb-4">
              <strong className="text-white">May 2023</strong> was the turning point.
              We started{' '}
              <a href="https://github.com/hanzoai/jin" className="text-white hover:text-neutral-300 transition-colors" target="_blank" rel="noopener noreferrer">
                Jin
              </a>
              {' '}— our hypermodal AI architecture based on JEPA (Joint Embedding Predictive
              Architecture). Within three days we had a functional JEPA implementation. The same
              month, Zoo Labs Foundation started training infrastructure with Zoo Gym.
            </p>
            <p className="text-sm text-fd-muted-foreground leading-relaxed mb-4">
              In June 2023 we forked and began building our own Rust ML framework (Candle).
              In <strong className="text-white">July 2023</strong> we launched the{' '}
              <a href="https://github.com/hanzoai/llm" className="text-white hover:text-neutral-300 transition-colors" target="_blank" rel="noopener noreferrer">
                LLM Gateway
              </a>
              {' '}— a unified proxy for every major model provider. One API, automatic fallback,
              cost tracking. By August we had AI code generation in Vim and a React component
              library for AI applications.
            </p>
            <p className="text-sm text-fd-muted-foreground leading-relaxed">
              This wasn&apos;t a pivot — it was an acceleration. The API infrastructure, the SDK
              patterns, the commerce stack — all of it was already built. We just pointed it at AI.
            </p>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-fd-foreground mb-4">2024: Three Model Families</h2>
          <div className="p-6 rounded-xl border border-fd-border bg-[rgba(10,15,26,0.4)]">
            <p className="text-sm text-fd-muted-foreground leading-relaxed mb-4">
              2024 was about going deep on models and inference. In January, Jin got a major
              update from internal research. In February, we started building our own{' '}
              <a href="https://github.com/hanzoai/engine" className="text-white hover:text-neutral-300 transition-colors" target="_blank" rel="noopener noreferrer">
                inference engine
              </a>
              {' '}in Rust. In March, we started{' '}
              <a href="https://github.com/hanzoai/enso" className="text-white hover:text-neutral-300 transition-colors" target="_blank" rel="noopener noreferrer">
                Enso
              </a>
              {' '}— our AI-native browser with multimodal diffusion intelligence.
            </p>
            <p className="text-sm text-fd-muted-foreground leading-relaxed mb-4">
              By July 2024 we had{' '}
              <a href="https://github.com/hanzoai/gui" className="text-white hover:text-neutral-300 transition-colors" target="_blank" rel="noopener noreferrer">
                a drag-and-drop agent builder
              </a>
              {' '}— three months before ElizaOS even launched. We were already deep in the agent
              space, building our own tools and frameworks.
            </p>
            <p className="text-sm text-fd-muted-foreground leading-relaxed">
              Three model families were now in development:{' '}
              <strong className="text-white">Jin</strong> (hypermodal — unified text, vision, audio, video, 3D),{' '}
              <strong className="text-white">Zen</strong> (MoDE — Mixture of Distilled Experts for efficient inference), and{' '}
              <strong className="text-white">Enso</strong> (diffusion intelligence for visual understanding and generation).
              Each one addressed a different dimension of intelligence.
            </p>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-fd-foreground mb-4">Late 2024: ElizaOS Compatibility</h2>
          <div className="p-6 rounded-xl border border-fd-border bg-[rgba(10,15,26,0.4)]">
            <p className="text-sm text-fd-muted-foreground leading-relaxed mb-4">
              When ElizaOS launched in late 2024, we announced compatibility within 24 hours.
              Not because we needed it — we already had our own agent infrastructure — but because
              interoperability is a core principle. We&apos;ve always maintained our own forks across{' '}
              <a href="https://github.com/hanzoai" className="text-white hover:text-neutral-300 transition-colors" target="_blank" rel="noopener noreferrer">
                github.com/hanzoai
              </a>
              {' '}(260+ repositories), and adding ElizaOS support was a natural extension of
              our multi-framework approach.
            </p>
            <p className="text-sm text-fd-muted-foreground leading-relaxed">
              The{' '}
              <a href="https://github.com/hanzoai/eliza-starter" className="text-white hover:text-neutral-300 transition-colors" target="_blank" rel="noopener noreferrer">
                eliza-starter
              </a>
              {' '}template made it easy to spin up ElizaOS-powered agents with Hanzo&apos;s infrastructure.
              But our own agent SDK, launched in March 2025, is what powers Hanzo Bot today.
            </p>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-fd-foreground mb-4">March 2025: The Infrastructure Explosion</h2>
          <div className="p-6 rounded-xl border border-fd-border bg-[rgba(10,15,26,0.4)]">
            <p className="text-sm text-fd-muted-foreground leading-relaxed mb-4">
              March 2025 was our biggest infrastructure push. In two weeks we shipped:{' '}
              <a href="https://github.com/hanzoai/agent" className="text-white hover:text-neutral-300 transition-colors" target="_blank" rel="noopener noreferrer">
                Agent SDK
              </a>
              {' '}(multi-agent orchestration in Go),{' '}
              <a href="https://github.com/hanzoai/operative" className="text-white hover:text-neutral-300 transition-colors" target="_blank" rel="noopener noreferrer">
                Operative
              </a>
              {' '}(computer use for Claude),{' '}
              <a href="https://github.com/hanzoai/mcp" className="text-white hover:text-neutral-300 transition-colors" target="_blank" rel="noopener noreferrer">
                MCP
              </a>
              {' '}(260+ tools via Model Context Protocol), CUA, ACI, Python SDK, Go SDK, JS SDK,
              Router, Overlord, and MCP-integrated Chat.
            </p>
            <p className="text-sm text-fd-muted-foreground leading-relaxed">
              Every piece was designed to work together. The LLM Gateway routes models.
              The Agent SDK orchestrates agents. MCP gives them tools. Operative gives them
              eyes and hands. The SDKs let developers build on all of it.
            </p>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-fd-foreground mb-4">May — October 2025: Zen Model Family</h2>
          <div className="p-6 rounded-xl border border-fd-border bg-[rgba(10,15,26,0.4)]">
            <p className="text-sm text-fd-muted-foreground leading-relaxed mb-4">
              In May 2025 we launched the{' '}
              <a href="https://github.com/hanzoai/zen" className="text-white hover:text-neutral-300 transition-colors" target="_blank" rel="noopener noreferrer">
                Zen model family
              </a>
              {' '}alongside Sho (text diffusion), Kensho (17B image generation), Mugen (audio),
              and Koe (text-to-dialogue). The Zen architecture — <strong className="text-white">Mixture of
              Distilled Experts (MoDE)</strong> — lets a 480B model activate only ~60B parameters
              per forward pass.
            </p>
            <p className="text-sm text-fd-muted-foreground leading-relaxed mb-4">
              By September, we published the{' '}
              <a href="https://github.com/hanzoai/papers" className="text-white hover:text-neutral-300 transition-colors" target="_blank" rel="noopener noreferrer">
                whitepaper
              </a>
              {' '}and 27 technical papers covering the full family — 47 models spanning text,
              code, vision, audio, video, 3D, safety, and agents. Co-developed with{' '}
              <strong className="text-white">Zoo Labs Foundation</strong>, the Zen family represents
              our most ambitious research effort.
            </p>
            <p className="text-sm text-fd-muted-foreground leading-relaxed">
              In October, the LLM Gateway (now at 391 models) and the Rust-based inference
              engine went into production alongside Wan2.2 (video generation) and the full
              academic paper portfolio.
            </p>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-fd-foreground mb-4">November 2025 — February 2026: Hanzo Bot</h2>
          <div className="p-6 rounded-xl border border-fd-border bg-[rgba(10,15,26,0.4)]">
            <p className="text-sm text-fd-muted-foreground leading-relaxed mb-4">
              In November 2025, the{' '}
              <a href="https://github.com/hanzoai/bot" className="text-white hover:text-neutral-300 transition-colors" target="_blank" rel="noopener noreferrer">
                Bot project
              </a>
              {' '}started. It went through several names — Warelay, Clawd, Clawdis, OpenClaw —
              before becoming <strong className="text-white">Hanzo Bot</strong> in February 2026.
              The naming evolved; the architecture was consistent from day one.
            </p>
            <p className="text-sm text-fd-muted-foreground leading-relaxed mb-4">
              Hanzo Bot is the integration layer for everything we built: LLM Gateway (100+ models),
              Agent SDK (multi-agent orchestration), MCP (260+ tools), Operative (computer use),
              Zen models (MoDE inference), 707+ personality profiles, cloud VMs, native crypto
              wallets, and 7+ chat channels.
            </p>
            <p className="text-sm text-fd-muted-foreground leading-relaxed">
              It&apos;s not a chatbot. It&apos;s an AI workforce platform — one that took ten years
              of infrastructure to make possible.
            </p>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-fd-foreground mb-4">The Stack Today</h2>
          <div className="p-6 rounded-xl border border-fd-border bg-[rgba(10,15,26,0.4)]">
            <pre className="text-xs text-fd-muted-foreground font-mono overflow-x-auto whitespace-pre leading-relaxed">
{`┌─────────────────────────────────────────────┐
│              Hanzo Bot (Agent)               │
├──────────┬──────────┬──────────┬────────────┤
│ Discord  │  Slack   │ Telegram │  Terminal  │
│ WhatsApp │  Signal  │ iMessage │  VS Code   │
├──────────┴──────────┴──────────┴────────────┤
│           Agent SDK (Go) + MCP              │
│         260+ tools · multi-agent            │
├──────────┬──────────┬───────────────────────┤
│ Operative│   Enso   │    ACI / Overlord     │
│ (Claude) │(Browser) │  (Cross-Platform)     │
├──────────┴──────────┴───────────────────────┤
│          LLM Gateway (391 models)           │
│     Zen MoDE · Jin · Claude · GPT · ...     │
├─────────────────────────────────────────────┤
│        Cloud VMs · K8s · IAM · KMS          │
│     Crypto Wallets · x402 · 100+ Chains     │
├─────────────────────────────────────────────┤
│  Papers · HIPs · Zen Dataset (8.47B tok)    │
│         github.com/hanzoai (260+ repos)     │
└─────────────────────────────────────────────┘`}
            </pre>
          </div>
        </section>
      </article>

      {/* CTA */}
      <div className="mt-12 rounded-2xl border border-neutral-700 bg-[rgba(10,15,26,0.6)] backdrop-blur-sm p-8 text-center animate-[fadeInUp_0.8s_ease-out_0.3s_both]">
        <h2 className="text-2xl font-bold text-fd-foreground mb-3">
          Ten years of building. One platform.
        </h2>
        <p className="text-fd-muted-foreground max-w-[540px] mx-auto mb-6">
          Start free or deploy to Hanzo Cloud in under a minute.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/get-started"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white text-black font-semibold hover:bg-neutral-200 transition-colors no-underline"
          >
            Get started <ArrowRightIcon className="w-4 h-4" />
          </Link>
          <a
            href="https://github.com/hanzoai"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-neutral-600 text-white font-semibold hover:bg-white/5 transition-colors no-underline"
          >
            View on GitHub
          </a>
        </div>
      </div>
    </main>
  );
}
