import Link from 'next/link';
import { ArrowLeftIcon, CalendarIcon } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'The Real Cost of AI Coding Agents in 2026: From $500/mo to $5/mo',
  description: 'Devin costs $500/mo. Cursor costs $20/mo. Claude Code costs $20/mo. We broke down the real cost of every AI coding agent — including the hidden fees nobody talks about.',
};

export default function Post() {
  return (
    <main className="relative z-[1] max-w-[720px] mx-auto px-4 sm:px-6 pt-8 sm:pt-16 pb-10 overflow-x-hidden">
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
          <span className="px-2.5 py-0.5 rounded-full border font-medium text-white border-neutral-500/30 bg-neutral-500/8">
            Analysis
          </span>
          <span className="flex items-center gap-1.5 text-fd-muted-foreground">
            <CalendarIcon className="size-3" /> February 27, 2026
          </span>
        </div>
        <h1 className="text-3xl lg:text-4xl font-bold tracking-tight mb-4 text-fd-foreground">
          The Real Cost of AI Coding Agents in 2026
        </h1>
        <p className="text-lg text-fd-muted-foreground leading-relaxed">
          From $500/mo to $5/mo. We broke down every AI coding agent&apos;s real cost — including the hidden fees.
        </p>
      </header>

      <article className="prose prose-invert max-w-none text-fd-foreground/90 text-[15px] leading-relaxed">
        <p>
          The AI coding agent market has exploded. There are now dozens of tools claiming to be your &quot;AI
          software engineer.&quot; But pricing is confusing, features vary wildly, and hidden costs are everywhere.
        </p>
        <p>
          We did the math so you don&apos;t have to. Here&apos;s what every major AI coding tool actually costs
          when you account for the full picture.
        </p>

        <h2 className="text-xl font-semibold text-fd-foreground mt-10 mb-4">The Full Price Breakdown</h2>

        <div className="not-prose my-6 text-sm">
          <div className="border border-neutral-800 rounded-xl overflow-hidden">
            <div className="grid grid-cols-4 gap-0">
              {[
                ['Agent', 'List Price', 'Hidden Costs', 'Real Monthly'],
                ['Hanzo Bot', '$5-25/mo', 'None (flat rate)', '$5-25/mo'],
                ['Devin', '$20-500/mo', 'ACU charges ($0.02-0.04/min)', '$200-2,000+/mo'],
                ['Cursor', '$20/mo', 'API overages, fast request limits', '$20-80/mo'],
                ['Claude Code', '$20/mo (Max)', 'Usage caps, then $100/mo Pro', '$20-100/mo'],
                ['GitHub Copilot', '$10-39/mo', 'Copilot Chat limits', '$10-39/mo'],
                ['OpenAI Codex', '$20-200/mo', 'Rate limits, GPT-4 usage', '$20-200/mo'],
                ['Gemini', '$0-20/mo', 'API pricing for code execution', '$0-50/mo'],
                ['exe.dev', '$20/mo', 'Seat-based, teams extra', '$20-100/mo'],
              ].map(([agent, price, hidden, real], i) => (
                <div key={agent} className={`contents ${i === 0 ? 'font-semibold text-white' : ''}`}>
                  <div className={`py-2 px-3 ${i % 2 === 0 ? 'bg-neutral-950/50' : ''} ${i === 0 ? 'border-b border-neutral-700' : ''} ${i === 1 ? 'text-white font-semibold' : 'text-neutral-400'}`}>
                    {agent}
                  </div>
                  <div className={`py-2 px-3 ${i % 2 === 0 ? 'bg-neutral-950/50' : ''} ${i === 0 ? 'border-b border-neutral-700' : ''} text-neutral-300`}>
                    {price}
                  </div>
                  <div className={`py-2 px-3 ${i % 2 === 0 ? 'bg-neutral-950/50' : ''} ${i === 0 ? 'border-b border-neutral-700' : ''} text-neutral-400`}>
                    {hidden}
                  </div>
                  <div className={`py-2 px-3 ${i % 2 === 0 ? 'bg-neutral-950/50' : ''} ${i === 0 ? 'border-b border-neutral-700' : ''} ${i === 1 ? 'text-white font-semibold' : 'text-neutral-300'}`}>
                    {real}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <h2 className="text-xl font-semibold text-fd-foreground mt-10 mb-4">The Hidden Cost Problem</h2>

        <h3 className="text-lg font-semibold text-fd-foreground mt-8 mb-3">Devin&apos;s ACU Trap</h3>
        <p>
          Devin advertises a $20/mo Starter plan. What they don&apos;t emphasize: every minute your agent runs
          costs ACUs (Agent Compute Units). A complex task that takes 30 minutes of agent time costs $0.60-$1.20
          <em>on top of</em> your subscription. Heavy teams report $1,000-2,000/mo bills.
        </p>

        <h3 className="text-lg font-semibold text-fd-foreground mt-8 mb-3">Cursor&apos;s Fast Request Limits</h3>
        <p>
          Cursor Pro gives you 500 &quot;fast requests&quot; per month. After that, you&apos;re on slow mode
          or paying per request. For active developers, 500 requests is 2-3 days of work. The rest of the month
          is either slow or expensive.
        </p>

        <h3 className="text-lg font-semibold text-fd-foreground mt-8 mb-3">Claude Code&apos;s Tier Jump</h3>
        <p>
          Claude Code requires the Max plan ($20/mo) for basic access. Hit the usage cap and you need Pro ($100/mo).
          And you&apos;re still locked to Claude-only models with no cloud VMs, no messaging, no deployment.
        </p>

        <h2 className="text-xl font-semibold text-fd-foreground mt-10 mb-4">What $5/mo Gets You on Hanzo Bot</h2>
        <ul className="space-y-2 text-fd-muted-foreground">
          <li><strong className="text-fd-foreground">Full Linux VM</strong> — Always-on Ubuntu with SSH access</li>
          <li><strong className="text-fd-foreground">Up to 5 VMs</strong> — Run multiple bots on one account</li>
          <li><strong className="text-fd-foreground">Zen Mini model included</strong> — No API key needed</li>
          <li><strong className="text-fd-foreground">100+ models</strong> — Access to the entire Hanzo LLM Gateway</li>
          <li><strong className="text-fd-foreground">All chat integrations</strong> — Discord, Slack, Telegram, WhatsApp, Signal, iMessage, Teams</li>
          <li><strong className="text-fd-foreground">260+ MCP tools</strong> — Full development and infrastructure toolkit</li>
          <li><strong className="text-fd-foreground">Browser automation</strong> — Built-in Playwright for testing and scraping</li>
          <li><strong className="text-fd-foreground">Flat-rate pricing</strong> — No ACUs, no usage limits, no surprise bills</li>
        </ul>

        <h2 className="text-xl font-semibold text-fd-foreground mt-10 mb-4">The 5-Person Team Math</h2>
        <p>A 5-person engineering team using AI coding agents daily:</p>
        <div className="not-prose my-6 text-sm">
          <div className="border border-neutral-800 rounded-xl overflow-hidden">
            <div className="grid grid-cols-2 gap-0">
              {[
                ['Devin Team', '$2,500/mo (5 seats) + $500+ ACUs'],
                ['Cursor Business', '$200/mo (5 x $40)'],
                ['Copilot Enterprise', '$195/mo (5 x $39)'],
                ['Claude Code Pro', '$500/mo (5 x $100)'],
                ['Hanzo Bot Team Dev', '$100/mo (5 x $20)'],
              ].map(([tool, price], i) => (
                <div key={tool} className={`contents ${i === 4 ? 'font-semibold' : ''}`}>
                  <div className={`py-2 px-4 ${i % 2 === 0 ? 'bg-neutral-950/50' : ''} ${i === 4 ? 'border-t border-neutral-700 text-white' : 'text-neutral-400'}`}>
                    {tool}
                  </div>
                  <div className={`py-2 px-4 text-right ${i % 2 === 0 ? 'bg-neutral-950/50' : ''} ${i === 4 ? 'border-t border-neutral-700 text-white' : 'text-neutral-300'}`}>
                    {price}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <p>
          That&apos;s <strong>$100/mo vs $2,500+/mo</strong> for the team plan. And Hanzo Bot does more —
          messaging, crypto, cloud VMs, 100+ models, 260+ tools.
        </p>

        <div className="not-prose my-10 p-6 rounded-xl border border-neutral-700 bg-neutral-950/50 text-center">
          <p className="text-lg font-semibold text-white mb-2">Stop overpaying for AI coding agents</p>
          <p className="text-sm text-neutral-400 mb-4">$5/mo per bot. Flat rate. No hidden fees.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/get-started"
              className="inline-flex items-center justify-center px-6 py-2.5 rounded-lg bg-white text-black font-semibold text-sm hover:bg-neutral-200 transition-colors no-underline"
            >
              Start free
            </Link>
            <Link
              href="/pricing"
              className="inline-flex items-center justify-center px-6 py-2.5 rounded-lg border border-neutral-600 text-white font-semibold text-sm hover:bg-neutral-900 transition-colors no-underline"
            >
              See pricing
            </Link>
          </div>
        </div>
      </article>
    </main>
  );
}
