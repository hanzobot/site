import Link from 'next/link';
import { ArrowRightIcon, CalendarIcon } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'News, guides, and deep dives from the Hanzo Bot team.',
};

/* ---- Posts ---- */

const posts = [
  {
    slug: 'build-ai-coding-agent-that-ships',
    title: 'How to Build an AI Coding Agent That Actually Ships',
    description: 'Most AI coding tools generate code. Very few ship it. Here\'s the architecture behind an AI agent that writes, tests, deploys, and monitors production software autonomously.',
    date: '2026-02-27',
    tag: 'Engineering',
    tagColor: 'text-white border-neutral-500/30 bg-neutral-500/8',
  },
  {
    slug: 'mcp-tools-advantage',
    title: '260 MCP Tools: The Unfair Advantage Over Copilot and Cursor',
    description: 'Model Context Protocol gives AI agents access to 260+ tools — databases, APIs, cloud providers, browsers, and more. Here\'s why MCP changes everything for agentic coding.',
    date: '2026-02-27',
    tag: 'Deep Dive',
    tagColor: 'text-neutral-300 border-neutral-500/30 bg-neutral-500/8',
  },
  {
    slug: 'real-cost-ai-coding-agents-2026',
    title: 'The Real Cost of AI Coding Agents in 2026',
    description: 'Devin costs $500/mo. Cursor costs $20/mo. Claude Code costs $20/mo. We broke down every AI coding agent\'s real cost — including the hidden fees nobody talks about.',
    date: '2026-02-27',
    tag: 'Analysis',
    tagColor: 'text-white border-neutral-500/30 bg-neutral-500/8',
  },
  {
    slug: 'deploy-ai-marketing-agent-discord-slack-telegram',
    title: 'Deploy an AI Marketing Agent on Discord, Slack, and Telegram',
    description: 'Step-by-step guide to deploying an AI marketing agent across Discord, Slack, and Telegram. One bot, persistent memory, every channel — in under 10 minutes.',
    date: '2026-02-27',
    tag: 'Tutorial',
    tagColor: 'text-neutral-300 border-neutral-500/30 bg-neutral-500/8',
  },
  {
    slug: 'ai-content-automation-blog-to-ads',
    title: 'AI Content Automation: From Blog Posts to Ad Copy in One Agent',
    description: 'One AI agent that writes blog posts, generates social media content, creates ad copy, writes email sequences, and optimizes for SEO — all from a single prompt.',
    date: '2026-02-27',
    tag: 'Guide',
    tagColor: 'text-neutral-300 border-neutral-500/30 bg-neutral-500/8',
  },
  {
    slug: '50k-marketing-stack-vs-one-ai-agent',
    title: 'The $50K Marketing Stack vs One AI Agent',
    description: 'We analyzed what companies actually spend on marketing tools and compared it to running a single AI marketing agent. The savings are staggering — $75K+/yr.',
    date: '2026-02-27',
    tag: 'Analysis',
    tagColor: 'text-white border-neutral-500/30 bg-neutral-500/8',
  },
  {
    slug: 'hanzo-bot-vs-ai-coding-agents',
    title: 'Hanzo Bot vs Every AI Coding Agent',
    description: 'Cursor costs $20/mo. Claude Code costs $20/mo. Copilot costs $19/mo. Devin costs $500/mo. Hanzo Bot starts free and does more at $15/mo. Here\'s the full breakdown.',
    date: '2026-02-26',
    tag: 'Deep Dive',
    tagColor: 'text-white border-neutral-500/30 bg-neutral-500/8',
  },
  {
    slug: 'ai-marketing-agents',
    title: 'AI Marketing Agents: Automate Your Growth Stack',
    description: 'Stop paying $50K/yr for marketing tools. Deploy an AI marketing agent that handles content, campaigns, analytics, and engagement across every channel for $15/mo.',
    date: '2026-02-26',
    tag: 'Guide',
    tagColor: 'text-neutral-300 border-neutral-500/30 bg-neutral-500/8',
  },
  {
    slug: 'crypto-skills-agents-go-onchain',
    title: 'Crypto Skills: Agents Go Onchain',
    description: 'Pay, trade, build apps — no human in the loop. Agents can now use crypto autonomously with USDC on Base via x402.',
    date: '2026-02-26',
    tag: 'Launch',
    tagColor: 'text-neutral-400 border-[#a3a3a3]/30 bg-[#a3a3a3]/8',
  },
  {
    slug: 'vertically-integrated-ai-cloud',
    title: 'The Vertically Integrated AI Cloud',
    description: 'What every agentic harness actually needs — and why owning the full stack from LLM gateway to compute tiers changes everything.',
    date: '2026-02-24',
    tag: 'Architecture',
    tagColor: 'text-neutral-400 border-[#a3a3a3]/30 bg-[#a3a3a3]/8',
  },
  {
    slug: 'introducing-hanzo-bot',
    title: 'Introducing Hanzo Bot',
    description: 'Your AI team in a box — one bot, every role, every channel. Deploy autonomous AI agents that run locally or in the cloud.',
    date: '2026-02-20',
    tag: 'Announcement',
    tagColor: 'text-white border-neutral-600/30 bg-white/8',
  },
  {
    slug: 'from-eliza-to-hanzo-bot',
    title: 'From ElizaOS to Hanzo Bot: Building the AI Workforce Platform',
    description: 'The full origin story — from ElizaOS experiments to OpenClaw to Hanzo Bot. How two years of open-source AI infrastructure became a unified agent platform.',
    date: '2026-01-15',
    tag: 'Origin Story',
    tagColor: 'text-white border-neutral-600/30 bg-white/8',
  },
  {
    slug: 'agent-sdk-multi-agent-orchestration',
    title: 'Agent SDK: Multi-Agent Orchestration for Production',
    description: 'How we built an agent SDK that coordinates multiple AI agents with shared memory, tool delegation, and OpenAI-compatible APIs — powering everything from code review to deployment.',
    date: '2025-05-20',
    tag: 'Launch',
    tagColor: 'text-neutral-400 border-[#a3a3a3]/30 bg-[#a3a3a3]/8',
  },
  {
    slug: 'operative-computer-use-for-claude',
    title: 'Operative: Computer Use for Claude',
    description: 'We open-sourced Operative — a computer-use framework that gives Claude eyes and hands. Screen capture, mouse control, keyboard input, and browser automation in one package.',
    date: '2024-11-01',
    tag: 'Launch',
    tagColor: 'text-neutral-400 border-[#a3a3a3]/30 bg-[#a3a3a3]/8',
  },
  {
    slug: 'jin-multimodal-ai-architecture',
    title: 'Jin: Our Multimodal AI Architecture',
    description: 'Inside Jin — a unified multimodal architecture that processes text, images, audio, video, and 3D data through a single model. Built on JEPA principles for true cross-modal understanding.',
    date: '2024-08-15',
    tag: 'Research',
    tagColor: 'text-neutral-400 border-[#a3a3a3]/30 bg-[#a3a3a3]/8',
  },
  {
    slug: 'llm-gateway-100-models-one-api',
    title: 'LLM Gateway: 100+ Models, One API',
    description: 'Why we built a unified LLM gateway that routes to 100+ models from every major provider. One API key, automatic fallback, cost tracking, and rate limiting built in.',
    date: '2024-03-10',
    tag: 'Architecture',
    tagColor: 'text-neutral-400 border-[#a3a3a3]/30 bg-[#a3a3a3]/8',
  },
];

/* ---- Page ---- */

export default function BlogPage() {
  return (
    <main className="relative z-[1] max-w-[860px] mx-auto px-4 sm:px-6 pt-12 sm:pt-16 pb-10 overflow-hidden">
      <div className="stars" />
      <div className="nebula" />

      <header className="text-center mb-12 animate-[fadeInUp_0.8s_ease-out]">
        <p className="font-mono text-xs uppercase tracking-wider text-fd-muted-foreground mb-4">
          Blog
        </p>
        <h1 className="text-4xl lg:text-5xl font-bold tracking-tight mb-4">
          <span className="bg-gradient-to-br from-fd-foreground via-neutral-400 to-[#a3a3a3] bg-[length:200%_200%] bg-clip-text text-transparent animate-[gradientShift_6s_ease_infinite]">
            News & Guides
          </span>
        </h1>
        <p className="text-base text-fd-muted-foreground max-w-[500px] mx-auto">
          Product launches, architecture deep dives, and how-to guides from the team building the AI workforce platform.
        </p>
      </header>

      <div className="flex flex-col gap-4">
        {posts.map((post, i) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group flex flex-col gap-3 p-6 rounded-2xl border border-fd-border bg-[rgba(10,15,26,0.6)] backdrop-blur-sm no-underline transition-all hover:-translate-y-1 hover:border-neutral-600 hover:shadow-[0_12px_40px_rgba(255,255,255,0.12)]"
            style={{ animationDelay: `${0.1 + i * 0.08}s` }}
          >
            <div className="flex items-center gap-3 text-xs">
              <span className={`px-2.5 py-0.5 rounded-full border font-medium ${post.tagColor}`}>
                {post.tag}
              </span>
              <span className="flex items-center gap-1.5 text-fd-muted-foreground">
                <CalendarIcon className="size-3" />
                {new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
              </span>
            </div>
            <h2 className="text-lg font-semibold text-fd-foreground group-hover:text-white transition-colors">
              {post.title}
            </h2>
            <p className="text-sm text-fd-muted-foreground leading-relaxed">
              {post.description}
            </p>
            <span className="flex items-center gap-1.5 text-sm font-medium text-white mt-1">
              Read more <ArrowRightIcon className="size-3.5 transition-transform group-hover:translate-x-1" />
            </span>
          </Link>
        ))}
      </div>
    </main>
  );
}
