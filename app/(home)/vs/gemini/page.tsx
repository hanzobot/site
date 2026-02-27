import Link from 'next/link';
import { ArrowRightIcon, ArrowLeftIcon, CheckIcon, XIcon } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Hanzo Bot vs Google Gemini — Why Teams Switch to Hanzo Bot',
  description:
    'Google Gemini is a chat assistant locked to Google models. Hanzo Bot starts at $5/mo with 100+ AI models, 7+ chat channels, native crypto, cloud VMs, and 260+ MCP tools.',
  openGraph: {
    title: 'Hanzo Bot vs Google Gemini — Why Teams Switch to Hanzo Bot',
    description:
      'Gemini is Google-only. Hanzo Bot gives you 100+ models, messaging, crypto, cloud VMs, and autonomous agents starting at $5/mo.',
  },
};

const rows: { feature: string; hanzo: string | boolean; gemini: string | boolean }[] = [
  { feature: 'Starting price', hanzo: '$5/mo', gemini: 'Free (limited) / $20/mo Advanced' },
  { feature: 'Free tier', hanzo: 'Full local install (forever)', gemini: 'Limited Gemini Flash' },
  { feature: 'AI models', hanzo: '100+ (Zen, Claude, GPT, Gemini, Llama, Qwen...)', gemini: 'Gemini models only' },
  { feature: 'Run locally', hanzo: 'Full offline support', gemini: false },
  { feature: 'Terminal / CLI', hanzo: true, gemini: false },
  { feature: 'IDE integration', hanzo: 'VSCode + JetBrains', gemini: 'Gemini in Android Studio' },
  { feature: 'Chat channels', hanzo: 'Discord, Slack, Telegram, WhatsApp, Signal, iMessage, Teams', gemini: false },
  { feature: 'Browser automation', hanzo: 'Built-in Playwright', gemini: false },
  { feature: 'Cloud VMs', hanzo: 'Up to 25 VMs ($5/mo each)', gemini: false },
  { feature: 'MCP tools', hanzo: '260+', gemini: 'Google Workspace extensions' },
  { feature: 'Code execution', hanzo: 'Full VM with SSH access', gemini: 'Sandboxed Python only' },
  { feature: 'Crypto / Web3', hanzo: 'Native agent wallets, x402, 100+ chains', gemini: false },
  { feature: 'Open source', hanzo: true, gemini: false },
  { feature: 'Self-improvement', hanzo: true, gemini: false },
  { feature: 'Persistent memory', hanzo: 'Cross-session, cross-channel', gemini: 'Gems (limited)' },
  { feature: 'Team collaboration', hanzo: 'Multi-org, multi-project', gemini: 'Google Workspace Business' },
  { feature: 'K8s deployment', hanzo: true, gemini: false },
  { feature: 'Autonomous agents', hanzo: 'Full multi-agent system', gemini: 'Jules (preview, coding only)' },
  { feature: 'Budget controls', hanzo: 'Per-agent daily caps', gemini: false },
  { feature: 'Cron scheduling', hanzo: 'Built-in with model overrides', gemini: false },
];

function CellValue({ value }: { value: boolean | string }) {
  if (value === true) return <CheckIcon className="w-4 h-4 text-white" />;
  if (value === false) return <XIcon className="w-4 h-4 text-neutral-600" />;
  return <span className="text-neutral-300 text-sm">{value}</span>;
}

export default function VsGeminiPage() {
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
          Hanzo Bot vs Google Gemini
        </h1>
        <p className="text-base sm:text-lg text-fd-muted-foreground leading-relaxed">
          Google Gemini is a chat assistant locked to Google&apos;s model family. Hanzo Bot is a
          full-stack AI agent platform with 100+ models (including Gemini), 7+ chat channels,
          native crypto, production VMs, and 260+ MCP tools. Gemini Advanced costs $20/mo.
          Hanzo Bot starts at $5/mo — and you get Gemini plus 99 other models.
        </p>
      </header>

      <section className="mb-16 animate-[fadeInUp_0.8s_ease-out_0.15s_both]">
        <div className="overflow-x-auto rounded-2xl border border-fd-border bg-[rgba(10,15,26,0.6)] backdrop-blur-sm">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-fd-border">
                <th className="text-left p-4 text-neutral-500 font-medium">Feature</th>
                <th className="text-left p-4 text-white font-bold">Hanzo Bot</th>
                <th className="text-left p-4 text-neutral-400 font-medium">Google Gemini</th>
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
                  <td className="p-4"><CellValue value={row.gemini} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="mb-16 animate-[fadeInUp_0.8s_ease-out_0.25s_both]">
        <h2 className="text-2xl font-bold text-fd-foreground mb-8">
          Why teams switch from Google Gemini
        </h2>
        <div className="grid gap-6">
          {[
            {
              title: 'Use Gemini plus 99 other models',
              body: 'Gemini locks you into Google\'s model family. Hanzo Bot includes Gemini as one of 100+ models through the Hanzo LLM Gateway. Use Gemini for long-context tasks, Claude for reasoning, GPT for creativity, Llama for cost-efficient batch work — all from one platform, one subscription.',
            },
            {
              title: 'A real agent, not a chat window',
              body: 'Gemini is a conversational assistant — you ask questions, get answers. Hanzo Bot is an autonomous agent that writes code, deploys to production, manages infrastructure, handles customer support, runs marketing campaigns, and operates 24/7 without human supervision.',
            },
            {
              title: 'Every channel, not just Google',
              body: 'Gemini works in Google\'s ecosystem — web chat, Android Studio, Google Workspace. Hanzo Bot works on Discord, Slack, Telegram, WhatsApp, Signal, iMessage, Teams, terminal, and IDE — with persistent memory across all surfaces. Your bot goes where your team and customers are.',
            },
            {
              title: 'Production infrastructure included',
              body: 'Gemini has no cloud VMs, no deployment tools, no K8s integration, no SSH access. Hanzo Bot includes up to 25 always-on Linux VMs, container deployment, KMS secrets management, IAM with SSO, and full production infrastructure — all starting at $5/mo.',
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
            75% less. Every model. Autonomous agents.
          </h2>
          <p className="text-fd-muted-foreground max-w-[540px] mx-auto mb-2">
            Gemini Advanced costs <strong className="text-white">$20/mo</strong> for Google-only models in a chat window.
          </p>
          <p className="text-fd-muted-foreground max-w-[540px] mx-auto mb-6">
            Hanzo Bot Starter costs <strong className="text-white">$5/mo</strong> and includes Gemini plus 99 other models,
            production Linux VMs, all chat integrations, autonomous agents, crypto, and cloud deployment.
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
