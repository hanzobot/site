import Link from 'next/link';
import { ArrowRightIcon } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Hanzo Bot vs Competitors — Compare AI Agent Platforms',
  description:
    'Compare Hanzo Bot to Cursor, Claude Code, GitHub Copilot, Devin, OpenAI Codex, Gemini, and exe.dev. See why teams switch to the only AI agent with 100+ models, 7+ chat channels, native crypto, and cloud VMs starting at $5/mo.',
};

const comparisons = [
  {
    slug: 'cursor',
    name: 'Cursor',
    tagline: 'IDE-only code completion vs full-stack AI agent',
    theirPrice: '$20/mo',
    pain: 'Locked into one IDE, limited models, no messaging, no crypto, no cloud VMs.',
  },
  {
    slug: 'claude-code',
    name: 'Claude Code',
    tagline: 'Single-model terminal tool vs multi-model platform',
    theirPrice: '$20/mo (Max)',
    pain: 'Claude-only, terminal-only, no messaging, no crypto, no team features.',
  },
  {
    slug: 'github-copilot',
    name: 'GitHub Copilot',
    tagline: 'Code completion vs autonomous AI agent',
    theirPrice: '$19/mo',
    pain: 'Autocomplete focus, no browser automation, no messaging, no crypto.',
  },
  {
    slug: 'devin',
    name: 'Devin',
    tagline: 'Expensive black box vs transparent platform',
    theirPrice: '$500/mo (Team)',
    pain: 'Proprietary model, Slack-only, no crypto, opaque pricing with ACU charges.',
  },
  {
    slug: 'openai-codex',
    name: 'OpenAI Codex',
    tagline: 'Cloud-only sandbox vs open multi-model platform',
    theirPrice: '$20/mo (Plus)',
    pain: 'OpenAI-only, cloud-only, no SSH, no messaging, no crypto, no local option.',
  },
  {
    slug: 'gemini',
    name: 'Google Gemini',
    tagline: 'Chat assistant vs autonomous AI agent',
    theirPrice: '$20/mo (Advanced)',
    pain: 'Google-only, no VMs, no deployment, no messaging, no crypto, no autonomy.',
  },
  {
    slug: 'exe-dev',
    name: 'exe.dev',
    tagline: 'Sandbox VMs vs production infrastructure',
    theirPrice: '$20/mo',
    pain: 'No messaging, no crypto, no IDE integration, no MCP tools, no teams in base plan.',
  },
];

export default function VsIndexPage() {
  return (
    <main className="relative z-[1] max-w-[860px] mx-auto px-4 sm:px-6 pt-8 sm:pt-16 pb-10 overflow-x-hidden">

      <header className="mb-12 animate-[fadeInUp_0.8s_ease-out]">
        <p className="text-sm font-mono text-neutral-400 tracking-widest uppercase mb-4">
          Comparisons
        </p>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4 text-fd-foreground">
          Hanzo Bot vs the field
        </h1>
        <p className="text-base sm:text-lg text-fd-muted-foreground leading-relaxed max-w-[640px]">
          Every AI coding tool does autocomplete. Hanzo Bot does autocomplete,
          deployment, monitoring, marketing, support, crypto, and ops — starting
          at $5/mo. See how we compare.
        </p>
      </header>

      <div className="grid gap-5 animate-[fadeInUp_0.8s_ease-out_0.2s_both]">
        {comparisons.map((c) => (
          <Link
            key={c.slug}
            href={`/vs/${c.slug}`}
            className="group flex flex-col sm:flex-row sm:items-center gap-4 p-6 rounded-2xl border border-fd-border bg-[rgba(10,15,26,0.6)] backdrop-blur-sm hover:border-neutral-600 transition-all no-underline"
          >
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-3 mb-1.5">
                <h2 className="text-lg font-bold text-fd-foreground">
                  Hanzo Bot vs {c.name}
                </h2>
                <span className="hidden sm:inline-flex text-xs text-neutral-400 border border-neutral-700 rounded-full px-2.5 py-0.5">
                  {c.theirPrice}
                </span>
              </div>
              <p className="text-sm text-fd-muted-foreground mb-1">
                {c.tagline}
              </p>
              <p className="text-xs text-neutral-500">{c.pain}</p>
            </div>
            <ArrowRightIcon className="w-5 h-5 text-neutral-500 group-hover:text-white transition-colors shrink-0" />
          </Link>
        ))}
      </div>

      {/* Bottom CTA */}
      <div className="mt-16 text-center animate-[fadeInUp_0.8s_ease-out_0.4s_both]">
        <p className="text-sm text-fd-muted-foreground mb-6">
          Want the full side-by-side with all competitors at once?
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/comparison"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white text-black font-semibold hover:bg-neutral-200 transition-colors no-underline"
          >
            Full comparison table
            <ArrowRightIcon className="w-4 h-4" />
          </Link>
          <Link
            href="/pricing"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-neutral-600 text-white font-semibold hover:bg-white/5 transition-colors no-underline"
          >
            See pricing
          </Link>
        </div>
      </div>
    </main>
  );
}
