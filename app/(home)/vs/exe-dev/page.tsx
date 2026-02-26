import Link from 'next/link';
import { ArrowRightIcon, ArrowLeftIcon, CheckIcon, XIcon } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Hanzo Bot vs exe.dev — Why Teams Switch to Hanzo Bot',
  description:
    'exe.dev costs $20/mo for sandbox VMs with limited integrations. Hanzo Bot starts at $5/mo with 100+ AI models, 7+ chat channels, native crypto, production VMs, and 260+ MCP tools.',
  openGraph: {
    title: 'Hanzo Bot vs exe.dev — Why Teams Switch to Hanzo Bot',
    description:
      'exe.dev is sandbox VMs. Hanzo Bot is production infrastructure with 100+ models, messaging, crypto, and MCP tools starting at $5/mo.',
  },
};

const rows: { feature: string; hanzo: string | boolean; exe: string | boolean }[] = [
  { feature: 'Starting price', hanzo: '$5/mo', exe: '$20/mo' },
  { feature: 'Free tier', hanzo: 'Full local install (forever)', exe: 'Limited trial' },
  { feature: 'AI models', hanzo: '100+ (Zen, Claude, GPT, Gemini, Llama, Qwen...)', exe: 'Claude, GPT' },
  { feature: 'Terminal / CLI', hanzo: true, exe: true },
  { feature: 'IDE integration', hanzo: 'VSCode + JetBrains', exe: false },
  { feature: 'Chat channels', hanzo: 'Discord, Slack, Telegram, WhatsApp, Signal, iMessage, Teams', exe: false },
  { feature: 'Browser automation', hanzo: 'Built-in Playwright', exe: 'Built-in' },
  { feature: 'Cloud VMs', hanzo: 'Up to 25 VMs', exe: 'Sandbox VMs' },
  { feature: 'MCP tools', hanzo: '260+', exe: false },
  { feature: 'Crypto / Web3', hanzo: 'Native agent wallets, x402, 100+ chains', exe: false },
  { feature: 'Run locally', hanzo: 'Full offline support', exe: false },
  { feature: 'Self-improvement', hanzo: true, exe: false },
  { feature: 'Team collaboration', hanzo: 'Multi-org, multi-project', exe: 'Team plan ($50/mo)' },
  { feature: 'K8s deployment', hanzo: true, exe: false },
  { feature: 'IAM / SSO', hanzo: 'Full (hanzo.id)', exe: false },
  { feature: 'Budget controls', hanzo: 'Per-agent daily caps', exe: 'Seat-based' },
  { feature: 'Cron scheduling', hanzo: 'Built-in with model overrides', exe: false },
];

function CellValue({ value }: { value: boolean | string }) {
  if (value === true) return <CheckIcon className="w-4 h-4 text-white" />;
  if (value === false) return <XIcon className="w-4 h-4 text-neutral-600" />;
  return <span className="text-neutral-300 text-sm">{value}</span>;
}

export default function VsExeDevPage() {
  return (
    <main className="relative z-[1] max-w-[860px] mx-auto px-4 sm:px-6 pt-12 sm:pt-16 pb-10 overflow-hidden">
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
          Hanzo Bot vs exe.dev
        </h1>
        <p className="text-lg text-fd-muted-foreground leading-relaxed">
          exe.dev gives you sandbox VMs with an AI agent for $20/mo. Hanzo Bot gives you
          production infrastructure with 100+ models, 7+ chat channels, native crypto,
          260+ MCP tools, and cloud VMs — starting at $5/mo.
        </p>
      </header>

      <section className="mb-16 animate-[fadeInUp_0.8s_ease-out_0.15s_both]">
        <div className="overflow-x-auto rounded-2xl border border-fd-border bg-[rgba(10,15,26,0.6)] backdrop-blur-sm">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-fd-border">
                <th className="text-left p-4 text-neutral-500 font-medium">Feature</th>
                <th className="text-left p-4 text-white font-bold">Hanzo Bot</th>
                <th className="text-left p-4 text-neutral-400 font-medium">exe.dev</th>
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
                  <td className="p-4"><CellValue value={row.exe} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="mb-16 animate-[fadeInUp_0.8s_ease-out_0.25s_both]">
        <h2 className="text-2xl font-bold text-fd-foreground mb-8">
          Why teams switch from exe.dev
        </h2>
        <div className="grid gap-6">
          {[
            {
              title: 'Production infrastructure, not sandboxes',
              body: 'exe.dev provides sandbox environments for coding tasks. Hanzo Bot gives you production-grade Linux VMs with KMS secrets, IAM, Kubernetes deployment, monitoring, and always-on uptime. Your bots run 24/7 in real infrastructure, not throwaway containers.',
            },
            {
              title: 'Every channel your team uses',
              body: 'exe.dev has no messaging integrations. Hanzo Bot works natively on Discord, Slack, Telegram, WhatsApp, Signal, iMessage, and Teams — with persistent memory across all surfaces. Your bot is reachable wherever your team and customers already are.',
            },
            {
              title: '260+ MCP tools and native crypto',
              body: 'exe.dev has no MCP tool ecosystem and no crypto support. Hanzo Bot connects to 260+ tools via Model Context Protocol and has native agent wallets with x402 machine-to-machine payments across 100+ blockchain networks.',
            },
            {
              title: '75% cheaper with a free local option',
              body: 'exe.dev starts at $20/mo with no free tier. Hanzo Bot is free forever when you run locally with your own API keys. Cloud starts at $5/mo with flat-rate pricing — no hidden usage charges.',
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
          <h2 className="text-2xl font-bold text-fd-foreground mb-3">
            75% less. Production-grade. Open source.
          </h2>
          <p className="text-fd-muted-foreground max-w-[540px] mx-auto mb-2">
            exe.dev costs <strong className="text-white">$20/mo</strong> for sandbox VMs with limited integrations.
          </p>
          <p className="text-fd-muted-foreground max-w-[540px] mx-auto mb-6">
            Hanzo Bot Starter costs <strong className="text-white">$5/mo</strong> and includes production Linux VMs, 100+ AI models,
            all chat integrations, 260+ MCP tools, crypto, and flat-rate pricing.
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
