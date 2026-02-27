import Link from 'next/link';
import { ArrowLeftIcon, CalendarIcon } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'How to Build an AI Coding Agent That Actually Ships',
  description: 'Most AI coding tools generate code. Very few ship it. Here\'s the architecture behind an AI agent that writes, tests, deploys, and monitors production software autonomously.',
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
          <span className="px-2.5 py-0.5 rounded-full border font-medium text-white border-neutral-500/30 bg-neutral-500/8">
            Engineering
          </span>
          <span className="flex items-center gap-1.5 text-fd-muted-foreground">
            <CalendarIcon className="size-3" /> February 27, 2026
          </span>
        </div>
        <h1 className="text-3xl lg:text-4xl font-bold tracking-tight mb-4 text-fd-foreground">
          How to Build an AI Coding Agent That Actually Ships
        </h1>
        <p className="text-lg text-fd-muted-foreground leading-relaxed">
          Most AI coding tools generate code. Very few ship it. Here&apos;s what separates a chatbot from an autonomous software engineer.
        </p>
      </header>

      <article className="prose prose-invert max-w-none text-fd-foreground/90 text-[15px] leading-relaxed">
        <p>
          Every AI coding tool on the market can generate a function. Type a prompt, get code back. But writing code
          is 20% of software engineering. The other 80% is understanding context, running tests, fixing failures,
          deploying safely, monitoring production, and iterating based on real-world feedback.
        </p>
        <p>
          That&apos;s the gap between a code generator and a coding <strong>agent</strong>. And it&apos;s the gap
          Hanzo Bot was built to close.
        </p>

        <h2 className="text-xl font-semibold text-fd-foreground mt-10 mb-4">The 5 Layers of an Agentic Coder</h2>

        <h3 className="text-lg font-semibold text-fd-foreground mt-8 mb-3">1. Context Awareness</h3>
        <p>
          A real coding agent doesn&apos;t start from scratch every time. It knows your codebase structure,
          your coding conventions, your dependency versions, your CI pipeline configuration. Hanzo Bot uses
          persistent memory and 260+ MCP tools to maintain deep context about your project across sessions.
        </p>

        <h3 className="text-lg font-semibold text-fd-foreground mt-8 mb-3">2. Multi-Model Intelligence</h3>
        <p>
          Different tasks need different models. A lint fix doesn&apos;t need the same model as a complex
          refactoring. Hanzo Bot routes to 100+ models through the Hanzo LLM Gateway — use Zen Mini for
          quick fixes at $0.02/task, Claude for complex reasoning at $0.80/task, or GPT for creative
          solutions. Per-task model selection means better results at lower cost.
        </p>

        <h3 className="text-lg font-semibold text-fd-foreground mt-8 mb-3">3. Test-Driven Verification</h3>
        <p>
          Code without tests is a guess. Hanzo Bot runs your test suite after every change, analyzes failures,
          and iterates until tests pass. It doesn&apos;t just generate code — it verifies that code works
          in the context of your existing system.
        </p>

        <h3 className="text-lg font-semibold text-fd-foreground mt-8 mb-3">4. CI/CD Integration</h3>
        <p>
          The agent pushes to a feature branch, monitors CI results, and fixes any failures automatically.
          Lint errors, type check failures, build issues — the agent handles them in a loop. When CI goes
          green, it opens a PR with a clean diff and meaningful commit messages.
        </p>

        <h3 className="text-lg font-semibold text-fd-foreground mt-8 mb-3">5. Production Awareness</h3>
        <p>
          After deployment, the agent monitors logs, tracks error rates, and responds to incidents. It can
          roll back a bad deploy, hotfix a production bug at 3am, and notify your team on Slack — all without
          waking anyone up.
        </p>

        <h2 className="text-xl font-semibold text-fd-foreground mt-10 mb-4">What This Looks Like in Practice</h2>
        <div className="my-6">
          <pre className="p-4 rounded-xl bg-[rgba(0,0,0,0.4)] text-sm text-neutral-300 font-mono overflow-x-auto">
            <code>{`# Your bot receives a GitHub issue
@hanzo-bot fix the login timeout on mobile

# Bot autonomously:
# 1. Reads the issue and related code
# 2. Identifies the root cause (session timeout too short)
# 3. Writes the fix + unit test
# 4. Runs test suite locally
# 5. Pushes branch, opens PR
# 6. CI passes → ready for review
# 7. After merge → monitors production metrics`}</code>
          </pre>
        </div>

        <h2 className="text-xl font-semibold text-fd-foreground mt-10 mb-4">Why Autocomplete Tools Can&apos;t Do This</h2>
        <p>
          Cursor, Copilot, and similar tools are <strong>editors</strong>. They help you write code faster inside
          your IDE. But they can&apos;t:
        </p>
        <ul className="space-y-2 text-fd-muted-foreground">
          <li>Run your test suite and iterate on failures</li>
          <li>Push to Git and monitor CI pipelines</li>
          <li>Deploy to staging or production</li>
          <li>Monitor production logs and respond to incidents</li>
          <li>Work across Slack, Discord, and GitHub simultaneously</li>
          <li>Operate autonomously on a schedule (cron jobs)</li>
        </ul>
        <p>
          An agent does all of this. That&apos;s the difference between a tool you use and a teammate that works.
        </p>

        <h2 className="text-xl font-semibold text-fd-foreground mt-10 mb-4">Get Started</h2>
        <p>
          Hanzo Bot is free to run locally. Cloud VMs start at $5/mo. Your first coding agent can be live in 5 minutes.
        </p>

        <div className="not-prose my-10 p-6 rounded-xl border border-neutral-700 bg-neutral-950/50 text-center">
          <p className="text-lg font-semibold text-white mb-2">Build an agent that ships, not just generates</p>
          <p className="text-sm text-neutral-400 mb-4">Free locally. $5/mo in the cloud. 100+ models.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/get-started"
              className="inline-flex items-center justify-center px-6 py-2.5 rounded-lg bg-white text-black font-semibold text-sm hover:bg-neutral-200 transition-colors no-underline"
            >
              Start free
            </Link>
            <Link
              href="/vs"
              className="inline-flex items-center justify-center px-6 py-2.5 rounded-lg border border-neutral-600 text-white font-semibold text-sm hover:bg-neutral-900 transition-colors no-underline"
            >
              Compare alternatives
            </Link>
          </div>
        </div>
      </article>
    </main>
  );
}
