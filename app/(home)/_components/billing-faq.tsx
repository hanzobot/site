const billingFaqs = [
  {
    q: 'Is Hanzo Bot really free?',
    a: 'Yes. The self-hosted version is 100% free and open source. You bring your own API keys for LLM providers (OpenAI, Anthropic, etc.) and run it on your own Mac, Windows, or Linux machine. No limits, no trials, no credit card.',
  },
  {
    q: 'What are the cloud plans?',
    a: 'Hanzo Cloud has 11 tiers from $5/mo to $3,999/mo. The most popular plans: Starter ($5/mo — 1 vCPU, 1 GB RAM, 20 GB SSD), Dev ($15/mo — 2 vCPU, 8 GB RAM, 25 GB SSD), and Pro ($25/mo — 2 dedicated vCPU, 8 GB RAM, 80 GB SSD). Higher tiers go up to 96 dedicated vCPUs and 384 GB RAM for heavy workloads. All plans include 100+ AI models, all chat integrations, daily backups, and DDoS protection. Available in 4 global regions.',
  },
  {
    q: 'What does the $5/mo Starter plan include?',
    a: 'A full Linux VM (1 vCPU, 1 GB RAM, 20 GB SSD) running in Hanzo Cloud with access to 100+ AI models via the Hanzo LLM Gateway. 500 GB transfer included. Your bot is always on, backed up daily, and accessible from any device. All chat integrations are included. New accounts get a $5 free credit.',
  },
  {
    q: 'Why is the Dev plan $15/mo instead of $20?',
    a: 'We built our cloud on best-in-class infrastructure across multiple providers to offer premium performance at competitive prices. Our Dev plan at $15/mo gives you 2 vCPU, 8 GB RAM, 25 GB SSD, and 3 TB transfer — more resources than exe.dev\'s $20/mo sandbox. No egress fees, no hidden costs.',
  },
  {
    q: 'What\'s the difference between shared and dedicated CPU?',
    a: 'Shared CPU plans (Starter, Dev, Turbo) share physical cores with other VMs — great for bursty workloads and dev environments. Dedicated CPU plans (Pro and above) guarantee exclusive CPU cores with zero noisy neighbors — ideal for production workloads, CI/CD, and consistent performance.',
  },
  {
    q: 'How does usage-based pricing work?',
    a: 'Cloud plans include generous free tiers for messages, tokens, and storage. Beyond those limits, you pay only for what you use. The first 1,000 messages/mo are free, then $0.001/message. Token costs vary by model — see hanzo.ai/pricing for full AI model pricing. Storage is 1 GB free, then $0.10/GB/mo. Block storage add-ons are $0.08/GB/mo.',
  },
  {
    q: 'Can I use my own API keys with Cloud plans?',
    a: 'Yes! Cloud plans include access to 100+ models via the Hanzo LLM Gateway, but you can also bring your own API keys if you prefer. Mix and match freely. When using your own keys, you pay the provider directly and skip our token pricing.',
  },
  {
    q: 'How does the free trial work?',
    a: 'Cloud plans include a 14-day free trial. No credit card required to start. Starter plans also come with a $5 free credit. Your bot and all its data persist after the trial — just add a payment method to continue.',
  },
  {
    q: 'What payment methods do you accept?',
    a: 'We accept credit and debit cards (Visa, Mastercard, Amex, Discover) processed via Square. We also natively accept cryptocurrency payments (BTC, ETH, SOL, USDC) — crypto credits are applied instantly. Wire transfers are available for larger amounts and processed within 1-2 business days. All payments are handled by Hanzo Commerce.',
  },
  {
    q: 'Can I run multiple bots?',
    a: 'Absolutely. Each bot is an independent instance with its own memory, personality, and configuration. Pricing is per bot per VM. The Starter plan supports 1 VM, Dev and Pro support up to 25 VMs, and higher tiers scale up to 1,000 VMs per account.',
  },
  {
    q: 'Can I add extra storage?',
    a: 'Yes. Block storage add-ons are available at $0.08/GB/mo. Attach extra SSD volumes (1 GB to 16 TB each) to any cloud VM. Resize on the fly in any region.',
  },
  {
    q: 'Is my data private?',
    a: 'Yes. Self-hosted bots keep all data on your machine. Cloud bots run in isolated VMs with encrypted storage, zero-trust networking, and KMS-managed secrets. We never train on your data. Enterprise customers can deploy on their own infrastructure.',
  },
  {
    q: 'Can I switch plans or cancel anytime?',
    a: 'Yes. Upgrade, downgrade, or cancel at any time from your dashboard at app.hanzo.bot. Changes take effect at the next billing cycle. No lock-in contracts.',
  },
  {
    q: 'Do you offer enterprise pricing?',
    a: 'Yes. For teams needing custom deployments, GPU instances (H100s), SLAs, dedicated infrastructure, or volume licensing, contact us at team@hanzo.ai. See hanzo.ai/pricing for full infrastructure options.',
  },
];

export function BillingFaq() {
  return (
    <section>
      <h2 className="text-2xl font-bold text-fd-foreground mb-8 text-center">
        Billing FAQ
      </h2>
      <div className="flex flex-col gap-4">
        {billingFaqs.map((faq) => (
          <details
            key={faq.q}
            className="group p-5 rounded-xl border border-fd-border bg-[rgba(10,15,26,0.6)] backdrop-blur-sm transition-all hover:border-neutral-600"
          >
            <summary className="text-sm font-semibold text-fd-foreground cursor-pointer list-none flex items-center justify-between gap-3">
              {faq.q}
              <span className="text-white transition-transform group-open:rotate-45 text-lg shrink-0">+</span>
            </summary>
            <p className="mt-3 text-sm text-fd-muted-foreground leading-relaxed">
              {faq.a}
            </p>
          </details>
        ))}
      </div>
    </section>
  );
}
