'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useTheme } from 'next-themes'
import {
  Send, Globe, ChevronDown, Sun, Moon, Monitor,
  BookOpen, Code, PenLine,
} from 'lucide-react'
import { cn } from '@/lib/cn'
import { logo } from '@/lib/layout.shared'

const footerLinks = {
  platform: {
    title: 'Platform',
    items: [
      { title: 'Download CLI', href: '/get-started' },
      { title: 'Hanzo Cloud', href: '/pricing' },
      { title: 'Desktop VMs', href: '/docs/features/cloud' },
      { title: 'MCP Integration', href: '/docs/features/mcp' },
      { title: 'Skills Market', href: '/skills' },
      { title: 'All Integrations', href: '/integrations' },
    ],
  },
  features: {
    title: 'Features',
    items: [
      { title: 'Local Runtime', href: '/docs/features/local' },
      { title: '100+ AI Models', href: '/docs/features/models' },
      { title: 'Chat Integrations', href: '/integrations' },
      { title: 'Persistent Memory', href: '/docs/features/memory' },
      { title: 'Browser Control', href: '/docs/features/browser' },
      { title: 'System Access', href: '/docs/features/system-access' },
    ],
  },
  solutions: {
    title: 'Solutions',
    items: [
      { title: 'For Developers', href: '/solutions#developers' },
      { title: 'For DevOps', href: '/solutions#devops' },
      { title: 'For Teams', href: '/solutions#teams' },
      { title: 'For Enterprise', href: '/solutions#enterprise' },
      { title: 'AI Assistant', href: '/solutions#assistant' },
      { title: 'Code Review', href: '/solutions#code-review' },
    ],
  },
  resources: {
    title: 'Resources',
    items: [
      { title: 'Documentation', href: '/docs' },
      { title: 'API Reference', href: '/docs/api' },
      { title: 'Tutorials', href: '/docs/tutorials' },
      { title: 'Changelog', href: '/docs/changelog' },
      { title: 'GitHub', href: 'https://github.com/hanzoai/bot', external: true },
      { title: 'Discord', href: 'https://discord.gg/hanzo', external: true },
    ],
  },
  company: {
    title: 'Company',
    items: [
      { title: 'About Hanzo', href: 'https://hanzo.ai/team', external: true },
      { title: 'Blog', href: 'https://hanzo.ai/blog', external: true },
      { title: 'Careers', href: 'https://hanzo.ai/careers', external: true },
      { title: 'Contact', href: 'https://hanzo.ai/contact', external: true },
      { title: 'Philosophy', href: 'https://hanzo.ai/philosophy', external: true },
    ],
  },
  support: {
    title: 'Support',
    items: [
      { title: 'Help Center', href: 'https://hanzo.ai/contact', external: true },
      { title: 'System Status', href: 'https://hanzo.ai/status', external: true },
      { title: 'Privacy', href: 'https://hanzo.ai/privacy', external: true },
      { title: 'Terms', href: 'https://hanzo.ai/terms', external: true },
      { title: 'Security', href: 'https://hanzo.ai/security', external: true },
    ],
  },
}

const socialLinks = [
  {
    name: 'X',
    href: 'https://x.com/hanzoai',
    icon: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    name: 'GitHub',
    href: 'https://github.com/hanzoai/bot',
    icon: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
      </svg>
    ),
  },
  {
    name: 'Discord',
    href: 'https://discord.gg/hanzo',
    icon: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.947 2.418-2.157 2.418z" />
      </svg>
    ),
  },
  {
    name: 'LinkedIn',
    href: 'https://linkedin.com/company/hanzoai',
    icon: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
]

const chatActions = [
  { icon: PenLine, label: 'Write' },
  { icon: BookOpen, label: 'Learn' },
  { icon: Code, label: 'Code' },
]

function FooterColumn({ title, items }: {
  title: string
  items: Array<{ title: string; href: string; external?: boolean }>
}) {
  return (
    <div>
      <h3 className="text-fd-muted-foreground text-xs font-medium mb-3 uppercase tracking-wider">{title}</h3>
      <ul className="space-y-2">
        {items.map((item) => (
          <li key={item.title}>
            {item.external ? (
              <a href={item.href} target="_blank" rel="noopener noreferrer"
                className="text-sm text-fd-muted-foreground hover:text-fd-foreground transition-colors">
                {item.title}
              </a>
            ) : (
              <Link href={item.href}
                className="text-sm text-fd-muted-foreground hover:text-fd-foreground transition-colors">
                {item.title}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}

function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    <div className="inline-flex items-center gap-1 p-1 rounded-lg bg-fd-secondary border border-fd-border">
      {[
        { value: 'light', icon: Sun, label: 'Light' },
        { value: 'dark', icon: Moon, label: 'Dark' },
        { value: 'system', icon: Monitor, label: 'System' },
      ].map(({ value, icon: Icon, label }) => (
        <button
          key={value}
          onClick={() => setTheme(value)}
          className={cn(
            'p-1.5 rounded-md transition-colors cursor-pointer',
            theme === value
              ? 'bg-fd-accent text-fd-foreground'
              : 'text-fd-muted-foreground hover:text-fd-foreground'
          )}
          aria-label={label}
        >
          <Icon className="w-3.5 h-3.5" />
        </button>
      ))}
    </div>
  )
}

export function Footer() {
  const [chatInput, setChatInput] = useState('')
  const [newsletterEmail, setNewsletterEmail] = useState('')
  const [newsletterStatus, setNewsletterStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [newsletterMessage, setNewsletterMessage] = useState('')

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!newsletterEmail.trim()) return
    setNewsletterStatus('loading')
    try {
      const res = await fetch('https://api.hanzo.ai/v1/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: newsletterEmail }),
      })
      if (!res.ok) throw new Error(`Subscribe failed (${res.status})`)
      setNewsletterStatus('success')
      setNewsletterMessage('Subscribed successfully.')
      setNewsletterEmail('')
    } catch (err) {
      setNewsletterStatus('error')
      setNewsletterMessage(err instanceof Error ? err.message : 'Something went wrong.')
    }
  }

  const handleChatSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (chatInput.trim()) {
      window.open(`https://hanzo.chat?q=${encodeURIComponent(chatInput)}`, '_blank')
      setChatInput('')
    }
  }

  return (
    <footer className="bg-fd-background border-t border-fd-border relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 relative z-10">
        {/* Main content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Left: Logo + chat */}
          <div className="lg:col-span-3 space-y-6">
            <Link href="/" className="flex items-center gap-2 text-fd-foreground no-underline">
              <svg viewBox="0 0 67 67" xmlns="http://www.w3.org/2000/svg" className="size-5" aria-hidden="true">
                <path d="M22.21 67V44.6369H0V67H22.21Z" fill="currentColor"/>
                <path d="M0 44.6369L22.21 46.8285V44.6369H0Z" fill="currentColor" opacity="0.4"/>
                <path d="M66.7038 22.3184H22.2534L0.0878906 44.6367H44.4634L66.7038 22.3184Z" fill="currentColor"/>
                <path d="M22.21 0H0V22.3184H22.21V0Z" fill="currentColor"/>
                <path d="M66.7198 0H44.5098V22.3184H66.7198V0Z" fill="currentColor"/>
                <path d="M66.6753 22.3185L44.5098 20.0822V22.3185H66.6753Z" fill="currentColor" opacity="0.4"/>
                <path d="M66.7198 67V44.6369H44.5098V67H66.7198Z" fill="currentColor"/>
              </svg>
              <span className="font-bold text-lg">Hanzo Bot</span>
            </Link>

            <p className="text-sm text-fd-muted-foreground leading-relaxed">
              Your AI team in a box. One bot for every role, every channel. Run locally or deploy to the cloud.
            </p>

            {/* Chat widget */}
            <form onSubmit={handleChatSubmit} className="space-y-3">
              <div className="relative">
                <input
                  type="text"
                  value={chatInput}
                  onChange={(e) => setChatInput(e.target.value)}
                  placeholder="Ask Hanzo anything..."
                  className="w-full bg-fd-secondary border border-fd-border rounded-lg px-4 py-2.5 pr-10 text-sm text-fd-foreground placeholder-fd-muted-foreground focus:outline-none focus:border-fd-ring transition-colors"
                />
                <button
                  type="submit"
                  className="absolute right-2 top-1/2 -translate-y-1/2 w-6 h-6 rounded flex items-center justify-center bg-brand hover:bg-brand/90 transition-colors cursor-pointer"
                >
                  <Send className="w-3 h-3 text-brand-foreground" />
                </button>
              </div>
              <div className="flex flex-wrap gap-2">
                {chatActions.map((action) => {
                  const Icon = action.icon
                  return (
                    <button
                      key={action.label}
                      type="button"
                      onClick={() => window.open(`https://hanzo.chat?action=${action.label.toLowerCase()}`, '_blank')}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-fd-secondary border border-fd-border text-fd-muted-foreground text-xs font-medium hover:bg-fd-accent hover:text-fd-foreground transition-colors cursor-pointer"
                    >
                      <Icon className="w-3 h-3" />
                      {action.label}
                    </button>
                  )
                })}
              </div>
            </form>
          </div>

          {/* Right: Navigation columns */}
          <div className="lg:col-span-9">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-4">
              <FooterColumn {...footerLinks.platform} />
              <FooterColumn {...footerLinks.features} />
              <FooterColumn {...footerLinks.solutions} />
              <FooterColumn {...footerLinks.resources} />
              <FooterColumn {...footerLinks.company} />
              <FooterColumn {...footerLinks.support} />
            </div>
          </div>
        </div>

        {/* Newsletter + Social */}
        <div className="mt-10 pt-8 border-t border-fd-border">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="flex-1 max-w-md">
              <h4 className="text-sm font-semibold text-fd-foreground mb-2">Stay updated</h4>
              <p className="text-xs text-fd-muted-foreground mb-3">Product updates, AI news, and bot tips.</p>
              <form onSubmit={handleNewsletterSubmit} className="flex gap-2">
                <input
                  type="email"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="flex-1 bg-fd-secondary border border-fd-border rounded-lg px-3 py-2 text-sm text-fd-foreground placeholder-fd-muted-foreground focus:outline-none focus:border-fd-ring transition-colors"
                />
                <button
                  type="submit"
                  disabled={newsletterStatus === 'loading'}
                  className="px-4 py-2 rounded-lg text-sm font-medium text-brand-foreground bg-brand hover:bg-brand/90 transition-colors disabled:opacity-50 cursor-pointer"
                >
                  {newsletterStatus === 'loading' ? '...' : 'Subscribe'}
                </button>
              </form>
              {newsletterMessage && (
                <p className={`text-xs mt-1 ${newsletterStatus === 'error' ? 'text-red-400' : 'text-green-400'}`}>
                  {newsletterMessage}
                </p>
              )}
            </div>

            <div className="flex flex-col items-start md:items-end gap-3">
              <div className="flex items-center gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-fd-muted-foreground hover:text-fd-foreground transition-colors"
                    aria-label={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
              <div className="flex items-center gap-3 text-xs">
                <a href="https://hanzo.ai/referrals" target="_blank" rel="noopener noreferrer" className="text-fd-muted-foreground hover:text-fd-foreground transition-colors">
                  Referral Program
                </a>
                <span className="text-fd-muted-foreground/50">&#8226;</span>
                <a href="https://hanzo.ai/contact" target="_blank" rel="noopener noreferrer" className="text-fd-muted-foreground hover:text-fd-foreground transition-colors">
                  Enterprise
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-6 pt-4 border-t border-fd-border">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3 text-xs">
              <a
                href="https://hanzo.industries"
                target="_blank"
                rel="noopener noreferrer"
                className="text-fd-muted-foreground tracking-wider uppercase hover:text-fd-foreground transition-colors"
                style={{ fontWeight: 100 }}
              >
                BY HANZO INDUSTRIES
              </a>
              <span className="text-fd-muted-foreground/50">
                &copy; 2016-{new Date().getFullYear()} HANZO.AI
              </span>
            </div>

            <div className="flex items-center gap-3">
              <ThemeToggle />
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
