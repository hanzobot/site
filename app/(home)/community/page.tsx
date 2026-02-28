import Link from 'next/link';
import {
  ArrowLeftIcon, ArrowRightIcon, SparklesIcon,
  MessageCircleIcon, UsersIcon,
  HeartIcon, BookOpenIcon, LightbulbIcon,
  GitPullRequestIcon, StarIcon, CodeIcon,
  GlobeIcon,
} from 'lucide-react';

export const metadata = {
  title: 'Community — Hanzo Bot',
  description: 'Join the Hanzo Bot community. Discord, GitHub, contributors, and improvement proposals.',
};

const communityLinks = [
  {
    icon: MessageCircleIcon,
    title: 'Discord',
    desc: 'Real-time chat with the team and community. Get help, share what you built, or just hang out. The fastest way to get answers.',
    href: 'https://discord.gg/hanzo',
    cta: 'Join Discord',
    color: '#FFFFFF',
  },
  {
    icon: GlobeIcon,
    title: 'GitHub Discussions',
    desc: 'Long-form conversations, feature requests, and show-and-tell. Browse existing threads or start a new one.',
    href: 'https://github.com/hanzoai/bot/discussions',
    cta: 'Open Discussions',
    color: '#FFFFFF',
  },
  {
    icon: CodeIcon,
    title: 'GitHub Issues',
    desc: 'Report bugs, request features, or pick up a good first issue. Every contribution matters.',
    href: 'https://github.com/hanzoai/bot/issues',
    cta: 'Browse Issues',
    color: '#FFFFFF',
  },
  {
    icon: LightbulbIcon,
    title: 'Hanzo Improvement Proposals',
    desc: 'HIPs are how we propose and discuss significant changes to the Bot platform. Read existing proposals or submit your own.',
    href: 'https://github.com/hanzoai/hips',
    cta: 'View HIPs',
    color: '#FFFFFF',
  },
];

const stats = [
  { label: 'GitHub Stars', value: '12K+', icon: StarIcon },
  { label: 'Contributors', value: '200+', icon: UsersIcon },
  { label: 'Skills Published', value: '700+', icon: CodeIcon },
  { label: 'Discord Members', value: '5K+', icon: MessageCircleIcon },
];

const contributorGuide = [
  {
    step: '1',
    title: 'Fork the Repository',
    desc: 'Start by forking github.com/hanzoai/bot. Clone your fork locally and create a feature branch.',
  },
  {
    step: '2',
    title: 'Set Up Your Environment',
    desc: 'Run pnpm install, ensure Node 22+ is available, and run pnpm test to verify everything works.',
  },
  {
    step: '3',
    title: 'Make Your Changes',
    desc: 'Write real, production-quality code. Add tests for new functionality. Keep files concise and composable.',
  },
  {
    step: '4',
    title: 'Submit a Pull Request',
    desc: 'Push your branch, open a PR against main, and fill out the template. CI runs automatically.',
  },
];

export default function CommunityPage() {
  return (
    <main className="relative z-[1] max-w-[1000px] mx-auto px-4 sm:px-6 py-10">

      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm text-fd-muted-foreground mb-8">
        <Link href="/" className="inline-flex items-center gap-1 no-underline text-fd-muted-foreground hover:text-fd-foreground transition-colors">
          <ArrowLeftIcon className="w-3.5 h-3.5" />
          Home
        </Link>
        <span>/</span>
        <span className="text-fd-foreground">Community</span>
      </nav>

      {/* Hero */}
      <header className="text-center mb-14 animate-[fadeInUp_0.6s_ease-out]">
        <h1 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-br from-fd-foreground via-neutral-400 to-[#a3a3a3] bg-[length:200%_200%] bg-clip-text text-transparent">
          Community
        </h1>
        <p className="text-base sm:text-lg text-fd-muted-foreground max-w-[600px] mx-auto leading-relaxed">
          Built in the open. Shaped by contributors.
          <br className="hidden sm:block" />
          Join the people building the future of AI agents.
        </p>
      </header>

      {/* Stats */}
      <section className="mb-14">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                className="flex flex-col items-center gap-2 p-5 rounded-2xl border border-fd-border bg-[rgba(10,15,26,0.6)] backdrop-blur-sm"
              >
                <Icon className="w-5 h-5 text-neutral-500" />
                <span className="text-2xl font-bold text-fd-foreground">{stat.value}</span>
                <span className="text-xs text-fd-muted-foreground">{stat.label}</span>
              </div>
            );
          })}
        </div>
      </section>

      {/* Community Links */}
      <section className="mb-14">
        <h2 className="text-xl font-semibold flex items-center gap-2.5 mb-5">
          <span className="text-white font-bold">&#x27E9;</span> Get Involved
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {communityLinks.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.title}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col gap-4 p-6 rounded-2xl border border-fd-border bg-[rgba(10,15,26,0.6)] backdrop-blur-sm no-underline text-inherit transition-all hover:-translate-y-1 hover:border-neutral-600 hover:shadow-[0_12px_40px_rgba(255,255,255,0.2)]"
              >
                <div className="flex items-center gap-3">
                  <div
                    className="flex items-center justify-center w-10 h-10 rounded-xl"
                    style={{ backgroundColor: `${link.color}12`, color: link.color }}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-semibold text-fd-foreground">{link.title}</h3>
                </div>
                <p className="text-sm text-fd-muted-foreground leading-relaxed flex-1">{link.desc}</p>
                <span className="inline-flex items-center gap-1.5 text-sm text-white font-medium group-hover:gap-2.5 transition-all">
                  {link.cta} <ArrowRightIcon className="w-4 h-4" />
                </span>
              </a>
            );
          })}
        </div>
      </section>

      {/* Contributor Guide */}
      <section className="mb-14">
        <h2 className="text-xl font-semibold flex items-center gap-2.5 mb-5">
          <span className="text-white font-bold">&#x27E9;</span> Contributing
        </h2>
        <p className="text-sm text-fd-muted-foreground mb-5 leading-relaxed">
          Hanzo Bot is open source and welcomes contributions of all kinds: bug fixes, new skills, documentation improvements, and feature proposals.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {contributorGuide.map((item) => (
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
            </div>
          ))}
        </div>
        <div className="mt-5 flex flex-wrap gap-3">
          <a
            href="https://github.com/hanzoai/bot/issues?q=is%3Aopen+label%3A%22good+first+issue%22"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl border border-fd-border bg-[rgba(255,255,255,0.03)] text-sm text-fd-muted-foreground no-underline transition-all hover:border-neutral-600 hover:text-fd-foreground"
          >
            <GitPullRequestIcon className="w-4 h-4" />
            Good First Issues
          </a>
          <a
            href="https://docs.hanzo.bot/contributing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl border border-fd-border bg-[rgba(255,255,255,0.03)] text-sm text-fd-muted-foreground no-underline transition-all hover:border-neutral-600 hover:text-fd-foreground"
          >
            <BookOpenIcon className="w-4 h-4" />
            Contribution Docs
          </a>
        </div>
      </section>

      {/* Ecosystem */}
      <section className="mb-14">
        <h2 className="text-xl font-semibold flex items-center gap-2.5 mb-5">
          <span className="text-white font-bold">&#x27E9;</span> Ecosystem
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            { title: 'Skill Hub', desc: '700+ community-built skills. Install with one command or publish your own.', href: 'https://skills.hanzo.bot' },
            { title: 'Hanzo AI Platform', desc: 'LLM gateway, MCP tools, search, and compute infrastructure.', href: 'https://hanzo.ai' },
            { title: 'Hanzo Cloud', desc: 'Managed bot hosting. Deploy agents to cloud VMs with one click.', href: 'https://app.hanzo.bot' },
          ].map((item) => (
            <a
              key={item.title}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col gap-2 p-5 rounded-2xl border border-fd-border bg-[rgba(10,15,26,0.6)] backdrop-blur-sm no-underline text-inherit transition-all hover:-translate-y-1 hover:border-neutral-600 hover:shadow-[0_8px_24px_rgba(163,163,163,0.15)]"
            >
              <h3 className="text-sm font-semibold text-fd-foreground">{item.title}</h3>
              <p className="text-xs text-fd-muted-foreground leading-relaxed">{item.desc}</p>
            </a>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="text-center p-6 sm:p-12 rounded-2xl border border-fd-border bg-[rgba(10,15,26,0.6)] backdrop-blur-sm mb-10">
        <HeartIcon className="w-8 h-8 text-white mx-auto mb-4" />
        <h2 className="text-2xl font-semibold mb-2">Ready to join?</h2>
        <p className="text-fd-muted-foreground mb-6 max-w-[500px] mx-auto">
          Whether you want to build skills, fix bugs, or just say hello, the community is waiting for you.
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
            Star on GitHub
          </a>
        </div>
      </section>
    </main>
  );
}
