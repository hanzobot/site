import Link from 'next/link';
import { ArrowLeftIcon, ArrowRightIcon, CalendarIcon } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Enso: The AI-Native Browser',
  description:
    'Enso is not a browser with AI bolted on — it is an AI-native browser with multimodal diffusion intelligence built into the rendering engine. Browsing becomes understanding.',
  openGraph: {
    title: 'Enso: The AI-Native Browser',
    description:
      'AI in the browser core, not an extension. Multimodal diffusion intelligence for visual understanding. The browser that sees the web like humans do.',
  },
};

export default function EnsoPage() {
  return (
    <main className="relative z-[1] max-w-[860px] mx-auto px-4 sm:px-6 pt-12 sm:pt-16 pb-10 overflow-hidden">
      <div className="stars" />
      <div className="nebula" />

      <Link
        href="/blog"
        className="inline-flex items-center gap-1.5 text-sm text-fd-muted-foreground hover:text-white transition-colors no-underline mb-8"
      >
        <ArrowLeftIcon className="w-3.5 h-3.5" /> All posts
      </Link>

      <header className="mb-10 animate-[fadeInUp_0.8s_ease-out]">
        <div className="flex items-center gap-3 text-xs mb-4">
          <span className="px-2.5 py-0.5 rounded-full border font-medium text-neutral-400 border-[#a3a3a3]/30 bg-[#a3a3a3]/8">
            Research
          </span>
          <span className="flex items-center gap-1.5 text-fd-muted-foreground">
            <CalendarIcon className="size-3" />
            April 1, 2024
          </span>
        </div>
        <h1 className="text-3xl lg:text-4xl font-bold tracking-tight mb-4 text-fd-foreground">
          Enso: The AI-Native Browser
        </h1>
        <p className="text-lg text-fd-muted-foreground leading-relaxed">
          Every AI browser today is the same thing: a regular browser with an LLM sidebar.
          Enso takes a different approach — multimodal diffusion intelligence built into the
          browser core. It doesn&apos;t just parse the DOM. It sees the page.
        </p>
      </header>

      <article className="prose prose-invert max-w-none animate-[fadeInUp_0.8s_ease-out_0.15s_both]">
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-fd-foreground mb-4">Beyond browser extensions</h2>
          <div className="p-6 rounded-xl border border-fd-border bg-[rgba(10,15,26,0.4)]">
            <p className="text-sm text-fd-muted-foreground leading-relaxed mb-4">
              Browser extensions operate at the DOM level. They can read text, click buttons,
              and fill forms. But they cannot see what a page <em>looks like</em>. They don&apos;t
              understand layout, visual hierarchy, color semantics, or spatial relationships
              between elements. They parse markup, not meaning.
            </p>
            <p className="text-sm text-fd-muted-foreground leading-relaxed">
              Enso integrates AI at the rendering layer. It processes the visual output of the
              browser — the actual pixels — through diffusion models that understand visual
              semantics. A &ldquo;Buy Now&rdquo; button isn&apos;t just a DOM element with a click
              handler. It&apos;s a visually prominent call-to-action in the upper-right of the
              page, styled to contrast with the background, positioned after a product description.
              That visual context matters.
            </p>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-fd-foreground mb-4">Multimodal diffusion intelligence</h2>
          <div className="p-6 rounded-xl border border-fd-border bg-[rgba(10,15,26,0.4)]">
            <p className="text-sm text-fd-muted-foreground leading-relaxed mb-4">
              Diffusion models learn to understand images by learning to reconstruct them from
              noise. In the process, they build rich internal representations of visual
              structure — edges, textures, objects, spatial relationships, semantic meaning.
            </p>
            <p className="text-sm text-fd-muted-foreground leading-relaxed mb-4">
              Enso applies this to web pages. Instead of parsing HTML to understand a page,
              it processes the rendered visual output through diffusion-based encoders. The
              result is a semantic map of the page that captures:
            </p>
            <ul className="flex flex-col gap-2 text-sm text-fd-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-white">Visual hierarchy</span> — what&apos;s important, what&apos;s secondary
              </li>
              <li className="flex items-start gap-2">
                <span className="text-white">Spatial relationships</span> — how elements relate to each other
              </li>
              <li className="flex items-start gap-2">
                <span className="text-white">Interactive affordances</span> — what can be clicked, scrolled, typed into
              </li>
              <li className="flex items-start gap-2">
                <span className="text-white">Content semantics</span> — what the page is about, not just what it says
              </li>
            </ul>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-fd-foreground mb-4">The diffusion stack</h2>
          <div className="p-6 rounded-xl border border-fd-border bg-[rgba(10,15,26,0.4)]">
            <p className="text-sm text-fd-muted-foreground leading-relaxed mb-4">
              Enso sits within a broader diffusion and generative model ecosystem at Hanzo:
            </p>
            <div className="flex flex-col gap-3">
              <div className="p-3 rounded-lg bg-[rgba(255,255,255,0.03)] border border-fd-border/50">
                <span className="text-white font-medium text-sm">Sho</span>
                <span className="text-xs text-fd-muted-foreground ml-2">High-performance text diffusion engine</span>
              </div>
              <div className="p-3 rounded-lg bg-[rgba(255,255,255,0.03)] border border-fd-border/50">
                <span className="text-white font-medium text-sm">Kensho</span>
                <span className="text-xs text-fd-muted-foreground ml-2">17B parameter image generative model</span>
              </div>
              <div className="p-3 rounded-lg bg-[rgba(255,255,255,0.03)] border border-fd-border/50">
                <span className="text-white font-medium text-sm">Zen-Artist</span>
                <span className="text-xs text-fd-muted-foreground ml-2">Diffusion-based image generation and editing</span>
              </div>
              <div className="p-3 rounded-lg bg-[rgba(255,255,255,0.03)] border border-fd-border/50">
                <span className="text-white font-medium text-sm">Zen-Director</span>
                <span className="text-xs text-fd-muted-foreground ml-2">Cinematic scene composition from text</span>
              </div>
              <div className="p-3 rounded-lg bg-[rgba(255,255,255,0.03)] border border-fd-border/50">
                <span className="text-white font-medium text-sm">Zen-World</span>
                <span className="text-xs text-fd-muted-foreground ml-2">Hybrid diffusion-transformer world simulation</span>
              </div>
              <div className="p-3 rounded-lg bg-[rgba(255,255,255,0.03)] border border-fd-border/50">
                <span className="text-white font-medium text-sm">Wan2.2</span>
                <span className="text-xs text-fd-muted-foreground ml-2">Large-scale video generation</span>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-fd-foreground mb-4">Why this matters for agents</h2>
          <div className="p-6 rounded-xl border border-fd-border bg-[rgba(10,15,26,0.4)]">
            <p className="text-sm text-fd-muted-foreground leading-relaxed mb-4">
              Most browser automation tools work by DOM manipulation — find an element by CSS
              selector, click it, check the result. This breaks when pages change their markup,
              use shadow DOM, render dynamically, or load content via iframes.
            </p>
            <p className="text-sm text-fd-muted-foreground leading-relaxed">
              An AI that understands pages visually doesn&apos;t care about the underlying markup.
              It sees a login form, a search bar, a checkout button — the same way a human does.
              Combined with{' '}
              <a href="https://github.com/hanzoai/operative" className="text-white hover:text-neutral-300 transition-colors" target="_blank" rel="noopener noreferrer">
                Operative
              </a>
              {' '}(computer use) and{' '}
              <a href="https://github.com/hanzoai/stagehand" className="text-white hover:text-neutral-300 transition-colors" target="_blank" rel="noopener noreferrer">
                Stagehand
              </a>
              {' '}(AI web browsing), Enso gives Hanzo Bot agents the ability to navigate the web
              with human-level visual understanding.
            </p>
          </div>
        </section>
      </article>

      <div className="mt-12 rounded-2xl border border-neutral-700 bg-[rgba(10,15,26,0.6)] backdrop-blur-sm p-8 text-center animate-[fadeInUp_0.8s_ease-out_0.3s_both]">
        <h2 className="text-2xl font-bold text-fd-foreground mb-3">
          The browser that sees.
        </h2>
        <p className="text-fd-muted-foreground max-w-[540px] mx-auto mb-6">
          Enso is open source and under active development.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://github.com/hanzoai/enso"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white text-black font-semibold hover:bg-neutral-200 transition-colors no-underline"
          >
            View on GitHub <ArrowRightIcon className="w-4 h-4" />
          </a>
          <Link
            href="/get-started"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-neutral-600 text-white font-semibold hover:bg-white/5 transition-colors no-underline"
          >
            Try Hanzo Bot
          </Link>
        </div>
      </div>
    </main>
  );
}
