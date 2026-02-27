import Link from 'next/link';
import { ArrowLeftIcon, ArrowRightIcon, CalendarIcon } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Zen MoDE: 47 Models, One Architecture',
  description:
    'Inside the Zen model family — Mixture of Distilled Experts (MoDE) architecture that activates only the parameters it needs. 47 models spanning text, code, vision, audio, video, 3D, and agents.',
  openGraph: {
    title: 'Zen MoDE: 47 Models, One Architecture',
    description:
      'A 480B model that activates only 60B parameters per forward pass. Progressive distillation, not random initialization. 47 models from nano to ultra.',
  },
};

export default function ZenModePage() {
  return (
    <main className="relative z-[1] max-w-[860px] mx-auto px-4 sm:px-6 pt-8 sm:pt-16 pb-10 overflow-x-hidden">
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
            September 15, 2025
          </span>
        </div>
        <h1 className="text-3xl lg:text-4xl font-bold tracking-tight mb-4 text-fd-foreground">
          Zen MoDE: 47 Models, One Architecture
        </h1>
        <p className="text-lg text-fd-muted-foreground leading-relaxed">
          Intelligence is sparse. For any input, most parameters in a dense model are
          irrelevant. Zen&apos;s Mixture of Distilled Experts architecture activates only
          what matters — delivering frontier performance at a fraction of the compute.
        </p>
      </header>

      <article className="prose prose-invert max-w-none animate-[fadeInUp_0.8s_ease-out_0.15s_both]">
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-fd-foreground mb-4">Why sparse</h2>
          <div className="p-6 rounded-xl border border-fd-border bg-[rgba(10,15,26,0.4)]">
            <p className="text-sm text-fd-muted-foreground leading-relaxed mb-4">
              A dense 480B-parameter model uses all 480B parameters for every input —
              whether you&apos;re asking it to fix a typo or prove a theorem. Most of those
              parameters are doing nothing useful for the given input. You&apos;re paying for
              compute that doesn&apos;t contribute to the answer.
            </p>
            <p className="text-sm text-fd-muted-foreground leading-relaxed">
              Mixture of Experts (MoE) solves this by routing each input to a subset of
              specialized &ldquo;expert&rdquo; networks. A 480B MoE model might activate only
              ~60B parameters per forward pass — the experts most relevant to the current input.
              Same quality, 8x less compute per inference.
            </p>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-fd-foreground mb-4">Progressive Distillation</h2>
          <div className="p-6 rounded-xl border border-fd-border bg-[rgba(10,15,26,0.4)]">
            <p className="text-sm text-fd-muted-foreground leading-relaxed mb-4">
              Standard MoE models initialize experts randomly. This causes training instability
              and &ldquo;expert collapse&rdquo; — where most inputs get routed to the same few
              experts while others go unused.
            </p>
            <p className="text-sm text-fd-muted-foreground leading-relaxed mb-4">
              Zen uses <strong className="text-white">Progressive Distillation Initialization</strong>.
              We first train a dense teacher model, then segment its FFN layers into N expert
              networks. Each expert starts with real knowledge, not random weights. This eliminates
              the cold-start problem and prevents expert collapse.
            </p>
            <p className="text-sm text-fd-muted-foreground leading-relaxed">
              Three auxiliary losses (importance, load, diversity) keep routing balanced
              during fine-tuning. The result: all experts contribute meaningfully, and routing
              is stable across the full training run.
            </p>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-fd-foreground mb-4">Architecture</h2>
          <div className="p-6 rounded-xl border border-fd-border bg-[rgba(10,15,26,0.4)]">
            <p className="text-sm text-fd-muted-foreground leading-relaxed mb-4">
              The core MoDE architecture:
            </p>
            <pre className="text-xs text-fd-muted-foreground font-mono overflow-x-auto whitespace-pre leading-relaxed mb-4 p-3 rounded-lg bg-[rgba(0,0,0,0.3)]">
{`MoDE(x) = Σ g_i(x) · E_i(x)   for i = 1..N

where:
  g_i  = top-k softmax gating (k=2, N=8..128)
  E_i  = SwiGLU FFN expert networks
  
Attention: GQA (8:1 ratio) + RoPE
Norm: RMSNorm (pre-norm)
Training: 14.8T tokens`}
            </pre>
            <p className="text-sm text-fd-muted-foreground leading-relaxed">
              Grouped Query Attention (8:1 ratio) reduces KV-cache memory. Rotary Position
              Embeddings enable long context. SwiGLU activation in experts provides smooth
              gradients. RMSNorm before each layer stabilizes deep networks. The full architecture
              is specified in{' '}
              <a href="https://github.com/hanzoai/HIPs" className="text-white hover:text-neutral-300 transition-colors" target="_blank" rel="noopener noreferrer">
                HIP-0039
              </a>.
            </p>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-fd-foreground mb-4">The full family</h2>
          <div className="p-6 rounded-xl border border-fd-border bg-[rgba(10,15,26,0.4)]">
            <p className="text-sm text-fd-muted-foreground leading-relaxed mb-4">
              47 models across every modality, co-developed with{' '}
              <strong className="text-white">Zoo Labs Foundation</strong>:
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-fd-border">
                    <th className="text-left p-3 text-neutral-500 font-medium">Category</th>
                    <th className="text-left p-3 text-neutral-500 font-medium">Models</th>
                    <th className="text-left p-3 text-neutral-500 font-medium">Range</th>
                  </tr>
                </thead>
                <tbody className="text-fd-muted-foreground">
                  <tr className="border-b border-fd-border/50">
                    <td className="p-3 text-white font-medium">Core</td>
                    <td className="p-3">zen-nano, zen-eco, zen, zen-pro, zen-max</td>
                    <td className="p-3">0.6B — 1T+ MoE</td>
                  </tr>
                  <tr className="border-b border-fd-border/50 bg-white/[0.02]">
                    <td className="p-3 text-white font-medium">Code</td>
                    <td className="p-3">zen-coder, zen-coder-flash, zen-code</td>
                    <td className="p-3">3B — 480B active</td>
                  </tr>
                  <tr className="border-b border-fd-border/50">
                    <td className="p-3 text-white font-medium">Vision</td>
                    <td className="p-3">zen-vl, zen-omni, zen-artist, zen-designer</td>
                    <td className="p-3">Multimodal</td>
                  </tr>
                  <tr className="border-b border-fd-border/50 bg-white/[0.02]">
                    <td className="p-3 text-white font-medium">Video</td>
                    <td className="p-3">zen-director, zen-video, zen-voyager</td>
                    <td className="p-3">Generation + Navigation</td>
                  </tr>
                  <tr className="border-b border-fd-border/50">
                    <td className="p-3 text-white font-medium">Audio</td>
                    <td className="p-3">zen-musician, zen-foley, zen-dub, zen-scribe</td>
                    <td className="p-3">Speech + Music + SFX</td>
                  </tr>
                  <tr className="border-b border-fd-border/50 bg-white/[0.02]">
                    <td className="p-3 text-white font-medium">3D / World</td>
                    <td className="p-3">zen-3d, zen-world</td>
                    <td className="p-3">Geometry + Simulation</td>
                  </tr>
                  <tr className="border-b border-fd-border/50">
                    <td className="p-3 text-white font-medium">Safety</td>
                    <td className="p-3">zen-guard, zen-guard-gen, zen-guard-stream</td>
                    <td className="p-3">Input/Output filtering</td>
                  </tr>
                  <tr>
                    <td className="p-3 text-white font-medium">Agents</td>
                    <td className="p-3">zen-agent</td>
                    <td className="p-3">Agent-optimized</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-fd-foreground mb-4">Open research</h2>
          <div className="p-6 rounded-xl border border-fd-border bg-[rgba(10,15,26,0.4)]">
            <p className="text-sm text-fd-muted-foreground leading-relaxed mb-4">
              27 technical papers cover the full Zen family — architecture, training methodology,
              benchmark evaluations, and specialized model designs. The{' '}
              <a href="https://github.com/hanzoai/zen" className="text-white hover:text-neutral-300 transition-colors" target="_blank" rel="noopener noreferrer">
                Zen repository
              </a>
              {' '}and{' '}
              <a href="https://github.com/hanzoai/papers" className="text-white hover:text-neutral-300 transition-colors" target="_blank" rel="noopener noreferrer">
                papers repository
              </a>
              {' '}are open. The agentic training dataset — 8.47 billion tokens from 3,580 coding
              sessions and 65,574 git commits across 1,503 repositories — is published at{' '}
              <a href="https://github.com/hanzoai/zen-agentic-dataset" className="text-white hover:text-neutral-300 transition-colors" target="_blank" rel="noopener noreferrer">
                zen-agentic-dataset
              </a>.
            </p>
            <p className="text-sm text-fd-muted-foreground leading-relaxed">
              Zen models are available through the Hanzo LLM Gateway alongside 344 third-party
              models. Same API, same tools, same budget controls — pick the best model for each task.
            </p>
          </div>
        </section>
      </article>

      <div className="mt-12 rounded-2xl border border-neutral-700 bg-[rgba(10,15,26,0.6)] backdrop-blur-sm p-8 text-center animate-[fadeInUp_0.8s_ease-out_0.3s_both]">
        <h2 className="text-2xl font-bold text-fd-foreground mb-3">
          47 models. One architecture. Open research.
        </h2>
        <p className="text-fd-muted-foreground max-w-[540px] mx-auto mb-6">
          Zen powers inference across the entire Hanzo platform.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://github.com/hanzoai/zen"
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
            Read the papers
          </a>
        </div>
      </div>
    </main>
  );
}
