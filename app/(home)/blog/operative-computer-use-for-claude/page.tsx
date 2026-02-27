import Link from 'next/link';
import { ArrowLeftIcon, CalendarIcon } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Introducing Operative: Computer Use for Claude',
  description: 'We built Operative — an open-source framework that gives Claude the ability to see your screen, move the mouse, type on the keyboard, and use any desktop application autonomously.',
};

export default function Post() {
  return (
    <main className="relative z-[1] max-w-[720px] mx-auto px-4 sm:px-6 pt-12 sm:pt-16 pb-10 overflow-hidden">
      <div className="stars" />
      <div className="nebula" />

      <Link href="/blog" className="inline-flex items-center gap-1.5 text-sm text-fd-muted-foreground hover:text-white transition-colors no-underline mb-8">
        <ArrowLeftIcon className="size-3.5" /> Back to Blog
      </Link>

      <header className="mb-10 animate-[fadeInUp_0.8s_ease-out]">
        <div className="flex items-center gap-3 text-xs mb-4">
          <span className="px-2.5 py-0.5 rounded-full border font-medium text-white border-neutral-600/30 bg-white/8">Launch</span>
          <span className="flex items-center gap-1.5 text-fd-muted-foreground"><CalendarIcon className="size-3" /> November 1, 2024</span>
        </div>
        <h1 className="text-3xl lg:text-4xl font-bold tracking-tight mb-4 text-fd-foreground">Introducing Operative: Computer Use for Claude</h1>
        <p className="text-lg text-fd-muted-foreground leading-relaxed">
          When Anthropic released computer use for Claude, we saw the future of autonomous agents. We built Operative to make it production-ready.
        </p>
      </header>

      <article className="prose prose-invert max-w-none text-fd-foreground/90 text-[15px] leading-relaxed">
        <p>
          In October 2024, Anthropic announced that Claude could use computers — see the screen, move the mouse,
          click buttons, type text. It was a demo. We turned it into infrastructure.
        </p>
        <p>
          <strong>Operative</strong> is our open-source framework for Claude computer use. It gives Claude full
          desktop control in a containerized environment — safe, auditable, and production-ready.
        </p>

        <h2 className="text-xl font-semibold text-fd-foreground mt-10 mb-4">What Operative Does</h2>
        <p>
          Operative wraps Claude&apos;s computer use capability in a Docker container with a full Linux desktop.
          Claude can:
        </p>
        <ul className="space-y-2 text-fd-muted-foreground">
          <li><strong className="text-fd-foreground">See the screen</strong> — Takes screenshots and understands UI layouts, text, buttons, forms</li>
          <li><strong className="text-fd-foreground">Control the mouse</strong> — Click, drag, scroll, hover with pixel-level precision</li>
          <li><strong className="text-fd-foreground">Type on the keyboard</strong> — Fill forms, write documents, use terminal commands</li>
          <li><strong className="text-fd-foreground">Use any application</strong> — Browsers, IDEs, spreadsheets, design tools, terminal emulators</li>
          <li><strong className="text-fd-foreground">Chain complex workflows</strong> — Multi-step processes across multiple applications</li>
        </ul>

        <h2 className="text-xl font-semibold text-fd-foreground mt-10 mb-4">Why This Matters</h2>
        <p>
          Before computer use, AI agents were limited to APIs and CLIs. If a tool didn&apos;t have an API,
          the agent couldn&apos;t use it. Operative removes that constraint entirely. Any application with
          a GUI becomes accessible to the agent.
        </p>
        <p>This unlocks use cases that were previously impossible:</p>
        <ul className="space-y-2 text-fd-muted-foreground">
          <li>Automated QA testing of web and desktop applications</li>
          <li>Data entry across legacy systems with no API</li>
          <li>Design-to-code workflows using Figma</li>
          <li>Automated admin tasks in SaaS dashboards</li>
          <li>Research workflows across multiple web applications</li>
        </ul>

        <h2 className="text-xl font-semibold text-fd-foreground mt-10 mb-4">From Operative to Hanzo Bot</h2>
        <p>
          Operative was the proof of concept. It showed that AI agents could operate autonomously in full
          desktop environments. But a proof of concept isn&apos;t a product. We needed:
        </p>
        <ul className="space-y-2 text-fd-muted-foreground">
          <li>Multi-model support (not just Claude)</li>
          <li>Persistent memory across sessions</li>
          <li>Chat channel integrations (Discord, Slack, Telegram)</li>
          <li>Scalable cloud infrastructure</li>
          <li>Team collaboration and access control</li>
        </ul>
        <p>
          Building all of that is what became <Link href="/blog/introducing-hanzo-bot" className="text-white hover:underline">Hanzo Bot</Link>.
          Operative&apos;s computer use capability is now one layer in a much larger stack — the layer that
          lets your bot interact with any GUI application.
        </p>

        <h2 className="text-xl font-semibold text-fd-foreground mt-10 mb-4">Open Source</h2>
        <p>Operative is fully open source:</p>
        <ul className="space-y-2 text-fd-muted-foreground">
          <li><a href="https://github.com/hanzoai/operative" className="text-white hover:underline" target="_blank" rel="noopener noreferrer">github.com/hanzoai/operative</a> — Source code, Docker configuration, examples</li>
          <li>PyPI: <code className="text-neutral-300">pip install hanzo-operative</code></li>
          <li>Supports Claude 3.5 Sonnet and Claude 3.7 Sonnet</li>
        </ul>

        <div className="not-prose my-10 p-6 rounded-xl border border-neutral-700 bg-neutral-950/50 text-center">
          <p className="text-lg font-semibold text-white mb-2">Give your AI agent eyes and hands</p>
          <p className="text-sm text-neutral-400 mb-4">Computer use, built for production.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href="https://github.com/hanzoai/operative" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-6 py-2.5 rounded-lg bg-white text-black font-semibold text-sm hover:bg-neutral-200 transition-colors no-underline">
              View on GitHub
            </a>
            <Link href="/get-started" className="inline-flex items-center justify-center px-6 py-2.5 rounded-lg border border-neutral-600 text-white font-semibold text-sm hover:bg-neutral-900 transition-colors no-underline">
              Try Hanzo Bot
            </Link>
          </div>
        </div>
      </article>
    </main>
  );
}
