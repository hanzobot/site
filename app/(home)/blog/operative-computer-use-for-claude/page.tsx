import Link from 'next/link';
import { ArrowLeftIcon, ArrowRightIcon, CalendarIcon } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Operative: Giving AI Eyes and Hands',
  description:
    'We built a full computer-use stack — Operative, CUA, ACI, and Overlord — so AI agents can see screens, click buttons, type text, and automate browsers. Open source.',
  openGraph: {
    title: 'Operative: Giving AI Eyes and Hands',
    description:
      'Screen capture, mouse control, keyboard input, browser automation. The computer-use stack that powers Hanzo Bot.',
  },
};

export default function OperativePage() {
  return (
    <main className="relative z-[1] max-w-[860px] mx-auto px-4 sm:px-6 pt-8 sm:pt-16 pb-10 overflow-x-hidden">
      <div className="stars" />
      <div className="nebula" />

      <Link
        href="/blog"
        className="inline-flex items-center gap-1.5 text-sm text-fd-muted-foreground hover:text-white transition-colors no-underline mb-8"
      >
        <ArrowLeftIcon className="w-3.5 h-3.5" /> All posts
      </Link>

      <header className="mb-10 animate-[fadeInUp_0.8s_ease-out]">
        <div className="flex items-center gap-3 text-xs mb-4">
          <span className="px-2.5 py-0.5 rounded-full border font-medium text-neutral-400 border-[#a3a3a3]/30 bg-[#a3a3a3]/8">
            Launch
          </span>
          <span className="flex items-center gap-1.5 text-fd-muted-foreground">
            <CalendarIcon className="size-3" />
            March 20, 2025
          </span>
        </div>
        <h1 className="text-3xl lg:text-4xl font-bold tracking-tight mb-4 text-fd-foreground">
          Operative: Giving AI Eyes and Hands
        </h1>
        <p className="text-lg text-fd-muted-foreground leading-relaxed">
          An AI agent that can only read and write code is half an agent. We built
          Operative so agents can see screens, click buttons, fill forms, and automate
          anything with a GUI — the same way a human would.
        </p>
      </header>

      <article className="prose prose-invert max-w-none animate-[fadeInUp_0.8s_ease-out_0.15s_both]">
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-fd-foreground mb-4">Why computer use matters</h2>
          <div className="p-6 rounded-xl border border-fd-border bg-[rgba(10,15,26,0.4)]">
            <p className="text-sm text-fd-muted-foreground leading-relaxed mb-4">
              Most software has no API. Internal dashboards, legacy admin panels, SaaS tools
              with no webhooks, desktop applications — the majority of business software is
              only accessible through a GUI. If your AI agent can&apos;t interact with GUIs,
              it can&apos;t automate most real work.
            </p>
            <p className="text-sm text-fd-muted-foreground leading-relaxed">
              Computer use gives agents the same interface humans have: a screen to see,
              a mouse to click, a keyboard to type. No API integration required. If a human
              can do it, the agent can do it.
            </p>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-fd-foreground mb-4">The full computer-use stack</h2>
          <div className="p-6 rounded-xl border border-fd-border bg-[rgba(10,15,26,0.4)]">
            <p className="text-sm text-fd-muted-foreground leading-relaxed mb-4">
              We didn&apos;t build one tool — we built four, each at a different layer:
            </p>
            <div className="flex flex-col gap-4">
              <div className="p-4 rounded-lg bg-[rgba(255,255,255,0.03)] border border-fd-border/50">
                <h3 className="text-sm font-bold text-white mb-1">
                  <a href="https://github.com/hanzoai/operative" className="text-white hover:text-neutral-300 transition-colors" target="_blank" rel="noopener noreferrer">Operative</a>
                </h3>
                <p className="text-xs text-fd-muted-foreground">
                  Autonomous computer use agent for Claude. Screen capture, coordinate mapping,
                  action execution. The primary interface for Claude-powered automation.
                </p>
              </div>
              <div className="p-4 rounded-lg bg-[rgba(255,255,255,0.03)] border border-fd-border/50">
                <h3 className="text-sm font-bold text-white mb-1">
                  <a href="https://github.com/hanzoai/CUA" className="text-white hover:text-neutral-300 transition-colors" target="_blank" rel="noopener noreferrer">CUA</a>
                  {' '}(Computer Use Agent)
                </h3>
                <p className="text-xs text-fd-muted-foreground">
                  Model-agnostic framework for computer use. Works with any multimodal model,
                  not just Claude. Standardized action format for cross-model compatibility.
                </p>
              </div>
              <div className="p-4 rounded-lg bg-[rgba(255,255,255,0.03)] border border-fd-border/50">
                <h3 className="text-sm font-bold text-white mb-1">
                  <a href="https://github.com/hanzoai/aci" className="text-white hover:text-neutral-300 transition-colors" target="_blank" rel="noopener noreferrer">ACI</a>
                  {' '}(AI Computer Interface)
                </h3>
                <p className="text-xs text-fd-muted-foreground">
                  Unified cross-platform computer control. macOS, Linux, Windows — same API.
                  Native acceleration for mouse, keyboard, and screen operations.
                </p>
              </div>
              <div className="p-4 rounded-lg bg-[rgba(255,255,255,0.03)] border border-fd-border/50">
                <h3 className="text-sm font-bold text-white mb-1">
                  <a href="https://github.com/hanzoai/overlord" className="text-white hover:text-neutral-300 transition-colors" target="_blank" rel="noopener noreferrer">Overlord</a>
                </h3>
                <p className="text-xs text-fd-muted-foreground">
                  Agent management through local computer use. Coordinate multiple agents
                  operating on the same machine without conflicts.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-fd-foreground mb-4">Browser automation</h2>
          <div className="p-6 rounded-xl border border-fd-border bg-[rgba(10,15,26,0.4)]">
            <p className="text-sm text-fd-muted-foreground leading-relaxed mb-4">
              On top of raw computer use, Hanzo Bot integrates Playwright for structured
              browser automation. Navigate pages, fill forms, click buttons, extract data,
              take screenshots, run assertions — all through MCP tools that agents call
              directly.
            </p>
            <p className="text-sm text-fd-muted-foreground leading-relaxed">
              We also built{' '}
              <a href="https://github.com/hanzoai/mcp-remote-macos-use" className="text-white hover:text-neutral-300 transition-colors" target="_blank" rel="noopener noreferrer">
                the first open-source MCP for full remote macOS control
              </a>
              {' '}— agents can operate a remote Mac as if sitting in front of it. Combined with{' '}
              <a href="https://github.com/hanzoai/stagehand" className="text-white hover:text-neutral-300 transition-colors" target="_blank" rel="noopener noreferrer">
                Stagehand
              </a>
              {' '}(our AI web browsing framework), this gives agents complete control over
              desktop and web environments.
            </p>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-fd-foreground mb-4">What this enables</h2>
          <div className="p-6 rounded-xl border border-fd-border bg-[rgba(10,15,26,0.4)]">
            <p className="text-sm text-fd-muted-foreground leading-relaxed">
              Hanzo Bot uses the computer-use stack for visual testing, browser-based
              data extraction, GUI interaction with tools that have no API, screenshot-based
              debugging, and end-to-end workflow automation. When an agent can see and
              interact with any application, the surface area of automatable work expands
              dramatically.
            </p>
          </div>
        </section>
      </article>

      <div className="mt-12 rounded-2xl border border-neutral-700 bg-[rgba(10,15,26,0.6)] backdrop-blur-sm p-8 text-center animate-[fadeInUp_0.8s_ease-out_0.3s_both]">
        <h2 className="text-2xl font-bold text-fd-foreground mb-3">
          See it. Click it. Automate it.
        </h2>
        <p className="text-fd-muted-foreground max-w-[540px] mx-auto mb-6">
          The entire computer-use stack is open source.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://github.com/hanzoai/operative"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white text-black font-semibold hover:bg-neutral-200 transition-colors no-underline"
          >
            View on GitHub <ArrowRightIcon className="w-4 h-4" />
          </a>
          <Link
            href="/get-started"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-neutral-600 text-white font-semibold hover:bg-white/5 transition-colors no-underline"
          >
            Try Hanzo Bot
          </Link>
        </div>
      </div>
    </main>
  );
}
