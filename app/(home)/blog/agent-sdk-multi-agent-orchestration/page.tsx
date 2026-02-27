import Link from 'next/link';
import { ArrowLeftIcon, ArrowRightIcon, CalendarIcon } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Agent SDK: Multi-Agent Orchestration with 260+ MCP Tools',
  description:
    'How we built a Go-based agent SDK that coordinates multiple AI agents with shared memory, tool delegation, and 260+ MCP tools — the orchestration layer behind Hanzo Bot.',
  openGraph: {
    title: 'Agent SDK: Multi-Agent Orchestration with 260+ MCP Tools',
    description:
      'Multi-agent orchestration in Go. OpenAI-compatible API. 260+ MCP tools. Shared memory. The SDK that became Hanzo Bot.',
  },
};

export default function AgentSdkPage() {
  return (
    <main className="relative z-[1] max-w-[860px] mx-auto px-4 sm:px-6 pt-12 sm:pt-16 pb-10 overflow-hidden">
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
            Launch
          </span>
          <span className="flex items-center gap-1.5 text-fd-muted-foreground">
            <CalendarIcon className="size-3" />
            March 15, 2025
          </span>
        </div>
        <h1 className="text-3xl lg:text-4xl font-bold tracking-tight mb-4 text-fd-foreground">
          Agent SDK: Multi-Agent Orchestration with 260+ MCP Tools
        </h1>
        <p className="text-lg text-fd-muted-foreground leading-relaxed">
          A single agent hits limits fast. It can&apos;t hold enough context, use enough
          tools, or handle enough concurrent tasks. We built an SDK that coordinates
          multiple agents — each specialized, all sharing memory and tools.
        </p>
      </header>

      <article className="prose prose-invert max-w-none animate-[fadeInUp_0.8s_ease-out_0.15s_both]">
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-fd-foreground mb-4">Why multi-agent</h2>
          <div className="p-6 rounded-xl border border-fd-border bg-[rgba(10,15,26,0.4)]">
            <p className="text-sm text-fd-muted-foreground leading-relaxed mb-4">
              A coding agent needs deep context about your codebase. A deployment agent
              needs access to infrastructure. A monitoring agent needs to watch metrics.
              A support agent needs conversation history. No single agent can hold all this
              context effectively.
            </p>
            <p className="text-sm text-fd-muted-foreground leading-relaxed">
              Multi-agent orchestration lets each agent specialize while sharing a common
              memory and tool layer. The coding agent writes code, hands off to the deployment
              agent, which hands off to the monitoring agent. Each one is good at its job
              because it&apos;s not trying to do everything.
            </p>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-fd-foreground mb-4">The SDK</h2>
          <div className="p-6 rounded-xl border border-fd-border bg-[rgba(10,15,26,0.4)]">
            <p className="text-sm text-fd-muted-foreground leading-relaxed mb-4">
              The{' '}
              <a href="https://github.com/hanzoai/agent" className="text-white hover:text-neutral-300 transition-colors" target="_blank" rel="noopener noreferrer">
                Agent SDK
              </a>
              {' '}is written in Go and exposes an OpenAI-compatible API. You can use it with
              any OpenAI client library — Python, JavaScript, Go, Rust — without learning a
              new interface.
            </p>
            <p className="text-sm text-fd-muted-foreground leading-relaxed">
              Agents are defined declaratively: a system prompt, a set of tools, a model
              preference, and handoff rules. The SDK handles routing, memory sharing, tool
              execution, error recovery, and state management. You define what each agent
              does; the SDK handles how they work together.
            </p>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-fd-foreground mb-4">260+ MCP tools</h2>
          <div className="p-6 rounded-xl border border-fd-border bg-[rgba(10,15,26,0.4)]">
            <p className="text-sm text-fd-muted-foreground leading-relaxed mb-4">
              Model Context Protocol gives agents access to real tools — not toy functions,
              but production capabilities. The{' '}
              <a href="https://github.com/hanzoai/mcp" className="text-white hover:text-neutral-300 transition-colors" target="_blank" rel="noopener noreferrer">
                Hanzo MCP server
              </a>
              {' '}provides 260+ tools across categories:
            </p>
            <div className="grid grid-cols-2 gap-2 text-sm text-fd-muted-foreground">
              <div className="p-3 rounded-lg bg-[rgba(255,255,255,0.03)] border border-fd-border/50">
                <span className="text-white font-medium">Databases</span> — PostgreSQL, MongoDB, Redis, SQLite
              </div>
              <div className="p-3 rounded-lg bg-[rgba(255,255,255,0.03)] border border-fd-border/50">
                <span className="text-white font-medium">Cloud</span> — AWS, GCP, Azure, DigitalOcean, Cloudflare
              </div>
              <div className="p-3 rounded-lg bg-[rgba(255,255,255,0.03)] border border-fd-border/50">
                <span className="text-white font-medium">Browser</span> — Playwright, screenshots, DOM interaction
              </div>
              <div className="p-3 rounded-lg bg-[rgba(255,255,255,0.03)] border border-fd-border/50">
                <span className="text-white font-medium">Git</span> — Repos, PRs, issues, CI/CD, deployments
              </div>
              <div className="p-3 rounded-lg bg-[rgba(255,255,255,0.03)] border border-fd-border/50">
                <span className="text-white font-medium">APIs</span> — REST, GraphQL, webhooks, auth flows
              </div>
              <div className="p-3 rounded-lg bg-[rgba(255,255,255,0.03)] border border-fd-border/50">
                <span className="text-white font-medium">Crypto</span> — Wallets, transactions, DeFi, 100+ chains
              </div>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-fd-foreground mb-4">Shared memory</h2>
          <div className="p-6 rounded-xl border border-fd-border bg-[rgba(10,15,26,0.4)]">
            <p className="text-sm text-fd-muted-foreground leading-relaxed mb-4">
              Agents share a persistent memory layer scoped by session, project, and organization.
              When the coding agent discovers a bug pattern, the testing agent knows about it.
              When the deployment agent encounters an infrastructure issue, the ops agent can
              reference it later. Memory persists across sessions — agents learn from past work.
            </p>
            <p className="text-sm text-fd-muted-foreground leading-relaxed">
              Tool delegation works the same way. An agent can delegate a sub-task to a specialized
              agent, wait for the result, and continue. The orchestration is explicit — no hidden
              magic, no black-box routing.
            </p>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-fd-foreground mb-4">From SDK to platform</h2>
          <div className="p-6 rounded-xl border border-fd-border bg-[rgba(10,15,26,0.4)]">
            <p className="text-sm text-fd-muted-foreground leading-relaxed">
              The Agent SDK is the orchestration layer inside Hanzo Bot. Every bot is a
              multi-agent system: a coordinator agent manages specialized agents for coding,
              deployment, monitoring, support, marketing, and ops. The SDK also powers the{' '}
              <a href="https://github.com/hanzoai/personas" className="text-white hover:text-neutral-300 transition-colors" target="_blank" rel="noopener noreferrer">
                707+ personality profiles
              </a>
              {' '}and the skill system. It&apos;s the glue that turns individual capabilities
              into a coherent AI team.
            </p>
          </div>
        </section>
      </article>

      <div className="mt-12 rounded-2xl border border-neutral-700 bg-[rgba(10,15,26,0.6)] backdrop-blur-sm p-8 text-center animate-[fadeInUp_0.8s_ease-out_0.3s_both]">
        <h2 className="text-2xl font-bold text-fd-foreground mb-3">
          One bot. Multiple agents. 260+ tools.
        </h2>
        <p className="text-fd-muted-foreground max-w-[540px] mx-auto mb-6">
          The Agent SDK and MCP server are both open source.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://github.com/hanzoai/agent"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white text-black font-semibold hover:bg-neutral-200 transition-colors no-underline"
          >
            Agent SDK <ArrowRightIcon className="w-4 h-4" />
          </a>
          <a
            href="https://github.com/hanzoai/mcp"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-neutral-600 text-white font-semibold hover:bg-white/5 transition-colors no-underline"
          >
            MCP Tools
          </a>
        </div>
      </div>
    </main>
  );
}
