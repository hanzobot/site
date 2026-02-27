import Link from 'next/link';
import { ArrowRightIcon, ArrowLeftIcon, CheckIcon, XIcon } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Hanzo Bot vs OpenAI Codex — Why Teams Switch to Hanzo Bot',
  description:
    'OpenAI Codex is a cloud-only coding agent locked to OpenAI models. Hanzo Bot starts at $5/mo with 100+ AI models, 7+ chat channels, native crypto, cloud VMs, and 260+ MCP tools.',
  openGraph: {
    title: 'Hanzo Bot vs OpenAI Codex — Why Teams Switch to Hanzo Bot',
    description:
      'Codex is OpenAI-only and cloud-only. Hanzo Bot gives you 100+ models, messaging, crypto, local + cloud VMs starting at $5/mo.',
  },
};

const rows: { feature: string; hanzo: string | boolean; codex: string | boolean }[] = [
  { feature: 'Starting price', hanzo: '$5/mo', codex: '$20/mo (Plus) or $200/mo (Pro)' },
  { feature: 'Free tier', hanzo: 'Full local install (forever)', codex: false },
  { feature: 'AI models', hanzo: '100+ (Zen, Claude, GPT, Gemini, Llama, Qwen...)', codex: 'OpenAI models only (codex-mini)' },
  { feature: 'Run locally', hanzo: 'Full offline support', codex: false },
  { feature: 'Terminal / CLI', hanzo: true, codex: false },
  { feature: 'IDE integration', hanzo: 'VSCode + JetBrains', codex: false },
  { feature: 'Chat channels', hanzo: 'Discord, Slack, Telegram, WhatsApp, Signal, iMessage, Teams', codex: false },
  { feature: 'Browser automation', hanzo: 'Built-in Playwright', codex: false },
  { feature: 'Cloud VMs', hanzo: 'Up to 25 VMs ($5/mo each)', codex: 'Sandboxed container (no SSH)' },
  { feature: 'MCP tools', hanzo: '260+', codex: false },
  { feature: 'Crypto / Web3', hanzo: 'Native agent wallets, x402, 100+ chains', codex: false },
  { feature: 'Open source', hanzo: true, codex: false },
  { feature: 'Self-improvement', hanzo: true, codex: false },
  { feature: 'Persistent memory', hanzo: 'Cross-session, cross-channel', codex: 'Per-task only' },
  { feature: 'Team collaboration', hanzo: 'Multi-org, multi-project', codex: 'ChatGPT Team ($25/mo)' },
  { feature: 'K8s deployment', hanzo: true, codex: false },
  { feature: 'Budget controls', hanzo: 'Per-agent daily caps', codex: 'Rate limits only' },
  { feature: 'Cron scheduling', hanzo: 'Built-in with model overrides', codex: false },
];

function CellValue({ value }: { value: boolean | string }) {
  if (value === true) return <CheckIcon className="w-4 h-4 text-white" />;
  if (value === false) return <XIcon className="w-4 h-4 text-neutral-600" />;
  return <span className="text-neutral-300 text-sm">{value}</span>;
}

export default function VsOpenAICodexPage() {
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
          Hanzo Bot vs OpenAI Codex
        </h1>
        <p className="text-base sm:text-lg text-fd-muted-foreground leading-relaxed">
          OpenAI Codex is a cloud-only coding agent locked to OpenAI models in a sandboxed container.
          Hanzo Bot is a full-stack AI agent platform with 100+ models, 7+ chat channels,
          native crypto, production VMs, and 260+ MCP tools. Codex requires a $20/mo ChatGPT Plus subscription.
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
                <th className="text-left p-4 text-neutral-400 font-medium">OpenAI Codex</th>
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
                  <td className="p-4"><CellValue value={row.codex} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="mb-16 animate-[fadeInUp_0.8s_ease-out_0.25s_both]">
        <h2 className="text-2xl font-bold text-fd-foreground mb-8">
          Why teams switch from OpenAI Codex
        </h2>
        <div className="grid gap-6">
          {[
            {
              title: 'Not locked to OpenAI models',
              body: 'Codex only runs OpenAI\'s codex-mini model. If OpenAI has an outage or the model underperforms on your stack, you\'re stuck. Hanzo Bot gives you 100+ models through a unified gateway — Claude for reasoning, GPT for creativity, Gemini for long-context, Llama for cost efficiency, and Zen models trained on your infrastructure.',
            },
            {
              title: 'Run locally, not just in the cloud',
              body: 'Codex runs exclusively in OpenAI\'s cloud in a sandboxed container — no SSH, no persistent state, no local option. Hanzo Bot runs fully offline on your Mac, Windows, or Linux machine for free. Your code stays on your hardware. Deploy to cloud only when you choose to.',
            },
            {
              title: 'Production VMs, not throwaway sandboxes',
              body: 'Codex spins up a temporary container for each task — no persistence, no SSH access, no production deployment. Hanzo Bot gives you always-on Linux VMs with KMS secrets, IAM, K8s deployment, and 24/7 uptime. Your bots run in real infrastructure.',
            },
            {
              title: 'Every channel, not just a web UI',
              body: 'Codex only works through the ChatGPT web interface. Hanzo Bot works on Discord, Slack, Telegram, WhatsApp, Signal, iMessage, Teams, terminal, and IDE — with persistent memory across all surfaces. One agent, every surface your team uses.',
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
            75% less. Open source. Every model.
          </h2>
          <p className="text-fd-muted-foreground max-w-[540px] mx-auto mb-2">
            OpenAI Codex requires <strong className="text-white">ChatGPT Plus ($20/mo)</strong> or <strong className="text-white">Pro ($200/mo)</strong> and only runs OpenAI models in a sandboxed container.
          </p>
          <p className="text-fd-muted-foreground max-w-[540px] mx-auto mb-6">
            Hanzo Bot Starter costs <strong className="text-white">$5/mo</strong> and includes production Linux VMs, 100+ AI models,
            all chat integrations, browser automation, crypto, and local + cloud deployment.
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
