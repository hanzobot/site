import Link from 'next/link';
import { ArrowLeftIcon, CalendarIcon } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'From ElizaOS to OpenClaw to Hanzo Bot: The Agent Framework Journey',
  description: 'We tried ElizaOS. We built on OpenClaw. We shipped Hanzo Bot. Here\'s why we kept building and what we learned at each stage of the AI agent framework evolution.',
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
          <span className="px-2.5 py-0.5 rounded-full border font-medium text-neutral-400 border-[#a3a3a3]/30 bg-[#a3a3a3]/8">Origin Story</span>
          <span className="flex items-center gap-1.5 text-fd-muted-foreground"><CalendarIcon className="size-3" /> January 15, 2026</span>
        </div>
        <h1 className="text-3xl lg:text-4xl font-bold tracking-tight mb-4 text-fd-foreground">From ElizaOS to OpenClaw to Hanzo Bot</h1>
        <p className="text-lg text-fd-muted-foreground leading-relaxed">
          We tried every agent framework. Here&apos;s why we kept building — and what we learned at each stage.
        </p>
      </header>

      <article className="prose prose-invert max-w-none text-fd-foreground/90 text-[15px] leading-relaxed">
        <p>
          The path from &quot;AI can chat&quot; to &quot;AI can work&quot; isn&apos;t a straight line. We tried
          three different approaches before landing on the architecture that became Hanzo Bot. Here&apos;s
          the honest story.
        </p>

        <h2 className="text-xl font-semibold text-fd-foreground mt-10 mb-4">Chapter 1: ElizaOS (Late 2024)</h2>
        <p>
          When ai16z released ElizaOS, it was the first serious open-source agent framework. We were excited.
          A framework for building autonomous AI agents with personality, memory, and multi-platform support?
          That was exactly what we needed.
        </p>
        <p>We deployed ElizaOS agents for crypto trading, community management, and content generation. We learned:</p>
        <ul className="space-y-2 text-fd-muted-foreground">
          <li><strong className="text-fd-foreground">Personality-first design works</strong> — Agents with consistent personalities get better engagement</li>
          <li><strong className="text-fd-foreground">Memory is non-negotiable</strong> — Agents without persistent memory feel broken after 10 minutes</li>
          <li><strong className="text-fd-foreground">Crypto-native agents are real</strong> — Autonomous trading and on-chain actions are viable</li>
        </ul>
        <p>
          But ElizaOS had limitations. It was optimized for crypto/social agents, not general-purpose work.
          The plugin system was fragile. Multi-model support was limited. And scaling beyond a single
          agent instance was painful.
        </p>

        <h2 className="text-xl font-semibold text-fd-foreground mt-10 mb-4">Chapter 2: OpenClaw (Late 2025)</h2>
        <p>
          We needed something more production-grade. OpenClaw (originally &quot;Warelay&quot;, then &quot;Clawdis&quot;)
          started as a WhatsApp bot framework built on Twilio. It was simple, fast, and worked.
        </p>
        <p>
          Over November and December 2025, we extended it rapidly: Discord, Telegram, Signal, Slack support.
          A gateway architecture for multi-channel routing. macOS and iOS apps. Voice wake detection.
          Session serialization for multi-agent orchestration.
        </p>
        <p>We contributed upstream and built on the community&apos;s work. Key innovations from this phase:</p>
        <ul className="space-y-2 text-fd-muted-foreground">
          <li><strong className="text-fd-foreground">Gateway-first architecture</strong> — All channels route through a unified gateway, enabling channel-agnostic agent logic</li>
          <li><strong className="text-fd-foreground">RPC mode</strong> — Agents communicate via structured RPC calls, not just text</li>
          <li><strong className="text-fd-foreground">Session serialization</strong> — Agent state persists across restarts, deployments, and channel switches</li>
          <li><strong className="text-fd-foreground">Calendar versioning</strong> — We moved to v2026.x.x to reflect continuous deployment</li>
        </ul>

        <h2 className="text-xl font-semibold text-fd-foreground mt-10 mb-4">Chapter 3: Hanzo Bot (February 2026)</h2>
        <p>
          In February 2026, we merged 155 upstream OpenClaw commits and completed the rebrand to Hanzo Bot.
          But the rebrand was more than a name change. We integrated everything we&apos;d built over the previous
          two years:
        </p>
        <ul className="space-y-2 text-fd-muted-foreground">
          <li><strong className="text-fd-foreground">LLM Gateway</strong> — 100+ models through one API (<a href="https://github.com/hanzoai/llm" className="text-white hover:underline" target="_blank" rel="noopener noreferrer">github.com/hanzoai/llm</a>)</li>
          <li><strong className="text-fd-foreground">Operative</strong> — Computer use for desktop automation (<a href="https://github.com/hanzoai/operative" className="text-white hover:underline" target="_blank" rel="noopener noreferrer">github.com/hanzoai/operative</a>)</li>
          <li><strong className="text-fd-foreground">MCP Server</strong> — 260+ tools via Model Context Protocol (<a href="https://github.com/hanzoai/mcp" className="text-white hover:underline" target="_blank" rel="noopener noreferrer">github.com/hanzoai/mcp</a>)</li>
          <li><strong className="text-fd-foreground">Agent SDK</strong> — Multi-agent orchestration (<a href="https://github.com/hanzoai/agent" className="text-white hover:underline" target="_blank" rel="noopener noreferrer">github.com/hanzoai/agent</a>)</li>
          <li><strong className="text-fd-foreground">Jin</strong> — Multimodal AI for vision and audio (<a href="https://github.com/hanzoai/jin" className="text-white hover:underline" target="_blank" rel="noopener noreferrer">github.com/hanzoai/jin</a>)</li>
          <li><strong className="text-fd-foreground">Zen Models</strong> — Our own model family, 47 models from 600M to 480B parameters</li>
          <li><strong className="text-fd-foreground">Hanzo Cloud</strong> — Production VMs, IAM, KMS, K8s deployment</li>
        </ul>

        <h2 className="text-xl font-semibold text-fd-foreground mt-10 mb-4">What We Learned</h2>
        <p>Three frameworks, two years, one conclusion:</p>
        <p>
          <strong>The framework doesn&apos;t matter. The stack does.</strong> An agent framework is just
          the orchestration layer. What matters is what the agent can access: models, tools, channels,
          infrastructure, memory. ElizaOS taught us personality. OpenClaw taught us architecture.
          Hanzo Bot integrates everything into a single platform.
        </p>

        <h2 className="text-xl font-semibold text-fd-foreground mt-10 mb-4">The Full Stack</h2>
        <p>Today, Hanzo Bot is a vertically integrated AI agent platform:</p>
        <div className="my-6">
          <pre className="p-4 rounded-xl bg-[rgba(0,0,0,0.4)] text-sm text-neutral-300 font-mono overflow-x-auto">
            <code>{`Hanzo Bot Stack
├── Models:  47 Zen + 344 third-party (LLM Gateway)
├── Tools:   260+ MCP tools
├── Vision:  Jin multimodal + Operative computer use
├── Channels: Discord, Slack, Telegram, WhatsApp, Signal, iMessage, Teams
├── Infra:   Cloud VMs, K8s, IAM, KMS
├── Memory:  Persistent cross-session, cross-channel
├── Crypto:  Agent wallets, x402, 100+ chains
└── Papers:  143 published research papers`}</code>
          </pre>
        </div>

        <p>
          We built every layer. That&apos;s why Hanzo Bot can do things no other agent platform can.
          And that&apos;s why it starts at $5/mo instead of $500.
        </p>

        <div className="not-prose my-10 p-6 rounded-xl border border-neutral-700 bg-neutral-950/50 text-center">
          <p className="text-lg font-semibold text-white mb-2">Two years of building. One platform.</p>
          <p className="text-sm text-neutral-400 mb-4">From research to production. Open source.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/get-started" className="inline-flex items-center justify-center px-6 py-2.5 rounded-lg bg-white text-black font-semibold text-sm hover:bg-neutral-200 transition-colors no-underline">
              Start free
            </Link>
            <a href="https://github.com/hanzoai" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-6 py-2.5 rounded-lg border border-neutral-600 text-white font-semibold text-sm hover:bg-neutral-900 transition-colors no-underline">
              View all repos
            </a>
          </div>
        </div>
      </article>
    </main>
  );
}
