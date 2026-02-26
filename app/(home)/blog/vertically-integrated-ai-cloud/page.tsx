import Link from 'next/link';
import { ArrowLeftIcon, CalendarIcon } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'The Vertically Integrated AI Cloud',
  description: 'What every agentic harness actually needs — and why owning the full stack from LLM gateway to compute tiers changes everything.',
};

export default function Post() {
  return (
    <main className="relative z-[1] max-w-[720px] mx-auto px-4 sm:px-6 pt-12 sm:pt-16 pb-10 overflow-hidden">
      <div className="stars" />
      <div className="nebula" />

      <Link
        href="/blog"
        className="inline-flex items-center gap-1.5 text-sm text-fd-muted-foreground hover:text-white transition-colors no-underline mb-8"
      >
        <ArrowLeftIcon className="size-3.5" /> Back to Blog
      </Link>

      <header className="mb-10 animate-[fadeInUp_0.8s_ease-out]">
        <div className="flex items-center gap-3 text-xs mb-4">
          <span className="px-2.5 py-0.5 rounded-full border font-medium text-neutral-400 border-[#a3a3a3]/30 bg-[#a3a3a3]/8">
            Architecture
          </span>
          <span className="flex items-center gap-1.5 text-fd-muted-foreground">
            <CalendarIcon className="size-3" /> February 24, 2026
          </span>
        </div>
        <h1 className="text-3xl lg:text-4xl font-bold tracking-tight mb-4 text-fd-foreground">
          The Vertically Integrated AI Cloud
        </h1>
        <p className="text-lg text-fd-muted-foreground leading-relaxed">
          What every agentic harness actually needs.
        </p>
      </header>

      <article className="prose prose-invert max-w-none text-fd-foreground/90 text-[15px] leading-relaxed">
        <p>
          Everyone is building agents. Almost nobody is building the infrastructure agents
          actually need to work.
        </p>
        <p>
          The last eighteen months have seen an explosion in agentic coding tools. Claude Code,
          Cursor, Amp, Devin, Codex, Replit Agent — new entrants every week, each promising to
          change how software gets built. And they are changing it. The shift from &ldquo;AI-assisted&rdquo;
          to &ldquo;AI-first&rdquo; development is real.
        </p>
        <p>
          But there is a structural problem underneath the hype: <strong>the tools are getting
          smarter while the harnesses around them stay primitive</strong>.
        </p>
        <p className="text-lg font-medium text-fd-foreground italic">
          An agent without infrastructure is a brain without a body. It can think, but it cannot do.
        </p>

        <h2 className="text-xl font-semibold text-fd-foreground mt-10 mb-4">The Harness Problem</h2>
        <p>
          Here is the core tension: every major tool retrofits non-determinism into interfaces
          designed for deterministic output.
        </p>
        <p>
          Claude Code runs in your terminal — powerful, but local-only, single-provider, no
          persistence between sessions. Cursor embeds AI into VS Code — productive, but the
          agent is a guest in a human&apos;s workspace. Devin gives the agent its own environment,
          but locks you into a managed cloud with limited channel integration.
        </p>
        <p>
          None of these tools were designed from the ground up for agents. They were designed
          for humans, then agents were bolted on. The result: every team building serious
          agentic workflows ends up constructing the same missing infrastructure themselves.
        </p>
        <p className="text-lg font-medium text-fd-foreground">
          The harness is the product. The model is a commodity.
        </p>

        <h2 className="text-xl font-semibold text-fd-foreground mt-10 mb-4">Seven Layers Every Agent Needs</h2>
        <p>
          After building and operating agentic systems at scale, we&apos;ve identified seven layers
          that every production agent harness requires. Miss any one and you hit a wall.
        </p>

        <div className="my-8 not-prose">
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-fd-border">
                  <th className="text-left py-3 pr-4 text-fd-foreground font-semibold">Layer</th>
                  <th className="text-left py-3 pr-4 text-fd-foreground font-semibold">Need</th>
                  <th className="text-left py-3 text-fd-foreground font-semibold">Hanzo</th>
                </tr>
              </thead>
              <tbody className="text-fd-muted-foreground">
                {[
                  ['1. LLM Access', 'Unified gateway', 'LLM Gateway — 100+ providers, failover, cost tracking'],
                  ['2. Tool Protocol', 'Comprehensive MCP', 'Hanzo MCP — 54 tools, file ops to browser automation'],
                  ['3. Agent Runtime', 'Multi-agent networks', 'Agent SDK — semantic routing, handoffs, tracing'],
                  ['4. Channels', 'Multi-channel delivery', 'Bot Gateway — 15+ channels, unified sessions'],
                  ['5. Compute', 'Dynamic scaling', 'Tiered Runtime — shared to GPU VMs, one control plane'],
                  ['6. Self-Improvement', 'Structured optimization', '6-Loop System — telemetry to federated learning'],
                  ['7. Observability', 'Full-stack measurement', 'Loki + Tempo + VictoriaMetrics + Grafana'],
                ].map(([layer, need, hanzo]) => (
                  <tr key={layer} className="border-b border-fd-border/50">
                    <td className="py-3 pr-4 font-medium text-fd-foreground whitespace-nowrap">{layer}</td>
                    <td className="py-3 pr-4">{need}</td>
                    <td className="py-3">{hanzo}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <h2 className="text-xl font-semibold text-fd-foreground mt-10 mb-4">Why Vertical Integration Wins</h2>
        <p>
          When you own every layer, you get cross-layer optimization that&apos;s impossible with vendor
          boundaries. Your gateway knows your tool protocol. Your runtime knows your compute tiers.
          Your observability feeds your self-improvement. The optimization loop is closed.
        </p>
        <p>
          This is not a theoretical argument. It&apos;s the same thesis that made AWS dominant: own the
          full stack, optimize across boundaries, compound operational advantages over time.
        </p>

        <h2 className="text-xl font-semibold text-fd-foreground mt-10 mb-4">The Self-Improvement Edge</h2>
        <p>
          Most agentic tools treat improvement as a prompt engineering problem. This fails because
          context windows are finite, LLMs are poor self-evaluators during execution, and narrative
          summaries lose signal.
        </p>
        <p>
          Hanzo&apos;s six-loop system addresses each of these:
        </p>
        <ol className="space-y-2 text-fd-muted-foreground">
          <li><strong className="text-fd-foreground">Session Extraction</strong> — structured outcomes after each task</li>
          <li><strong className="text-fd-foreground">Pattern Detection</strong> — statistical patterns across sessions</li>
          <li><strong className="text-fd-foreground">Architecture Evaluation</strong> — periodic agent graph restructuring</li>
          <li><strong className="text-fd-foreground">Telemetry Ground Truth</strong> — continuous uncompressed signal</li>
          <li><strong className="text-fd-foreground">Continuous Learning (GRPO)</strong> — training-free semantic extraction</li>
          <li><strong className="text-fd-foreground">Federated Learning (DSO)</strong> — fleet-wide experience sharing via BitDelta</li>
        </ol>
        <p>
          The result: agents on Hanzo infrastructure get measurably better at their specific
          tasks over weeks and months, driven by data, not intuition.
        </p>

        <h2 className="text-xl font-semibold text-fd-foreground mt-10 mb-4">Try It</h2>
        <div className="my-6 not-prose grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            { label: 'LLM Gateway', url: 'https://llm.hanzo.ai', desc: '100+ models, one API' },
            { label: 'Console', url: 'https://console.hanzo.ai', desc: 'Manage & observe' },
            { label: 'MCP Tools', url: 'https://www.npmjs.com/package/@hanzo/mcp', desc: '54 tools for agents' },
            { label: 'Bot Framework', url: 'https://github.com/hanzoai/bot', desc: 'Open source' },
          ].map((item) => (
            <a
              key={item.label}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col p-4 rounded-xl border border-fd-border bg-[rgba(10,15,26,0.6)] no-underline transition-all hover:-translate-y-0.5 hover:border-neutral-600"
            >
              <span className="text-sm font-semibold text-fd-foreground">{item.label}</span>
              <span className="text-xs text-fd-muted-foreground">{item.desc}</span>
            </a>
          ))}
        </div>

        <p>
          The agentic revolution is real. The models will keep getting better. But models without
          infrastructure are brains without bodies. The harness is what turns capability into
          production value.
        </p>
        <p className="text-lg font-medium text-fd-foreground">
          Build on the full stack.
        </p>

        <hr className="border-fd-border my-10" />
        <p className="text-sm text-fd-muted-foreground italic">
          Hanzo AI — Techstars 2017. Building the infrastructure layer for the agentic era.
        </p>
      </article>
    </main>
  );
}
