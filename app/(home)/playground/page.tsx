import Link from 'next/link';
import {
  ExternalLinkIcon, MonitorIcon, TerminalIcon,
  MessageSquareIcon, EyeIcon, FileTextIcon, ShieldIcon,
  ArrowRightIcon, SparklesIcon,
} from 'lucide-react';
import { GithubIcon } from '@/lib/layout.shared';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Playground',
  description: 'A Figma-like collaborative canvas for orchestrating AI agents. See all your bots on an infinite canvas.',
};

const features = [
  { icon: MonitorIcon, title: 'Infinite Canvas', desc: 'ReactFlow-powered infinite canvas with drag, zoom, pan, snap-to-grid, and minimap. See every agent at a glance.' },
  { icon: TerminalIcon, title: 'Live Terminal', desc: 'xterm.js terminal with WebGL rendering. Watch agents execute commands in real-time with 10K line scrollback.', cyan: true },
  { icon: MessageSquareIcon, title: 'Streaming Chat', desc: 'Chat with any bot. Streaming markdown with syntax highlighting. Send messages, see responses in real-time.' },
  { icon: EyeIcon, title: 'Desktop View', desc: 'noVNC remote desktop for Operative agents. See your bot\'s screen — browser, VS Code, or any GUI app.', cyan: true },
  { icon: FileTextIcon, title: 'File Browser', desc: 'Browse agent workspace files. View diffs, inspect outputs, and download artifacts directly from the canvas.' },
  { icon: ShieldIcon, title: 'ActionPill', desc: 'Centralized tool approval UI. Approve, deny, or auto-accept. Keyboard shortcuts: Tab, Enter, Backspace.', cyan: true },
];

const teams = [
  { emoji: '\u{1F6E0}', name: 'Dev Team', roles: 'Frontend, Backend, QA, DevOps' },
  { emoji: '\u{1F4DD}', name: 'Content Team', roles: 'Writer, Editor, SEO, Social' },
  { emoji: '\u{1F50D}', name: 'Research Team', roles: 'Analyst, Data Sci, Reviewer, PM' },
  { emoji: '\u{1F3AF}', name: 'Growth Team', roles: 'Marketing, Analytics, Design, Outreach' },
  { emoji: '\u{1F6E1}', name: 'Security Team', roles: 'Auditor, Pentester, SIEM, IR' },
  { emoji: '\u{2699}', name: 'Custom Team', roles: 'Build your own preset' },
];

const steps = [
  { num: '01', title: 'Connect', desc: 'Open app.hanzo.bot. The canvas connects to the Hanzo Bot gateway via WebSocket ZAP protocol.' },
  { num: '02', title: 'See Your Bots', desc: 'All your running agents appear as nodes on the infinite canvas. Cloud agents, local bots, team members.' },
  { num: '03', title: 'Drill Down', desc: 'Click any bot to see its terminal, chat, desktop, and files. Five views per agent, all live.' },
  { num: '04', title: 'Orchestrate', desc: 'Approve tool calls, provision teams, switch permission modes. Command palette with Cmd+K.' },
];

const shortcuts = [
  { key: '\u2318K', label: 'Command palette' },
  { key: 'Tab', label: 'Next approval' },
  { key: '\u21E7Tab', label: 'Previous approval' },
  { key: 'Enter', label: 'Approve action' },
  { key: '\u232B', label: 'Deny action' },
  { key: 'Scroll', label: 'Zoom canvas' },
];

const archCards = [
  { title: 'Control Plane', desc: 'Go binary with embedded React SPA. Runs locally or in Kubernetes. Agent registry, health checks, job routing.', tech: 'Go + Gin + embed' },
  { title: 'Web Client', desc: 'React + TypeScript SPA. ReactFlow canvas, 5 Zustand stores, WebSocket gateway client, xterm.js, noVNC.', tech: 'React + Vite + Zustand' },
  { title: 'Gateway', desc: 'WebSocket ZAP protocol for real-time agent communication. 43+ RPC methods. Events: chat, agent, exec approval.', tech: 'WebSocket + JSON-RPC' },
  { title: 'Deployment', desc: "DOKS Kubernetes cluster in hanzo namespace. 2 replicas, rolling updates, Let's Encrypt TLS, nginx ingress.", tech: 'K8s + Helm + GHCR' },
];

export default function PlaygroundPage() {
  return (
    <main className="relative z-[1] max-w-[960px] mx-auto px-6 py-10">
      <div className="stars" />
      <div className="nebula" />

      {/* Hero */}
      <header className="text-center mb-12 animate-[fadeInUp_0.6s_ease-out]">
        <span className="inline-block font-mono text-xs font-semibold text-[#a3a3a3] bg-[rgba(255,255,255,0.04)] border border-fd-border px-3 py-1 rounded-full mb-4 tracking-wider">
          Now Live at app.hanzo.bot
        </span>
        <h1 className="text-4xl lg:text-5xl font-bold tracking-tight mb-3 bg-gradient-to-br from-fd-foreground to-neutral-400 bg-clip-text text-transparent">
          Hanzo Playground
        </h1>
        <p className="text-lg text-fd-muted-foreground mb-4">
          A Figma-like canvas for orchestrating AI agents
        </p>
        <p className="text-base text-fd-muted-foreground max-w-[640px] mx-auto leading-relaxed mb-8">
          See all your bots on an infinite canvas. Drill into any bot for its terminal, chat, desktop, and files.
          Provision entire teams with one click. Approve tool calls from a centralized UI.
        </p>
        <div className="flex gap-3 justify-center flex-wrap">
          <a
            href="https://app.hanzo.bot/ui/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 font-semibold text-[#050810] bg-white rounded-xl no-underline transition-all hover:-translate-y-0.5 hover:shadow-[0_8px_40px_rgba(255,255,255,0.25)]"
          >
            Open Playground
            <ExternalLinkIcon className="w-4 h-4" />
          </a>
          <a
            href="https://github.com/hanzoai/playground"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 font-semibold text-fd-foreground border border-fd-border bg-[rgba(255,255,255,0.03)] rounded-xl no-underline transition-all hover:-translate-y-0.5 hover:border-neutral-600"
          >
            <GithubIcon />
            View Source
          </a>
        </div>
      </header>

      {/* Canvas Preview Mockup */}
      <section className="mb-16">
        <div className="border border-fd-border rounded-2xl overflow-hidden bg-fd-card shadow-[0_16px_64px_rgba(0,0,0,0.4)]">
          <div className="flex items-center gap-3 px-4 py-3 bg-[rgba(17,24,39,0.8)] border-b border-fd-border">
            <div className="flex gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
            </div>
            <span className="font-mono text-[0.7rem] text-fd-muted-foreground">Hanzo Playground — app.hanzo.bot</span>
          </div>
          <div className="flex h-[340px] max-sm:h-[260px]">
            <div className="w-[140px] border-r border-fd-border p-3 shrink-0 max-sm:hidden">
              {['Playground', 'Dashboard', 'Workflows', 'Teams'].map((item, i) => (
                <div key={item} className={`flex items-center gap-2 px-2.5 py-2 rounded-lg text-xs ${i === 0 ? 'text-white bg-[rgba(255,255,255,0.04)]' : 'text-fd-muted-foreground'}`}>
                  <span className="text-[0.8rem] opacity-70">{['\u25CB', '\u25A1', '\u25B7', '\u2630'][i]}</span>
                  <span className="font-medium">{item}</span>
                </div>
              ))}
            </div>
            <div className="flex-1 relative overflow-hidden">
              <div className="absolute inset-0" style={{
                backgroundImage: 'linear-gradient(rgba(136,146,176,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(136,146,176,0.04) 1px, transparent 1px)',
                backgroundSize: '24px 24px',
              }} />
              {[
                { name: 'dev-agent', model: 'claude-opus-4-6', busy: true, top: 40, left: 60 },
                { name: 'qa-agent', model: 'gpt-5.2', busy: false, top: 120, left: 280 },
                { name: 'ops-agent', model: 'qwen3-235b', busy: true, top: 200, left: 280 },
              ].map((node) => (
                <div
                  key={node.name}
                  className="absolute px-3.5 py-2.5 rounded-xl border border-fd-border bg-[rgba(10,15,26,0.9)] backdrop-blur-sm flex flex-col gap-0.5 transition-all hover:border-neutral-600 hover:-translate-y-0.5"
                  style={{ top: node.top, left: node.left }}
                >
                  <span className={`absolute top-2 right-2 w-2 h-2 rounded-full ${node.busy ? 'bg-[#a3a3a3] shadow-[0_0_8px_rgba(163,163,163,0.5)] animate-[pulse_2s_ease-in-out_infinite]' : 'bg-fd-muted-foreground'}`} />
                  <span className="text-[0.8rem] font-semibold text-fd-foreground">{node.name}</span>
                  <span className="font-mono text-[0.6rem] text-fd-muted-foreground">{node.model}</span>
                </div>
              ))}
              <div className="absolute top-[40px] left-[480px] px-5 py-3.5 rounded-xl border border-dashed border-fd-border/25 flex flex-col items-center gap-1 max-sm:hidden">
                <span className="text-xl text-fd-muted-foreground font-light">+</span>
                <span className="text-[0.7rem] text-fd-muted-foreground">Add a bot</span>
              </div>
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-3 px-3.5 py-2 rounded-full border border-neutral-600/30 bg-[rgba(10,15,26,0.95)] backdrop-blur-xl font-mono text-[0.7rem] whitespace-nowrap">
                <span className="text-fd-muted-foreground">bash: npm test</span>
                <span className="flex gap-1.5">
                  <span className="text-[#a3a3a3] font-semibold">Approve</span>
                  <span className="text-white font-semibold">Deny</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="mb-14">
        <h2 className="text-xl font-semibold flex items-center gap-2.5 mb-5">
          <span className="text-white font-bold">&#x27E9;</span> Everything in One Canvas
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((f) => {
            const Icon = f.icon;
            return (
              <div key={f.title} className="flex flex-col gap-3 p-5 rounded-2xl border border-fd-border bg-[rgba(10,15,26,0.6)] backdrop-blur-sm transition-all hover:-translate-y-1 hover:border-neutral-600">
                <div className={`flex items-center justify-center w-10 h-10 rounded-xl bg-[rgba(255,255,255,0.04)] ${f.cyan ? 'text-[#a3a3a3]' : 'text-white'}`}>
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-sm font-semibold text-fd-foreground">{f.title}</h3>
                <p className="text-xs text-fd-muted-foreground leading-relaxed">{f.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Team Presets */}
      <section className="mb-14">
        <h2 className="text-xl font-semibold flex items-center gap-2.5 mb-2">
          <span className="text-white font-bold">&#x27E9;</span> One-Click Team Presets
        </h2>
        <p className="text-sm text-fd-muted-foreground mb-5 leading-relaxed">
          Provision an entire team of specialized agents with a single click.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {teams.map((t) => (
            <div key={t.name} className="flex flex-col items-center gap-1.5 p-6 rounded-2xl border border-fd-border bg-[rgba(10,15,26,0.6)] text-center transition-all hover:-translate-y-1 hover:border-neutral-600">
              <span className="text-3xl mb-1">{t.emoji}</span>
              <span className="text-sm font-semibold text-fd-foreground">{t.name}</span>
              <span className="font-mono text-[0.7rem] text-fd-muted-foreground">{t.roles}</span>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="mb-14">
        <h2 className="text-xl font-semibold flex items-center gap-2.5 mb-5">
          <span className="text-white font-bold">&#x27E9;</span> How It Works
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {steps.map((s) => (
            <div key={s.num} className="flex flex-col gap-2 p-5 rounded-2xl border border-fd-border bg-[rgba(10,15,26,0.6)] transition-all hover:-translate-y-1 hover:border-neutral-600">
              <span className="font-mono text-[0.7rem] font-bold text-white">{s.num}</span>
              <h3 className="text-base font-semibold text-fd-foreground">{s.title}</h3>
              <p className="text-xs text-fd-muted-foreground leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Keyboard Shortcuts */}
      <section className="mb-14">
        <h2 className="text-xl font-semibold flex items-center gap-2.5 mb-5">
          <span className="text-white font-bold">&#x27E9;</span> Keyboard-First
        </h2>
        <div className="flex flex-wrap gap-3">
          {shortcuts.map((s) => (
            <div key={s.key} className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl border border-fd-border bg-[rgba(10,15,26,0.6)] text-sm text-fd-muted-foreground">
              <kbd className="font-mono text-xs font-semibold text-fd-foreground bg-fd-secondary border border-fd-border rounded-md px-2 py-0.5 min-w-[28px] text-center">
                {s.key}
              </kbd>
              <span>{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Architecture */}
      <section className="mb-14">
        <h2 className="text-xl font-semibold flex items-center gap-2.5 mb-5">
          <span className="text-white font-bold">&#x27E9;</span> Architecture
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {archCards.map((a) => (
            <div key={a.title} className="flex flex-col gap-2 p-5 rounded-2xl border border-fd-border bg-[rgba(10,15,26,0.6)] transition-all hover:-translate-y-1 hover:border-neutral-600">
              <h3 className="text-base font-semibold text-fd-foreground">{a.title}</h3>
              <p className="text-xs text-fd-muted-foreground leading-relaxed">{a.desc}</p>
              <span className="font-mono text-[0.7rem] text-[#a3a3a3] bg-[rgba(255,255,255,0.03)] px-2 py-0.5 rounded w-fit">{a.tech}</span>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="text-center p-12 rounded-2xl border border-fd-border bg-[rgba(10,15,26,0.6)] backdrop-blur-sm mb-10">
        <h2 className="text-2xl font-semibold mb-2">Ready to orchestrate?</h2>
        <p className="text-fd-muted-foreground mb-6">Open the playground and start managing your AI agents visually.</p>
        <div className="flex gap-4 justify-center flex-wrap">
          <a
            href="https://app.hanzo.bot/ui/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-[#050810] bg-white no-underline transition-all hover:-translate-y-0.5 hover:shadow-[0_8px_40px_rgba(255,255,255,0.25)]"
          >
            Open Playground
          </a>
          <a
            href="https://docs.hanzo.ai/docs/bot"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-fd-foreground border border-fd-border bg-[rgba(255,255,255,0.03)] no-underline transition-all hover:-translate-y-0.5 hover:border-neutral-600"
          >
            Read the Docs
          </a>
        </div>
      </section>
    </main>
  );
}
