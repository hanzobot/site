import { CheckCircleIcon, PlusIcon, WrenchIcon, ZapIcon, ShieldCheckIcon, BugIcon } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Changelog',
  description: 'All Hanzo Bot releases, features, and fixes.',
};

/* ---- Data ---- */

type ChangeType = 'added' | 'improved' | 'fixed' | 'security';

interface Change {
  type: ChangeType;
  text: string;
}

interface Release {
  version: string;
  date: string;
  title: string;
  highlight?: string;
  changes: Change[];
}

const typeConfig: Record<ChangeType, { icon: typeof PlusIcon; color: string; label: string }> = {
  added: { icon: PlusIcon, color: 'text-[#a3a3a3]', label: 'Added' },
  improved: { icon: ZapIcon, color: 'text-neutral-400', label: 'Improved' },
  fixed: { icon: BugIcon, color: 'text-[#a3a3a3]', label: 'Fixed' },
  security: { icon: ShieldCheckIcon, color: 'text-white', label: 'Security' },
};

const releases: Release[] = [
  {
    version: '2026.2.26',
    date: '2026-02-26',
    title: 'Crypto Skills & Blog',
    highlight: 'Agents go onchain with autonomous wallet creation, USDC payments via x402, and multi-chain support.',
    changes: [
      { type: 'added', text: 'Crypto skills page with x402 payment flow documentation' },
      { type: 'added', text: 'Blog with architecture deep dives and launch announcements' },
      { type: 'added', text: 'Changelog page for tracking all releases' },
      { type: 'added', text: 'Multi-chain support: Ethereum, Base, Solana, Bitcoin, Polygon, Arbitrum, Optimism, Lux' },
      { type: 'added', text: 'Autonomous CI/CD fix loop extension with budget controls' },
      { type: 'improved', text: 'Navigation with Crypto and Blog links' },
    ],
  },
  {
    version: '2026.2.24',
    date: '2026-02-24',
    title: 'Self-Improvement & Continuous Learning',
    highlight: 'Six-loop self-improvement system with GRPO semantic extraction and federated learning.',
    changes: [
      { type: 'added', text: 'Self-improvement extension with 4-loop telemetry system' },
      { type: 'added', text: 'Continuous learning extension with GRPO + DSO + BitDelta integration' },
      { type: 'added', text: 'Harness-hacker skill for self-modification in isolated worktrees' },
      { type: 'added', text: 'Architecture documentation for unified agent harness' },
      { type: 'improved', text: 'Plugin SDK with diagnostic event pub/sub system' },
      { type: 'improved', text: 'Isolated agent runner with model overrides and timeouts' },
    ],
  },
  {
    version: '2026.2.20',
    date: '2026-02-20',
    title: 'Hanzo Bot Launch',
    highlight: 'First public release — your AI team in a box with 100+ models, 600+ integrations, and full computer use.',
    changes: [
      { type: 'added', text: 'Bot gateway with multi-channel support (WhatsApp, Telegram, Discord, Slack, Signal, iMessage)' },
      { type: 'added', text: 'LLM Gateway proxy with 100+ AI model providers' },
      { type: 'added', text: 'MCP tool server with 54 tools' },
      { type: 'added', text: 'Skills marketplace with community contributions' },
      { type: 'added', text: 'Nostr extension with NIP-04 encrypted DMs and Lightning payments' },
      { type: 'added', text: 'Operative extension for full computer use (browser, desktop, terminal)' },
      { type: 'added', text: 'Platform page with architecture overview and pricing' },
      { type: 'added', text: 'Solutions pages for Support, Sales, Engineering, Marketing, Operations' },
      { type: 'added', text: 'Integrations page with 600+ automation connections' },
      { type: 'added', text: 'Showcase page with community builds' },
      { type: 'security', text: 'Rate limiting, SSRF protection, and key management across all extensions' },
    ],
  },
  {
    version: '2026.2.16',
    date: '2026-02-16',
    title: 'Nostr Protocol Integration',
    changes: [
      { type: 'added', text: 'Nostr channel extension with NIP-01 and NIP-04 support' },
      { type: 'added', text: 'Multi-relay management with circuit breaker pattern' },
      { type: 'added', text: 'Profile management with NIP-05 verification and LUD-16 Lightning addresses' },
      { type: 'added', text: 'DM policies: pairing, allowlist, open, disabled' },
      { type: 'security', text: 'Timing-safe token verification and SSRF protection for profile URLs' },
    ],
  },
  {
    version: '2026.2.10',
    date: '2026-02-10',
    title: 'Gateway & Infrastructure',
    changes: [
      { type: 'added', text: 'Bot gateway HTTP server with webhook ingestion' },
      { type: 'added', text: 'Cron service with scheduled agent turns' },
      { type: 'added', text: 'Session cost tracking with JSONL analytics' },
      { type: 'added', text: 'Plugin system with lifecycle hooks and tool registration' },
      { type: 'improved', text: 'K8s deployment with Traefik ingress and sticky sessions' },
    ],
  },
];

/* ---- Page ---- */

export default function ChangelogPage() {
  return (
    <main className="relative z-[1] max-w-[860px] mx-auto px-4 sm:px-6 pt-8 sm:pt-16 pb-10 overflow-x-hidden">
      <div className="stars" />
      <div className="nebula" />

      <header className="text-center mb-12 animate-[fadeInUp_0.8s_ease-out]">
        <p className="font-mono text-xs uppercase tracking-wider text-fd-muted-foreground mb-4">
          Changelog
        </p>
        <h1 className="text-4xl lg:text-5xl font-bold tracking-tight mb-4">
          <span className="bg-gradient-to-br from-fd-foreground via-neutral-400 to-[#a3a3a3] bg-[length:200%_200%] bg-clip-text text-transparent animate-[gradientShift_6s_ease_infinite]">
            What&apos;s New
          </span>
        </h1>
        <p className="text-base text-fd-muted-foreground max-w-[500px] mx-auto">
          Every feature, fix, and improvement — tracked with each release.
        </p>
      </header>

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-[19px] top-8 bottom-8 w-px bg-fd-border hidden sm:block" />

        <div className="flex flex-col gap-8">
          {releases.map((release, i) => (
            <div
              key={release.version}
              className="relative flex gap-6 animate-[fadeInUp_0.6s_ease-out_both]"
              style={{ animationDelay: `${0.1 + i * 0.08}s` }}
            >
              {/* Timeline dot */}
              <div className="hidden sm:flex shrink-0 w-10 pt-6 justify-center">
                <div className="size-3 rounded-full bg-white ring-4 ring-[rgba(255,255,255,0.15)]" />
              </div>

              {/* Card */}
              <div className="flex-1 p-6 rounded-2xl border border-fd-border bg-[rgba(10,15,26,0.6)] backdrop-blur-sm">
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <span className="font-mono text-sm font-bold text-white">
                    v{release.version}
                  </span>
                  <span className="text-xs text-fd-muted-foreground">
                    {new Date(release.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                  </span>
                </div>

                <h2 className="text-lg font-semibold text-fd-foreground mb-1">
                  {release.title}
                </h2>

                {release.highlight && (
                  <p className="text-sm text-fd-muted-foreground leading-relaxed mb-4">
                    {release.highlight}
                  </p>
                )}

                <div className="flex flex-col gap-2">
                  {release.changes.map((change, j) => {
                    const config = typeConfig[change.type];
                    const Icon = config.icon;
                    return (
                      <div key={j} className="flex items-start gap-2.5">
                        <Icon className={`size-4 shrink-0 mt-0.5 ${config.color}`} />
                        <span className="text-sm text-fd-muted-foreground">{change.text}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
