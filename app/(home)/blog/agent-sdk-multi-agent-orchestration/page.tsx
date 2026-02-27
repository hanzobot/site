import Link from 'next/link';
import { ArrowLeftIcon, CalendarIcon } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'The Agent SDK: Multi-Agent Orchestration for Production',
  description: 'One agent is useful. Multiple agents coordinating autonomously is transformative. Here\'s how the Hanzo Agent SDK enables production multi-agent systems.',
};

export default function Post() {
  return (
    <main className="relative z-[1] max-w-[720px] mx-auto px-4 sm:px-6 pt-12 sm:pt-16 pb-10 overflow-hidden">
      <div className="stars" />
      <div className="nebula" />

      <Link href="/blog" className="inline-flex items-center gap-1.5 text-sm text-fd-muted-foreground hover:text-white transition-colors no-underline mb-8">
        <ArrowLeftIcon className="size-3.5" /> Back to Blog
      </Link>

      <header className="mb-10 animate-[fadeInUp_0.8s_ease-out]">
        <div className="flex items-center gap-3 text-xs mb-4">
          <span className="px-2.5 py-0.5 rounded-full border font-medium text-white border-neutral-500/30 bg-neutral-500/8">Engineering</span>
          <span className="flex items-center gap-1.5 text-fd-muted-foreground"><CalendarIcon className="size-3" /> May 20, 2025</span>
        </div>
        <h1 className="text-3xl lg:text-4xl font-bold tracking-tight mb-4 text-fd-foreground">The Agent SDK: Multi-Agent Orchestration for Production</h1>
        <p className="text-lg text-fd-muted-foreground leading-relaxed">
          One agent is useful. Multiple agents coordinating autonomously is transformative.
        </p>
      </header>

      <article className="prose prose-invert max-w-none text-fd-foreground/90 text-[15px] leading-relaxed">
        <p>
          When OpenAI released their Agents SDK in March 2025, we forked it on day one. Not because their
          implementation was perfect, but because the abstraction was right: agents as first-class objects
          with tools, memory, and handoff capabilities.
        </p>
        <p>
          We extended it into the <strong>Hanzo Agent SDK</strong> — a production-grade multi-agent framework
          with Web3 integration, TEE support, marketplace discovery, and full orchestration primitives.
        </p>

        <h2 className="text-xl font-semibold text-fd-foreground mt-10 mb-4">Multi-Agent Patterns</h2>
        <p>The SDK supports four coordination patterns:</p>

        <h3 className="text-lg font-semibold text-fd-foreground mt-8 mb-3">1. Handoff Chains</h3>
        <p>
          Agent A handles initial triage, hands off to Agent B for implementation, then to Agent C for
          review. Each agent is specialized and operates with its own model, tools, and system prompt.
        </p>

        <h3 className="text-lg font-semibold text-fd-foreground mt-8 mb-3">2. Parallel Execution</h3>
        <p>
          Launch multiple agents simultaneously — one researches, one codes, one tests. Results merge
          when all agents complete. Reduces wall-clock time for complex tasks by 3-5x.
        </p>

        <h3 className="text-lg font-semibold text-fd-foreground mt-8 mb-3">3. Supervisor Networks</h3>
        <p>
          A supervisor agent coordinates worker agents, distributing tasks based on capabilities and
          load. The supervisor can spawn, terminate, and redirect workers dynamically.
        </p>

        <h3 className="text-lg font-semibold text-fd-foreground mt-8 mb-3">4. Swarm Intelligence</h3>
        <p>
          Agents share observations and negotiate decisions through a shared context. No central coordinator —
          emergent behavior from local interactions. Useful for distributed monitoring and incident response.
        </p>

        <h2 className="text-xl font-semibold text-fd-foreground mt-10 mb-4">What We Added Beyond OpenAI</h2>
        <ul className="space-y-2 text-fd-muted-foreground">
          <li><strong className="text-fd-foreground">Web3 integration</strong> — Agent wallets, on-chain identity (DID), autonomous transactions</li>
          <li><strong className="text-fd-foreground">TEE support</strong> — Intel SGX, AMD SEV, NVIDIA H100 attestation for secure agent execution</li>
          <li><strong className="text-fd-foreground">Agent marketplace</strong> — Discover, compose, and deploy agents from a decentralized registry</li>
          <li><strong className="text-fd-foreground">Cloud control plane</strong> — Instance provisioning, billing integration, IAM auth</li>
          <li><strong className="text-fd-foreground">Canvas collaboration</strong> — Multiplayer agent interaction with shared workspace</li>
          <li><strong className="text-fd-foreground">Multi-model routing</strong> — Each agent can use a different model optimized for its role</li>
        </ul>

        <h2 className="text-xl font-semibold text-fd-foreground mt-10 mb-4">Real-World Example</h2>
        <p>A typical Hanzo Bot deployment uses 3-5 agents coordinating:</p>
        <div className="my-6">
          <pre className="p-4 rounded-xl bg-[rgba(0,0,0,0.4)] text-sm text-neutral-300 font-mono overflow-x-auto">
            <code>{`Agent Network: "DevOps Bot"
├── Triage Agent (Zen Mini — cheap, fast)
│   └── Reads incoming messages, classifies intent
├── Coder Agent (Claude Opus — complex reasoning)
│   └── Writes code, runs tests, creates PRs
├── Reviewer Agent (Claude Sonnet — balanced)
│   └── Reviews PRs, checks for bugs and style
├── Deploy Agent (Zen Mini — scripted workflows)
│   └── Pushes to staging, monitors CI, promotes to prod
└── Support Agent (GPT-4o — conversational)
    └── Responds to user questions, explains changes`}</code>
          </pre>
        </div>
        <p>
          Each agent uses the optimal model for its role. Total cost per incident: ~$0.50. Compare that
          to $500/mo for Devin with a single proprietary model.
        </p>

        <h2 className="text-xl font-semibold text-fd-foreground mt-10 mb-4">Open Source</h2>
        <ul className="space-y-2 text-fd-muted-foreground">
          <li><a href="https://github.com/hanzoai/agent" className="text-white hover:underline" target="_blank" rel="noopener noreferrer">github.com/hanzoai/agent</a> — Full source code with examples</li>
          <li>PyPI: <code className="text-neutral-300">pip install hanzoai</code></li>
          <li>Supports Python 3.10+ with async/await</li>
        </ul>

        <div className="not-prose my-10 p-6 rounded-xl border border-neutral-700 bg-neutral-950/50 text-center">
          <p className="text-lg font-semibold text-white mb-2">Multi-agent systems, production-ready</p>
          <p className="text-sm text-neutral-400 mb-4">Orchestrate agents that coordinate, not just chat.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href="https://github.com/hanzoai/agent" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-6 py-2.5 rounded-lg bg-white text-black font-semibold text-sm hover:bg-neutral-200 transition-colors no-underline">
              View on GitHub
            </a>
            <Link href="/get-started" className="inline-flex items-center justify-center px-6 py-2.5 rounded-lg border border-neutral-600 text-white font-semibold text-sm hover:bg-neutral-900 transition-colors no-underline">
              Try Hanzo Bot
            </Link>
          </div>
        </div>
      </article>
    </main>
  );
}
