import Link from 'next/link';
import { ArrowLeftIcon, CalendarIcon } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'The LLM Gateway: 100+ Models, One API',
  description: 'We built a unified gateway that routes to 100+ LLM providers through a single OpenAI-compatible API. Budget management, rate limiting, and cost-aware routing included.',
};

export default function Post() {
  return (
    <main className="relative z-[1] max-w-[720px] mx-auto px-4 sm:px-6 pt-12 sm:pt-16 pb-10 overflow-hidden">
      <div className="stars" />
      <div className="nebula" />

      <Link href="/blog" className="inline-flex items-center gap-1.5 text-sm text-fd-muted-foreground hover:text-white transition-colors no-underline mb-8">
        <ArrowLeftIcon className="size-3.5" /> Back to Blog
      </Link>

      <header className="mb-10 animate-[fadeInUp_0.8s_ease-out]">
        <div className="flex items-center gap-3 text-xs mb-4">
          <span className="px-2.5 py-0.5 rounded-full border font-medium text-neutral-400 border-[#a3a3a3]/30 bg-[#a3a3a3]/8">Infrastructure</span>
          <span className="flex items-center gap-1.5 text-fd-muted-foreground"><CalendarIcon className="size-3" /> March 10, 2024</span>
        </div>
        <h1 className="text-3xl lg:text-4xl font-bold tracking-tight mb-4 text-fd-foreground">The LLM Gateway: 100+ Models, One API</h1>
        <p className="text-lg text-fd-muted-foreground leading-relaxed">
          Every AI provider has a different API. We built one gateway to rule them all.
        </p>
      </header>

      <article className="prose prose-invert max-w-none text-fd-foreground/90 text-[15px] leading-relaxed">
        <p>
          By mid-2023, we were juggling API keys for OpenAI, Anthropic, Google, Cohere, Together AI,
          and a growing list of open-source model hosts. Each had a different request format, different
          rate limits, different error codes, different pricing structures.
        </p>
        <p>
          We needed a single API that could route to any model from any provider, with built-in budget
          management, rate limiting, fallback chains, and cost tracking. So we built the <strong>Hanzo LLM Gateway</strong>.
        </p>

        <h2 className="text-xl font-semibold text-fd-foreground mt-10 mb-4">What the Gateway Does</h2>
        <ul className="space-y-2 text-fd-muted-foreground">
          <li><strong className="text-fd-foreground">Unified API</strong> — OpenAI-compatible format for all providers. Switch models with one parameter change.</li>
          <li><strong className="text-fd-foreground">100+ providers</strong> — OpenAI, Anthropic, Google, Together, Groq, Fireworks, Replicate, Ollama, and 90+ more.</li>
          <li><strong className="text-fd-foreground">Budget management</strong> — Per-key, per-team, per-project daily/monthly spend caps with automatic cutoff.</li>
          <li><strong className="text-fd-foreground">Rate limiting</strong> — TPM (tokens per minute) and RPM (requests per minute) limits per key with queuing.</li>
          <li><strong className="text-fd-foreground">Fallback chains</strong> — If Claude is down, automatically route to GPT. If GPT hits rate limits, fall back to Llama.</li>
          <li><strong className="text-fd-foreground">Cost tracking</strong> — Real-time cost per request, per session, per agent with full audit trail.</li>
          <li><strong className="text-fd-foreground">Caching</strong> — Semantic caching to avoid duplicate API calls for identical prompts.</li>
        </ul>

        <h2 className="text-xl font-semibold text-fd-foreground mt-10 mb-4">Why Agents Need a Gateway</h2>
        <p>
          If you&apos;re building a chatbot, you can hardcode one model. If you&apos;re building an autonomous
          agent that runs 24/7, you need:
        </p>
        <ul className="space-y-2 text-fd-muted-foreground">
          <li><strong className="text-fd-foreground">Model diversity</strong> — Use cheap models for simple tasks, expensive models for complex ones</li>
          <li><strong className="text-fd-foreground">Resilience</strong> — When OpenAI has an outage (and they do), your agent keeps running</li>
          <li><strong className="text-fd-foreground">Cost control</strong> — Without budget limits, an agent can burn through $1,000 in API credits overnight</li>
          <li><strong className="text-fd-foreground">Observability</strong> — Know exactly which model handled which request and how much it cost</li>
        </ul>
        <p>
          The LLM Gateway is the backbone of Hanzo Bot. Every model request from every agent goes through it.
          It&apos;s how we offer 100+ models to users on a $5/mo plan — smart routing, aggressive caching,
          and our own Zen model family for cost-efficient default inference.
        </p>

        <h2 className="text-xl font-semibold text-fd-foreground mt-10 mb-4">Production Numbers</h2>
        <p>The gateway currently handles:</p>
        <ul className="space-y-2 text-fd-muted-foreground">
          <li><strong className="text-fd-foreground">100+ LLM providers</strong> routed through a single endpoint</li>
          <li><strong className="text-fd-foreground">47 Zen models</strong> (our own model family, 600M to 480B parameters)</li>
          <li><strong className="text-fd-foreground">344 third-party models</strong> from 58 providers</li>
          <li><strong className="text-fd-foreground">Sub-100ms routing latency</strong> for model selection and key management</li>
        </ul>

        <h2 className="text-xl font-semibold text-fd-foreground mt-10 mb-4">Open Source</h2>
        <ul className="space-y-2 text-fd-muted-foreground">
          <li><a href="https://github.com/hanzoai/llm" className="text-white hover:underline" target="_blank" rel="noopener noreferrer">github.com/hanzoai/llm</a> — Full source code</li>
          <li>PyPI: <code className="text-neutral-300">pip install hanzo-llm</code></li>
          <li>Production endpoint: <code className="text-neutral-300">llm.hanzo.ai</code></li>
        </ul>

        <div className="not-prose my-10 p-6 rounded-xl border border-neutral-700 bg-neutral-950/50 text-center">
          <p className="text-lg font-semibold text-white mb-2">100+ models. One API. Zero vendor lock-in.</p>
          <p className="text-sm text-neutral-400 mb-4">The LLM Gateway powers every Hanzo Bot agent.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href="https://github.com/hanzoai/llm" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-6 py-2.5 rounded-lg bg-white text-black font-semibold text-sm hover:bg-neutral-200 transition-colors no-underline">
              View on GitHub
            </a>
            <Link href="/get-started" className="inline-flex items-center justify-center px-6 py-2.5 rounded-lg border border-neutral-600 text-white font-semibold text-sm hover:bg-neutral-900 transition-colors no-underline">
              Try Hanzo Bot
            </Link>
          </div>
        </div>
      </article>
    </main>
  );
}
