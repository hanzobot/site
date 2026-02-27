import Link from 'next/link';
import { ArrowLeftIcon, CalendarIcon } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Deploy an AI Marketing Agent on Discord, Slack, and Telegram',
  description: 'Step-by-step guide to deploying an AI marketing agent across Discord, Slack, and Telegram. One bot, persistent memory, every channel — in under 10 minutes.',
};

export default function Post() {
  return (
    <main className="relative z-[1] max-w-[720px] mx-auto px-4 sm:px-6 pt-8 sm:pt-16 pb-10 overflow-x-hidden">

      <Link
        href="/blog"
        className="inline-flex items-center gap-1.5 text-sm text-fd-muted-foreground hover:text-white transition-colors no-underline mb-8"
      >
        <ArrowLeftIcon className="size-3.5" /> Back to Blog
      </Link>

      <header className="mb-10 animate-[fadeInUp_0.8s_ease-out]">
        <div className="flex items-center gap-3 text-xs mb-4">
          <span className="px-2.5 py-0.5 rounded-full border font-medium text-neutral-300 border-neutral-500/30 bg-neutral-500/8">
            Tutorial
          </span>
          <span className="flex items-center gap-1.5 text-fd-muted-foreground">
            <CalendarIcon className="size-3" /> February 27, 2026
          </span>
        </div>
        <h1 className="text-3xl lg:text-4xl font-bold tracking-tight mb-4 text-fd-foreground">
          Deploy an AI Marketing Agent on Discord, Slack, and Telegram
        </h1>
        <p className="text-lg text-fd-muted-foreground leading-relaxed">
          One bot, three channels, persistent memory across all of them. Here&apos;s how to set it up in under 10 minutes.
        </p>
      </header>

      <article className="prose prose-invert max-w-none text-fd-foreground/90 text-[15px] leading-relaxed">
        <p>
          Most marketing teams manage separate tools for each channel. A Discord bot here, a Slack integration there,
          a Telegram bot that nobody maintains. Each one is siloed — no shared context, no shared memory, no shared strategy.
        </p>
        <p>
          Hanzo Bot is one agent that lives on every channel simultaneously. When a customer asks a question on Discord,
          the bot remembers the context when the same customer messages on Telegram. When your team discusses strategy on Slack,
          the bot applies those decisions across all channels automatically.
        </p>

        <h2 className="text-xl font-semibold text-fd-foreground mt-10 mb-4">Step 1: Install Hanzo Bot</h2>
        <div className="my-4">
          <pre className="p-4 rounded-xl bg-[rgba(0,0,0,0.4)] text-sm text-neutral-300 font-mono overflow-x-auto">
            <code>curl -fsSL https://hanzo.bot/install | bash</code>
          </pre>
        </div>
        <p>Or deploy to Hanzo Cloud for $5/mo — always-on, no hardware needed.</p>

        <h2 className="text-xl font-semibold text-fd-foreground mt-10 mb-4">Step 2: Connect Discord</h2>
        <p>Create a Discord application, get your bot token, and connect:</p>
        <div className="my-4">
          <pre className="p-4 rounded-xl bg-[rgba(0,0,0,0.4)] text-sm text-neutral-300 font-mono overflow-x-auto">
            <code>{`hanzo channel add discord --token YOUR_DISCORD_BOT_TOKEN
hanzo channel enable discord`}</code>
          </pre>
        </div>
        <p>
          Your bot is now live on Discord. It can respond to DMs, monitor channels, moderate content,
          and engage with your community 24/7.
        </p>

        <h2 className="text-xl font-semibold text-fd-foreground mt-10 mb-4">Step 3: Connect Slack</h2>
        <p>Create a Slack app, configure OAuth scopes, and connect:</p>
        <div className="my-4">
          <pre className="p-4 rounded-xl bg-[rgba(0,0,0,0.4)] text-sm text-neutral-300 font-mono overflow-x-auto">
            <code>{`hanzo channel add slack --token xoxb-YOUR_SLACK_BOT_TOKEN
hanzo channel enable slack`}</code>
          </pre>
        </div>
        <p>
          Now your bot can respond to mentions, participate in threads, post updates to channels,
          and handle internal team requests.
        </p>

        <h2 className="text-xl font-semibold text-fd-foreground mt-10 mb-4">Step 4: Connect Telegram</h2>
        <p>Get a bot token from @BotFather and connect:</p>
        <div className="my-4">
          <pre className="p-4 rounded-xl bg-[rgba(0,0,0,0.4)] text-sm text-neutral-300 font-mono overflow-x-auto">
            <code>{`hanzo channel add telegram --token YOUR_TELEGRAM_BOT_TOKEN
hanzo channel enable telegram`}</code>
          </pre>
        </div>

        <h2 className="text-xl font-semibold text-fd-foreground mt-10 mb-4">Step 5: Install Marketing Skills</h2>
        <p>Give your bot marketing superpowers:</p>
        <div className="my-4">
          <pre className="p-4 rounded-xl bg-[rgba(0,0,0,0.4)] text-sm text-neutral-300 font-mono overflow-x-auto">
            <code>{`hanzo skill install content-writer
hanzo skill install social-scheduler
hanzo skill install community-manager
hanzo skill install seo-monitor
hanzo skill install analytics-reporter`}</code>
          </pre>
        </div>

        <h2 className="text-xl font-semibold text-fd-foreground mt-10 mb-4">What Your Agent Can Now Do</h2>
        <ul className="space-y-2 text-fd-muted-foreground">
          <li><strong className="text-fd-foreground">Community management</strong> — Greet new members, answer FAQs, moderate content across all three platforms</li>
          <li><strong className="text-fd-foreground">Content distribution</strong> — Write a blog post and automatically cross-post to Discord announcements, Slack updates, and Telegram channels</li>
          <li><strong className="text-fd-foreground">Lead engagement</strong> — When someone asks about your product on any channel, the bot responds with relevant information, personalized to their context</li>
          <li><strong className="text-fd-foreground">Feedback collection</strong> — Aggregate feedback from all channels into a single view, categorized by topic and sentiment</li>
          <li><strong className="text-fd-foreground">Campaign coordination</strong> — Launch a product update across all channels simultaneously with tailored messaging for each platform</li>
        </ul>

        <h2 className="text-xl font-semibold text-fd-foreground mt-10 mb-4">The Persistent Memory Advantage</h2>
        <p>
          This is the key differentiator. When a user asks a follow-up question on Telegram that they started on Discord,
          your bot remembers the full conversation. When your team discusses a pricing change on Slack, the bot updates
          its responses on all customer-facing channels automatically.
        </p>
        <p>
          No other platform does this. Separate bots for each channel means separate memory, separate context, separate
          maintenance. Hanzo Bot is one brain across every surface.
        </p>

        <div className="not-prose my-10 p-6 rounded-xl border border-neutral-700 bg-neutral-950/50 text-center">
          <p className="text-lg font-semibold text-white mb-2">One bot. Every channel. Shared memory.</p>
          <p className="text-sm text-neutral-400 mb-4">Deploy your marketing agent in under 10 minutes.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/get-started"
              className="inline-flex items-center justify-center px-6 py-2.5 rounded-lg bg-white text-black font-semibold text-sm hover:bg-neutral-200 transition-colors no-underline"
            >
              Start free
            </Link>
            <Link
              href="/integrations"
              className="inline-flex items-center justify-center px-6 py-2.5 rounded-lg border border-neutral-600 text-white font-semibold text-sm hover:bg-neutral-900 transition-colors no-underline"
            >
              See all integrations
            </Link>
          </div>
        </div>
      </article>
    </main>
  );
}
