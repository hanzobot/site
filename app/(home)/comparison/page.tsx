import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Hanzo Bot vs OpenClaw — Comparison',
  description:
    'See how Hanzo Bot compares to OpenClaw, Claude Code, Cursor, and Codex. Enterprise AI agents with native crypto, multiplayer, and cloud infrastructure.',
}

const features = [
  {
    category: 'Architecture',
    items: [
      {
        name: 'Runtime model',
        hanzo: 'Tiered: cloud gateway → terminal → desktop → EC2 → local',
        openclaw: 'Local-first, single device',
        claudeCode: 'Terminal-only',
        cursor: 'IDE-embedded',
      },
      {
        name: 'Multi-user / teams',
        hanzo: true,
        openclaw: false,
        claudeCode: false,
        cursor: 'Teams plan',
      },
      {
        name: 'Session isolation',
        hanzo: true,
        openclaw: false,
        claudeCode: true,
        cursor: true,
      },
      {
        name: 'Cloud deployment',
        hanzo: 'K8s native',
        openclaw: 'Self-hosted',
        claudeCode: 'No',
        cursor: 'No',
      },
    ],
  },
  {
    category: 'AI & Models',
    items: [
      {
        name: 'Built-in model gateway',
        hanzo: '100+ providers',
        openclaw: 'External only',
        claudeCode: 'Claude only',
        cursor: 'Multi-provider',
      },
      {
        name: 'Proprietary models',
        hanzo: 'Zen LM family (600M–480B)',
        openclaw: 'None',
        claudeCode: 'Claude',
        cursor: 'None',
      },
      {
        name: 'MCP tools',
        hanzo: '260+',
        openclaw: 'Community',
        claudeCode: 'Yes',
        cursor: 'Yes',
      },
      {
        name: 'Self-improvement loop',
        hanzo: true,
        openclaw: false,
        claudeCode: false,
        cursor: false,
      },
    ],
  },
  {
    category: 'Channels & Interface',
    items: [
      {
        name: 'Terminal / CLI',
        hanzo: true,
        openclaw: true,
        claudeCode: true,
        cursor: false,
      },
      {
        name: 'IDE integration',
        hanzo: 'VSCode + JetBrains',
        openclaw: 'No',
        claudeCode: 'VSCode',
        cursor: 'Native IDE',
      },
      {
        name: 'Messaging apps',
        hanzo: 'Discord, Slack, Telegram, WhatsApp, Signal, iMessage, Teams',
        openclaw: 'Telegram, Signal, Discord, WhatsApp',
        claudeCode: 'No',
        cursor: 'No',
      },
      {
        name: 'Browser automation',
        hanzo: 'Built-in (Playwright)',
        openclaw: 'Limited',
        claudeCode: 'No',
        cursor: 'No',
      },
      {
        name: 'Native macOS app',
        hanzo: true,
        openclaw: true,
        claudeCode: false,
        cursor: true,
      },
    ],
  },
  {
    category: 'Crypto & Web3',
    items: [
      {
        name: 'Wallet integration',
        hanzo: 'Native (agent wallets)',
        openclaw: 'None',
        claudeCode: 'None',
        cursor: 'None',
      },
      {
        name: 'x402 payments',
        hanzo: true,
        openclaw: false,
        claudeCode: false,
        cursor: false,
      },
      {
        name: 'Multi-chain support',
        hanzo: '100+ networks',
        openclaw: 'None',
        claudeCode: 'None',
        cursor: 'None',
      },
      {
        name: 'DeFi / on-chain actions',
        hanzo: true,
        openclaw: false,
        claudeCode: false,
        cursor: false,
      },
    ],
  },
  {
    category: 'Automation & Ops',
    items: [
      {
        name: 'Cron scheduling',
        hanzo: 'Built-in with model overrides',
        openclaw: 'Basic',
        claudeCode: 'No',
        cursor: 'No',
      },
      {
        name: 'Heartbeat monitoring',
        hanzo: true,
        openclaw: false,
        claudeCode: false,
        cursor: false,
      },
      {
        name: 'Pipeline workflows',
        hanzo: 'Resumable with approvals',
        openclaw: 'No',
        claudeCode: 'No',
        cursor: 'No',
      },
      {
        name: 'CI/CD integration',
        hanzo: 'GitHub Actions hook',
        openclaw: 'No',
        claudeCode: 'No',
        cursor: 'No',
      },
    ],
  },
  {
    category: 'Security & Enterprise',
    items: [
      {
        name: 'IAM / SSO',
        hanzo: 'Full (hanzo.id)',
        openclaw: 'None',
        claudeCode: 'None',
        cursor: 'Teams SSO',
      },
      {
        name: 'KMS integration',
        hanzo: 'Native (kms.hanzo.ai)',
        openclaw: 'None',
        claudeCode: 'None',
        cursor: 'None',
      },
      {
        name: 'Org / project scoping',
        hanzo: 'Multi-org, multi-project',
        openclaw: 'Single user',
        claudeCode: 'Per-project',
        cursor: 'Per-workspace',
      },
      {
        name: 'Audit trail',
        hanzo: 'Full diagnostic events',
        openclaw: 'Logs only',
        claudeCode: 'Logs only',
        cursor: 'None',
      },
      {
        name: 'Budget controls',
        hanzo: 'Per-agent daily caps',
        openclaw: 'None',
        claudeCode: 'None',
        cursor: 'Usage limits',
      },
    ],
  },
]

function CellValue({ value }: { value: boolean | string }) {
  if (value === true) return <span className="text-emerald-400 font-semibold">Yes</span>
  if (value === false) return <span className="text-neutral-500">—</span>
  return <span className="text-neutral-300">{value}</span>
}

export default function ComparisonPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero */}
      <section className="relative py-24 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-red-950/20 via-transparent to-transparent" />
        <div className="relative max-w-6xl mx-auto text-center">
          <p className="text-sm font-mono text-red-400 tracking-widest uppercase mb-4">
            Comparison
          </p>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
            Hanzo Bot vs{' '}
            <span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
              the field
            </span>
          </h1>
          <p className="text-xl text-neutral-400 max-w-3xl mx-auto leading-relaxed">
            How does Hanzo Bot compare to OpenClaw, Claude Code, Cursor, and Codex?
            We built the AI agent platform we wanted to use — with native crypto,
            multiplayer collaboration, and production-grade infrastructure.
          </p>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="px-6 pb-12">
        <div className="max-w-6xl mx-auto">
          {features.map((section) => (
            <div key={section.category} className="mb-12">
              <h2 className="text-2xl font-bold mb-6 text-neutral-200">
                {section.category}
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b border-neutral-800">
                      <th className="text-left py-3 px-4 text-sm text-neutral-500 font-medium w-1/5">
                        Feature
                      </th>
                      <th className="text-left py-3 px-4 text-sm font-medium w-1/5">
                        <span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent font-bold">
                          Hanzo Bot
                        </span>
                      </th>
                      <th className="text-left py-3 px-4 text-sm text-neutral-400 font-medium w-1/5">
                        OpenClaw
                      </th>
                      <th className="text-left py-3 px-4 text-sm text-neutral-400 font-medium w-1/5">
                        Claude Code
                      </th>
                      <th className="text-left py-3 px-4 text-sm text-neutral-400 font-medium w-1/5">
                        Cursor
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {section.items.map((item, i) => (
                      <tr
                        key={item.name}
                        className={`border-b border-neutral-800/50 ${
                          i % 2 === 0 ? 'bg-neutral-950/50' : ''
                        }`}
                      >
                        <td className="py-3 px-4 text-sm text-neutral-400">
                          {item.name}
                        </td>
                        <td className="py-3 px-4 text-sm">
                          <CellValue value={item.hanzo} />
                        </td>
                        <td className="py-3 px-4 text-sm">
                          <CellValue value={item.openclaw} />
                        </td>
                        <td className="py-3 px-4 text-sm">
                          <CellValue value={item.claudeCode} />
                        </td>
                        <td className="py-3 px-4 text-sm">
                          <CellValue value={item.cursor} />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Key Differentiators */}
      <section className="px-6 py-20 border-t border-neutral-800">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Why teams choose Hanzo Bot
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Production infrastructure',
                desc: 'K8s-native deployment, KMS-first secrets, IAM with SSO. Not a weekend project — a platform.',
                icon: '🏗',
              },
              {
                title: 'Native crypto',
                desc: 'Agent wallets, x402 payments, USDC on Base, 100+ chain support. Your bot trades, pays, and builds on-chain.',
                icon: '⛓',
              },
              {
                title: 'Multiplayer by default',
                desc: 'Multi-org, multi-project, canvas collaboration. Built for teams, not just solo developers.',
                icon: '👥',
              },
              {
                title: '100+ LLM providers',
                desc: 'Unified gateway proxies OpenAI, Anthropic, Together, Ollama, and 100+ more. Plus Zen models.',
                icon: '🧠',
              },
              {
                title: 'Every channel',
                desc: 'Discord, Slack, Telegram, WhatsApp, Signal, iMessage, Teams. One bot, everywhere.',
                icon: '💬',
              },
              {
                title: 'Self-improving',
                desc: 'Telemetry loops, friction detection, continuous learning with GRPO. Gets better the more you use it.',
                icon: '📈',
              },
            ].map((d) => (
              <div
                key={d.title}
                className="p-6 rounded-xl border border-neutral-800 bg-neutral-950/50 hover:border-neutral-700 transition-colors"
              >
                <div className="text-3xl mb-4">{d.icon}</div>
                <h3 className="text-lg font-semibold mb-2">{d.title}</h3>
                <p className="text-sm text-neutral-400 leading-relaxed">{d.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Migration CTA */}
      <section className="px-6 py-20 border-t border-neutral-800">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">
            Coming from OpenClaw?
          </h2>
          <p className="text-neutral-400 text-lg mb-8 leading-relaxed">
            Hanzo Bot is compatible with OpenClaw skills and shares many concepts.
            Most configs translate directly. Read the migration guide to get started.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/docs/start/openclaw-migration"
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-white text-black font-semibold hover:bg-neutral-200 transition-colors"
            >
              Migration guide
            </a>
            <a
              href="/get-started"
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg border border-neutral-700 text-white font-semibold hover:bg-neutral-900 transition-colors"
            >
              Get started fresh
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
