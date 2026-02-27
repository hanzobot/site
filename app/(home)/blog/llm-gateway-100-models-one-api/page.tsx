import Link from 'next/link';
import { ArrowLeftIcon, ArrowRightIcon, CalendarIcon } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'LLM Gateway: 391 Models, One API',
  description:
    'Why we built a unified LLM gateway that routes to 391 models — 47 Zen models and 344 third-party — through one API. Automatic fallback, cost tracking, and budget controls built in.',
  openGraph: {
    title: 'LLM Gateway: 391 Models, One API',
    description:
      'One API key for every model. Automatic fallback. Cost tracking. Budget controls per agent. The infrastructure layer that makes autonomous agents reliable.',
  },
};

export default function LlmGatewayPage() {
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
          <span className="px-2.5 py-0.5 rounded-full border font-medium text-neutral-400 border-[#a3a3a3]/30 bg-[#a3a3a3]/8">
            Architecture
          </span>
          <span className="flex items-center gap-1.5 text-fd-muted-foreground">
            <CalendarIcon className="size-3" />
            August 1, 2023
          </span>
        </div>
        <h1 className="text-3xl lg:text-4xl font-bold tracking-tight mb-4 text-fd-foreground">
          LLM Gateway: 391 Models, One API
        </h1>
        <p className="text-lg text-fd-muted-foreground leading-relaxed">
          Every major AI provider has a different API. Different auth, different formats,
          different rate limits, different error codes. We built one gateway that handles
          all of it — so our agents never think about infrastructure.
        </p>
      </header>

      <article className="prose prose-invert max-w-none animate-[fadeInUp_0.8s_ease-out_0.15s_both]">
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-fd-foreground mb-4">The problem</h2>
          <div className="p-6 rounded-xl border border-fd-border bg-[rgba(10,15,26,0.4)]">
            <p className="text-sm text-fd-muted-foreground leading-relaxed mb-4">
              In July 2023, we were building agents that needed to use different models for
              different tasks. Claude for reasoning, GPT for code, open-source models for
              high-throughput work. Every provider had a different SDK, different authentication,
              different error handling, different rate limits.
            </p>
            <p className="text-sm text-fd-muted-foreground leading-relaxed">
              If any single provider had an outage, our agents stopped working. If we wanted
              to try a new model, we had to integrate a new SDK. If we wanted to track costs
              across providers, we had to build custom accounting for each one. This was
              untenable for production autonomous agents.
            </p>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-fd-foreground mb-4">One API for everything</h2>
          <div className="p-6 rounded-xl border border-fd-border bg-[rgba(10,15,26,0.4)]">
            <p className="text-sm text-fd-muted-foreground leading-relaxed mb-4">
              The{' '}
              <a href="https://github.com/hanzoai/llm" className="text-white hover:text-neutral-300 transition-colors" target="_blank" rel="noopener noreferrer">
                LLM Gateway
              </a>
              {' '}exposes a single OpenAI-compatible API that routes to any model from any
              provider. One API key. One format. One set of error codes.
            </p>
            <p className="text-sm text-fd-muted-foreground leading-relaxed">
              Today it routes to 391 models: 47 Zen models (our own MoDE family) and 344
              third-party models from OpenAI, Anthropic, Google, Together, Fireworks, Mistral,
              Cohere, and more. Adding a new provider is a configuration change, not a code change.
            </p>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-fd-foreground mb-4">Automatic fallback</h2>
          <div className="p-6 rounded-xl border border-fd-border bg-[rgba(10,15,26,0.4)]">
            <p className="text-sm text-fd-muted-foreground leading-relaxed mb-4">
              When Anthropic has an outage, agents that depend on Claude stop working — unless
              you have fallback routing. The Gateway automatically retries failed requests
              against equivalent models from other providers, with configurable fallback chains.
            </p>
            <p className="text-sm text-fd-muted-foreground leading-relaxed">
              This is critical for autonomous agents that run 24/7. An agent running a CI fix
              loop at 3am cannot wait for a human to notice a provider outage and switch models.
              The Gateway handles it transparently.
            </p>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-fd-foreground mb-4">Budget controls per agent</h2>
          <div className="p-6 rounded-xl border border-fd-border bg-[rgba(10,15,26,0.4)]">
            <p className="text-sm text-fd-muted-foreground leading-relaxed mb-4">
              Autonomous agents with unrestricted API access are a billing risk. The Gateway
              tracks costs per agent, per team, and per organization in real time. You can set
              daily budget caps per agent — if a bot hits its limit, it stops making API calls
              instead of running up a surprise bill.
            </p>
            <p className="text-sm text-fd-muted-foreground leading-relaxed">
              Rate limiting is built in at the TPM (tokens per minute) and RPM (requests per
              minute) level, with configurable limits per model and per user. Cost-aware routing
              can automatically select cheaper models for routine tasks and reserve expensive
              models for complex reasoning.
            </p>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-fd-foreground mb-4">Why this matters for agents</h2>
          <div className="p-6 rounded-xl border border-fd-border bg-[rgba(10,15,26,0.4)]">
            <p className="text-sm text-fd-muted-foreground leading-relaxed">
              Hanzo Bot uses the Gateway for every model call. When an agent needs to fix a lint
              error, it routes to a fast, cheap model. When it needs to debug a complex test
              failure, it routes to a reasoning model. When one provider goes down at 2am,
              it fails over to another. The agent never knows the difference — it just keeps working.
              That&apos;s what production infrastructure looks like.
            </p>
          </div>
        </section>
      </article>

      <div className="mt-12 rounded-2xl border border-neutral-700 bg-[rgba(10,15,26,0.6)] backdrop-blur-sm p-8 text-center animate-[fadeInUp_0.8s_ease-out_0.3s_both]">
        <h2 className="text-2xl font-bold text-fd-foreground mb-3">
          391 models. One API. Zero vendor lock-in.
        </h2>
        <p className="text-fd-muted-foreground max-w-[540px] mx-auto mb-6">
          The LLM Gateway powers every Hanzo product. It&apos;s open source.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://github.com/hanzoai/llm"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white text-black font-semibold hover:bg-neutral-200 transition-colors no-underline"
          >
            View on GitHub <ArrowRightIcon className="w-4 h-4" />
          </a>
          <Link
            href="/get-started"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-neutral-600 text-white font-semibold hover:bg-white/5 transition-colors no-underline"
          >
            Try Hanzo Bot
          </Link>
        </div>
      </div>
    </main>
  );
}
