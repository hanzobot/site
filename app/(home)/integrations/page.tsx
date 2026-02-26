import Link from 'next/link';
import {
  MessageSquareIcon, HashIcon, GlobeIcon, UsersIcon,
  BotIcon, BrainCircuitIcon, ZapIcon, MessageCircleIcon,
  StickyNoteIcon, CheckSquareIcon, ListTodoIcon,
  PenToolIcon, MusicIcon, BedIcon,
  MonitorSmartphoneIcon, MicIcon, ClockIcon, WebhookIcon,
  CloudSunIcon, ImageIcon, SearchIcon, EyeIcon, CameraIcon,
  MailIcon, ShoppingCartIcon, PrinterIcon, HeartIcon,
  UtensilsCrossedIcon, SmartphoneIcon,
} from 'lucide-react';
import automationsData from '@/data/automations.json';
import type { ReactNode } from 'react';

interface Integration {
  name: string;
  icon: ReactNode;
  color: string;
  desc: string;
  docs: string;
}

function IntegrationCard({ item }: { item: Integration }) {
  return (
    <a
      href={item.docs}
      target="_blank"
      rel="noopener noreferrer"
      className="flex flex-col items-center text-center p-6 rounded-2xl border border-fd-border bg-[rgba(10,15,26,0.6)] backdrop-blur-sm no-underline text-fd-foreground transition-all hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(255,255,255,0.2)]"
      style={{ '--accent': item.color } as React.CSSProperties}
    >
      <span className="flex items-center justify-center mb-3 drop-shadow-md" style={{ color: item.color }}>
        {item.icon}
      </span>
      <h3 className="text-sm font-semibold mb-1.5">{item.name}</h3>
      <p className="text-xs text-fd-muted-foreground leading-snug">{item.desc}</p>
    </a>
  );
}

function Section({ title, desc, children, className }: { title: string; desc: string; children: ReactNode; className?: string }) {
  return (
    <section className="mb-14">
      <h2 className="text-xl font-semibold flex items-center gap-2.5 mb-2">
        <span className="text-white font-bold">&#x27E9;</span> {title}
      </h2>
      <p className="text-sm text-fd-muted-foreground mb-5 leading-relaxed">{desc}</p>
      <div className={className || 'grid grid-cols-2 sm:grid-cols-4 gap-4'}>
        {children}
      </div>
    </section>
  );
}

const I = (size = 32) => ({ className: `w-[${size}px] h-[${size}px]` });

const chatProviders: Integration[] = [
  { name: 'WhatsApp', icon: <MessageSquareIcon {...I()} />, color: '#a3a3a3', desc: 'QR pairing via Baileys', docs: 'https://skills.hanzo.bot/skills/wacli' },
  { name: 'Telegram', icon: <SmartphoneIcon {...I()} />, color: '#FFFFFF', desc: 'Bot API via grammY', docs: 'https://skills.hanzo.bot/skills/telegram' },
  { name: 'Discord', icon: <MessageSquareIcon {...I()} />, color: '#a3a3a3', desc: 'Servers, channels & DMs', docs: 'https://skills.hanzo.bot/skills/discord' },
  { name: 'Slack', icon: <HashIcon {...I()} />, color: '#a3a3a3', desc: 'Workspace apps via Bolt', docs: 'https://skills.hanzo.bot/skills/slack' },
  { name: 'Signal', icon: <MessageSquareIcon {...I()} />, color: '#FFFFFF', desc: 'Privacy-focused via signal-cli', docs: 'https://skills.hanzo.bot/skills/sag' },
  { name: 'iMessage', icon: <SmartphoneIcon {...I()} />, color: '#FFFFFF', desc: 'AppleScript bridge', docs: 'https://skills.hanzo.bot/skills/imessage' },
  { name: 'Teams', icon: <UsersIcon {...I()} />, color: '#FFFFFF', desc: 'Enterprise support', docs: 'https://skills.hanzo.bot/skills/teams' },
  { name: 'Matrix', icon: <GlobeIcon {...I()} />, color: '#FFFFFF', desc: 'Matrix protocol', docs: 'https://skills.hanzo.bot/skills/matrix' },
  { name: 'Nostr', icon: <MessageCircleIcon {...I()} />, color: '#FFFFFF', desc: 'Decentralized DMs', docs: 'https://skills.hanzo.bot/skills/nostr' },
  { name: 'WebChat', icon: <GlobeIcon {...I()} />, color: '#a3a3a3', desc: 'Browser-based UI', docs: '/docs/channels/webchat' },
];

const modelProviders: Integration[] = [
  { name: 'Anthropic', icon: <BrainCircuitIcon {...I()} />, color: '#FFFFFF', desc: 'Claude Opus 4.6', docs: '/docs/models/anthropic' },
  { name: 'OpenAI', icon: <BotIcon {...I()} />, color: '#FFFFFF', desc: 'GPT-5, o3, o4-mini', docs: '/docs/models/openai' },
  { name: 'Google', icon: <GlobeIcon {...I()} />, color: '#FFFFFF', desc: 'Gemini 3 Pro/Flash', docs: '/docs/models/google' },
  { name: 'xAI', icon: <ZapIcon {...I()} />, color: '#FFFFFF', desc: 'Grok 3 & 4', docs: '/docs/models/xai' },
  { name: 'OpenRouter', icon: <ZapIcon {...I()} />, color: '#a3a3a3', desc: 'Unified API gateway', docs: '/docs/models/openrouter' },
  { name: 'Mistral', icon: <BrainCircuitIcon {...I()} />, color: '#FFFFFF', desc: 'Mistral Large & Codestral', docs: '/docs/models/mistral' },
  { name: 'DeepSeek', icon: <BrainCircuitIcon {...I()} />, color: '#FFFFFF', desc: 'DeepSeek V3 & R1', docs: '/docs/models/deepseek' },
  { name: 'Perplexity', icon: <SearchIcon {...I()} />, color: '#FFFFFF', desc: 'Search-augmented AI', docs: '/docs/models/perplexity' },
  { name: 'Hugging Face', icon: <BotIcon {...I()} />, color: '#FFFFFF', desc: 'Open-source models', docs: '/docs/models/huggingface' },
  { name: 'Local Models', icon: <BotIcon {...I()} />, color: '#FFFFFF', desc: 'Ollama, LM Studio', docs: '/docs/models/local' },
];

const productivityApps: Integration[] = [
  { name: 'Apple Notes', icon: <StickyNoteIcon {...I()} />, color: '#FFFFFF', desc: 'Native macOS/iOS notes', docs: 'https://skills.hanzo.bot/skills/apple-notes' },
  { name: 'Apple Reminders', icon: <CheckSquareIcon {...I()} />, color: '#FFFFFF', desc: 'Task management', docs: 'https://skills.hanzo.bot/skills/apple-reminders' },
  { name: 'Things 3', icon: <ListTodoIcon {...I()} />, color: '#FFFFFF', desc: 'GTD task manager', docs: 'https://skills.hanzo.bot/skills/things-mac' },
  { name: 'Notion', icon: <StickyNoteIcon {...I()} />, color: '#FFFFFF', desc: 'Workspace & databases', docs: 'https://skills.hanzo.bot/skills/notion' },
  { name: 'Obsidian', icon: <PenToolIcon {...I()} />, color: '#FFFFFF', desc: 'Knowledge graph notes', docs: 'https://skills.hanzo.bot/skills/obsidian' },
  { name: 'Trello', icon: <ListTodoIcon {...I()} />, color: '#FFFFFF', desc: 'Kanban boards', docs: 'https://skills.hanzo.bot/skills/trello' },
  { name: 'GitHub', icon: <GlobeIcon {...I()} />, color: '#FFFFFF', desc: 'Code, issues, PRs', docs: 'https://skills.hanzo.bot/skills/github' },
];

const musicAudio: Integration[] = [
  { name: 'Spotify', icon: <MusicIcon {...I()} />, color: '#FFFFFF', desc: 'Music playback control', docs: 'https://skills.hanzo.bot/skills/spotify-player' },
  { name: 'Sonos', icon: <MusicIcon {...I()} />, color: '#FFFFFF', desc: 'Multi-room audio', docs: 'https://skills.hanzo.bot/skills/sonoscli' },
  { name: 'Shazam', icon: <SearchIcon {...I()} />, color: '#FFFFFF', desc: 'Song recognition', docs: 'https://skills.hanzo.bot/skills/songsee' },
];

const smartHome: Integration[] = [
  { name: 'Philips Hue', icon: <ZapIcon {...I()} />, color: '#FFFFFF', desc: 'Smart lighting', docs: 'https://skills.hanzo.bot/skills/openhue' },
  { name: '8Sleep', icon: <BedIcon {...I()} />, color: '#FFFFFF', desc: 'Smart mattress', docs: 'https://skills.hanzo.bot/skills/eightctl' },
  { name: 'Home Assistant', icon: <GlobeIcon {...I()} />, color: '#FFFFFF', desc: 'Home automation hub', docs: 'https://skills.hanzo.bot/skills/homeassistant' },
];

const tools: Integration[] = [
  { name: 'Browser', icon: <GlobeIcon {...I()} />, color: '#FFFFFF', desc: 'Chrome/Chromium control', docs: 'https://skills.hanzo.bot/skills/verify-on-browser' },
  { name: 'Canvas', icon: <MonitorSmartphoneIcon {...I()} />, color: '#FFFFFF', desc: 'Visual workspace + A2UI', docs: '/docs/features/canvas' },
  { name: 'Voice', icon: <MicIcon {...I()} />, color: '#FFFFFF', desc: 'Voice Wake + Talk Mode', docs: 'https://skills.hanzo.bot/skills/voice-transcribe' },
  { name: 'Gmail', icon: <MailIcon {...I()} />, color: '#a3a3a3', desc: 'Pub/Sub email triggers', docs: 'https://skills.hanzo.bot/skills/gmail' },
  { name: 'Cron', icon: <ClockIcon {...I()} />, color: '#FFFFFF', desc: 'Scheduled tasks', docs: '/docs/features/cron' },
  { name: 'Webhooks', icon: <WebhookIcon {...I()} />, color: '#FFFFFF', desc: 'External triggers', docs: '/docs/features/webhooks' },
  { name: 'Weather', icon: <CloudSunIcon {...I()} />, color: '#FFFFFF', desc: 'Forecasts & conditions', docs: 'https://skills.hanzo.bot/skills/weather' },
];

const mediaCreative: Integration[] = [
  { name: 'Image Gen', icon: <ImageIcon {...I()} />, color: '#a3a3a3', desc: 'AI image generation', docs: 'https://skills.hanzo.bot/skills/image-gen' },
  { name: 'GIF Search', icon: <SearchIcon {...I()} />, color: '#FFFFFF', desc: 'Find the perfect GIF', docs: 'https://skills.hanzo.bot/skills/gifgrep' },
  { name: 'Peekaboo', icon: <EyeIcon {...I()} />, color: '#FFFFFF', desc: 'Screen capture & control', docs: 'https://skills.hanzo.bot/skills/peekaboo' },
  { name: 'Camera', icon: <CameraIcon {...I()} />, color: '#FFFFFF', desc: 'Photo/video capture', docs: 'https://skills.hanzo.bot/skills/camera' },
];

const socialComms: Integration[] = [
  { name: 'Twitter/X', icon: <GlobeIcon {...I()} />, color: '#FFFFFF', desc: 'Tweet, reply, search', docs: 'https://skills.hanzo.bot/skills/bird' },
  { name: 'Email', icon: <MailIcon {...I()} />, color: '#FFFFFF', desc: 'Send & read emails', docs: 'https://skills.hanzo.bot/skills/himalaya' },
];

const showcase: Integration[] = [
  { name: 'Tesco Autopilot', icon: <ShoppingCartIcon {...I()} />, color: '#FFFFFF', desc: 'Automated grocery shopping', docs: 'https://skills.hanzo.bot/skills/tesco-autopilot' },
  { name: 'Bambu Control', icon: <PrinterIcon {...I()} />, color: '#FFFFFF', desc: '3D printer management', docs: 'https://skills.hanzo.bot/skills/bambu-control' },
  { name: 'Oura Ring', icon: <HeartIcon {...I()} />, color: '#FFFFFF', desc: 'Health data insights', docs: 'https://skills.hanzo.bot/skills/oura-ring' },
  { name: 'Food Ordering', icon: <UtensilsCrossedIcon {...I()} />, color: '#FFFFFF', desc: 'Foodora integration', docs: 'https://skills.hanzo.bot/skills/food-ordering' },
];

const popularIntegrations = [
  'Slack', 'HubSpot', 'Google Sheets', 'GitHub', 'Shopify', 'Stripe', 'Jira Cloud',
  'Microsoft Excel 365', 'Notion', 'Mailchimp', 'Salesforce', 'Zendesk',
  'Airtable', 'Twilio', 'Discord', 'OpenAI', 'Google Drive',
];

export const metadata = {
  title: 'Integrations — Hanzo Bot',
};

export default function IntegrationsPage() {
  const autoCategories = automationsData.categories
    .filter((c: any) => c.id !== 'OTHER' && c.id !== 'CORE' && c.id !== 'FLOW_CONTROL' && c.id !== 'UNIVERSAL_AI')
    .slice(0, 14);

  return (
    <main className="relative z-[1] max-w-[1000px] mx-auto px-6 py-10">
      <div className="stars" />
      <div className="nebula" />

      <header className="text-center mb-12 animate-[fadeInUp_0.6s_ease-out]">
        <h1 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-br from-fd-foreground via-neutral-400 to-[#a3a3a3] bg-[length:200%_200%] bg-clip-text text-transparent">
          Integrations
        </h1>
        <p className="text-lg text-fd-muted-foreground max-w-[600px] mx-auto leading-relaxed">
          600+ integrations with the apps and services you already use.
          <br />
          Chat from your phone, control from your desktop, automate everything.
        </p>
      </header>

      <Section title="Chat Providers" desc="Message your bot from any chat app — it responds right where you are.">
        {chatProviders.map((p) => <IntegrationCard key={p.name + p.desc} item={p} />)}
      </Section>

      <Section title="AI Models" desc="Use any model you want — cloud or local. Your keys, your choice.">
        {modelProviders.map((p) => <IntegrationCard key={p.name} item={p} />)}
      </Section>

      <Section title="Productivity" desc="Notes, tasks, wikis, and code — your bot works with your favorite tools.">
        {productivityApps.map((p) => <IntegrationCard key={p.name} item={p} />)}
      </Section>

      <Section title="Music & Audio" desc="Control playback, identify songs, and manage multi-room audio." className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        {musicAudio.map((p) => <IntegrationCard key={p.name} item={p} />)}
      </Section>

      <Section title="Smart Home" desc="Lights, thermostats, and IoT devices — all voice-controllable." className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        {smartHome.map((p) => <IntegrationCard key={p.name} item={p} />)}
      </Section>

      <Section title="Tools & Automation" desc="Browser control, scheduled tasks, email triggers, and more.">
        {tools.map((p) => <IntegrationCard key={p.name} item={p} />)}
      </Section>

      <Section title="Media & Creative" desc="Generate images, capture screens, and find the perfect GIF.">
        {mediaCreative.map((p) => <IntegrationCard key={p.name} item={p} />)}
      </Section>

      <Section title="Social" desc="Post tweets, manage email, and stay connected." className="grid grid-cols-2 max-w-[500px] gap-4">
        {socialComms.map((p) => <IntegrationCard key={p.name} item={p} />)}
      </Section>

      <Section title="Community Showcase" desc="Impressive integrations built by the community.">
        {showcase.map((p) => <IntegrationCard key={p.name} item={p} />)}
      </Section>

      {/* Automation Platform */}
      <section className="mb-14">
        <h2 className="text-xl font-semibold flex items-center gap-2.5 mb-2">
          <span className="text-white font-bold">&#x27E9;</span> Automation Platform
        </h2>
        <p className="text-sm text-fd-muted-foreground mb-5 leading-relaxed">
          {automationsData.total} automation integrations powered by <strong>Hanzo Auto</strong> — connect any service, trigger any workflow, automate anything.
        </p>
        <div className="grid grid-cols-[repeat(auto-fill,minmax(140px,1fr))] gap-3 mb-6">
          {autoCategories.map((cat: any) => (
            <div key={cat.id} className="flex flex-col items-center gap-1 p-4 rounded-xl border border-fd-border bg-[rgba(10,15,26,0.6)] backdrop-blur-sm transition-all hover:border-neutral-600 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(163,163,163,0.12)]">
              <span className="text-xl font-bold text-[#a3a3a3]">{cat.count}</span>
              <span className="text-xs text-fd-muted-foreground text-center leading-snug">{cat.label}</span>
            </div>
          ))}
        </div>
        <div className="mt-4">
          <p className="text-xs text-fd-muted-foreground mb-3">Popular integrations:</p>
          <div className="flex flex-wrap gap-2">
            {popularIntegrations.map((name) => (
              <span key={name} className="inline-flex items-center px-3.5 py-1.5 rounded-full border border-fd-border bg-[rgba(10,15,26,0.5)] text-xs text-fd-muted-foreground transition-all hover:border-neutral-600 hover:text-fd-foreground">
                {name}
              </span>
            ))}
            <span className="inline-flex items-center px-3.5 py-1.5 rounded-full border border-[#a3a3a3] text-xs text-[#a3a3a3] font-medium">
              +{automationsData.total - popularIntegrations.length} more
            </span>
          </div>
        </div>
        <div className="text-center mt-6">
          <a
            href="https://app.hanzo.bot"
            className="inline-block px-7 py-3 rounded-xl bg-gradient-to-br from-white to-neutral-400 text-[#050810] font-semibold no-underline transition-all hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(163,163,163,0.4)]"
          >
            Launch Hanzo Auto →
          </a>
        </div>
      </section>

      {/* CTA */}
      <section className="text-center p-12 rounded-2xl border border-fd-border bg-[rgba(10,15,26,0.6)] backdrop-blur-sm mb-10">
        <h2 className="text-2xl font-semibold mb-2">Ready to get started?</h2>
        <p className="text-fd-muted-foreground mb-6">Install Hanzo Bot and connect your first provider in minutes.</p>
        <Link
          href="/"
          className="inline-block px-8 py-3.5 rounded-xl bg-gradient-to-br from-white to-neutral-300 text-[#050810] font-semibold no-underline transition-all hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(255,255,255,0.4)]"
        >
          Get Started
        </Link>
      </section>

      {/* Skills CTA */}
      <section className="text-center p-12 rounded-2xl border border-fd-border bg-[rgba(10,15,26,0.6)] backdrop-blur-sm mb-10">
        <h2 className="text-2xl font-semibold mb-2">Want More Skills?</h2>
        <p className="text-fd-muted-foreground mb-6 max-w-[600px] mx-auto">
          Discover 700+ community-built skills on the Hanzo Skill Hub — the public registry for sharing and discovering agent capabilities.
        </p>
        <Link
          href="/skills"
          className="inline-block px-8 py-3.5 rounded-xl bg-gradient-to-br from-white to-neutral-400 text-[#050810] font-semibold no-underline transition-all hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(163,163,163,0.4)]"
        >
          Browse Skill Hub →
        </Link>
      </section>
    </main>
  );
}
