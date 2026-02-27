import Link from 'next/link';
import { ArrowRightIcon, ArrowLeftIcon, CheckIcon, XIcon } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Hanzo Bot vs Cursor — Why Teams Switch to Hanzo Bot',
  description:
    'Cursor costs $20/mo for IDE-only code completion. Hanzo Bot starts at $5/mo with 100+ AI models, 7+ chat channels, native crypto, cloud VMs, and 260+ MCP tools. See the full comparison.',
  openGraph: {
    title: 'Hanzo Bot vs Cursor — Why Teams Switch to Hanzo Bot',
    description:
      'Cursor costs $20/mo for IDE-only code completion. Hanzo Bot starts at $5/mo with 100+ models, messaging, crypto, and cloud VMs.',
  },
};

const rows: { feature: string; hanzo: string | boolean; cursor: string | boolean }[] = [
  { feature: 'Starting price', hanzo: '$5/mo', cursor: '$20/mo Pro' },
  { feature: 'Free tier', hanzo: 'Full local install (forever)', cursor: 'Limited completions' },
  { feature: 'AI models', hanzo: '100+ (Zen, Claude, GPT, Gemini, Llama, Qwen...)', cursor: 'Claude, GPT (limited selection)' },
  { feature: 'Terminal / CLI', hanzo: true, cursor: false },
  { feature: 'IDE integration', hanzo: 'VSCode + JetBrains', cursor: 'Cursor IDE only' },
  { feature: 'Chat channels', hanzo: 'Discord, Slack, Telegram, WhatsApp, Signal, iMessage, Teams', cursor: false },
  { feature: 'Browser automation', hanzo: 'Built-in Playwright', cursor: false },
  { feature: 'Cloud VMs', hanzo: 'Up to 25 VMs', cursor: false },
  { feature: 'MCP tools', hanzo: '260+', cursor: 'Limited' },
  { feature: 'Crypto / Web3', hanzo: 'Native agent wallets, x402, 100+ chains', cursor: false },
  { feature: 'Self-improvement', hanzo: true, cursor: false },
  { feature: 'Team collaboration', hanzo: 'Multi-org, multi-project', cursor: 'Business plan ($40/mo)' },
  { feature: 'K8s deployment', hanzo: true, cursor: false },
  { feature: 'IAM / SSO', hanzo: 'Full (hanzo.id)', cursor: 'Teams SSO only' },
  { feature: 'Budget controls', hanzo: 'Per-agent daily caps', cursor: 'Usage limits' },
  { feature: 'Cron scheduling', hanzo: 'Built-in with model overrides', cursor: false },
];

function CellValue({ value }: { value: boolean | string }) {
  if (value === true) return <CheckIcon className="w-4 h-4 text-white" />;
  if (value === false) return <XIcon className="w-4 h-4 text-neutral-600" />;
  return <span className="text-neutral-300 text-sm">{value}</span>;
}

export default function VsCursorPage() {
  return (
    <main className="relative z-[1] max-w-[860px] mx-auto px-4 sm:px-6 pt-8 sm:pt-16 pb-10 overflow-x-hidden">
      <div className="stars" />
      <div className="nebula" />

      <Link
        href="/vs"
        className="inline-flex items-center gap-1.5 text-sm text-fd-muted-foreground hover:text-white transition-colors no-underline mb-8"
      >
        <ArrowLeftIcon className="w-3.5 h-3.5" /> All comparisons
      </Link>

      {/* Hero */}
      <header className="mb-12 animate-[fadeInUp_0.8s_ease-out]">
        <p className="text-sm font-mono text-neutral-400 tracking-widest uppercase mb-4">
          Comparison
        </p>
        <h1 className="text-3xl lg:text-4xl font-bold tracking-tight mb-4 text-fd-foreground">
          Hanzo Bot vs Cursor
        </h1>
        <p className="text-base sm:text-lg text-fd-muted-foreground leading-relaxed">
          Cursor is an IDE with AI autocomplete. Hanzo Bot is a full-stack AI agent platform
          with 100+ models, 7+ chat channels, native crypto, cloud VMs, and 260+ MCP tools.
          Cursor starts at $20/mo. Hanzo Bot starts at $5/mo.
        </p>
      </header>

      {/* Comparison Table */}
      <section className="mb-16 animate-[fadeInUp_0.8s_ease-out_0.15s_both]">
        <div className="overflow-x-auto rounded-2xl border border-fd-border bg-[rgba(10,15,26,0.6)] backdrop-blur-sm">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-fd-border">
                <th className="text-left p-4 text-neutral-500 font-medium">Feature</th>
                <th className="text-left p-4 text-white font-bold">Hanzo Bot</th>
                <th className="text-left p-4 text-neutral-400 font-medium">Cursor</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <tr
                  key={row.feature}
                  className={`border-b border-fd-border/50 last:border-b-0 ${
                    i % 2 === 0 ? 'bg-white/[0.02]' : ''
                  }`}
                >
                  <td className="p-4 text-neutral-400">{row.feature}</td>
                  <td className="p-4"><CellValue value={row.hanzo} /></td>
                  <td className="p-4"><CellValue value={row.cursor} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Key Differentiators */}
      <section className="mb-16 animate-[fadeInUp_0.8s_ease-out_0.25s_both]">
        <h2 className="text-2xl font-bold text-fd-foreground mb-8">
          Why teams switch from Cursor
        </h2>
        <div className="grid gap-6">
          {[
            {
              title: 'You are not locked into one IDE',
              body: 'Cursor requires you to use their fork of VS Code. Hanzo Bot works in your terminal, in VS Code, in JetBrains, on Discord, on Slack, on WhatsApp — wherever you already work. One agent, every surface.',
            },
            {
              title: '100+ models instead of a handful',
              body: 'Cursor gives you a curated selection of models. Hanzo Bot gives you 100+ through a unified LLM gateway — Claude, GPT, Gemini, Llama, Qwen, Mistral, and our Zen model family. Switch models per-task without switching tools.',
            },
            {
              title: 'Not just code — everything',
              body: 'Cursor stops at code generation. Hanzo Bot handles deployment, monitoring, customer support, marketing automation, sales outreach, and ops. It runs 260+ MCP tools and automates browser workflows with Playwright.',
            },
            {
              title: 'Native crypto and on-chain actions',
              body: 'Cursor has zero Web3 support. Hanzo Bot has native agent wallets, x402 machine-to-machine payments, USDC on Base, and support for 100+ blockchain networks. Your bot can pay for compute, earn revenue, and interact with DeFi protocols autonomously.',
            },
          ].map((d) => (
            <div
              key={d.title}
              className="p-6 rounded-xl border border-fd-border bg-[rgba(10,15,26,0.4)]"
            >
              <h3 className="text-lg font-semibold text-fd-foreground mb-2">{d.title}</h3>
              <p className="text-sm text-fd-muted-foreground leading-relaxed">{d.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Price Callout */}
      <section className="mb-16 animate-[fadeInUp_0.8s_ease-out_0.35s_both]">
        <div className="rounded-2xl border border-neutral-700 bg-[rgba(10,15,26,0.6)] backdrop-blur-sm p-8 text-center">
          <h2 className="text-xl sm:text-2xl font-bold text-fd-foreground mb-3">
            75% less. 10x more capability.
          </h2>
          <p className="text-fd-muted-foreground max-w-[540px] mx-auto mb-2">
            Cursor Pro costs <strong className="text-white">$20/mo</strong> for IDE-only code completion.
          </p>
          <p className="text-fd-muted-foreground max-w-[540px] mx-auto mb-6">
            Hanzo Bot Starter costs <strong className="text-white">$5/mo</strong> and includes a full Linux VM, 100+ AI models,
            all chat integrations, browser automation, and cloud deployment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/get-started"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white text-black font-semibold hover:bg-neutral-200 transition-colors no-underline"
            >
              Get started free
              <ArrowRightIcon className="w-4 h-4" />
            </Link>
            <Link
              href="/pricing"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-neutral-600 text-white font-semibold hover:bg-white/5 transition-colors no-underline"
            >
              See all plans
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
