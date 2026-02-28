import Link from 'next/link';
import {
  ArrowLeftIcon, ArrowRightIcon, SparklesIcon,
  MessageCircleIcon, MailIcon, BookOpenIcon,
  ActivityIcon, ShieldCheckIcon, HeadphonesIcon,
  CodeIcon, LifeBuoyIcon, ClockIcon,
} from 'lucide-react';

export const metadata = {
  title: 'Support — Hanzo Bot',
  description: 'Get help with Hanzo Bot. Discord, GitHub, email support, documentation, and enterprise options.',
};

const contactMethods = [
  {
    icon: MessageCircleIcon,
    title: 'Discord',
    desc: 'The fastest way to get help. Ask questions, report issues, or chat with the community and team in real time.',
    href: 'https://discord.gg/hanzo',
    cta: 'Join Discord',
    responseTime: 'Minutes',
  },
  {
    icon: CodeIcon,
    title: 'GitHub Issues',
    desc: 'Found a bug or have a feature request? Open an issue on GitHub. We triage every issue and prioritize based on impact.',
    href: 'https://github.com/hanzoai/bot/issues',
    cta: 'Open an Issue',
    responseTime: '24 hours',
  },
  {
    icon: MailIcon,
    title: 'Email',
    desc: 'For account, billing, or private inquiries that are not suited for public channels.',
    href: 'mailto:support@hanzo.ai',
    cta: 'support@hanzo.ai',
    responseTime: '1 business day',
  },
  {
    icon: BookOpenIcon,
    title: 'Documentation',
    desc: 'Comprehensive guides, API reference, configuration options, and troubleshooting. Most questions are answered here.',
    href: 'https://docs.hanzo.bot',
    cta: 'Browse Docs',
    responseTime: 'Instant',
  },
];

const selfServiceResources = [
  {
    title: 'Installation Guide',
    desc: 'Step-by-step setup for macOS, Linux, Windows, and Docker.',
    href: 'https://docs.hanzo.bot/installation',
  },
  {
    title: 'Troubleshooting',
    desc: 'Common issues and how to resolve them. Start here before filing a bug.',
    href: 'https://docs.hanzo.bot/troubleshooting',
  },
  {
    title: 'Bot Doctor',
    desc: 'Run "bot doctor" to diagnose configuration, connectivity, and service issues automatically.',
    href: 'https://docs.hanzo.bot/gateway/doctor',
  },
  {
    title: 'Channel Setup',
    desc: 'Guides for connecting WhatsApp, Telegram, Discord, Slack, Signal, and more.',
    href: 'https://docs.hanzo.bot/channels',
  },
  {
    title: 'FAQ',
    desc: 'Answers to the most common questions about pricing, security, and capabilities.',
    href: '/faq',
  },
  {
    title: 'GitHub Discussions',
    desc: 'Search past conversations or start a new thread for help from the community.',
    href: 'https://github.com/hanzoai/bot/discussions',
  },
];

export default function SupportPage() {
  return (
    <main className="relative z-[1] max-w-[1000px] mx-auto px-4 sm:px-6 py-10">

      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm text-fd-muted-foreground mb-8">
        <Link href="/" className="inline-flex items-center gap-1 no-underline text-fd-muted-foreground hover:text-fd-foreground transition-colors">
          <ArrowLeftIcon className="w-3.5 h-3.5" />
          Home
        </Link>
        <span>/</span>
        <span className="text-fd-foreground">Support</span>
      </nav>

      {/* Hero */}
      <header className="text-center mb-14 animate-[fadeInUp_0.6s_ease-out]">
        <h1 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-br from-fd-foreground via-neutral-400 to-[#a3a3a3] bg-[length:200%_200%] bg-clip-text text-transparent">
          Support
        </h1>
        <p className="text-base sm:text-lg text-fd-muted-foreground max-w-[600px] mx-auto leading-relaxed">
          We are here to help. Choose the channel that works best for you.
        </p>
      </header>

      {/* Contact Methods */}
      <section className="mb-14">
        <h2 className="text-xl font-semibold flex items-center gap-2.5 mb-5">
          <span className="text-white font-bold">&#x27E9;</span> Get Help
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {contactMethods.map((method) => {
            const Icon = method.icon;
            const isEmail = method.href.startsWith('mailto:');
            return (
              <a
                key={method.title}
                href={method.href}
                target={isEmail ? undefined : '_blank'}
                rel={isEmail ? undefined : 'noopener noreferrer'}
                className="group flex flex-col gap-4 p-6 rounded-2xl border border-fd-border bg-[rgba(10,15,26,0.6)] backdrop-blur-sm no-underline text-inherit transition-all hover:-translate-y-1 hover:border-neutral-600 hover:shadow-[0_12px_40px_rgba(255,255,255,0.2)]"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-[rgba(255,255,255,0.08)]">
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-base font-semibold text-fd-foreground">{method.title}</h3>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-fd-muted-foreground">
                    <ClockIcon className="w-3 h-3" />
                    {method.responseTime}
                  </div>
                </div>
                <p className="text-sm text-fd-muted-foreground leading-relaxed flex-1">{method.desc}</p>
                <span className="inline-flex items-center gap-1.5 text-sm text-white font-medium group-hover:gap-2.5 transition-all">
                  {method.cta} <ArrowRightIcon className="w-4 h-4" />
                </span>
              </a>
            );
          })}
        </div>
      </section>

      {/* Status */}
      <section className="mb-14">
        <h2 className="text-xl font-semibold flex items-center gap-2.5 mb-5">
          <span className="text-white font-bold">&#x27E9;</span> System Status
        </h2>
        <a
          href="https://status.hanzo.ai"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-4 p-6 rounded-2xl border border-fd-border bg-[rgba(10,15,26,0.6)] backdrop-blur-sm no-underline text-inherit transition-all hover:border-neutral-600 hover:shadow-[0_8px_24px_rgba(255,255,255,0.1)]"
        >
          <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-[rgba(255,255,255,0.08)]">
            <ActivityIcon className="w-6 h-6 text-white" />
          </div>
          <div className="flex-1">
            <h3 className="text-base font-semibold text-fd-foreground mb-1">Hanzo Status Page</h3>
            <p className="text-sm text-fd-muted-foreground">Check the operational status of Hanzo Cloud, the LLM Gateway, and all platform services.</p>
          </div>
          <ArrowRightIcon className="w-5 h-5 text-fd-muted-foreground group-hover:text-white transition-colors" />
        </a>
      </section>

      {/* Self-Service */}
      <section className="mb-14">
        <h2 className="text-xl font-semibold flex items-center gap-2.5 mb-5">
          <span className="text-white font-bold">&#x27E9;</span> Self-Service Resources
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {selfServiceResources.map((resource) => {
            const isExternal = resource.href.startsWith('http');
            const El = isExternal ? 'a' : Link;
            const props = isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {};
            return (
              <El
                key={resource.title}
                href={resource.href}
                {...props}
                className="group flex flex-col gap-2 p-4 rounded-xl border border-fd-border bg-[rgba(10,15,26,0.6)] backdrop-blur-sm no-underline text-inherit transition-all hover:-translate-y-0.5 hover:border-neutral-600"
              >
                <h3 className="text-sm font-semibold text-fd-foreground group-hover:text-white transition-colors">{resource.title}</h3>
                <p className="text-xs text-fd-muted-foreground leading-relaxed">{resource.desc}</p>
              </El>
            );
          })}
        </div>
      </section>

      {/* Enterprise Support */}
      <section className="mb-14">
        <h2 className="text-xl font-semibold flex items-center gap-2.5 mb-5">
          <span className="text-white font-bold">&#x27E9;</span> Enterprise Support
        </h2>
        <div className="p-6 sm:p-8 rounded-2xl border border-[rgba(255,255,255,0.2)] bg-gradient-to-br from-[rgba(255,255,255,0.05)] to-[rgba(10,15,26,0.7)] backdrop-blur-sm">
          <div className="flex items-start gap-4 mb-6">
            <ShieldCheckIcon className="w-8 h-8 text-white shrink-0 mt-1" />
            <div>
              <h3 className="text-lg font-semibold text-fd-foreground mb-2">Priority Support for Teams</h3>
              <p className="text-sm text-fd-muted-foreground leading-relaxed">
                Enterprise customers get dedicated support with guaranteed response times, private Slack channels,
                onboarding assistance, and direct access to the engineering team.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
            {[
              { icon: HeadphonesIcon, title: 'Dedicated Support', desc: 'Private channel with guaranteed SLAs and priority escalation.' },
              { icon: LifeBuoyIcon, title: 'Onboarding Help', desc: 'Hands-on setup assistance for your team, channels, and infrastructure.' },
              { icon: ShieldCheckIcon, title: 'Security Review', desc: 'Architecture review, compliance documentation, and custom security configurations.' },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="flex flex-col gap-2 p-4 rounded-xl bg-[rgba(0,0,0,0.2)]">
                  <Icon className="w-5 h-5 text-white" />
                  <h4 className="text-sm font-semibold text-fd-foreground">{item.title}</h4>
                  <p className="text-xs text-fd-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>
          <div className="flex gap-4 flex-wrap">
            <a
              href="mailto:support@hanzo.ai?subject=Enterprise%20Support%20Inquiry"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-[#050810] bg-gradient-to-br from-white to-[#d4d4d4] no-underline transition-all hover:-translate-y-0.5 hover:shadow-[0_8px_40px_rgba(255,255,255,0.45)] shadow-[0_4px_24px_rgba(255,255,255,0.3)]"
            >
              <MailIcon className="w-4 h-4" />
              Contact Sales
            </a>
            <Link
              href="/pricing"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-fd-foreground bg-[rgba(255,255,255,0.05)] border border-fd-border no-underline transition-all hover:-translate-y-0.5 hover:border-neutral-600"
            >
              View Plans
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="text-center p-6 sm:p-12 rounded-2xl border border-fd-border bg-[rgba(10,15,26,0.6)] backdrop-blur-sm mb-10">
        <h2 className="text-2xl font-semibold mb-2">Ready to get started?</h2>
        <p className="text-fd-muted-foreground mb-6 max-w-[500px] mx-auto">
          Install Hanzo Bot in minutes. Free locally, $5/mo in the cloud.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <a
            href="https://app.hanzo.bot/auth/signup"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-[#050810] bg-gradient-to-br from-white to-[#d4d4d4] no-underline transition-all hover:-translate-y-0.5 hover:shadow-[0_8px_40px_rgba(255,255,255,0.45)] shadow-[0_4px_24px_rgba(255,255,255,0.3)]"
          >
            <SparklesIcon className="w-5 h-5" />
            Get Started Free
          </a>
          <Link
            href="/docs"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-fd-foreground bg-[rgba(255,255,255,0.05)] border border-fd-border no-underline transition-all hover:-translate-y-0.5 hover:border-neutral-600"
          >
            Read the Docs
          </Link>
        </div>
      </section>
    </main>
  );
}
