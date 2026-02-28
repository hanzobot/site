import Link from 'next/link';
import {
  ArrowLeftIcon, ArrowRightIcon, SparklesIcon,
  BrainCircuitIcon, EyeIcon, NetworkIcon, ShieldIcon,
  CpuIcon, LayersIcon, WaypointsIcon, LockIcon,
  BookOpenIcon, FileTextIcon, GraduationCapIcon,
} from 'lucide-react';

export const metadata = {
  title: 'Research — Hanzo Bot',
  description: 'Research at Hanzo: AI agent architecture, multi-modal intelligence, distributed systems, and security.',
};

const researchAreas = [
  {
    icon: BrainCircuitIcon,
    title: 'AI Agent Architecture',
    desc: 'Designing autonomous agents that reason, plan, and execute multi-step tasks across heterogeneous environments. Our work focuses on composable agent graphs where each node is a specialized capability (code generation, browser control, file system access) coordinated by a central planner that decomposes complex goals into executable sub-tasks.',
    topics: [
      'Hierarchical task decomposition for long-horizon goals',
      'Persistent memory systems with retrieval-augmented context',
      'Tool-use grounding and structured function calling',
      'Skill composition via the Model Context Protocol (MCP)',
    ],
    links: [
      { label: 'MCP Specification', href: 'https://modelcontextprotocol.io' },
      { label: 'Bot Skills Registry', href: 'https://skills.hanzo.bot' },
    ],
  },
  {
    icon: EyeIcon,
    title: 'Multi-Modal Intelligence',
    desc: 'Building agents that perceive and act across text, images, audio, and desktop environments. Hanzo agents use computer vision for screen understanding, voice transcription for natural interaction, and image generation for creative workflows -- all unified under a single agent loop.',
    topics: [
      'Screen understanding via Peekaboo vision pipeline',
      'Voice Wake and real-time speech-to-agent bridging',
      'Image generation and manipulation via diffusion models',
      'Cross-modal context fusion for richer agent reasoning',
    ],
    links: [
      { label: 'Operative: Computer Use', href: 'https://docs.hanzo.ai/docs/operative' },
      { label: 'Voice Integration', href: 'https://docs.hanzo.bot/features/voice' },
    ],
  },
  {
    icon: NetworkIcon,
    title: 'Distributed AI Systems',
    desc: 'Scaling agent workloads across local machines, cloud VMs, and edge devices. Our gateway architecture routes messages between any chat platform and any AI model, with a peer-to-peer marketplace that lets agents sell compute to each other. Each node maintains its own state while participating in a coordinated mesh.',
    topics: [
      'Gateway-based message routing across 10+ chat platforms',
      'P2P agent marketplace with real-time billing',
      'Cloud VM provisioning with automatic agent deployment',
      'Multi-model orchestration with 100+ provider backends',
    ],
    links: [
      { label: 'Hanzo LLM Gateway', href: 'https://docs.hanzo.ai/docs/llm' },
      { label: 'Cloud Platform', href: 'https://docs.hanzo.ai/docs/platform' },
    ],
  },
  {
    icon: ShieldIcon,
    title: 'Security and Privacy',
    desc: 'AI agents with full system access demand rigorous security boundaries. We research sandboxed execution environments, permission-gated tool access, encrypted credential storage, and privacy-preserving architectures where user data never leaves the local machine unless explicitly authorized.',
    topics: [
      'Sandboxed shell execution with configurable permission tiers',
      'Encrypted credential storage with per-agent isolation',
      'IAM integration for multi-tenant enterprise deployments',
      'Local-first architecture where data stays on-device by default',
    ],
    links: [
      { label: 'Hanzo IAM', href: 'https://hanzo.id' },
      { label: 'Security Docs', href: 'https://docs.hanzo.bot/security' },
    ],
  },
];

const publications = [
  {
    title: 'Composable Agent Skills via MCP',
    venue: 'Hanzo Engineering Blog',
    date: '2026',
    desc: 'How the Model Context Protocol enables a plug-and-play skill system where agents discover, install, and compose capabilities at runtime.',
    href: 'https://hanzo.ai/blog',
  },
  {
    title: 'Gateway Architecture for Multi-Platform AI Agents',
    venue: 'Hanzo Engineering Blog',
    date: '2026',
    desc: 'Designing a unified message routing layer that connects WhatsApp, Telegram, Discord, Slack, Signal, iMessage, and more to a single agent runtime.',
    href: 'https://hanzo.ai/blog',
  },
  {
    title: 'Local-First AI: Privacy-Preserving Agent Deployment',
    venue: 'Hanzo Engineering Blog',
    date: '2026',
    desc: 'An architecture where AI agents run entirely on user hardware, with optional cloud sync, ensuring data sovereignty without sacrificing capability.',
    href: 'https://hanzo.ai/blog',
  },
];

export default function ResearchPage() {
  return (
    <main className="relative z-[1] max-w-[1000px] mx-auto px-4 sm:px-6 py-10">

      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm text-fd-muted-foreground mb-8">
        <Link href="/" className="inline-flex items-center gap-1 no-underline text-fd-muted-foreground hover:text-fd-foreground transition-colors">
          <ArrowLeftIcon className="w-3.5 h-3.5" />
          Home
        </Link>
        <span>/</span>
        <span className="text-fd-foreground">Research</span>
      </nav>

      {/* Hero */}
      <header className="text-center mb-14 animate-[fadeInUp_0.6s_ease-out]">
        <h1 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-br from-fd-foreground via-neutral-400 to-[#a3a3a3] bg-[length:200%_200%] bg-clip-text text-transparent">
          Research at Hanzo
        </h1>
        <p className="text-base sm:text-lg text-fd-muted-foreground max-w-[640px] mx-auto leading-relaxed">
          We build AI agents that run locally, talk on every platform, and use your computer like a human would.
          <br className="hidden sm:block" />
          These are the problems we work on.
        </p>
      </header>

      {/* Research Areas */}
      <section className="mb-14">
        <h2 className="text-xl font-semibold flex items-center gap-2.5 mb-5">
          <span className="text-white font-bold">&#x27E9;</span> Research Areas
        </h2>
        <div className="flex flex-col gap-6">
          {researchAreas.map((area) => {
            const Icon = area.icon;
            return (
              <div
                key={area.title}
                className="p-6 rounded-2xl border border-fd-border bg-[rgba(10,15,26,0.6)] backdrop-blur-sm transition-all hover:border-neutral-600"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-[rgba(255,255,255,0.08)]">
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-fd-foreground">{area.title}</h3>
                </div>
                <p className="text-sm text-fd-muted-foreground leading-relaxed mb-4">{area.desc}</p>
                <div className="mb-4">
                  <h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-2">Key Topics</h4>
                  <ul className="flex flex-col gap-1.5">
                    {area.topics.map((topic) => (
                      <li key={topic} className="flex items-start gap-2 text-sm text-fd-muted-foreground">
                        <CpuIcon className="w-3.5 h-3.5 text-neutral-500 shrink-0 mt-0.5" />
                        {topic}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex flex-wrap gap-2">
                  {area.links.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-fd-border bg-[rgba(10,15,26,0.5)] text-xs text-fd-muted-foreground no-underline transition-all hover:border-neutral-600 hover:text-fd-foreground"
                    >
                      {link.label}
                      <ArrowRightIcon className="w-3 h-3" />
                    </a>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Publications */}
      <section className="mb-14">
        <h2 className="text-xl font-semibold flex items-center gap-2.5 mb-5">
          <span className="text-white font-bold">&#x27E9;</span> Publications and Posts
        </h2>
        <div className="flex flex-col gap-4">
          {publications.map((pub) => (
            <a
              key={pub.title}
              href={pub.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col gap-2 p-5 rounded-2xl border border-fd-border bg-[rgba(10,15,26,0.6)] backdrop-blur-sm no-underline text-inherit transition-all hover:-translate-y-0.5 hover:border-neutral-600 hover:shadow-[0_8px_24px_rgba(255,255,255,0.1)]"
            >
              <div className="flex items-center gap-2 text-xs text-fd-muted-foreground">
                <FileTextIcon className="w-3.5 h-3.5" />
                <span>{pub.venue}</span>
                <span className="text-neutral-600">|</span>
                <span>{pub.date}</span>
              </div>
              <h3 className="text-sm font-semibold text-fd-foreground group-hover:text-white transition-colors">{pub.title}</h3>
              <p className="text-xs text-fd-muted-foreground leading-relaxed">{pub.desc}</p>
            </a>
          ))}
        </div>
      </section>

      {/* Open Source */}
      <section className="mb-14">
        <h2 className="text-xl font-semibold flex items-center gap-2.5 mb-5">
          <span className="text-white font-bold">&#x27E9;</span> Open Source
        </h2>
        <p className="text-sm text-fd-muted-foreground mb-5 leading-relaxed">
          Hanzo Bot is fully open source. Our research ships as production code that anyone can run, extend, and contribute to.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            { icon: LayersIcon, title: 'Bot Runtime', desc: 'The core agent runtime, CLI, and gateway. TypeScript, MIT licensed.', href: 'https://github.com/hanzoai/bot' },
            { icon: WaypointsIcon, title: 'MCP Skills', desc: 'Community-built skills and tool integrations. 700+ and growing.', href: 'https://skills.hanzo.bot' },
            { icon: LockIcon, title: 'Hanzo IAM', desc: 'Identity and access management for multi-tenant agent deployments.', href: 'https://github.com/hanzoai' },
          ].map((repo) => {
            const Icon = repo.icon;
            return (
              <a
                key={repo.title}
                href={repo.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col gap-3 p-5 rounded-2xl border border-fd-border bg-[rgba(10,15,26,0.6)] backdrop-blur-sm no-underline text-inherit transition-all hover:-translate-y-1 hover:border-neutral-600 hover:shadow-[0_8px_24px_rgba(163,163,163,0.15)]"
              >
                <Icon className="w-6 h-6 text-white" />
                <h3 className="text-sm font-semibold text-fd-foreground">{repo.title}</h3>
                <p className="text-xs text-fd-muted-foreground leading-relaxed">{repo.desc}</p>
              </a>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="text-center p-6 sm:p-12 rounded-2xl border border-fd-border bg-[rgba(10,15,26,0.6)] backdrop-blur-sm mb-10">
        <GraduationCapIcon className="w-8 h-8 text-white mx-auto mb-4" />
        <h2 className="text-2xl font-semibold mb-2">Interested in collaborating?</h2>
        <p className="text-fd-muted-foreground mb-6 max-w-[500px] mx-auto">
          We work with researchers, universities, and open-source contributors. Reach out on Discord or GitHub.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <a
            href="https://discord.gg/hanzo"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-[#050810] bg-gradient-to-br from-white to-[#d4d4d4] no-underline transition-all hover:-translate-y-0.5 hover:shadow-[0_8px_40px_rgba(255,255,255,0.45)] shadow-[0_4px_24px_rgba(255,255,255,0.3)]"
          >
            <SparklesIcon className="w-5 h-5" />
            Join Discord
          </a>
          <a
            href="https://github.com/hanzoai/bot"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-fd-foreground bg-[rgba(255,255,255,0.05)] border border-fd-border no-underline transition-all hover:-translate-y-0.5 hover:border-neutral-600"
          >
            View on GitHub
          </a>
        </div>
      </section>
    </main>
  );
}
