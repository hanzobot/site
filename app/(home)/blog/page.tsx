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
    slug: 'introducing-hanzo-bot',
    title: 'Introducing Hanzo Bot',
    description: 'Your AI team in a box — one bot, every role, every channel. Deploy autonomous AI agents that run locally or in the cloud.',
    date: '2026-02-20',
    tag: 'Announcement',
    tagColor: 'text-brand border-brand/30 bg-brand/8',
  },
  {
    slug: 'vertically-integrated-ai-cloud',
    title: 'The Vertically Integrated AI Cloud',
    description: 'What every agentic harness actually needs — and why owning the full stack from LLM gateway to compute tiers changes everything.',
    date: '2026-02-24',
    tag: 'Architecture',
    tagColor: 'text-[#a78bfa] border-[#a78bfa]/30 bg-[#a78bfa]/8',
  },
  {
    slug: 'crypto-skills-agents-go-onchain',
    title: 'Crypto Skills: Agents Go Onchain',
    description: 'Pay, trade, build apps — no human in the loop. Agents can now use crypto autonomously with USDC on Base via x402.',
    date: '2026-02-26',
    tag: 'Launch',
    tagColor: 'text-[#f7931a] border-[#f7931a]/30 bg-[#f7931a]/8',
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
          <span className="bg-gradient-to-br from-fd-foreground via-brand to-[#00e5cc] bg-[length:200%_200%] bg-clip-text text-transparent animate-[gradientShift_6s_ease_infinite]">
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
            className="group flex flex-col gap-3 p-6 rounded-2xl border border-fd-border bg-[rgba(10,15,26,0.6)] backdrop-blur-sm no-underline transition-all hover:-translate-y-1 hover:border-brand hover:shadow-[0_12px_40px_rgba(255,77,77,0.12)]"
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
            <h2 className="text-lg font-semibold text-fd-foreground group-hover:text-brand transition-colors">
              {post.title}
            </h2>
            <p className="text-sm text-fd-muted-foreground leading-relaxed">
              {post.description}
            </p>
            <span className="flex items-center gap-1.5 text-sm font-medium text-brand mt-1">
              Read more <ArrowRightIcon className="size-3.5 transition-transform group-hover:translate-x-1" />
            </span>
          </Link>
        ))}
      </div>
    </main>
  );
}
