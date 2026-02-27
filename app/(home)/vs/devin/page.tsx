import Link from 'next/link';
import { ArrowRightIcon, ArrowLeftIcon, CheckIcon, XIcon } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Hanzo Bot vs Devin — Why Teams Switch to Hanzo Bot',
  description:
    'Devin costs $500/mo for a single proprietary AI agent. Hanzo Bot starts at $5/mo with 100+ AI models, 7+ chat channels, native crypto, cloud VMs, and 260+ MCP tools.',
  openGraph: {
    title: 'Hanzo Bot vs Devin — Why Teams Switch to Hanzo Bot',
    description:
      'Devin is a $500/mo black box. Hanzo Bot is an open-source AI agent platform with 100+ models starting at $5/mo.',
  },
};

const rows: { feature: string; hanzo: string | boolean; devin: string | boolean }[] = [
  { feature: 'Starting price', hanzo: '$5/mo', devin: '$20/mo (Starter, limited)' },
  { feature: 'Team plan', hanzo: '$10/mo (Team Starter)', devin: '$500/mo (Team)' },
  { feature: 'Free tier', hanzo: 'Full local install (forever)', devin: false },
  { feature: 'AI models', hanzo: '100+ (Zen, Claude, GPT, Gemini, Llama, Qwen...)', devin: 'Proprietary only' },
  { feature: 'Open source', hanzo: true, devin: false },
  { feature: 'Terminal / CLI', hanzo: true, devin: false },
  { feature: 'IDE integration', hanzo: 'VSCode + JetBrains', devin: false },
  { feature: 'Chat channels', hanzo: 'Discord, Slack, Telegram, WhatsApp, Signal, iMessage, Teams', devin: 'Slack only' },
  { feature: 'Browser automation', hanzo: 'Built-in Playwright', devin: 'Built-in' },
  { feature: 'Cloud VMs', hanzo: 'Up to 25 VMs ($5/mo each)', devin: 'Included (1 sandbox)' },
  { feature: 'MCP tools', hanzo: '260+', devin: 'Limited integrations' },
  { feature: 'Crypto / Web3', hanzo: 'Native agent wallets, x402, 100+ chains', devin: false },
  { feature: 'Self-improvement', hanzo: true, devin: false },
  { feature: 'Run locally', hanzo: 'Full offline support', devin: false },
  { feature: 'Usage-based charges', hanzo: 'Flat rate per VM', devin: 'ACU charges on top' },
  { feature: 'K8s deployment', hanzo: true, devin: false },
  { feature: 'Budget controls', hanzo: 'Per-agent daily caps', devin: 'ACU billing' },
  { feature: 'Cron scheduling', hanzo: 'Built-in with model overrides', devin: false },
];

function CellValue({ value }: { value: boolean | string }) {
  if (value === true) return <CheckIcon className="w-4 h-4 text-white" />;
  if (value === false) return <XIcon className="w-4 h-4 text-neutral-600" />;
  return <span className="text-neutral-300 text-sm">{value}</span>;
}

export default function VsDevinPage() {
  return (
    <main className="relative z-[1] max-w-[860px] mx-auto px-4 sm:px-6 pt-8 sm:pt-16 pb-10 overflow-x-hidden">

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
          Hanzo Bot vs Devin
        </h1>
        <p className="text-base sm:text-lg text-fd-muted-foreground leading-relaxed">
          Devin is a proprietary AI agent that costs $500/mo for teams and charges extra ACUs
          on top. Hanzo Bot is an open-source platform with 100+ models, 7+ chat channels,
          native crypto, and cloud VMs — starting at $5/mo with flat-rate pricing.
        </p>
      </header>

      <section className="mb-16 animate-[fadeInUp_0.8s_ease-out_0.15s_both]">
        <div className="overflow-x-auto rounded-2xl border border-fd-border bg-[rgba(10,15,26,0.6)] backdrop-blur-sm">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-fd-border">
                <th className="text-left p-4 text-neutral-500 font-medium">Feature</th>
                <th className="text-left p-4 text-white font-bold">Hanzo Bot</th>
                <th className="text-left p-4 text-neutral-400 font-medium">Devin</th>
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
                  <td className="p-4"><CellValue value={row.devin} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="mb-16 animate-[fadeInUp_0.8s_ease-out_0.25s_both]">
        <h2 className="text-2xl font-bold text-fd-foreground mb-8">
          Why teams switch from Devin
        </h2>
        <div className="grid gap-6">
          {[
            {
              title: '$500/mo for a black box vs $5/mo for an open platform',
              body: 'Devin Team costs $500/mo and charges additional ACUs for compute. You cannot see the model, inspect the code, or run it locally. Hanzo Bot is open source, starts at $5/mo with flat-rate pricing, and lets you inspect every line of code. Run it on your machine or in the cloud.',
            },
            {
              title: 'Not locked into a proprietary model',
              body: 'Devin uses its own proprietary model. If quality drops, you have no alternatives. Hanzo Bot gives you 100+ models through a unified gateway — use Claude for complex reasoning, GPT for creative tasks, Llama for cost-efficient batch work, and Zen models trained on your infrastructure.',
            },
            {
              title: 'Every channel, not just Slack',
              body: 'Devin only integrates with Slack. Hanzo Bot works on Discord, Slack, Telegram, WhatsApp, Signal, iMessage, Teams, terminal, and IDE — with persistent memory across all surfaces. Your team interacts where they already work.',
            },
            {
              title: 'Run locally when you need to',
              body: 'Devin has no local option — your code goes to their cloud. Hanzo Bot runs fully offline on your Mac, Windows, or Linux machine for free. Bring your own API keys, keep your code private, and deploy to cloud only when you choose to.',
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
            50x cheaper. Open source. More capable.
          </h2>
          <p className="text-fd-muted-foreground max-w-[540px] mx-auto mb-2">
            Devin Team costs <strong className="text-white">$500/mo</strong> plus ACU charges for a proprietary black box.
          </p>
          <p className="text-fd-muted-foreground max-w-[540px] mx-auto mb-6">
            Hanzo Bot Team Starter costs <strong className="text-white">$10/mo</strong> and includes a full Linux VM, 100+ AI models,
            all chat integrations, browser automation, crypto, and flat-rate pricing.
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
