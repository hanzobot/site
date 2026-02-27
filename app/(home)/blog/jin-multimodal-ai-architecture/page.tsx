import Link from 'next/link';
import { ArrowLeftIcon, CalendarIcon } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Jin: Our Multimodal AI Architecture',
  description: 'Inside Jin — the multimodal AI framework that processes text, vision, audio, and 3D in a unified architecture. The research that started it all.',
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
          <span className="px-2.5 py-0.5 rounded-full border font-medium text-neutral-400 border-[#a3a3a3]/30 bg-[#a3a3a3]/8">Research</span>
          <span className="flex items-center gap-1.5 text-fd-muted-foreground"><CalendarIcon className="size-3" /> August 15, 2024</span>
        </div>
        <h1 className="text-3xl lg:text-4xl font-bold tracking-tight mb-4 text-fd-foreground">Jin: Our Multimodal AI Architecture</h1>
        <p className="text-lg text-fd-muted-foreground leading-relaxed">
          We started with a question: what if one model could see, hear, read, and understand 3D space? Jin is our answer.
        </p>
      </header>

      <article className="prose prose-invert max-w-none text-fd-foreground/90 text-[15px] leading-relaxed">
        <p>
          In May 2023, we began experimenting with Joint Embedding Predictive Architectures (JEPA) —
          the self-supervised learning framework that learns by predicting representations rather than pixels.
          Our early work with I-JEPA and a novel variant we called Saccade JEPA showed that unified
          cross-modal representations were not just possible, but practical.
        </p>
        <p>
          That research became <strong>Jin</strong> — a multimodal AI framework that processes text, vision,
          audio, and 3D data in a unified architecture. Today, Jin powers the perception layer of Hanzo Bot,
          letting agents understand screenshots, process voice commands, and navigate visual interfaces.
        </p>

        <h2 className="text-xl font-semibold text-fd-foreground mt-10 mb-4">The Architecture</h2>
        <p>Jin uses a modality-agnostic transformer backbone with specialized encoders for each input type:</p>
        <ul className="space-y-2 text-fd-muted-foreground">
          <li><strong className="text-fd-foreground">Vision</strong> — ViT and ConvNeXt encoders for image understanding, screenshot parsing, UI element detection</li>
          <li><strong className="text-fd-foreground">Language</strong> — Full text generation and comprehension with cross-modal attention</li>
          <li><strong className="text-fd-foreground">Audio</strong> — Speech recognition, voice command processing, audio scene understanding</li>
          <li><strong className="text-fd-foreground">3D</strong> — Spatial understanding for robotics and AR/VR applications</li>
        </ul>
        <p>
          The key insight: by training all modalities through a shared embedding space, Jin develops emergent
          cross-modal capabilities. It can describe what it sees, follow voice instructions to navigate a UI,
          or generate code from a screenshot of a design mockup.
        </p>

        <h2 className="text-xl font-semibold text-fd-foreground mt-10 mb-4">From Research to Product</h2>
        <p>
          Jin started as pure research — JEPA experiments, masked autoencoders, energy-based models. But as
          we built toward autonomous agents, we realized that multimodal understanding wasn&apos;t optional.
          An agent that can only process text is blind. An agent that can see, hear, and understand spatial
          relationships can actually navigate the real world.
        </p>
        <p>
          This is why Hanzo Bot can take a screenshot, understand the UI layout, and click the right button.
          It&apos;s why the agent can process voice commands on a call and execute them. Jin is the perception
          layer that makes autonomous operation possible.
        </p>

        <h2 className="text-xl font-semibold text-fd-foreground mt-10 mb-4">Open Research</h2>
        <p>Our Jin research is published in the Hanzo Papers repository:</p>
        <ul className="space-y-2 text-fd-muted-foreground">
          <li><a href="https://github.com/hanzoai/papers" className="text-white hover:underline" target="_blank" rel="noopener noreferrer">github.com/hanzoai/papers</a> — 143 papers across AI, blockchain, and multimodal research</li>
          <li><a href="https://github.com/hanzoai/jin" className="text-white hover:underline" target="_blank" rel="noopener noreferrer">github.com/hanzoai/jin</a> — Jin source code and model weights</li>
        </ul>

        <div className="not-prose my-10 p-6 rounded-xl border border-neutral-700 bg-neutral-950/50 text-center">
          <p className="text-lg font-semibold text-white mb-2">Multimodal AI for autonomous agents</p>
          <p className="text-sm text-neutral-400 mb-4">From JEPA research to production perception.</p>
          <Link href="/get-started" className="inline-flex items-center justify-center px-6 py-2.5 rounded-lg bg-white text-black font-semibold text-sm hover:bg-neutral-200 transition-colors no-underline">
            Try Hanzo Bot
          </Link>
        </div>
      </article>
    </main>
  );
}
