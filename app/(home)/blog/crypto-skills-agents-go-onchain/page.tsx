import Link from 'next/link';
import { ArrowLeftIcon, CalendarIcon, CheckIcon, WalletIcon, PlugIcon, BanknoteIcon, ZapIcon } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Crypto Skills: Agents Go Onchain',
  description: 'Pay, trade, build apps — no human in the loop. Agents can now use crypto autonomously with USDC on Base via x402.',
};

export default function Post() {
  return (
    <main className="relative z-[1] max-w-[720px] mx-auto px-4 sm:px-6 pt-12 sm:pt-16 pb-10 overflow-hidden">
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
          <span className="px-2.5 py-0.5 rounded-full border font-medium text-neutral-400 border-[#a3a3a3]/30 bg-[#a3a3a3]/8">
            Launch
          </span>
          <span className="flex items-center gap-1.5 text-fd-muted-foreground">
            <CalendarIcon className="size-3" /> February 26, 2026
          </span>
        </div>
        <h1 className="text-3xl lg:text-4xl font-bold tracking-tight mb-4 text-fd-foreground">
          Crypto Skills: Agents Go Onchain
        </h1>
        <p className="text-lg text-fd-muted-foreground leading-relaxed">
          Pay, trade, build apps. No human in the loop.
        </p>
      </header>

      <article className="prose prose-invert max-w-none text-fd-foreground/90 text-[15px] leading-relaxed">
        <p>
          Starting today, agents can use crypto autonomously — purchase compute credits,
          access real-time blockchain data across 100+ networks, and build onchain apps.
        </p>
        <p>
          No dashboard. No human signup or approval process. Just an onchain wallet and USDC on Base.
        </p>

        <h2 className="text-xl font-semibold text-fd-foreground mt-10 mb-4">Let Your Agent Build Onchain</h2>
        <p>Here&apos;s how it works:</p>

        <div className="flex flex-col gap-4 my-6 not-prose">
          {[
            { icon: WalletIcon, color: 'text-neutral-400', title: 'Wallet as identity', desc: 'An agent uses its wallet as both identity and payment source.' },
            { icon: PlugIcon, color: 'text-[#a3a3a3]', title: 'Call any API', desc: 'They interact with Crypto APIs: RPC, NFT, Portfolio, or Prices.' },
            { icon: BanknoteIcon, color: 'text-neutral-400', title: 'HTTP 402 → pay in USDC', desc: 'If payment is required, Crypto returns an HTTP 402 with the amount and payment instructions. The agent pays in USDC on Base via x402.' },
            { icon: ZapIcon, color: 'text-neutral-400', title: 'Data flows back', desc: 'Crypto processes the request and returns the blockchain data, drawing from the newly funded balance.' },
          ].map((step, i) => {
            const Icon = step.icon;
            return (
              <div key={i} className="flex items-start gap-3">
                <Icon className={`size-5 shrink-0 mt-0.5 ${step.color}`} />
                <div>
                  <span className="text-sm font-semibold text-fd-foreground">{step.title}</span>
                  <span className="text-sm text-fd-muted-foreground"> — {step.desc}</span>
                </div>
              </div>
            );
          })}
        </div>

        <p>
          The whole flow is a single HTTP round-trip. x402 is the open payment standard developed
          by Coinbase for native HTTP payments — no proprietary SDKs, no custodial wallets,
          no approval queues.
        </p>

        <h2 className="text-xl font-semibold text-fd-foreground mt-10 mb-4">What&apos;s Included</h2>
        <div className="my-6 not-prose flex flex-col gap-2">
          {[
            'Autonomous wallet creation and management',
            'USDC payments via x402 protocol',
            'Real-time price data from CoinGecko and Hyperliquid',
            'Onchain attestations via Ethereum Attestation Service',
            'Lightning Network payments with LUD-16 support',
            'Encrypted messaging via Nostr protocol',
            'Multi-chain: Ethereum, Base, Solana, Bitcoin, Polygon, Arbitrum, Optimism, Lux',
          ].map((item) => (
            <div key={item} className="flex items-center gap-2.5">
              <CheckIcon className="size-4 text-[#a3a3a3] shrink-0" />
              <span className="text-sm text-fd-muted-foreground">{item}</span>
            </div>
          ))}
        </div>

        <h2 className="text-xl font-semibold text-fd-foreground mt-10 mb-4">Install Now</h2>
        <div className="my-6">
          <code className="block text-sm text-[#a3a3a3] bg-[rgba(163,163,163,0.06)] border border-[rgba(163,163,163,0.15)] rounded-xl px-4 py-3 font-mono">
            npx skills add https://github.com/hanzoskill/crypto --yes
          </code>
        </div>
        <p>
          Compatible with Claude Code, Codex, Cursor, Openclaw, Hanzo Bot, and any MCP-compatible agent.
        </p>

        <h2 className="text-xl font-semibold text-fd-foreground mt-10 mb-4">Security</h2>
        <p>
          Private keys never leave the agent runtime. Per-transaction limits, daily budget caps,
          and allowlists keep agents operating within guardrails you define. Every transaction
          and API call is logged with full provenance.
        </p>

        <h2 className="text-xl font-semibold text-fd-foreground mt-10 mb-4">Get Started</h2>
        <p>
          Read the full docs at{' '}
          <Link href="/crypto" className="text-neutral-400 hover:underline">
            hanzo.bot/crypto
          </Link>
          , explore the source on{' '}
          <a href="https://github.com/hanzoskill/crypto" target="_blank" rel="noopener noreferrer" className="text-white hover:underline">
            GitHub
          </a>
          , or{' '}
          <a href="https://discord.gg/hanzo" target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:underline">
            join the conversation on Discord
          </a>
          .
        </p>
      </article>
    </main>
  );
}
