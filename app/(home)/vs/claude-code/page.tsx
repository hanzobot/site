import Link from 'next/link';
import { ArrowRightIcon, ArrowLeftIcon, CheckIcon, XIcon } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Hanzo Bot vs Claude Code — Why Teams Switch to Hanzo Bot',
  description:
    'Claude Code costs $20/mo (Max plan) and only runs Claude in a terminal. Hanzo Bot starts at $5/mo with 100+ AI models, 7+ chat channels, native crypto, cloud VMs, and 260+ MCP tools.',
  openGraph: {
    title: 'Hanzo Bot vs Claude Code — Why Teams Switch to Hanzo Bot',
    description:
      'Claude Code is Claude-only and terminal-only. Hanzo Bot gives you 100+ models, messaging, crypto, cloud VMs, and browser automation starting at $5/mo.',
  },
};

const rows: { feature: string; hanzo: string | boolean; claudeCode: string | boolean }[] = [
  { feature: 'Starting price', hanzo: '$5/mo', claudeCode: '$20/mo (Max plan)' },
  { feature: 'Free tier', hanzo: 'Full local install (forever)', claudeCode: 'Limited usage' },
  { feature: 'AI models', hanzo: '100+ (Zen, Claude, GPT, Gemini, Llama, Qwen...)', claudeCode: 'Claude only' },
  { feature: 'Terminal / CLI', hanzo: true, claudeCode: true },
  { feature: 'IDE integration', hanzo: 'VSCode + JetBrains', claudeCode: 'VSCode only' },
  { feature: 'Chat channels', hanzo: 'Discord, Slack, Telegram, WhatsApp, Signal, iMessage, Teams', claudeCode: false },
  { feature: 'Browser automation', hanzo: 'Built-in Playwright', claudeCode: false },
  { feature: 'Cloud VMs', hanzo: 'Up to 25 VMs', claudeCode: false },
  { feature: 'MCP tools', hanzo: '260+', claudeCode: 'Yes' },
  { feature: 'Crypto / Web3', hanzo: 'Native agent wallets, x402, 100+ chains', claudeCode: false },
  { feature: 'Self-improvement', hanzo: true, claudeCode: false },
  { feature: 'Team collaboration', hanzo: 'Multi-org, multi-project', claudeCode: false },
  { feature: 'K8s deployment', hanzo: true, claudeCode: false },
  { feature: 'IAM / SSO', hanzo: 'Full (hanzo.id)', claudeCode: false },
  { feature: 'Budget controls', hanzo: 'Per-agent daily caps', claudeCode: false },
  { feature: 'Cron scheduling', hanzo: 'Built-in with model overrides', claudeCode: false },
];

function CellValue({ value }: { value: boolean | string }) {
  if (value === true) return <CheckIcon className="w-4 h-4 text-white" />;
  if (value === false) return <XIcon className="w-4 h-4 text-neutral-600" />;
  return <span className="text-neutral-300 text-sm">{value}</span>;
}

export default function VsClaudeCodePage() {
  return (
    <main className="relative z-[1] max-w-[860px] mx-auto px-4 sm:px-6 pt-8 sm:pt-16 pb-10 overflow-x-hidden">

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
          Hanzo Bot vs Claude Code
        </h1>
        <p className="text-base sm:text-lg text-fd-muted-foreground leading-relaxed">
          Claude Code is a terminal tool locked to a single model provider.
          Hanzo Bot is a full-stack AI agent platform with 100+ models, 7+ chat channels,
          native crypto, cloud VMs, and 260+ MCP tools. Claude Code requires a $20/mo Max plan.
          Hanzo Bot starts at $5/mo.
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
                <th className="text-left p-4 text-neutral-400 font-medium">Claude Code</th>
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
                  <td className="p-4"><CellValue value={row.claudeCode} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Key Differentiators */}
      <section className="mb-16 animate-[fadeInUp_0.8s_ease-out_0.25s_both]">
        <h2 className="text-2xl font-bold text-fd-foreground mb-8">
          Why teams switch from Claude Code
        </h2>
        <div className="grid gap-6">
          {[
            {
              title: 'Not locked to a single model',
              body: 'Claude Code only uses Claude. If Anthropic has an outage, you are stuck. Hanzo Bot gives you 100+ models through a unified gateway — Claude, GPT, Gemini, Llama, Qwen, Mistral, and our Zen model family. Use the best model for each task and keep working when any single provider goes down.',
            },
            {
              title: 'More than a terminal tool',
              body: 'Claude Code lives in your terminal. Hanzo Bot lives everywhere — terminal, VS Code, JetBrains, Discord, Slack, Telegram, WhatsApp, Signal, iMessage, and Teams. It automates browser workflows with Playwright, deploys to Kubernetes, and manages infrastructure.',
            },
            {
              title: 'Cloud VMs and production deployment',
              body: 'Claude Code has no cloud offering. Hanzo Bot gives you up to 25 always-on Linux VMs starting at $5/mo per bot, with dedicated CPU options, KMS-first secrets, IAM with SSO, and full audit trails. Deploy bots that run 24/7 without maintaining your own infrastructure.',
            },
            {
              title: 'Native crypto and autonomous payments',
              body: 'Claude Code cannot interact with blockchains. Hanzo Bot has native agent wallets, x402 machine-to-machine payments, USDC on Base, and support for 100+ chains. Build bots that trade, pay for services, and deploy smart contracts autonomously.',
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
            75% less. Every model. Every channel.
          </h2>
          <p className="text-fd-muted-foreground max-w-[540px] mx-auto mb-2">
            Claude Code requires the <strong className="text-white">$20/mo Max plan</strong> and only gives you Claude in a terminal.
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
