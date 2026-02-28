'use client';

import Link from 'next/link';
import { useState } from 'react';
import {
  ArrowLeftIcon, SparklesIcon,
  ChevronDownIcon, HelpCircleIcon,
  InfoIcon, RocketIcon, CreditCardIcon,
  ShieldIcon, WrenchIcon,
} from 'lucide-react';

interface FaqItem {
  q: string;
  a: string;
}

interface FaqCategory {
  icon: typeof InfoIcon;
  title: string;
  items: FaqItem[];
}

const faqCategories: FaqCategory[] = [
  {
    icon: InfoIcon,
    title: 'General',
    items: [
      {
        q: 'What is Hanzo Bot?',
        a: 'Hanzo Bot is an open-source AI agent platform that runs on your local machine or in the cloud. It connects to every major chat platform (WhatsApp, Telegram, Discord, Slack, Signal, iMessage, and more) and supports 100+ AI models from providers like Anthropic, OpenAI, Google, xAI, Mistral, and local models via Ollama.',
      },
      {
        q: 'How is Hanzo Bot different from ChatGPT or other AI chatbots?',
        a: 'Unlike hosted chatbots, Hanzo Bot runs on your own hardware and has full access to your computer. It can browse the web, run shell commands, read and write files, control your desktop, and manage your apps. It also works across every chat platform simultaneously, has persistent memory, and supports a plugin system with 700+ community-built skills.',
      },
      {
        q: 'Is Hanzo Bot open source?',
        a: 'Yes. The core runtime, CLI, and gateway are fully open source under the MIT license. You can view, fork, and contribute to the code on GitHub at github.com/hanzoai/bot.',
      },
      {
        q: 'What platforms does it run on?',
        a: 'Hanzo Bot runs on macOS (native app or CLI), Linux, and Windows. It also runs in Docker containers and can be deployed to any cloud VM or Kubernetes cluster. The Hanzo Cloud service provides managed hosting starting at $5/month.',
      },
      {
        q: 'Can I use it for my team or company?',
        a: 'Absolutely. Hanzo Bot supports multi-agent deployments, IAM-based authentication (SSO, RBAC), encrypted credential storage, and per-agent isolation. Enterprise teams use it for customer support, engineering workflows, sales automation, and internal operations.',
      },
    ],
  },
  {
    icon: RocketIcon,
    title: 'Getting Started',
    items: [
      {
        q: 'How do I install Hanzo Bot?',
        a: 'On macOS or Linux, run: curl -fsSL https://hanzo.bot/install.sh | bash. On Windows, use the PowerShell installer: irm https://hanzo.bot/install.ps1 | iex. You can also install via npm (npm i -g bot) or Docker.',
      },
      {
        q: 'Do I need an API key?',
        a: 'Yes, you need an API key from at least one AI model provider (Anthropic, OpenAI, Google, etc.). You can also use local models via Ollama or LM Studio, which require no API key. Hanzo Cloud includes model access in the subscription.',
      },
      {
        q: 'How do I connect a chat platform?',
        a: 'Run "bot channels add <platform>" to connect a chat platform. WhatsApp uses QR code pairing, Telegram needs a bot token from BotFather, Discord uses a bot token from the Discord Developer Portal, and Slack uses a Bolt app. Each channel has a step-by-step setup guide in the docs.',
      },
      {
        q: 'Can I run multiple AI models at the same time?',
        a: 'Yes. You can configure different models for different tasks or channels. For example, use Claude for code review, GPT for customer support, and a local model for private conversations. The gateway routes each request to the configured provider.',
      },
      {
        q: 'How long does setup take?',
        a: 'Basic setup (install + API key + one chat channel) takes about 5 minutes. A full production deployment with multiple channels, skills, and cloud hosting can be set up in under an hour.',
      },
    ],
  },
  {
    icon: CreditCardIcon,
    title: 'Pricing',
    items: [
      {
        q: 'Is Hanzo Bot free?',
        a: 'Yes. Running Hanzo Bot locally on your own machine is completely free and always will be. You bring your own API keys for model access. The open-source code is MIT licensed.',
      },
      {
        q: 'What does Hanzo Cloud cost?',
        a: 'Hanzo Cloud starts at $5/month for a Starter VM (1 vCPU, 1 GB RAM, 20 GB SSD). The Dev plan is $15/month (2 vCPU, 8 GB), and the Pro plan is $25/month (dedicated CPU, 80 GB SSD). All plans include always-on hosting and access to 100+ models via the gateway.',
      },
      {
        q: 'Do I still pay for AI model usage?',
        a: 'When running locally, yes -- you pay your model provider directly (Anthropic, OpenAI, etc.) based on their token pricing. On Hanzo Cloud, basic model access (Zen Mini) is included. Premium models are available via the gateway and billed per-token.',
      },
      {
        q: 'Is there a free trial?',
        a: 'The local version is free forever. Hanzo Cloud plans include a free trial period so you can test cloud deployment before committing.',
      },
    ],
  },
  {
    icon: ShieldIcon,
    title: 'Security',
    items: [
      {
        q: 'Where does my data go?',
        a: 'When running locally, your data never leaves your machine. Conversations, memory, credentials, and files stay in your local config directory (~/.hanzo/bot). No telemetry is sent. When using cloud deployment, data is encrypted at rest and isolated per agent.',
      },
      {
        q: 'Can the bot access my files?',
        a: 'By default, the bot has full file system access on your machine, just like any local application. You can configure sandboxed execution to restrict what directories and commands the agent can access. In cloud deployments, each agent runs in an isolated VM.',
      },
      {
        q: 'How are API keys stored?',
        a: 'API keys and credentials are stored in an encrypted local credential store at ~/.hanzo/bot/credentials/. They are never sent to Hanzo servers. In enterprise deployments, you can integrate with your own secret management system (Vault, KMS, etc.).',
      },
      {
        q: 'Is it safe for enterprise use?',
        a: 'Yes. Hanzo Bot supports IAM integration for SSO and role-based access control, audit logging, sandboxed execution, encrypted credential storage, and per-agent isolation. It is designed for multi-tenant deployments where security and compliance are requirements.',
      },
      {
        q: 'Can I self-host everything?',
        a: 'Yes. The entire stack (bot runtime, gateway, IAM) can be self-hosted on your own infrastructure. No Hanzo cloud services are required. Many enterprise customers run everything on their own Kubernetes clusters.',
      },
    ],
  },
  {
    icon: WrenchIcon,
    title: 'Technical',
    items: [
      {
        q: 'What language is Hanzo Bot written in?',
        a: 'TypeScript (ESM). The runtime targets Node 22+ and Bun. The macOS app includes native Swift/SwiftUI components. Skills and plugins are also written in TypeScript.',
      },
      {
        q: 'What is MCP?',
        a: 'MCP (Model Context Protocol) is the open standard Hanzo Bot uses for tool integration. It allows agents to discover, install, and use tools dynamically. There are 260+ MCP tools available through the Hanzo ecosystem, covering everything from browser control to smart home devices.',
      },
      {
        q: 'Can the bot use my computer like a human?',
        a: 'Yes. Through the Operative integration, Hanzo Bot can control your desktop -- clicking, typing, reading screens, and navigating applications. This is powered by computer vision and is available on macOS, Linux, and cloud VMs.',
      },
      {
        q: 'How does the skill system work?',
        a: 'Skills are self-contained plugins that add capabilities to your bot. They can provide new tools (via MCP), new commands, or new integrations. Install community skills from the Skill Hub with one command, or build your own using the plugin SDK.',
      },
      {
        q: 'Can I run multiple agents?',
        a: 'Yes. The gateway supports multiple concurrent agents, each with their own configuration, memory, and channel connections. In cloud deployments, each agent gets its own VM. Agents can communicate with each other through the P2P marketplace.',
      },
    ],
  },
];

function AccordionItem({ item }: { item: FaqItem }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-fd-border last:border-b-0">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="flex items-center justify-between w-full py-4 text-left bg-transparent border-0 cursor-pointer group"
      >
        <span className="text-sm font-medium text-fd-foreground group-hover:text-white transition-colors pr-4">
          {item.q}
        </span>
        <ChevronDownIcon
          className={`w-4 h-4 text-fd-muted-foreground shrink-0 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-200 ${open ? 'max-h-[500px] pb-4' : 'max-h-0'}`}
      >
        <p className="text-sm text-fd-muted-foreground leading-relaxed pr-8">
          {item.a}
        </p>
      </div>
    </div>
  );
}

export default function FaqPage() {
  return (
    <main className="relative z-[1] max-w-[1000px] mx-auto px-4 sm:px-6 py-10">

      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm text-fd-muted-foreground mb-8">
        <Link href="/" className="inline-flex items-center gap-1 no-underline text-fd-muted-foreground hover:text-fd-foreground transition-colors">
          <ArrowLeftIcon className="w-3.5 h-3.5" />
          Home
        </Link>
        <span>/</span>
        <span className="text-fd-foreground">FAQ</span>
      </nav>

      {/* Hero */}
      <header className="text-center mb-14 animate-[fadeInUp_0.6s_ease-out]">
        <h1 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-br from-fd-foreground via-neutral-400 to-[#a3a3a3] bg-[length:200%_200%] bg-clip-text text-transparent">
          Frequently Asked Questions
        </h1>
        <p className="text-base sm:text-lg text-fd-muted-foreground max-w-[600px] mx-auto leading-relaxed">
          Everything you need to know about Hanzo Bot.
          <br className="hidden sm:block" />
          Can not find what you are looking for? Ask on Discord.
        </p>
      </header>

      {/* FAQ Categories */}
      <div className="flex flex-col gap-10 mb-14">
        {faqCategories.map((cat) => {
          const Icon = cat.icon;
          return (
            <section key={cat.title}>
              <div className="flex items-center gap-3 mb-4">
                <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-[rgba(255,255,255,0.08)]">
                  <Icon className="w-4 h-4 text-white" />
                </div>
                <h2 className="text-lg font-semibold text-fd-foreground">{cat.title}</h2>
              </div>
              <div className="rounded-2xl border border-fd-border bg-[rgba(10,15,26,0.6)] backdrop-blur-sm px-6">
                {cat.items.map((item) => (
                  <AccordionItem key={item.q} item={item} />
                ))}
              </div>
            </section>
          );
        })}
      </div>

      {/* CTA */}
      <section className="text-center p-6 sm:p-12 rounded-2xl border border-fd-border bg-[rgba(10,15,26,0.6)] backdrop-blur-sm mb-10">
        <HelpCircleIcon className="w-8 h-8 text-white mx-auto mb-4" />
        <h2 className="text-2xl font-semibold mb-2">Still have questions?</h2>
        <p className="text-fd-muted-foreground mb-6 max-w-[500px] mx-auto">
          The community and team are happy to help. Reach out on Discord or open a discussion on GitHub.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <a
            href="https://discord.gg/hanzo"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-[#050810] bg-gradient-to-br from-white to-[#d4d4d4] no-underline transition-all hover:-translate-y-0.5 hover:shadow-[0_8px_40px_rgba(255,255,255,0.45)] shadow-[0_4px_24px_rgba(255,255,255,0.3)]"
          >
            <SparklesIcon className="w-5 h-5" />
            Ask on Discord
          </a>
          <a
            href="https://github.com/hanzoai/bot/discussions"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-fd-foreground bg-[rgba(255,255,255,0.05)] border border-fd-border no-underline transition-all hover:-translate-y-0.5 hover:border-neutral-600"
          >
            GitHub Discussions
          </a>
        </div>
      </section>
    </main>
  );
}
