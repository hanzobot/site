import Link from 'next/link';
import { ArrowLeftIcon, CalendarIcon } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '260 MCP Tools: The Unfair Advantage Over Copilot and Cursor',
  description: 'Model Context Protocol gives AI agents access to 260+ tools — databases, APIs, cloud providers, browsers, and more. Here\'s why MCP changes everything for agentic coding.',
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
          <span className="px-2.5 py-0.5 rounded-full border font-medium text-neutral-300 border-neutral-500/30 bg-neutral-500/8">
            Deep Dive
          </span>
          <span className="flex items-center gap-1.5 text-fd-muted-foreground">
            <CalendarIcon className="size-3" /> February 27, 2026
          </span>
        </div>
        <h1 className="text-3xl lg:text-4xl font-bold tracking-tight mb-4 text-fd-foreground">
          260 MCP Tools: The Unfair Advantage Over Copilot and Cursor
        </h1>
        <p className="text-lg text-fd-muted-foreground leading-relaxed">
          Model Context Protocol gives AI agents superpowers. Here&apos;s what 260+ tools actually means for your workflow.
        </p>
      </header>

      <article className="prose prose-invert max-w-none text-fd-foreground/90 text-[15px] leading-relaxed">
        <p>
          When Copilot or Cursor generates code, it operates in a vacuum. It sees your open file, maybe some
          context from nearby files, and it guesses. It can&apos;t query your database to understand the schema.
          It can&apos;t check your CI pipeline. It can&apos;t read your Slack messages for context on what the
          team decided yesterday.
        </p>
        <p>
          <strong>MCP (Model Context Protocol)</strong> changes this fundamentally. It gives AI agents structured
          access to real-world tools — databases, APIs, cloud providers, browsers, messaging platforms, and more.
          Hanzo Bot ships with 260+ MCP tools out of the box.
        </p>

        <h2 className="text-xl font-semibold text-fd-foreground mt-10 mb-4">What MCP Tools Actually Do</h2>
        <p>Think of MCP tools as the agent&apos;s hands. Without them, an AI can only think and talk. With them, it can act.</p>

        <h3 className="text-lg font-semibold text-fd-foreground mt-8 mb-3">Development Tools</h3>
        <ul className="space-y-2 text-fd-muted-foreground">
          <li><strong className="text-fd-foreground">File system</strong> — Read, write, search, and modify files across your entire project</li>
          <li><strong className="text-fd-foreground">Git</strong> — Branch, commit, push, create PRs, review diffs</li>
          <li><strong className="text-fd-foreground">Terminal</strong> — Run build commands, install packages, execute scripts</li>
          <li><strong className="text-fd-foreground">LSP</strong> — Go-to-definition, find references, rename symbols across codebases</li>
          <li><strong className="text-fd-foreground">Browser</strong> — Full Playwright automation for testing, scraping, visual verification</li>
        </ul>

        <h3 className="text-lg font-semibold text-fd-foreground mt-8 mb-3">Infrastructure Tools</h3>
        <ul className="space-y-2 text-fd-muted-foreground">
          <li><strong className="text-fd-foreground">Kubernetes</strong> — Deploy, scale, monitor, and manage containers</li>
          <li><strong className="text-fd-foreground">Docker</strong> — Build images, manage containers, inspect logs</li>
          <li><strong className="text-fd-foreground">Cloud providers</strong> — AWS, GCP, Azure, DigitalOcean, Cloudflare</li>
          <li><strong className="text-fd-foreground">Databases</strong> — PostgreSQL, MySQL, MongoDB, Redis — query and modify directly</li>
          <li><strong className="text-fd-foreground">Secrets</strong> — KMS integration for secure credential management</li>
        </ul>

        <h3 className="text-lg font-semibold text-fd-foreground mt-8 mb-3">Communication Tools</h3>
        <ul className="space-y-2 text-fd-muted-foreground">
          <li><strong className="text-fd-foreground">GitHub</strong> — Issues, PRs, reviews, CI checks, releases</li>
          <li><strong className="text-fd-foreground">Slack</strong> — Read channels, post messages, respond to threads</li>
          <li><strong className="text-fd-foreground">Discord</strong> — Full server management, moderation, support</li>
          <li><strong className="text-fd-foreground">Email</strong> — Send, read, respond to emails programmatically</li>
          <li><strong className="text-fd-foreground">Linear/Jira</strong> — Create issues, update status, manage sprints</li>
        </ul>

        <h2 className="text-xl font-semibold text-fd-foreground mt-10 mb-4">Real-World Example: Bug Fix Across Systems</h2>
        <p>A user reports a bug on Discord. Without MCP tools, you copy the message, open your IDE, find the bug,
        fix it, push to GitHub, wait for CI, check logs. With Hanzo Bot and MCP tools:</p>
        <div className="my-6">
          <pre className="p-4 rounded-xl bg-[rgba(0,0,0,0.4)] text-sm text-neutral-300 font-mono overflow-x-auto">
            <code>{`1. Discord MCP → reads the bug report
2. GitHub MCP → searches codebase for related code
3. LSP MCP → traces the execution path
4. File MCP → applies the fix
5. Terminal MCP → runs tests
6. Git MCP → commits and pushes
7. GitHub MCP → opens PR, links to Discord thread
8. Discord MCP → replies to user: "Fix is in PR #247"`}</code>
          </pre>
        </div>
        <p>
          Total time: 3 minutes. Zero context switching. Zero copy-paste. The agent moves across systems
          the way a human would — but instantly.
        </p>

        <h2 className="text-xl font-semibold text-fd-foreground mt-10 mb-4">The Competitor Landscape</h2>
        <div className="not-prose my-6 text-sm">
          <div className="border border-neutral-800 rounded-xl overflow-hidden">
            <div className="grid grid-cols-3 gap-0">
              {[
                ['Tool', 'MCP Tools', 'Tool Access'],
                ['Hanzo Bot', '260+', 'Full system + cloud + messaging'],
                ['Claude Code', 'Yes', 'Terminal + file system only'],
                ['Cursor', 'Limited', 'IDE context only'],
                ['GitHub Copilot', 'No', 'IDE autocomplete only'],
                ['Devin', 'No', 'Proprietary sandbox'],
                ['OpenAI Codex', 'No', 'Sandboxed container'],
              ].map(([tool, mcp, access], i) => (
                <div key={tool} className={`contents ${i === 0 ? 'font-semibold text-white' : ''}`}>
                  <div className={`py-2 px-4 ${i % 2 === 0 ? 'bg-neutral-950/50' : ''} ${i === 0 ? 'border-b border-neutral-700' : ''} text-neutral-400`}>
                    {tool}
                  </div>
                  <div className={`py-2 px-4 ${i % 2 === 0 ? 'bg-neutral-950/50' : ''} ${i === 0 ? 'border-b border-neutral-700' : ''} ${i === 1 ? 'text-white font-semibold' : 'text-neutral-400'}`}>
                    {mcp}
                  </div>
                  <div className={`py-2 px-4 ${i % 2 === 0 ? 'bg-neutral-950/50' : ''} ${i === 0 ? 'border-b border-neutral-700' : ''} ${i === 1 ? 'text-white' : 'text-neutral-400'}`}>
                    {access}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <h2 className="text-xl font-semibold text-fd-foreground mt-10 mb-4">Build Your Own MCP Tools</h2>
        <p>
          MCP is an open protocol. If Hanzo Bot&apos;s 260+ built-in tools don&apos;t cover your use case,
          you can build custom tools in minutes. Any REST API, database, or service can become an MCP tool
          your agent uses autonomously.
        </p>

        <div className="not-prose my-10 p-6 rounded-xl border border-neutral-700 bg-neutral-950/50 text-center">
          <p className="text-lg font-semibold text-white mb-2">260+ tools. Zero context switching.</p>
          <p className="text-sm text-neutral-400 mb-4">Give your AI agent hands, not just a brain.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/get-started"
              className="inline-flex items-center justify-center px-6 py-2.5 rounded-lg bg-white text-black font-semibold text-sm hover:bg-neutral-200 transition-colors no-underline"
            >
              Start free
            </Link>
            <Link
              href="/skills"
              className="inline-flex items-center justify-center px-6 py-2.5 rounded-lg border border-neutral-600 text-white font-semibold text-sm hover:bg-neutral-900 transition-colors no-underline"
            >
              Browse skills
            </Link>
          </div>
        </div>
      </article>
    </main>
  );
}
