import Link from 'next/link';
import { cn } from '@/lib/cn';
import {
  ArrowRightIcon, BanknoteIcon, BlocksIcon, BotIcon,
  CheckIcon, CoinsIcon, CodeIcon, CreditCardIcon,
  DatabaseIcon, GlobeIcon, KeyIcon, LayersIcon,
  LinkIcon, LockIcon, PlugIcon, RocketIcon,
  ShieldCheckIcon, SparklesIcon, TerminalIcon,
  TrendingUpIcon, WalletIcon, WebhookIcon, ZapIcon,
} from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Crypto Skills',
  description: 'Crypto for AI agents — pay, trade, and build onchain apps in one prompt. Agents sign up and pay autonomously with USDC via x402 or credit card.',
};

/* ---- Data ---- */

const features = [
  {
    icon: WalletIcon,
    title: 'Autonomous Wallets',
    desc: 'Agents create and manage their own wallets. Sign transactions, hold tokens, and interact with smart contracts — no human approval needed.',
    color: 'text-neutral-400',
  },
  {
    icon: BanknoteIcon,
    title: 'Agent Payments',
    desc: 'Pay for APIs, services, and compute with USDC via x402 protocol or charge to your credit card. Agents handle billing autonomously.',
    color: 'text-neutral-400',
  },
  {
    icon: TrendingUpIcon,
    title: 'Price & Market Data',
    desc: 'Real-time prices from CoinGecko and Hyperliquid. Candlestick charts, change percentages, and multi-period analysis — all in one tool.',
    color: 'text-[#a3a3a3]',
  },
  {
    icon: ShieldCheckIcon,
    title: 'Onchain Attestations',
    desc: 'Verifiable proof of AI work on Base. Offchain attestations at zero gas, with optional onchain anchoring via Ethereum Attestation Service.',
    color: 'text-neutral-400',
  },
  {
    icon: ZapIcon,
    title: 'Lightning Payments',
    desc: 'Send and receive sats over Lightning Network. LUD-16 address support built into agent profiles for instant micropayments.',
    color: 'text-neutral-400',
  },
  {
    icon: LockIcon,
    title: 'Encrypted Messaging',
    desc: 'End-to-end encrypted agent communication via Nostr protocol. NIP-04 DMs, multi-relay support, and cryptographic identity.',
    color: 'text-neutral-400',
  },
];

const apis = [
  {
    num: '01',
    icon: BotIcon,
    title: 'Agentic Signup',
    desc: 'Agents autonomously create accounts, generate API keys, and manage their own credentials. No human in the loop.',
    items: ['Self-service onboarding', 'Auto API key rotation', 'Usage-based billing', 'Zero human intervention'],
  },
  {
    num: '02',
    icon: BlocksIcon,
    title: 'Node APIs',
    desc: 'Full node access across EVM, Solana, and Bitcoin. Read state, submit transactions, and interact with any smart contract.',
    items: ['Multi-chain RPC', 'Transaction submission', 'State queries', 'Gas optimization'],
  },
  {
    num: '03',
    icon: DatabaseIcon,
    title: 'Data APIs',
    desc: 'Indexed blockchain data ready for AI consumption. Token balances, transaction history, NFT metadata, and DeFi positions.',
    items: ['Token balances & transfers', 'NFT metadata indexing', 'DeFi position tracking', 'Cross-chain aggregation'],
  },
  {
    num: '04',
    icon: GlobeIcon,
    title: 'Solana APIs',
    desc: 'Native Solana support with program interaction, SPL token operations, and Jupiter swap routing built in.',
    items: ['SPL token operations', 'Program interaction', 'Jupiter swap routing', 'Priority fee estimation'],
  },
  {
    num: '05',
    icon: WebhookIcon,
    title: 'Webhooks',
    desc: 'Real-time event streams for onchain activity. Get notified on transfers, swaps, governance votes, and custom contract events.',
    items: ['Transfer notifications', 'Swap monitoring', 'Custom event filters', 'Guaranteed delivery'],
  },
  {
    num: '06',
    icon: CodeIcon,
    title: 'Recipes & Tutorials',
    desc: 'Pre-built workflows for common crypto tasks. Deploy a token, set up a DAO, run an airdrop, or create an NFT collection — all in one prompt.',
    items: ['Token deployment', 'DAO setup', 'Airdrop automation', 'NFT collection launch'],
  },
];

const chains = [
  { name: 'Ethereum', color: '#a3a3a3' },
  { name: 'Base', color: '#a3a3a3' },
  { name: 'Solana', color: '#737373' },
  { name: 'Bitcoin', color: '#a3a3a3' },
  { name: 'Polygon', color: '#a3a3a3' },
  { name: 'Arbitrum', color: '#a3a3a3' },
  { name: 'Optimism', color: '#a3a3a3' },
  { name: 'Lux', color: '#e5e5e5' },
];

const compatible = [
  'Claude Code', 'Codex', 'Cursor', 'Openclaw', 'Hanzo Bot', 'MCP', 'LangChain', 'CrewAI',
];

/* ---- Page ---- */

export default function CryptoPage() {
  return (
    <main className="relative z-[1] max-w-[860px] mx-auto px-4 sm:px-6 pt-8 sm:pt-16 pb-10 overflow-x-hidden">

      {/* Hero */}
      <header className="text-center mb-16 animate-[fadeInUp_0.8s_ease-out]">
        <p className="font-mono text-xs uppercase tracking-wider text-fd-muted-foreground mb-4">
          Crypto Skills
        </p>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight mb-4 leading-[1.1]">
          <span className="bg-gradient-to-br from-fd-foreground via-neutral-300 to-neutral-500 bg-[length:200%_200%] bg-clip-text text-transparent animate-[gradientShift_6s_ease_infinite]">
            Crypto for Agents
          </span>
        </h1>

        <p className="text-lg sm:text-xl text-fd-foreground font-medium mb-2">
          Pay, trade, build apps. In 1 prompt.
        </p>

        <p className="text-base text-fd-muted-foreground max-w-[560px] mx-auto leading-relaxed">
          Agents sign up and pay autonomously. No human required.
          No dashboard. No signup form. Just a wallet and USDC on Base.
        </p>

        {/* Install command */}
        <div className="mt-8 max-w-[560px] mx-auto">
          <div className="flex items-center gap-2 p-4 rounded-xl border border-[rgba(163,163,163,0.25)] bg-[rgba(163,163,163,0.04)] backdrop-blur-sm">
            <TerminalIcon className="size-4 text-[#a3a3a3] shrink-0" />
            <code className="text-sm font-mono text-[#a3a3a3] break-all">
              npx skills add https://github.com/hanzoskill/crypto --yes
            </code>
          </div>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
          <Link
            href="/get-started"
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 font-semibold text-[#050810] bg-gradient-to-br from-white to-neutral-300 rounded-xl no-underline transition-all hover:-translate-y-0.5 hover:shadow-[0_8px_40px_rgba(255,255,255,0.45)] shadow-[0_4px_24px_rgba(255,255,255,0.3)]"
          >
            <RocketIcon className="size-5" />
            Get Started Free
          </Link>
          <a
            href="https://github.com/hanzoskill/crypto"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 font-semibold text-fd-foreground bg-[rgba(255,255,255,0.05)] border border-fd-border rounded-xl no-underline transition-all hover:-translate-y-0.5 hover:bg-[rgba(255,255,255,0.1)] hover:border-fd-foreground/30"
          >
            <CodeIcon className="size-5" />
            View Source
          </a>
        </div>
      </header>

      {/* Lede */}
      <section className="mb-16 animate-[fadeInUp_0.8s_ease-out_0.1s_both]">
        <div className="p-6 sm:p-8 rounded-2xl border border-fd-border bg-[rgba(10,15,26,0.6)] backdrop-blur-sm">
          <p className="text-sm sm:text-base text-fd-muted-foreground leading-relaxed">
            Starting today, agents can use Crypto autonomously — purchase compute credits,
            access real-time blockchain data across 100+ networks, and build apps.
            No dashboard. No human signup. Just an onchain wallet and USDC on Base.
          </p>
        </div>
      </section>

      {/* How x402 Works */}
      <section className="mb-16 animate-[fadeInUp_0.8s_ease-out_0.15s_both]">
        <h2 className="text-xl font-semibold flex items-center gap-2.5 mb-2">
          <span className="text-white font-bold">&#x27E9;</span> How It Works
        </h2>
        <p className="text-sm text-fd-muted-foreground mb-6">
          Wallet as identity. USDC as payment. HTTP as protocol.
        </p>

        <div className="flex flex-col gap-3">
          {[
            {
              num: '1',
              icon: WalletIcon,
              color: 'text-neutral-400',
              borderColor: 'border-[rgba(255,255,255,0.25)]',
              bgColor: 'bg-[rgba(255,255,255,0.04)]',
              title: 'Agent creates a wallet',
              desc: 'The agent uses its wallet as both identity and payment source. No signup form, no email, no OAuth.',
            },
            {
              num: '2',
              icon: PlugIcon,
              color: 'text-[#a3a3a3]',
              borderColor: 'border-[rgba(163,163,163,0.25)]',
              bgColor: 'bg-[rgba(163,163,163,0.04)]',
              title: 'Agent calls Crypto APIs',
              desc: 'Interact with any API — RPC, NFT, Portfolio, Prices, Webhooks. Standard HTTP requests, nothing proprietary.',
            },
            {
              num: '3',
              icon: BanknoteIcon,
              color: 'text-neutral-400',
              borderColor: 'border-[rgba(163,163,163,0.25)]',
              bgColor: 'bg-[rgba(163,163,163,0.04)]',
              title: 'HTTP 402 → Agent pays in USDC',
              desc: 'If payment is required, Crypto returns an HTTP 402 with the amount and payment instructions. The agent pays in USDC on Base via x402 — the open payment standard for native HTTP payments.',
            },
            {
              num: '4',
              icon: ZapIcon,
              color: 'text-neutral-400',
              borderColor: 'border-[rgba(163,163,163,0.25)]',
              bgColor: 'bg-[rgba(163,163,163,0.04)]',
              title: 'Data flows back instantly',
              desc: 'Crypto processes the request and returns blockchain data, drawing from the newly funded balance. The whole flow is a single HTTP round-trip.',
            },
          ].map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.num}
                className={cn(
                  'flex items-start gap-4 p-4 rounded-xl border backdrop-blur-sm transition-all hover:-translate-y-0.5',
                  step.borderColor,
                  step.bgColor,
                )}
              >
                <div className={cn('flex items-center justify-center size-8 rounded-lg shrink-0 font-mono text-sm font-bold', step.color)}>
                  {step.num}
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <Icon className={cn('size-4', step.color)} />
                    <h3 className="text-sm font-semibold text-fd-foreground">{step.title}</h3>
                  </div>
                  <p className="text-xs text-fd-muted-foreground leading-relaxed">{step.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Payment badges */}
        <div className="flex flex-wrap gap-2 sm:gap-3 mt-4 justify-center">
          <div className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-[rgba(163,163,163,0.3)] bg-[rgba(163,163,163,0.08)]">
            <CoinsIcon className="size-4 text-neutral-400" />
            <span className="text-sm font-medium text-neutral-400">USDC on Base</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-[rgba(163,163,163,0.3)] bg-[rgba(163,163,163,0.08)]">
            <LinkIcon className="size-4 text-[#a3a3a3]" />
            <span className="text-sm font-medium text-[#a3a3a3]">x402 Protocol</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-fd-border bg-[rgba(255,255,255,0.04)]">
            <CreditCardIcon className="size-4 text-fd-muted-foreground" />
            <span className="text-sm font-medium text-fd-muted-foreground">Credit Card</span>
          </div>
        </div>
      </section>

      {/* Supported chains */}
      <section className="mb-16 animate-[fadeInUp_0.8s_ease-out_0.2s_both]">
        <h2 className="text-xl font-semibold flex items-center gap-2.5 mb-2">
          <span className="text-white font-bold">&#x27E9;</span> Multi-Chain Native
        </h2>
        <p className="text-sm text-fd-muted-foreground mb-5">
          One skill set, every major chain.
        </p>

        <div className="flex flex-wrap gap-2">
          {chains.map((chain) => (
            <span
              key={chain.name}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border backdrop-blur-sm text-sm font-medium transition-all hover:-translate-y-0.5"
              style={{
                color: chain.color,
                borderColor: `${chain.color}33`,
                backgroundColor: `${chain.color}0a`,
              }}
            >
              <span
                className="size-2 rounded-full"
                style={{ backgroundColor: chain.color }}
              />
              {chain.name}
            </span>
          ))}
        </div>
      </section>

      {/* Core Features */}
      <section className="mb-16 animate-[fadeInUp_0.8s_ease-out_0.3s_both]">
        <h2 className="text-xl font-semibold flex items-center gap-2.5 mb-2">
          <span className="text-white font-bold">&#x27E9;</span> What Agents Can Do
        </h2>
        <p className="text-sm text-fd-muted-foreground mb-6">
          Full crypto capabilities, autonomous by default.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((feat) => {
            const Icon = feat.icon;
            return (
              <div
                key={feat.title}
                className="flex flex-col p-5 rounded-2xl border border-fd-border bg-[rgba(10,15,26,0.6)] backdrop-blur-sm transition-all hover:-translate-y-1 hover:border-neutral-600 hover:shadow-[0_12px_40px_rgba(255,255,255,0.15)]"
              >
                <div className="flex items-center justify-center mb-3">
                  <Icon className={cn('size-7', feat.color)} />
                </div>
                <h3 className="text-sm font-semibold text-fd-foreground mb-1.5">{feat.title}</h3>
                <p className="text-xs text-fd-muted-foreground leading-relaxed">{feat.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* APIs */}
      <section className="mb-16 animate-[fadeInUp_0.8s_ease-out_0.4s_both]">
        <h2 className="text-xl font-semibold flex items-center gap-2.5 mb-2">
          <span className="text-white font-bold">&#x27E9;</span> APIs for Every AI Agent
        </h2>
        <p className="text-sm text-fd-muted-foreground mb-6">
          Blockchain infrastructure designed for autonomous agents, not humans clicking buttons.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {apis.map((api) => {
            const Icon = api.icon;
            return (
              <div
                key={api.num}
                className="relative flex flex-col p-6 rounded-2xl border border-fd-border bg-[rgba(10,15,26,0.6)] backdrop-blur-sm transition-all hover:-translate-y-1 hover:border-neutral-600"
              >
                <span className="font-mono text-xs text-white font-bold mb-3">
                  {api.num}
                </span>
                <div className="flex items-center gap-2 mb-2">
                  <Icon className="size-5 text-white" />
                  <h3 className="text-sm font-bold text-fd-foreground">{api.title}</h3>
                </div>
                <p className="text-xs text-fd-muted-foreground leading-relaxed mb-4">
                  {api.desc}
                </p>
                <div className="mt-auto flex flex-col gap-1.5">
                  {api.items.map((item) => (
                    <div key={item} className="flex items-center gap-2">
                      <CheckIcon className="size-3 text-[#a3a3a3] shrink-0" />
                      <span className="text-xs text-fd-muted-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Compatibility */}
      <section className="mb-16 animate-[fadeInUp_0.8s_ease-out_0.5s_both]">
        <div className="flex flex-col items-center gap-5 p-6 sm:p-8 rounded-2xl border border-fd-border bg-[rgba(10,15,26,0.6)] backdrop-blur-sm text-center">
          <PlugIcon className="size-8 text-[#a3a3a3]" />
          <h2 className="text-xl sm:text-2xl font-bold text-fd-foreground">
            Works Everywhere
          </h2>
          <p className="text-fd-muted-foreground max-w-[500px]">
            Compatible with every major AI coding tool and agent framework.
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {compatible.map((tool) => (
              <span
                key={tool}
                className="px-4 py-2 text-sm font-medium text-fd-foreground bg-[rgba(255,255,255,0.05)] border border-fd-border rounded-full"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Security */}
      <section className="mb-16 animate-[fadeInUp_0.8s_ease-out_0.55s_both]">
        <h2 className="text-xl font-semibold flex items-center gap-2.5 mb-2">
          <span className="text-white font-bold">&#x27E9;</span> Security First
        </h2>
        <p className="text-sm text-fd-muted-foreground mb-5">
          Built for autonomous agents, hardened for production.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            {
              icon: KeyIcon,
              title: 'Key Management',
              desc: 'Private keys never leave the agent runtime. Hardware wallet support, key rotation, and encrypted storage.',
            },
            {
              icon: LayersIcon,
              title: 'Budget Controls',
              desc: 'Per-transaction limits, daily caps, and allowlists. Agents operate within guardrails you define.',
            },
            {
              icon: ShieldCheckIcon,
              title: 'Audit Trail',
              desc: 'Every transaction, attestation, and API call is logged. Full provenance chain from prompt to onchain action.',
            },
          ].map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="flex flex-col p-5 rounded-2xl border border-fd-border bg-[rgba(10,15,26,0.6)] backdrop-blur-sm transition-all hover:-translate-y-1 hover:border-neutral-600"
              >
                <Icon className="size-6 text-[#a3a3a3] mb-3" />
                <h3 className="text-sm font-semibold text-fd-foreground mb-1.5">{item.title}</h3>
                <p className="text-xs text-fd-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Bottom CTA */}
      <div className="text-center mb-8 animate-[fadeInUp_0.8s_ease-out_0.6s_both]">
        <Link
          href="/get-started"
          className="inline-flex items-center gap-2.5 px-9 py-4 text-lg font-semibold text-[#050810] bg-gradient-to-br from-white to-neutral-300 rounded-2xl no-underline transition-all hover:-translate-y-0.5 hover:shadow-[0_8px_40px_rgba(255,255,255,0.45)] shadow-[0_4px_24px_rgba(255,255,255,0.3)]"
        >
          <SparklesIcon className="size-5" />
          Start Building with Crypto
        </Link>
        <p className="mt-3 text-sm text-fd-muted-foreground">
          Free locally. Skills install in seconds.
        </p>
      </div>
    </main>
  );
}
