import Link from 'next/link';
import { ArrowLeftIcon, CalendarIcon, CheckIcon, XIcon } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Hanzo Bot vs Every AI Coding Agent — Price, Power, and What They Don\'t Tell You',
  description: 'Cursor costs $20/mo. Claude Code costs $20/mo. GitHub Copilot costs $19/mo. Hanzo Bot starts free and beats them all at $15/mo. Here\'s the breakdown.',
};

const competitors = [
  {
    name: 'Hanzo Bot',
    price: '$15/mo',
    highlight: true,
    features: {
      terminal: true,
      ide: 'VSCode + JetBrains',
      models: '100+ (Zen, Claude, GPT, Gemini, Llama, Qwen...)',
      mcp: '260+ tools',
      messaging: 'Discord, Slack, Telegram, WhatsApp, Signal, iMessage, Teams',
      browser: 'Built-in Playwright',
      crypto: 'Native agent wallets, x402, 100+ chains',
      cloud: 'K8s-native deployment',
      selfImprove: true,
      budgetControls: 'Per-agent daily caps',
      teams: 'Multi-org, multi-project',
      cron: 'Built-in with model overrides',
    },
  },
  {
    name: 'Cursor',
    price: '$20/mo',
    features: {
      terminal: false,
      ide: 'Cursor IDE only',
      models: 'Claude, GPT (limited)',
      mcp: 'Yes (limited)',
      messaging: 'None',
      browser: 'None',
      crypto: 'None',
      cloud: 'None',
      selfImprove: false,
      budgetControls: 'Usage limits',
      teams: 'Teams plan only',
      cron: 'None',
    },
  },
  {
    name: 'Claude Code',
    price: '$20/mo (Max)',
    features: {
      terminal: true,
      ide: 'VSCode',
      models: 'Claude only',
      mcp: 'Yes',
      messaging: 'None',
      browser: 'None',
      crypto: 'None',
      cloud: 'None',
      selfImprove: false,
      budgetControls: 'None',
      teams: 'None',
      cron: 'None',
    },
  },
  {
    name: 'GitHub Copilot',
    price: '$19/mo',
    features: {
      terminal: false,
      ide: 'VS Code, JetBrains, Neovim',
      models: 'GPT-4, Claude (limited)',
      mcp: 'None',
      messaging: 'None',
      browser: 'None',
      crypto: 'None',
      cloud: 'None',
      selfImprove: false,
      budgetControls: 'None',
      teams: 'Business plan',
      cron: 'None',
    },
  },
  {
    name: 'Devin',
    price: '$500/mo',
    features: {
      terminal: true,
      ide: 'Web-based',
      models: 'Proprietary',
      mcp: 'None',
      messaging: 'Slack',
      browser: 'Built-in',
      crypto: 'None',
      cloud: 'Cloud VMs',
      selfImprove: false,
      budgetControls: 'Token tracking',
      teams: 'Per-seat',
      cron: 'None',
    },
  },
];

const featureLabels: Record<string, string> = {
  terminal: 'Terminal / CLI',
  ide: 'IDE integration',
  models: 'AI models',
  mcp: 'MCP tools',
  messaging: 'Chat channels',
  browser: 'Browser automation',
  crypto: 'Crypto / Web3',
  cloud: 'Cloud deployment',
  selfImprove: 'Self-improvement',
  budgetControls: 'Budget controls',
  teams: 'Multi-user / teams',
  cron: 'Scheduled tasks',
};

function CellValue({ value }: { value: boolean | string }) {
  if (value === true) return <CheckIcon className="size-4 text-white" />;
  if (value === false) return <XIcon className="size-4 text-neutral-600" />;
  if (value === 'None') return <span className="text-neutral-600">—</span>;
  return <span className="text-neutral-300 text-xs">{value}</span>;
}

export default function Post() {
  return (
    <main className="relative z-[1] max-w-[860px] mx-auto px-4 sm:px-6 pt-12 sm:pt-16 pb-10 overflow-hidden">
      <div className="stars" />
      <div className="nebula" />

      <Link
        href="/blog"
        className="inline-flex items-center gap-1.5 text-sm text-fd-muted-foreground hover:text-white transition-colors no-underline mb-8"
      >
        <ArrowLeftIcon className="size-3.5" /> Back to Blog
      </Link>

      <header className="mb-10 animate-[fadeInUp_0.8s_ease-out]">
        <div className="flex items-center gap-3 text-xs mb-4">
          <span className="px-2.5 py-0.5 rounded-full border font-medium text-white border-white/30 bg-white/8">
            Deep Dive
          </span>
          <span className="flex items-center gap-1.5 text-fd-muted-foreground">
            <CalendarIcon className="size-3" /> February 26, 2026
          </span>
        </div>
        <h1 className="text-3xl lg:text-4xl font-bold tracking-tight mb-4 text-fd-foreground">
          Hanzo Bot vs Every AI Coding Agent
        </h1>
        <p className="text-lg text-fd-muted-foreground leading-relaxed">
          Cursor costs $20/mo. Claude Code costs $20/mo. Copilot costs $19/mo.
          Devin costs $500/mo. Hanzo Bot starts free and does more than all of them at $15/mo.
        </p>
      </header>

      <article className="prose prose-invert max-w-none text-fd-foreground/90 text-[15px] leading-relaxed">
        <p>
          The AI coding agent market exploded in 2025. Everyone from Anthropic to Microsoft to VC-backed
          startups shipped agentic coding tools. They&apos;re all good at one thing: autocomplete on steroids.
        </p>
        <p>
          But here&apos;s what none of them tell you: <strong>coding is only 20% of running a software company.</strong>
        </p>
        <p>
          The other 80% is deployment, monitoring, customer support, marketing, sales, operations,
          security, and infrastructure. Every other tool stops at code generation. Hanzo Bot handles the entire stack.
        </p>

        <h2 className="text-xl font-semibold text-fd-foreground mt-10 mb-4">The Price Breakdown</h2>
        <p>Let&apos;s compare what you actually get for your money:</p>

        <div className="not-prose my-8 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-neutral-800">
                <th className="text-left py-3 px-3 text-neutral-500 font-medium">Feature</th>
                {competitors.map((c) => (
                  <th key={c.name} className={`text-left py-3 px-3 font-medium ${c.highlight ? 'text-white' : 'text-neutral-400'}`}>
                    <div>{c.name}</div>
                    <div className={`text-xs mt-0.5 ${c.highlight ? 'text-neutral-300' : 'text-neutral-500'}`}>{c.price}</div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {Object.entries(featureLabels).map(([key, label], i) => (
                <tr key={key} className={`border-b border-neutral-800/50 ${i % 2 === 0 ? 'bg-neutral-950/50' : ''}`}>
                  <td className="py-2.5 px-3 text-neutral-400">{label}</td>
                  {competitors.map((c) => (
                    <td key={c.name} className={`py-2.5 px-3 ${c.highlight ? 'bg-white/[0.02]' : ''}`}>
                      <CellValue value={(c.features as Record<string, boolean | string>)[key]} />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 className="text-xl font-semibold text-fd-foreground mt-10 mb-4">What You Get with Hanzo Bot That Nobody Else Offers</h2>

        <h3 className="text-lg font-semibold text-fd-foreground mt-8 mb-3">1. Every AI Model, One Gateway</h3>
        <p>
          Cursor locks you into their model selection. Claude Code only uses Claude. Copilot only uses GPT.
          Hanzo Bot gives you <strong>100+ AI models</strong> through a unified gateway — Claude, GPT, Gemini,
          Llama, Qwen, Mistral, and our own Zen model family (600M to 480B parameters). Switch models per-task
          without switching tools.
        </p>

        <h3 className="text-lg font-semibold text-fd-foreground mt-8 mb-3">2. Not Just Code — Everything</h3>
        <p>
          Hanzo Bot runs on <strong>every channel</strong>: Discord, Slack, Telegram, WhatsApp, Signal, iMessage,
          Microsoft Teams. It handles customer support, marketing automation, sales outreach, and ops monitoring.
          It&apos;s not a code completion tool — it&apos;s an AI workforce.
        </p>

        <h3 className="text-lg font-semibold text-fd-foreground mt-8 mb-3">3. Native Crypto</h3>
        <p>
          No other coding agent can pay for services, trade tokens, or deploy smart contracts. Hanzo Bot has
          <strong> native agent wallets</strong>, x402 machine-to-machine payments, USDC on Base, and support
          for 100+ blockchain networks. Your bot can autonomously pay for compute, earn revenue, and interact
          with DeFi protocols.
        </p>

        <h3 className="text-lg font-semibold text-fd-foreground mt-8 mb-3">4. Production Infrastructure</h3>
        <p>
          While Cursor is an IDE extension and Claude Code is a CLI tool, Hanzo Bot deploys to
          <strong> Kubernetes</strong> with IAM, KMS-first secrets management, SSO, audit trails, and
          per-agent budget controls. It&apos;s built for teams running production systems, not just individual developers.
        </p>

        <h3 className="text-lg font-semibold text-fd-foreground mt-8 mb-3">5. Self-Improvement</h3>
        <p>
          Hanzo Bot gets better the more you use it. Telemetry loops detect friction, continuous learning
          with GRPO fine-tunes behavior, and active learning identifies knowledge gaps. No other agent platform
          does this — they ship a static tool and charge you for updates.
        </p>

        <h2 className="text-xl font-semibold text-fd-foreground mt-10 mb-4">The Math</h2>
        <p>
          A typical engineering team of 5 using Cursor pays <strong>$100/mo</strong> for code completion only.
          Add Copilot for CI integration ($95/mo). Add Devin for autonomous tasks ($500/mo). Add Slack bots,
          monitoring, and automation tools. You&apos;re easily at <strong>$800-1000/mo</strong>.
        </p>
        <p>
          With Hanzo Bot Pro at $25/mo per bot, a single instance handles coding, deployment, monitoring,
          customer support, and marketing automation. That&apos;s a <strong>97% cost reduction</strong> with
          more capability.
        </p>

        <h2 className="text-xl font-semibold text-fd-foreground mt-10 mb-4">Try It Now</h2>
        <div className="my-6">
          <code className="block text-sm text-neutral-300 bg-neutral-900 border border-neutral-800 rounded-xl px-4 py-3 font-mono">
            curl -fsSL https://hanzo.bot/install.sh | sh
          </code>
        </div>
        <p>
          Free tier. No credit card. Full access to 100+ AI models. Upgrade to Cloud ($5/mo), Dev ($15/mo),
          or Pro ($25/mo) when you&apos;re ready.
        </p>
        <p>
          <Link href="/pricing" className="text-white font-semibold hover:underline">See full pricing</Link>
          {' · '}
          <Link href="/comparison" className="text-white font-semibold hover:underline">Detailed comparison</Link>
          {' · '}
          <Link href="/get-started" className="text-white font-semibold hover:underline">Get started free</Link>
        </p>
      </article>
    </main>
  );
}
