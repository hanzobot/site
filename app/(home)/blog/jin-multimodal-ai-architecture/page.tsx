import Link from 'next/link';
import { ArrowLeftIcon, ArrowRightIcon, CalendarIcon } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Jin: Our Hypermodal AI Architecture',
  description:
    'Inside Jin — a unified hypermodal architecture built on JEPA principles that processes text, images, audio, video, and 3D through shared representations. Not multimodal. Hypermodal.',
  openGraph: {
    title: 'Jin: Our Hypermodal AI Architecture',
    description:
      'Beyond multimodal. Jin uses Joint Embedding Predictive Architecture for true cross-modal understanding — one model that sees, hears, reads, and creates.',
  },
};

export default function JinPage() {
  return (
    <main className="relative z-[1] max-w-[860px] mx-auto px-4 sm:px-6 pt-8 sm:pt-16 pb-10 overflow-x-hidden">

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
            July 15, 2023
          </span>
        </div>
        <h1 className="text-3xl lg:text-4xl font-bold tracking-tight mb-4 text-fd-foreground">
          Jin: Our Hypermodal AI Architecture
        </h1>
        <p className="text-lg text-fd-muted-foreground leading-relaxed">
          Most multimodal models bolt vision onto a language model and call it done.
          Jin takes a different approach — a unified architecture built on JEPA principles
          where every modality shares the same representational space.
        </p>
      </header>

      <article className="prose prose-invert max-w-none animate-[fadeInUp_0.8s_ease-out_0.15s_both]">
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-fd-foreground mb-4">Beyond multimodal</h2>
          <div className="p-6 rounded-xl border border-fd-border bg-[rgba(10,15,26,0.4)]">
            <p className="text-sm text-fd-muted-foreground leading-relaxed mb-4">
              &ldquo;Multimodal&rdquo; typically means a language model with image encoders attached.
              The text backbone does the thinking; images are translated into tokens that fit
              the language model&apos;s worldview. Audio, video, and 3D are afterthoughts — separate
              encoders, separate pipelines, separate training runs.
            </p>
            <p className="text-sm text-fd-muted-foreground leading-relaxed">
              Jin is <strong className="text-white">hypermodal</strong>. Every modality — text,
              images, audio, video, 3D geometry — enters the same architecture and is processed
              through shared representations from the start. There is no &ldquo;primary&rdquo;
              modality. A sound can inform an image. A 3D shape can inform text. The cross-modal
              understanding is intrinsic, not bolted on.
            </p>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-fd-foreground mb-4">JEPA: Prediction over reconstruction</h2>
          <div className="p-6 rounded-xl border border-fd-border bg-[rgba(10,15,26,0.4)]">
            <p className="text-sm text-fd-muted-foreground leading-relaxed mb-4">
              Jin is built on Joint Embedding Predictive Architecture — the principle that
              predicting abstract representations is more powerful than reconstructing raw pixels
              or waveforms.
            </p>
            <p className="text-sm text-fd-muted-foreground leading-relaxed mb-4">
              Traditional autoencoders learn to compress and decompress data. JEPA learns to
              predict the <em>meaning</em> of missing information. Given part of an image, it
              doesn&apos;t try to hallucinate the missing pixels — it predicts what the missing
              region <em>represents</em>. This is closer to how biological intelligence works:
              you don&apos;t reconstruct every pixel of a scene to understand it.
            </p>
            <p className="text-sm text-fd-muted-foreground leading-relaxed">
              Our implementation uses a patcher and block selector architecture. The patcher
              segments inputs from any modality into patches. The block selector determines which
              patches are visible and which must be predicted. The predictor operates in embedding
              space, never in raw data space.
            </p>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-fd-foreground mb-4">Shared representations</h2>
          <div className="p-6 rounded-xl border border-fd-border bg-[rgba(10,15,26,0.4)]">
            <p className="text-sm text-fd-muted-foreground leading-relaxed mb-4">
              The key insight: if you train a model to predict abstract representations across
              modalities, it learns a shared semantic space where a photograph of a guitar,
              the sound of a guitar, the word &ldquo;guitar,&rdquo; and a 3D model of a guitar
              all live near each other — not because they look similar in pixel space, but
              because they mean the same thing.
            </p>
            <p className="text-sm text-fd-muted-foreground leading-relaxed">
              This enables capabilities that modal-specific models cannot match: generating
              audio from a visual scene description, creating 3D geometry from a sound, or
              understanding the emotional content of a video without any text annotations.
            </p>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-fd-foreground mb-4">The model ecosystem</h2>
          <div className="p-6 rounded-xl border border-fd-border bg-[rgba(10,15,26,0.4)]">
            <p className="text-sm text-fd-muted-foreground leading-relaxed mb-4">
              Jin is the research foundation. The production models built on it include:
            </p>
            <ul className="flex flex-col gap-2 text-sm text-fd-muted-foreground mb-4">
              <li className="flex items-start gap-2">
                <span className="text-white font-medium shrink-0">Zen-Omni</span> — Multimodal understanding and generation
              </li>
              <li className="flex items-start gap-2">
                <span className="text-white font-medium shrink-0">Kensho</span> — 17B parameter image generation
              </li>
              <li className="flex items-start gap-2">
                <span className="text-white font-medium shrink-0">Mugen</span> — Audio generation from any input modality
              </li>
              <li className="flex items-start gap-2">
                <span className="text-white font-medium shrink-0">Koe</span> — Text-to-dialogue with emotional understanding
              </li>
              <li className="flex items-start gap-2">
                <span className="text-white font-medium shrink-0">Zen-VL</span> — Vision-language understanding
              </li>
              <li className="flex items-start gap-2">
                <span className="text-white font-medium shrink-0">Zen-3D</span> — 3D geometry from any modality
              </li>
            </ul>
            <p className="text-sm text-fd-muted-foreground leading-relaxed">
              Jin research is published at{' '}
              <a href="https://github.com/hanzoai/papers" className="text-white hover:text-neutral-300 transition-colors" target="_blank" rel="noopener noreferrer">
                github.com/hanzoai/papers
              </a>
              . The implementation is at{' '}
              <a href="https://github.com/hanzoai/jin" className="text-white hover:text-neutral-300 transition-colors" target="_blank" rel="noopener noreferrer">
                github.com/hanzoai/jin
              </a>
              .
            </p>
          </div>
        </section>
      </article>

      <div className="mt-12 rounded-2xl border border-neutral-700 bg-[rgba(10,15,26,0.6)] backdrop-blur-sm p-8 text-center animate-[fadeInUp_0.8s_ease-out_0.3s_both]">
        <h2 className="text-2xl font-bold text-fd-foreground mb-3">
          One model. Every modality.
        </h2>
        <p className="text-fd-muted-foreground max-w-[540px] mx-auto mb-6">
          Jin powers the multimodal capabilities in Hanzo Bot and the Zen model family.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://github.com/hanzoai/jin"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white text-black font-semibold hover:bg-neutral-200 transition-colors no-underline"
          >
            View on GitHub <ArrowRightIcon className="w-4 h-4" />
          </a>
          <a
            href="https://github.com/hanzoai/papers"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-neutral-600 text-white font-semibold hover:bg-white/5 transition-colors no-underline"
          >
            Read the paper
          </a>
        </div>
      </div>
    </main>
  );
}
