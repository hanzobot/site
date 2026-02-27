import Link from 'next/link';
import { ArrowRightIcon, ArrowLeftIcon, CheckIcon, XIcon } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Hanzo Bot vs GitHub Copilot — Why Teams Switch to Hanzo Bot',
  description:
    'GitHub Copilot costs $19/mo for code autocomplete. Hanzo Bot starts at $5/mo with 100+ AI models, 7+ chat channels, native crypto, cloud VMs, and 260+ MCP tools.',
  openGraph: {
    title: 'Hanzo Bot vs GitHub Copilot — Why Teams Switch to Hanzo Bot',
    description:
      'Copilot is code autocomplete. Hanzo Bot is a full-stack AI agent with 100+ models, messaging, crypto, and cloud VMs starting at $5/mo.',
  },
};

const rows: { feature: string; hanzo: string | boolean; copilot: string | boolean }[] = [
  { feature: 'Starting price', hanzo: '$5/mo', copilot: '$10/mo Individual' },
  { feature: 'Free tier', hanzo: 'Full local install (forever)', copilot: 'Limited (2K completions/mo)' },
  { feature: 'AI models', hanzo: '100+ (Zen, Claude, GPT, Gemini, Llama, Qwen...)', copilot: 'GPT-4o, Claude (limited)' },
  { feature: 'Terminal / CLI', hanzo: true, copilot: 'Copilot CLI (limited)' },
  { feature: 'IDE integration', hanzo: 'VSCode + JetBrains', copilot: 'VSCode, JetBrains, Neovim' },
  { feature: 'Chat channels', hanzo: 'Discord, Slack, Telegram, WhatsApp, Signal, iMessage, Teams', copilot: false },
  { feature: 'Browser automation', hanzo: 'Built-in Playwright', copilot: false },
  { feature: 'Cloud VMs', hanzo: 'Up to 25 VMs', copilot: false },
  { feature: 'MCP tools', hanzo: '260+', copilot: false },
  { feature: 'Crypto / Web3', hanzo: 'Native agent wallets, x402, 100+ chains', copilot: false },
  { feature: 'Autonomous agents', hanzo: 'Full multi-agent system', copilot: 'Copilot Workspace (preview)' },
  { feature: 'Self-improvement', hanzo: true, copilot: false },
  { feature: 'Team collaboration', hanzo: 'Multi-org, multi-project', copilot: 'Business ($19/mo) or Enterprise ($39/mo)' },
  { feature: 'K8s deployment', hanzo: true, copilot: false },
  { feature: 'Budget controls', hanzo: 'Per-agent daily caps', copilot: 'Seat-based only' },
  { feature: 'Cron scheduling', hanzo: 'Built-in with model overrides', copilot: false },
];

function CellValue({ value }: { value: boolean | string }) {
  if (value === true) return <CheckIcon className="w-4 h-4 text-white" />;
  if (value === false) return <XIcon className="w-4 h-4 text-neutral-600" />;
  return <span className="text-neutral-300 text-sm">{value}</span>;
}

export default function VsGitHubCopilotPage() {
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

      <header className="mb-12 animate-[fadeInUp_0.8s_ease-out]">
        <p className="text-sm font-mono text-neutral-400 tracking-widest uppercase mb-4">
          Comparison
        </p>
        <h1 className="text-3xl lg:text-4xl font-bold tracking-tight mb-4 text-fd-foreground">
          Hanzo Bot vs GitHub Copilot
        </h1>
        <p className="text-base sm:text-lg text-fd-muted-foreground leading-relaxed">
          GitHub Copilot is code autocomplete in your IDE. Hanzo Bot is a full-stack AI agent
          that writes code, deploys infrastructure, manages support channels, runs marketing,
          handles crypto, and operates 24/7 in cloud VMs. Copilot starts at $10/mo.
          Hanzo Bot starts at $5/mo.
        </p>
      </header>

      <section className="mb-16 animate-[fadeInUp_0.8s_ease-out_0.15s_both]">
        <div className="overflow-x-auto rounded-2xl border border-fd-border bg-[rgba(10,15,26,0.6)] backdrop-blur-sm">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-fd-border">
                <th className="text-left p-4 text-neutral-500 font-medium">Feature</th>
                <th className="text-left p-4 text-white font-bold">Hanzo Bot</th>
                <th className="text-left p-4 text-neutral-400 font-medium">GitHub Copilot</th>
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
                  <td className="p-4"><CellValue value={row.copilot} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="mb-16 animate-[fadeInUp_0.8s_ease-out_0.25s_both]">
        <h2 className="text-2xl font-bold text-fd-foreground mb-8">
          Why teams switch from GitHub Copilot
        </h2>
        <div className="grid gap-6">
          {[
            {
              title: 'More than autocomplete',
              body: 'Copilot suggests code completions. Hanzo Bot is an autonomous agent that understands your entire codebase, writes multi-file features, runs tests, deploys to staging, monitors production, and handles customer support. It does the job, not just the typing.',
            },
            {
              title: 'Works in every channel, not just your IDE',
              body: 'Copilot lives inside your editor. Hanzo Bot works in Discord, Slack, Telegram, WhatsApp, Signal, iMessage, Teams, terminal, and IDE — with persistent memory across all surfaces. Ask it to fix a bug on Slack and it remembers the context from your terminal session.',
            },
            {
              title: '100+ models, not a locked-in handful',
              body: 'Copilot uses GPT-4o and a limited model selection. Hanzo Bot gives you 100+ models through the Hanzo LLM Gateway — Claude, GPT, Gemini, Llama, Qwen, Mistral, and Zen models. Use the cheapest model for simple tasks, the most capable for complex ones.',
            },
            {
              title: 'Cloud-native infrastructure included',
              body: 'Copilot has no cloud VMs, no deployment tools, no K8s integration. Hanzo Bot includes up to 25 always-on Linux VMs per account, container deployment, KMS secrets management, IAM with SSO, and full production infrastructure — all starting at $5/mo.',
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

      <section className="mb-16 animate-[fadeInUp_0.8s_ease-out_0.35s_both]">
        <div className="rounded-2xl border border-neutral-700 bg-[rgba(10,15,26,0.6)] backdrop-blur-sm p-8 text-center">
          <h2 className="text-xl sm:text-2xl font-bold text-fd-foreground mb-3">
            Half the price. 100x more capability.
          </h2>
          <p className="text-fd-muted-foreground max-w-[540px] mx-auto mb-2">
            GitHub Copilot Individual costs <strong className="text-white">$10/mo</strong> for code autocomplete.
            Business costs <strong className="text-white">$19/mo</strong>.
          </p>
          <p className="text-fd-muted-foreground max-w-[540px] mx-auto mb-6">
            Hanzo Bot Starter costs <strong className="text-white">$5/mo</strong> and includes a full Linux VM, 100+ AI models,
            all chat integrations, browser automation, crypto, and cloud deployment.
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
