import Link from 'next/link';
import {
  ArrowLeftIcon, ArrowRightIcon, SparklesIcon,
  RocketIcon, SettingsIcon, MessageSquareIcon,
  CloudIcon, WrenchIcon, BookOpenIcon,
  TerminalIcon, ZapIcon, ShieldIcon,
} from 'lucide-react';

export const metadata = {
  title: 'Guides — Hanzo Bot',
  description: 'Step-by-step guides for installing, configuring, and deploying Hanzo Bot.',
};

const quickStart = [
  {
    step: '1',
    title: 'Install',
    desc: 'One command on Mac, Windows, or Linux. Docker and npm options available.',
    command: 'curl -fsSL https://hanzo.bot/install.sh | bash',
  },
  {
    step: '2',
    title: 'Configure',
    desc: 'Add your API key for any supported model provider. Anthropic, OpenAI, Google, or 100+ others.',
    command: 'bot config set ai.provider anthropic',
  },
  {
    step: '3',
    title: 'Connect a Channel',
    desc: 'Pair with WhatsApp, Telegram, Discord, Slack, or any supported chat platform.',
    command: 'bot channels add telegram',
  },
  {
    step: '4',
    title: 'Start Talking',
    desc: 'Send a message on your connected channel. Your bot responds in real time.',
    command: 'bot gateway run',
  },
];

const categories = [
  {
    icon: RocketIcon,
    title: 'Getting Started',
    desc: 'Installation, first run, and connecting your first chat channel.',
    color: '#FFFFFF',
    guides: [
      { title: 'Install on macOS', href: 'https://docs.hanzo.bot/installation/mac' },
      { title: 'Install on Linux', href: 'https://docs.hanzo.bot/installation/linux' },
      { title: 'Install on Windows', href: 'https://docs.hanzo.bot/installation/windows' },
      { title: 'Docker Quick Start', href: 'https://docs.hanzo.bot/installation/docker' },
      { title: 'Your First Bot', href: 'https://docs.hanzo.bot/quickstart' },
    ],
  },
  {
    icon: SettingsIcon,
    title: 'Configuration',
    desc: 'API keys, model selection, memory, hooks, and advanced settings.',
    color: '#FFFFFF',
    guides: [
      { title: 'API Key Setup', href: 'https://docs.hanzo.bot/configuration' },
      { title: 'Model Selection', href: 'https://docs.hanzo.bot/configuration/models' },
      { title: 'Memory and Context', href: 'https://docs.hanzo.bot/features/memory' },
      { title: 'Hooks and Triggers', href: 'https://docs.hanzo.bot/configuration#hooks' },
      { title: 'Environment Variables', href: 'https://docs.hanzo.bot/configuration/environment' },
    ],
  },
  {
    icon: MessageSquareIcon,
    title: 'Channels',
    desc: 'Connect to every chat platform your team uses.',
    color: '#FFFFFF',
    guides: [
      { title: 'WhatsApp Setup', href: 'https://docs.hanzo.bot/channels/whatsapp' },
      { title: 'Telegram Bot', href: 'https://docs.hanzo.bot/channels/telegram' },
      { title: 'Discord Server', href: 'https://docs.hanzo.bot/channels/discord' },
      { title: 'Slack Workspace', href: 'https://docs.hanzo.bot/channels/slack' },
      { title: 'Signal, iMessage, and More', href: 'https://docs.hanzo.bot/channels' },
    ],
  },
  {
    icon: CloudIcon,
    title: 'Deployment',
    desc: 'Run in the cloud, on a VM, or as a managed service.',
    color: '#FFFFFF',
    guides: [
      { title: 'Deploy to Hanzo Cloud', href: 'https://docs.hanzo.bot/cloud' },
      { title: 'Self-Host on a VPS', href: 'https://docs.hanzo.bot/deployment/self-host' },
      { title: 'Docker Compose', href: 'https://docs.hanzo.bot/deployment/docker' },
      { title: 'Kubernetes', href: 'https://docs.hanzo.bot/deployment/kubernetes' },
      { title: 'CI/CD Integration', href: 'https://docs.hanzo.bot/deployment/ci-cd' },
    ],
  },
  {
    icon: WrenchIcon,
    title: 'Advanced',
    desc: 'Skills, plugins, MCP tools, computer use, and custom workflows.',
    color: '#FFFFFF',
    guides: [
      { title: 'Build a Custom Skill', href: 'https://docs.hanzo.bot/skills/building' },
      { title: 'MCP Tool Integration', href: 'https://docs.hanzo.bot/features/mcp' },
      { title: 'Browser Automation', href: 'https://docs.hanzo.bot/features/browser' },
      { title: 'Cron Jobs and Webhooks', href: 'https://docs.hanzo.bot/features/cron' },
      { title: 'Multi-Agent Coordination', href: 'https://docs.hanzo.bot/features/multi-agent' },
    ],
  },
  {
    icon: ShieldIcon,
    title: 'Security',
    desc: 'Permissions, sandboxing, encryption, and enterprise auth.',
    color: '#FFFFFF',
    guides: [
      { title: 'Permission Model', href: 'https://docs.hanzo.bot/security/permissions' },
      { title: 'Sandboxed Execution', href: 'https://docs.hanzo.bot/security/sandbox' },
      { title: 'Credential Storage', href: 'https://docs.hanzo.bot/security/credentials' },
      { title: 'IAM and SSO', href: 'https://docs.hanzo.bot/security/iam' },
      { title: 'Audit Logging', href: 'https://docs.hanzo.bot/security/audit' },
    ],
  },
];

export default function GuidesPage() {
  return (
    <main className="relative z-[1] max-w-[1000px] mx-auto px-4 sm:px-6 py-10">

      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm text-fd-muted-foreground mb-8">
        <Link href="/" className="inline-flex items-center gap-1 no-underline text-fd-muted-foreground hover:text-fd-foreground transition-colors">
          <ArrowLeftIcon className="w-3.5 h-3.5" />
          Home
        </Link>
        <span>/</span>
        <span className="text-fd-foreground">Guides</span>
      </nav>

      {/* Hero */}
      <header className="text-center mb-14 animate-[fadeInUp_0.6s_ease-out]">
        <h1 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-br from-fd-foreground via-neutral-400 to-[#a3a3a3] bg-[length:200%_200%] bg-clip-text text-transparent">
          Guides
        </h1>
        <p className="text-base sm:text-lg text-fd-muted-foreground max-w-[600px] mx-auto leading-relaxed">
          Step-by-step instructions for every part of Hanzo Bot.
          <br className="hidden sm:block" />
          From first install to production deployment.
        </p>
      </header>

      {/* Quick Start */}
      <section className="mb-14">
        <h2 className="text-xl font-semibold flex items-center gap-2.5 mb-5">
          <span className="text-white font-bold">&#x27E9;</span> Quick Start
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {quickStart.map((item) => (
            <div
              key={item.step}
              className="flex flex-col gap-3 p-5 rounded-2xl border border-fd-border bg-[rgba(10,15,26,0.6)] backdrop-blur-sm"
            >
              <div className="flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-[rgba(255,255,255,0.1)] text-sm font-bold text-white">
                  {item.step}
                </span>
                <h3 className="text-sm font-semibold text-fd-foreground">{item.title}</h3>
              </div>
              <p className="text-xs text-fd-muted-foreground leading-relaxed">{item.desc}</p>
              <code className="block px-3 py-2 rounded-lg bg-[rgba(0,0,0,0.4)] text-xs text-neutral-400 font-mono overflow-x-auto">
                {item.command}
              </code>
            </div>
          ))}
        </div>
      </section>

      {/* Guide Categories */}
      <section className="mb-14">
        <h2 className="text-xl font-semibold flex items-center gap-2.5 mb-5">
          <span className="text-white font-bold">&#x27E9;</span> Browse by Category
        </h2>
        <div className="flex flex-col gap-6">
          {categories.map((cat) => {
            const Icon = cat.icon;
            return (
              <div
                key={cat.title}
                className="p-6 rounded-2xl border border-fd-border bg-[rgba(10,15,26,0.6)] backdrop-blur-sm transition-all hover:border-neutral-600"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div
                    className="flex items-center justify-center w-10 h-10 rounded-xl"
                    style={{ backgroundColor: `${cat.color}12`, color: cat.color }}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-fd-foreground">{cat.title}</h3>
                    <p className="text-xs text-fd-muted-foreground">{cat.desc}</p>
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
                  {cat.guides.map((guide) => (
                    <a
                      key={guide.title}
                      href={guide.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-2 px-3.5 py-2.5 rounded-xl border border-transparent bg-[rgba(255,255,255,0.03)] no-underline text-inherit transition-all hover:border-fd-border hover:bg-[rgba(255,255,255,0.06)]"
                    >
                      <BookOpenIcon className="w-3.5 h-3.5 text-neutral-500 shrink-0" />
                      <span className="text-sm text-fd-muted-foreground group-hover:text-fd-foreground transition-colors">{guide.title}</span>
                      <ArrowRightIcon className="w-3 h-3 text-neutral-600 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* CLI Reference */}
      <section className="mb-14">
        <h2 className="text-xl font-semibold flex items-center gap-2.5 mb-5">
          <span className="text-white font-bold">&#x27E9;</span> CLI Reference
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            { icon: TerminalIcon, title: 'bot gateway run', desc: 'Start the agent gateway and connect all channels.' },
            { icon: SettingsIcon, title: 'bot config set', desc: 'Configure API keys, model providers, and preferences.' },
            { icon: ZapIcon, title: 'bot channels add', desc: 'Connect a new chat platform (Telegram, Discord, Slack, etc.).' },
          ].map((cmd) => {
            const Icon = cmd.icon;
            return (
              <div
                key={cmd.title}
                className="flex flex-col gap-2 p-5 rounded-2xl border border-fd-border bg-[rgba(10,15,26,0.6)] backdrop-blur-sm"
              >
                <Icon className="w-5 h-5 text-white" />
                <code className="text-xs text-neutral-400 font-mono">{cmd.title}</code>
                <p className="text-xs text-fd-muted-foreground leading-relaxed">{cmd.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="text-center p-6 sm:p-12 rounded-2xl border border-fd-border bg-[rgba(10,15,26,0.6)] backdrop-blur-sm mb-10">
        <h2 className="text-2xl font-semibold mb-2">Need more help?</h2>
        <p className="text-fd-muted-foreground mb-6 max-w-[500px] mx-auto">
          Check the full documentation or ask the community on Discord.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <a
            href="https://docs.hanzo.bot"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-[#050810] bg-gradient-to-br from-white to-[#d4d4d4] no-underline transition-all hover:-translate-y-0.5 hover:shadow-[0_8px_40px_rgba(255,255,255,0.45)] shadow-[0_4px_24px_rgba(255,255,255,0.3)]"
          >
            <SparklesIcon className="w-5 h-5" />
            Full Documentation
          </a>
          <a
            href="https://discord.gg/hanzo"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-fd-foreground bg-[rgba(255,255,255,0.05)] border border-fd-border no-underline transition-all hover:-translate-y-0.5 hover:border-neutral-600"
          >
            Ask on Discord
          </a>
        </div>
      </section>
    </main>
  );
}
