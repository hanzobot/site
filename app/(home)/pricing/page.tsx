import Link from 'next/link';
import { cn } from '@/lib/cn';
import {
  CheckIcon, ArrowRightIcon, MessageCircleIcon,
  DownloadIcon, SparklesIcon, XIcon, ServerIcon,
} from 'lucide-react';
import type { Metadata } from 'next';
import { BillingFaq } from '../_components/billing-faq';

export const metadata: Metadata = {
  title: 'Pricing',
  description: 'Hanzo Bot pricing — Free locally, $5/mo in the cloud. Full-blown computer-using AI agent in a box.',
};

const tiers = [
  {
    name: 'Free',
    price: '$0',
    period: 'forever',
    desc: 'Run on your own hardware. Full power, no limits.',
    cta: 'Download Free',
    ctaHref: '/#quickstart',
    signupHref: 'https://app.hanzo.bot/auth/signup?plan=free',
    features: [
      'Runs on Mac, Windows, Linux',
      'Bring your own API keys (OpenAI, Anthropic, etc.)',
      'All chat integrations (WhatsApp, Telegram, Discord, Slack, Signal, iMessage)',
      'Full system access (files, terminal, browser)',
      'Persistent memory & context',
      'Community skills & plugins',
      'Open source — inspect every line',
    ],
  },
  {
    name: 'Starter',
    price: '$5',
    period: '/mo per bot',
    desc: 'Always-on Linux VM. Up to 5 VMs. Zen Mini model included.',
    cta: 'Start Free Trial',
    ctaHref: 'https://app.hanzo.bot/auth/signup?plan=starter',
    signupHref: 'https://app.hanzo.bot/auth/signup?plan=starter',
    badge: 'Free $5 Credit',
    features: [
      'Full Linux VM (Ubuntu)',
      '1 vCPU, 1 GB RAM, 20 GB SSD',
      'Up to 5 VMs per account',
      'Zen Mini model included',
      '100+ models via LLM Gateway',
      'All chat integrations',
      'Always-on — never sleeps',
      'Web dashboard at app.hanzo.bot',
    ],
  },
  {
    name: 'Dev',
    price: '$15',
    period: '/mo per bot',
    desc: 'The sweet spot. 2 vCPU, 8 GB RAM, 25 GB SSD. Beats exe.dev at $20/mo.',
    cta: 'Start Free Trial',
    ctaHref: 'https://app.hanzo.bot/auth/signup?plan=dev',
    signupHref: 'https://app.hanzo.bot/auth/signup?plan=dev',
    highlight: true,
    badge: 'Most Popular',
    features: [
      'Full Linux VM (Ubuntu)',
      '2 vCPU, 8 GB RAM, 25 GB SSD',
      '3 TB transfer included',
      'Up to 25 VMs per account',
      '100+ AI models with priority access',
      'Advanced browser automation (Playwright)',
      'Team collaboration & shared bots',
      'API access for automation',
    ],
  },
  {
    name: 'Pro',
    price: '$25',
    period: '/mo per bot',
    desc: 'Dedicated CPU. Zero noisy neighbors. 2 vCPU, 8 GB RAM, 80 GB SSD.',
    cta: 'Get Started',
    ctaHref: 'https://app.hanzo.bot/auth/signup?plan=pro',
    signupHref: 'https://app.hanzo.bot/auth/signup?plan=pro',
    features: [
      '2 dedicated vCPU, 8 GB RAM, 80 GB SSD',
      '2 TB transfer included',
      'Up to 25 VMs per account',
      'Priority model access & faster inference',
      'macOS or Windows desktop VM option',
      'Custom skill development',
      'SSO & enterprise auth (Hanzo IAM)',
      'Priority support',
    ],
  },
];

/* ---- Higher-tier cloud plans (progressive enhancement) ---- */
const higherTiers = [
  { name: 'Turbo', vcpus: '4 shared', ram: '16 GB', storage: '160 GB', transfer: '4 TB', price: '$39' },
  { name: 'Turbo Dedicated', vcpus: '4 dedicated', ram: '16 GB', storage: '160 GB', transfer: '4 TB', price: '$49' },
  { name: 'Business', vcpus: '8 dedicated', ram: '32 GB', storage: '240 GB', transfer: '20 TB', price: '$219' },
  { name: 'Enterprise', vcpus: '16 dedicated', ram: '64 GB', storage: '360 GB', transfer: '40 TB', price: '$429' },
  { name: 'Scale', vcpus: '32 dedicated', ram: '128 GB', storage: '600 GB', transfer: '50 TB', price: '$849' },
  { name: 'Mega', vcpus: '48 dedicated', ram: '192 GB', storage: '960 GB', transfer: '60 TB', price: '$1,299' },
  { name: 'Ultra', vcpus: '96 dedicated', ram: '384 GB', storage: '1.9 TB', transfer: '120 TB', price: '$3,999' },
];

/* ---- Comparison table data ---- */
type CellValue = true | false | string;

const comparisonRows: { feature: string; free: CellValue; starter: CellValue; dev: CellValue; pro: CellValue }[] = [
  { feature: 'Self-hosted (Mac/Win/Linux)', free: true, starter: false, dev: false, pro: false },
  { feature: 'Cloud VM (always-on)', free: false, starter: '1 vCPU, 1 GB', dev: '2 vCPU, 8 GB', pro: '2 dedicated vCPU, 8 GB' },
  { feature: 'AI models included', free: false, starter: '100+ via LLM Gateway', dev: '100+ with priority', pro: '100+ with priority' },
  { feature: 'Bring your own API keys', free: true, starter: true, dev: true, pro: true },
  { feature: 'Chat integrations', free: 'All', starter: 'All', dev: 'All', pro: 'All' },
  { feature: 'Browser automation', free: true, starter: true, dev: 'Advanced (Playwright)', pro: 'Advanced (Playwright)' },
  { feature: 'Persistent memory', free: true, starter: true, dev: true, pro: true },
  { feature: 'Storage included', free: 'Local disk', starter: '20 GB SSD', dev: '25 GB SSD', pro: '80 GB SSD' },
  { feature: 'Transfer included', free: 'N/A', starter: '500 GB', dev: '3 TB', pro: '2 TB' },
  { feature: 'Max VMs', free: '1 (local)', starter: '5', dev: '25', pro: '25' },
  { feature: 'Auto-updates & backups', free: false, starter: 'Daily', dev: 'Daily', pro: 'Daily' },
  { feature: 'Web dashboard', free: false, starter: true, dev: true, pro: true },
  { feature: 'API access', free: false, starter: true, dev: true, pro: true },
  { feature: 'Team collaboration', free: false, starter: false, dev: true, pro: true },
  { feature: 'SSO & enterprise auth', free: false, starter: false, dev: false, pro: true },
  { feature: 'Support', free: 'Community', starter: 'Standard', dev: 'Standard', pro: 'Priority' },
];

function CellDisplay({ value }: { value: CellValue }) {
  if (value === true) return <CheckIcon className="w-4 h-4 text-fd-foreground mx-auto" />;
  if (value === false) return <XIcon className="w-4 h-4 text-fd-muted-foreground/40 mx-auto" />;
  return <span className="text-sm text-fd-muted-foreground">{value}</span>;
}

export default function PricingPage() {
  return (
    <main className="relative z-[1] max-w-[1080px] mx-auto px-4 sm:px-6 pt-12 sm:pt-16 pb-10 overflow-hidden">
      <div className="stars" />
      <div className="nebula" />

      {/* Header */}
      <header className="text-center mb-12 animate-[fadeInUp_0.8s_ease-out]">
        <h1 className="text-4xl lg:text-5xl font-bold mb-4 tracking-tight">
          <span className="bg-gradient-to-br from-fd-foreground via-fd-foreground/80 to-fd-muted-foreground bg-[length:200%_200%] bg-clip-text text-transparent animate-[gradientShift_6s_ease_infinite]">
            Simple Pricing
          </span>
        </h1>
        <p className="text-lg text-fd-muted-foreground max-w-[600px] mx-auto mb-4">
          Get started free. Run locally forever, or deploy to Hanzo Cloud starting at $5/mo.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3 text-xs text-fd-muted-foreground">
          <span className="bg-[rgba(255,255,255,0.06)] border border-fd-border px-3 py-1 rounded-full">No egress fees</span>
          <span className="bg-[rgba(255,255,255,0.06)] border border-fd-border px-3 py-1 rounded-full">No hidden costs</span>
          <span className="bg-[rgba(255,255,255,0.06)] border border-fd-border px-3 py-1 rounded-full">DDoS protection included</span>
          <Link href="/comparison" className="bg-[rgba(255,255,255,0.06)] border border-fd-border px-3 py-1 rounded-full no-underline text-fd-foreground hover:border-fd-foreground/40 transition-colors">
            Compare vs exe.dev, Claude Code, Cursor
          </Link>
        </div>
      </header>

      {/* Pricing Cards */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16 animate-[fadeInUp_0.8s_ease-out_0.2s_both]">
        {tiers.map((tier) => (
          <div
            key={tier.name}
            className={cn(
              'relative flex flex-col p-6 rounded-2xl border backdrop-blur-sm transition-all hover:-translate-y-1',
              tier.highlight
                ? 'border-fd-foreground/40 bg-gradient-to-br from-[rgba(255,255,255,0.06)] to-[rgba(10,15,26,0.8)] shadow-[0_4px_24px_rgba(255,255,255,0.1)]'
                : 'border-fd-border bg-[rgba(10,15,26,0.6)]',
            )}
          >
            {tier.badge && (
              <span className={cn(
                "absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 text-xs font-bold rounded-full whitespace-nowrap",
                tier.badge === 'Free $5 Credit'
                  ? 'bg-neutral-700/40 text-neutral-200 border border-neutral-600/50'
                  : 'bg-fd-foreground text-fd-background',
              )}>
                {tier.badge}
              </span>
            )}
            <h2 className="text-xl font-bold text-fd-foreground mb-1">{tier.name}</h2>
            <div className="flex items-baseline gap-1 mb-2">
              <span className="text-4xl font-bold text-fd-foreground">{tier.price}</span>
              <span className="text-sm text-fd-muted-foreground">{tier.period}</span>
            </div>
            <p className="text-sm text-fd-muted-foreground mb-5">{tier.desc}</p>
            <ul className="flex flex-col gap-2.5 mb-6 flex-1">
              {tier.features.map((feat) => (
                <li key={feat} className="flex items-start gap-2 text-sm text-fd-muted-foreground">
                  <CheckIcon className="w-4 h-4 text-fd-foreground shrink-0 mt-0.5" />
                  {feat}
                </li>
              ))}
            </ul>
            <a
              href={tier.signupHref}
              target={tier.signupHref.startsWith('http') ? '_blank' : undefined}
              rel={tier.signupHref.startsWith('http') ? 'noopener noreferrer' : undefined}
              className={cn(
                'inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-semibold no-underline transition-all hover:-translate-y-0.5 text-center',
                tier.highlight
                  ? 'bg-fd-foreground text-fd-background hover:shadow-[0_8px_40px_rgba(255,255,255,0.15)] shadow-[0_4px_24px_rgba(255,255,255,0.1)]'
                  : 'bg-[rgba(255,255,255,0.05)] border border-fd-border text-fd-foreground hover:border-fd-foreground/40',
              )}
            >
              {tier.cta}
              <ArrowRightIcon className="w-4 h-4" />
            </a>
          </div>
        ))}
      </section>

      {/* Higher-Tier Cloud Plans */}
      <section className="mb-16 animate-[fadeInUp_0.8s_ease-out_0.25s_both]">
        <div className="rounded-2xl border border-fd-border bg-[rgba(10,15,26,0.6)] backdrop-blur-sm p-6 sm:p-8">
          <div className="flex items-center gap-3 mb-2">
            <ServerIcon className="w-5 h-5 text-fd-foreground" />
            <h2 className="text-xl font-bold text-fd-foreground">Need More Power?</h2>
          </div>
          <p className="text-sm text-fd-muted-foreground mb-6">
            Hanzo Cloud scales from $5/mo to $3,999/mo. 4 global regions. No egress fees. DDoS protection included.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-fd-border">
                  <th className="text-left py-2.5 px-3 text-fd-foreground font-semibold">Plan</th>
                  <th className="text-left py-2.5 px-3 text-fd-muted-foreground font-medium">vCPUs</th>
                  <th className="text-left py-2.5 px-3 text-fd-muted-foreground font-medium">RAM</th>
                  <th className="text-left py-2.5 px-3 text-fd-muted-foreground font-medium">SSD</th>
                  <th className="text-left py-2.5 px-3 text-fd-muted-foreground font-medium">Transfer</th>
                  <th className="text-right py-2.5 px-3 text-fd-foreground font-semibold">Price</th>
                </tr>
              </thead>
              <tbody>
                {higherTiers.map((tier) => (
                  <tr key={tier.name} className="border-b border-fd-border/30 last:border-b-0 hover:bg-[rgba(255,255,255,0.02)]">
                    <td className="py-2.5 px-3 font-medium text-fd-foreground">{tier.name}</td>
                    <td className="py-2.5 px-3 text-fd-muted-foreground">{tier.vcpus}</td>
                    <td className="py-2.5 px-3 text-fd-muted-foreground">{tier.ram}</td>
                    <td className="py-2.5 px-3 text-fd-muted-foreground">{tier.storage}</td>
                    <td className="py-2.5 px-3 text-fd-muted-foreground">{tier.transfer}</td>
                    <td className="py-2.5 px-3 text-right font-semibold text-fd-foreground">{tier.price}/mo</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-6 pt-4 border-t border-fd-border/30">
            <div className="flex flex-wrap gap-3 text-xs text-fd-muted-foreground">
              <span>US East</span>
              <span className="text-fd-border">|</span>
              <span>US West</span>
              <span className="text-fd-border">|</span>
              <span>Europe (Frankfurt)</span>
              <span className="text-fd-border">|</span>
              <span>Asia Pacific (Singapore)</span>
            </div>
            <a
              href="https://hanzo.ai/pricing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-fd-foreground hover:text-fd-muted-foreground transition-colors no-underline whitespace-nowrap"
            >
              Full infrastructure pricing
              <ArrowRightIcon className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </section>

      {/* Feature Comparison Table */}
      <section className="mb-16 animate-[fadeInUp_0.8s_ease-out_0.3s_both]">
        <h2 className="text-2xl font-bold text-fd-foreground mb-8 text-center">
          Feature Comparison
        </h2>
        <div className="overflow-x-auto rounded-2xl border border-fd-border bg-[rgba(10,15,26,0.6)] backdrop-blur-sm">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-fd-border">
                <th className="text-left p-4 text-fd-foreground font-semibold">Feature</th>
                <th className="p-4 text-center text-fd-foreground font-semibold">Free</th>
                <th className="p-4 text-center text-fd-foreground font-semibold">Starter</th>
                <th className="p-4 text-center text-fd-foreground font-semibold">Dev</th>
                <th className="p-4 text-center text-fd-foreground font-semibold">Pro</th>
              </tr>
            </thead>
            <tbody>
              {comparisonRows.map((row) => (
                <tr key={row.feature} className="border-b border-fd-border/50 last:border-b-0 hover:bg-[rgba(255,255,255,0.02)]">
                  <td className="p-4 text-fd-muted-foreground">{row.feature}</td>
                  <td className="p-4 text-center"><CellDisplay value={row.free} /></td>
                  <td className="p-4 text-center"><CellDisplay value={row.starter} /></td>
                  <td className="p-4 text-center"><CellDisplay value={row.dev} /></td>
                  <td className="p-4 text-center"><CellDisplay value={row.pro} /></td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr className="border-t border-fd-border">
                <td className="p-4" />
                <td className="p-4 text-center">
                  <a
                    href="https://app.hanzo.bot/auth/signup?plan=free"
                    className="text-xs font-semibold text-fd-foreground hover:text-fd-muted-foreground transition-colors no-underline"
                  >
                    Sign Up Free
                  </a>
                </td>
                <td className="p-4 text-center">
                  <a
                    href="https://app.hanzo.bot/auth/signup?plan=starter"
                    className="text-xs font-semibold text-fd-foreground hover:text-fd-muted-foreground transition-colors no-underline"
                  >
                    Start Free Trial
                  </a>
                </td>
                <td className="p-4 text-center">
                  <a
                    href="https://app.hanzo.bot/auth/signup?plan=dev"
                    className="text-xs font-semibold text-fd-foreground hover:text-fd-muted-foreground transition-colors no-underline"
                  >
                    Start Free Trial
                  </a>
                </td>
                <td className="p-4 text-center">
                  <a
                    href="https://app.hanzo.bot/auth/signup?plan=pro"
                    className="text-xs font-semibold text-fd-foreground hover:text-fd-muted-foreground transition-colors no-underline"
                  >
                    Get Started
                  </a>
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </section>

      {/* Usage-Based Pricing */}
      <section className="mb-16 animate-[fadeInUp_0.8s_ease-out_0.35s_both]">
        <h2 className="text-2xl font-bold text-fd-foreground mb-3 text-center">
          Usage-Based Pricing
        </h2>
        <p className="text-sm text-fd-muted-foreground text-center mb-8 max-w-[500px] mx-auto">
          Cloud plans include generous free tiers. Pay only for what you use beyond the included limits.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {/* Messages */}
          <div className="p-6 rounded-2xl border border-fd-border bg-[rgba(10,15,26,0.6)] backdrop-blur-sm">
            <div className="flex items-center gap-2 mb-3">
              <MessageCircleIcon className="w-5 h-5 text-fd-foreground" />
              <h3 className="text-sm font-bold text-fd-foreground">Messages</h3>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-fd-muted-foreground">First 1,000/mo</span>
                <span className="text-fd-foreground font-semibold">Free</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-fd-muted-foreground">After 1,000</span>
                <span className="text-fd-foreground font-semibold">$0.001/msg</span>
              </div>
            </div>
            <p className="mt-3 text-xs text-fd-muted-foreground/70">
              Includes messages across all chat integrations.
            </p>
          </div>

          {/* Tokens */}
          <div className="p-6 rounded-2xl border border-fd-border bg-[rgba(10,15,26,0.6)] backdrop-blur-sm">
            <div className="flex items-center gap-2 mb-3">
              <SparklesIcon className="w-5 h-5 text-fd-foreground" />
              <h3 className="text-sm font-bold text-fd-foreground">Tokens</h3>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-fd-muted-foreground">GPT-5</span>
                <span className="text-fd-foreground font-semibold">$0.03/1K</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-fd-muted-foreground">Claude Opus</span>
                <span className="text-fd-foreground font-semibold">$0.025/1K</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-fd-muted-foreground">Open source</span>
                <span className="text-fd-foreground font-semibold">$0.002/1K</span>
              </div>
            </div>
            <p className="mt-3 text-xs text-fd-muted-foreground/70">
              Or bring your own API keys for $0 token cost.
            </p>
          </div>

          {/* Storage */}
          <div className="p-6 rounded-2xl border border-fd-border bg-[rgba(10,15,26,0.6)] backdrop-blur-sm">
            <div className="flex items-center gap-2 mb-3">
              <DownloadIcon className="w-5 h-5 text-fd-foreground" />
              <h3 className="text-sm font-bold text-fd-foreground">Storage</h3>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-fd-muted-foreground">First 1 GB</span>
                <span className="text-fd-foreground font-semibold">Free</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-fd-muted-foreground">After 1 GB</span>
                <span className="text-fd-foreground font-semibold">$0.10/GB/mo</span>
              </div>
            </div>
            <p className="mt-3 text-xs text-fd-muted-foreground/70">
              Files, memory, backups, and bot data.
            </p>
          </div>

          {/* Block Storage Add-on */}
          <div className="p-6 rounded-2xl border border-fd-border bg-[rgba(10,15,26,0.6)] backdrop-blur-sm">
            <div className="flex items-center gap-2 mb-3">
              <DownloadIcon className="w-5 h-5 text-fd-foreground" />
              <h3 className="text-sm font-bold text-fd-foreground">Block Storage</h3>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-fd-muted-foreground">Add-on volumes</span>
                <span className="text-fd-foreground font-semibold">$0.08/GB/mo</span>
              </div>
            </div>
            <p className="mt-3 text-xs text-fd-muted-foreground/70">
              Attach extra SSD volumes to any cloud VM.
            </p>
          </div>
        </div>
        <p className="text-xs text-fd-muted-foreground text-center mt-6">
          Full AI model pricing at{' '}
          <a href="https://hanzo.ai/pricing" target="_blank" rel="noopener noreferrer" className="text-fd-foreground hover:text-fd-muted-foreground transition-colors no-underline">
            hanzo.ai/pricing
          </a>
          . Zen model details at{' '}
          <a href="https://zenlm.org" target="_blank" rel="noopener noreferrer" className="text-fd-foreground hover:text-fd-muted-foreground transition-colors no-underline">
            zenlm.org
          </a>
          .
        </p>
        <p className="text-xs text-fd-muted-foreground text-center mt-3">
          We accept Visa, Mastercard, Amex &amp; Discover (via Square), cryptocurrency (BTC, ETH, SOL, USDC), and wire transfers.
          All payments powered by Hanzo Commerce.
        </p>
      </section>

      {/* Included with every deployment */}
      <section className="mb-16 animate-[fadeInUp_0.8s_ease-out_0.4s_both]">
        <div className="rounded-2xl border border-fd-border bg-[rgba(10,15,26,0.6)] backdrop-blur-sm p-6 sm:p-8">
          <h2 className="text-lg font-bold text-fd-foreground mb-4">Included with every cloud deployment</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-sm text-fd-muted-foreground">
            <div className="flex items-center gap-2"><CheckIcon className="w-3.5 h-3.5 text-fd-foreground shrink-0" /> DDoS protection</div>
            <div className="flex items-center gap-2"><CheckIcon className="w-3.5 h-3.5 text-fd-foreground shrink-0" /> Automated backups</div>
            <div className="flex items-center gap-2"><CheckIcon className="w-3.5 h-3.5 text-fd-foreground shrink-0" /> IPv4 + IPv6</div>
            <div className="flex items-center gap-2"><CheckIcon className="w-3.5 h-3.5 text-fd-foreground shrink-0" /> Zero-trust networking</div>
            <div className="flex items-center gap-2"><CheckIcon className="w-3.5 h-3.5 text-fd-foreground shrink-0" /> KMS-managed secrets</div>
            <div className="flex items-center gap-2"><CheckIcon className="w-3.5 h-3.5 text-fd-foreground shrink-0" /> IAM SSO authentication</div>
            <div className="flex items-center gap-2"><CheckIcon className="w-3.5 h-3.5 text-fd-foreground shrink-0" /> Automated TLS certs</div>
            <div className="flex items-center gap-2"><CheckIcon className="w-3.5 h-3.5 text-fd-foreground shrink-0" /> Git-based CI/CD</div>
          </div>
        </div>
      </section>

      {/* Team Plans */}
      <section className="mb-16 animate-[fadeInUp_0.8s_ease-out_0.42s_both]">
        <h2 className="text-2xl font-bold text-fd-foreground mb-3 text-center">
          Team Plans
        </h2>
        <p className="text-sm text-fd-muted-foreground text-center mb-8 max-w-[500px] mx-auto">
          Add $5/user/mo to any plan for team features: shared bots, org management, role-based access, and audit logs.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {[
            { name: 'Team Starter', price: '$10', desc: 'Starter + team features', features: ['Everything in Starter', 'Shared bot access', 'Org management', 'Role-based permissions'] },
            { name: 'Team Dev', price: '$20', desc: 'Dev + team features', hl: true, features: ['Everything in Dev', 'Up to 25 shared VMs', 'Team collaboration canvas', 'Shared persistent memory'] },
            { name: 'Team Pro', price: '$30', desc: 'Pro + team features', features: ['Everything in Pro', 'SSO & enterprise auth', 'Audit trail & compliance', 'Priority team support'] },
          ].map((tier) => (
            <div
              key={tier.name}
              className={cn(
                'flex flex-col p-6 rounded-2xl border backdrop-blur-sm transition-all hover:-translate-y-1',
                tier.hl
                  ? 'border-fd-foreground/40 bg-gradient-to-br from-[rgba(255,255,255,0.06)] to-[rgba(10,15,26,0.8)]'
                  : 'border-fd-border bg-[rgba(10,15,26,0.6)]',
              )}
            >
              <h3 className="text-lg font-bold text-fd-foreground mb-1">{tier.name}</h3>
              <div className="flex items-baseline gap-1 mb-2">
                <span className="text-3xl font-bold text-fd-foreground">{tier.price}</span>
                <span className="text-sm text-fd-muted-foreground">/user/mo</span>
              </div>
              <p className="text-sm text-fd-muted-foreground mb-4">{tier.desc}</p>
              <ul className="flex flex-col gap-2 mb-6 flex-1">
                {tier.features.map((feat) => (
                  <li key={feat} className="flex items-start gap-2 text-sm text-fd-muted-foreground">
                    <CheckIcon className="w-4 h-4 text-fd-foreground shrink-0 mt-0.5" />
                    {feat}
                  </li>
                ))}
              </ul>
              <a
                href="https://app.hanzo.bot/auth/signup?plan=team"
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  'inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-semibold no-underline transition-all hover:-translate-y-0.5 text-center',
                  tier.hl
                    ? 'bg-fd-foreground text-fd-background hover:shadow-[0_8px_40px_rgba(255,255,255,0.15)]'
                    : 'bg-[rgba(255,255,255,0.05)] border border-fd-border text-fd-foreground hover:border-fd-foreground/40',
                )}
              >
                Start Team Trial
                <ArrowRightIcon className="w-4 h-4" />
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Enterprise */}
      <section className="mb-16 animate-[fadeInUp_0.8s_ease-out_0.45s_both]">
        <div className="flex flex-col items-center gap-5 p-8 rounded-2xl border border-fd-border bg-gradient-to-br from-[rgba(255,255,255,0.03)] to-[rgba(10,15,26,0.8)] backdrop-blur-sm text-center">
          <SparklesIcon className="w-8 h-8 text-fd-foreground" />
          <h2 className="text-2xl font-bold text-fd-foreground">Enterprise</h2>
          <p className="text-fd-muted-foreground max-w-[500px]">
            Custom deployments, dedicated infrastructure, SLAs, volume licensing, and SSO.
            GPU instances with H100s available. Built for teams that need full control.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="mailto:team@hanzo.ai"
              className="inline-flex items-center gap-2 px-7 py-3 font-semibold text-fd-background bg-fd-foreground rounded-xl no-underline transition-all hover:-translate-y-0.5 hover:shadow-[0_8px_40px_rgba(255,255,255,0.15)]"
            >
              <MessageCircleIcon className="w-5 h-5" />
              Contact Sales
            </a>
            <a
              href="https://hanzo.ai/pricing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3 font-semibold text-fd-foreground bg-[rgba(255,255,255,0.05)] border border-fd-border rounded-xl no-underline transition-all hover:-translate-y-0.5 hover:border-fd-foreground/40"
            >
              View All Infrastructure
              <ArrowRightIcon className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Competitive Comparison */}
      <section className="mb-16 animate-[fadeInUp_0.8s_ease-out_0.5s_both]">
        <h2 className="text-2xl font-bold text-fd-foreground mb-3 text-center">
          How We Compare
        </h2>
        <p className="text-sm text-fd-muted-foreground text-center mb-8 max-w-[600px] mx-auto">
          Other tools charge more for less. Hanzo Bot is the only platform combining coding, marketing, ops, crypto, and cloud infrastructure.
        </p>
        <div className="overflow-x-auto rounded-2xl border border-fd-border bg-[rgba(10,15,26,0.6)] backdrop-blur-sm">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-fd-border">
                <th className="text-left p-4 text-fd-foreground font-semibold">Platform</th>
                <th className="p-4 text-center text-fd-foreground font-semibold">Price</th>
                <th className="p-4 text-center text-fd-foreground font-semibold">Models</th>
                <th className="p-4 text-center text-fd-foreground font-semibold">Channels</th>
                <th className="p-4 text-center text-fd-foreground font-semibold">VMs</th>
                <th className="p-4 text-center text-fd-foreground font-semibold">Crypto</th>
              </tr>
            </thead>
            <tbody>
              {[
                { name: 'Hanzo Bot', price: '$5/mo', models: '100+', channels: '7+', vms: 'Up to 25', crypto: true, hl: true },
                { name: 'Cursor', price: '$20/mo', models: 'Limited', channels: '\u2014', vms: '\u2014', crypto: false, hl: false },
                { name: 'Claude Code', price: '$20/mo', models: 'Claude only', channels: '\u2014', vms: '\u2014', crypto: false, hl: false },
                { name: 'GitHub Copilot', price: '$10/mo', models: 'GPT + Claude', channels: '\u2014', vms: '\u2014', crypto: false, hl: false },
                { name: 'Devin', price: '$20/mo', models: 'Proprietary', channels: 'Slack', vms: 'Cloud', crypto: false, hl: false },
                { name: 'Windsurf', price: '$15/mo', models: 'Limited', channels: '\u2014', vms: '\u2014', crypto: false, hl: false },
                { name: 'exe.dev', price: '$20/mo', models: 'Shelley', channels: '\u2014', vms: '25', crypto: false, hl: false },
                { name: 'Replit Agent', price: '$20/mo', models: 'Limited', channels: '\u2014', vms: '\u2014', crypto: false, hl: false },
                { name: 'ChatGPT Pro', price: '$200/mo', models: 'GPT only', channels: '\u2014', vms: '\u2014', crypto: false, hl: false },
              ].map((row) => (
                <tr key={row.name} className={`border-b border-fd-border/50 last:border-b-0 ${row.hl ? 'bg-[rgba(255,255,255,0.04)]' : ''}`}>
                  <td className={`p-4 font-medium ${row.hl ? 'text-white' : 'text-fd-muted-foreground'}`}>{row.name}</td>
                  <td className={`p-4 text-center ${row.hl ? 'text-white font-semibold' : 'text-fd-muted-foreground'}`}>{row.price}</td>
                  <td className={`p-4 text-center ${row.hl ? 'text-white' : 'text-fd-muted-foreground'}`}>{row.models}</td>
                  <td className="p-4 text-center text-fd-muted-foreground">{row.channels}</td>
                  <td className="p-4 text-center text-fd-muted-foreground">{row.vms}</td>
                  <td className="p-4 text-center">
                    {row.crypto
                      ? <CheckIcon className="w-4 h-4 text-white mx-auto" />
                      : <XIcon className="w-4 h-4 text-fd-muted-foreground/40 mx-auto" />
                    }
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/comparison" className="text-sm text-fd-foreground font-medium hover:text-fd-muted-foreground transition-colors no-underline">
            Detailed feature comparison &rarr;
          </Link>
          <Link href="/blog/hanzo-bot-vs-ai-coding-agents" className="text-sm text-fd-foreground font-medium hover:text-fd-muted-foreground transition-colors no-underline">
            Read the full breakdown &rarr;
          </Link>
        </div>
      </section>

      {/* Billing FAQ */}
      <section className="mb-16 animate-[fadeInUp_0.8s_ease-out_0.6s_both]">
        <BillingFaq />
      </section>

      {/* Bottom CTA */}
      <div className="text-center mb-8">
        <Link
          href="/get-started"
          className="inline-flex items-center gap-2.5 px-9 py-4 text-lg font-semibold text-fd-background bg-fd-foreground rounded-2xl no-underline transition-all hover:-translate-y-0.5 hover:shadow-[0_8px_40px_rgba(255,255,255,0.15)] shadow-[0_4px_24px_rgba(255,255,255,0.1)]"
        >
          <DownloadIcon className="w-5 h-5" />
          Get Started Free
        </Link>
        <p className="mt-3 text-sm text-fd-muted-foreground">
          Free locally. $5/mo in the cloud. Cancel anytime.
        </p>
      </div>
    </main>
  );
}
