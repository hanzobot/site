'use client';

import {
  MessageSquareIcon, BotIcon, GlobeIcon, HashIcon,
  SmartphoneIcon, BrainCircuitIcon, MusicIcon, LampIcon,
  BookOpenIcon, MailIcon, GithubIcon, ChromeIcon,
} from 'lucide-react';
import type { ReactNode } from 'react';

interface Pill {
  name: string;
  icon: ReactNode;
  color: string;
}

const pills: Pill[] = [
  { name: 'WhatsApp', icon: <MessageSquareIcon className="w-4 h-4" />, color: '#a3a3a3' },
  { name: 'Telegram', icon: <SmartphoneIcon className="w-4 h-4" />, color: '#FFFFFF' },
  { name: 'Discord', icon: <MessageSquareIcon className="w-4 h-4" />, color: '#a3a3a3' },
  { name: 'Slack', icon: <HashIcon className="w-4 h-4" />, color: '#a3a3a3' },
  { name: 'Signal', icon: <MessageSquareIcon className="w-4 h-4" />, color: '#FFFFFF' },
  { name: 'iMessage', icon: <SmartphoneIcon className="w-4 h-4" />, color: '#FFFFFF' },
  { name: 'Claude', icon: <BrainCircuitIcon className="w-4 h-4" />, color: '#FFFFFF' },
  { name: 'GPT', icon: <BotIcon className="w-4 h-4" />, color: '#FFFFFF' },
  { name: 'Spotify', icon: <MusicIcon className="w-4 h-4" />, color: '#FFFFFF' },
  { name: 'Hue', icon: <LampIcon className="w-4 h-4" />, color: '#FFFFFF' },
  { name: 'Obsidian', icon: <BookOpenIcon className="w-4 h-4" />, color: '#FFFFFF' },
  { name: 'Twitter', icon: <GlobeIcon className="w-4 h-4" />, color: '#FFFFFF' },
  { name: 'Browser', icon: <ChromeIcon className="w-4 h-4" />, color: '#FFFFFF' },
  { name: 'Gmail', icon: <MailIcon className="w-4 h-4" />, color: '#a3a3a3' },
  { name: 'GitHub', icon: <GithubIcon className="w-4 h-4" />, color: '#FFFFFF' },
];

export function IntegrationPills() {
  return (
    <section className="mb-14">
      <h2 className="text-xl font-semibold flex items-center gap-2.5 mb-5">
        <span className="text-white font-bold">&#x27E9;</span> Works With Everything
      </h2>
      <div className="flex flex-wrap gap-2.5 justify-center mb-4">
        {pills.map((p) => (
          <span
            key={p.name}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full border border-fd-border bg-[rgba(10,15,26,0.6)] backdrop-blur-sm text-sm text-fd-muted-foreground transition-all hover:border-neutral-600 hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(255,255,255,0.2)] cursor-default"
          >
            <span style={{ color: p.color }}>{p.icon}</span>
            <span>{p.name}</span>
          </span>
        ))}
      </div>
      <div className="flex justify-center items-center gap-3 flex-wrap">
        <a href="/integrations" className="text-sm text-white font-medium no-underline hover:text-white transition-colors">
          View all 600+ integrations →
        </a>
        <span className="text-fd-muted-foreground text-sm">·</span>
        <a href="/showcase" className="text-sm text-white font-medium no-underline hover:text-white transition-colors">
          See what people built →
        </a>
      </div>
    </section>
  );
}
