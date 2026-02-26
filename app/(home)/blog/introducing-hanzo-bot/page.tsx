import Link from 'next/link';
import { ArrowLeftIcon, CalendarIcon } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Introducing Hanzo Bot',
  description: 'Your AI team in a box — one bot, every role, every channel. Deploy autonomous AI agents that run locally or in the cloud.',
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
          <span className="px-2.5 py-0.5 rounded-full border font-medium text-white border-neutral-600/30 bg-white/8">
            Announcement
          </span>
          <span className="flex items-center gap-1.5 text-fd-muted-foreground">
            <CalendarIcon className="size-3" /> February 20, 2026
          </span>
        </div>
        <h1 className="text-3xl lg:text-4xl font-bold tracking-tight mb-4 text-fd-foreground">
          Introducing Hanzo Bot
        </h1>
        <p className="text-lg text-fd-muted-foreground leading-relaxed">
          Your AI team in a box. One bot, every role, every channel.
        </p>
      </header>

      <article className="prose prose-invert max-w-none text-fd-foreground/90 text-[15px] leading-relaxed">
        <p>
          Today we&apos;re launching <strong>Hanzo Bot</strong> — an open-source AI agent framework
          that gives you a full AI team running on your machine or in the cloud.
        </p>

        <h2 className="text-xl font-semibold text-fd-foreground mt-10 mb-4">The Problem</h2>
        <p>
          Every company needs AI automation. But the current landscape forces you to choose between
          walled-garden SaaS tools that own your data, or brittle DIY setups held together with
          duct tape and API keys.
        </p>
        <p>
          You shouldn&apos;t need a team of ML engineers to deploy an AI assistant. You shouldn&apos;t need
          to give a third party access to your codebase. And you definitely shouldn&apos;t be paying
          $200K+ per year for what is fundamentally a prompt and a few API calls.
        </p>

        <h2 className="text-xl font-semibold text-fd-foreground mt-10 mb-4">What Hanzo Bot Does</h2>
        <p>Hanzo Bot is a single binary that gives you:</p>
        <ul className="space-y-2 text-fd-muted-foreground">
          <li><strong className="text-fd-foreground">100+ AI models</strong> — Claude, GPT, Gemini, Qwen, Llama, and more through a unified LLM gateway</li>
          <li><strong className="text-fd-foreground">Every chat channel</strong> — WhatsApp, Telegram, Discord, Slack, Signal, iMessage, SMS, email, web</li>
          <li><strong className="text-fd-foreground">Full computer use</strong> — browser automation, desktop control, terminal access, file system operations</li>
          <li><strong className="text-fd-foreground">Persistent memory</strong> — agents remember context across conversations and sessions</li>
          <li><strong className="text-fd-foreground">600+ integrations</strong> — from GitHub to Salesforce to Philips Hue</li>
          <li><strong className="text-fd-foreground">Skills marketplace</strong> — pre-built capabilities you install with one command</li>
        </ul>

        <h2 className="text-xl font-semibold text-fd-foreground mt-10 mb-4">Install in 30 Seconds</h2>
        <div className="my-6">
          <code className="block text-sm text-[#a3a3a3] bg-[rgba(163,163,163,0.06)] border border-[rgba(163,163,163,0.15)] rounded-xl px-4 py-3 font-mono">
            curl -fsSL https://hanzo.bot/install.sh | sh
          </code>
        </div>
        <p>
          That&apos;s it. Hanzo Bot runs locally on your machine — your data stays on your hardware.
          When you&apos;re ready to scale, deploy to Hanzo Cloud starting at $5/mo per bot with
          100+ AI models included.
        </p>

        <h2 className="text-xl font-semibold text-fd-foreground mt-10 mb-4">Open Source</h2>
        <p>
          The entire framework is open source at{' '}
          <a href="https://github.com/hanzoai/bot" target="_blank" rel="noopener noreferrer" className="text-white hover:underline">
            github.com/hanzoai/bot
          </a>
          . We believe the infrastructure layer for AI should be open, composable, and owned by the
          teams that use it.
        </p>

        <h2 className="text-xl font-semibold text-fd-foreground mt-10 mb-4">What&apos;s Next</h2>
        <p>
          This is just the beginning. Coming soon: dynamic compute tier switching, multiplayer
          agent collaboration, and crypto skills for autonomous onchain operations.
        </p>
        <p>
          Join us on{' '}
          <a href="https://discord.gg/hanzo" target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:underline">
            Discord
          </a>
          , star us on{' '}
          <a href="https://github.com/hanzoai/bot" target="_blank" rel="noopener noreferrer" className="text-white hover:underline">
            GitHub
          </a>
          , and{' '}
          <a href="/get-started" className="text-white hover:underline">
            get started free
          </a>
          .
        </p>
      </article>
    </main>
  );
}
