'use client'

import { useState, useEffect, useCallback, useRef } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Search, ChevronDown, ArrowRight, Menu, X,
  TerminalIcon, BrainIcon, MessageCircleIcon, GlobeIcon,
  PuzzleIcon, MonitorIcon, ShieldIcon, DownloadIcon,
  ServerIcon, UsersIcon, CodeIcon, ZapIcon, BotIcon,
  AppWindowIcon, LayoutDashboardIcon,
} from 'lucide-react'
import { cn } from '@/lib/cn'
import { logo } from '@/lib/layout.shared'
import { NavMenu } from '@/components/nav-menu'
import { CommandPalette } from '@/components/command-palette'

/* ─── Features dropdown content ─── */
const FeaturesContent = ({ closeMenu }: { closeMenu: () => void }) => (
  <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
    <div>
      <h3 className="text-fd-muted-foreground text-xs font-medium mb-3 uppercase tracking-wider">Core</h3>
      <div className="space-y-3">
        <MenuLink href="/docs/features/local" icon={TerminalIcon} label="Runs Locally" description="Mac, Windows, Linux. Private by default." closeMenu={closeMenu} />
        <MenuLink href="/docs/features/models" icon={BrainIcon} label="100+ AI Models" description="Claude, GPT, Gemini, Llama, and more." closeMenu={closeMenu} />
        <MenuLink href="/integrations" icon={MessageCircleIcon} label="Every Chat App" description="WhatsApp, Slack, Discord, Telegram." closeMenu={closeMenu} />
      </div>
    </div>
    <div>
      <h3 className="text-fd-muted-foreground text-xs font-medium mb-3 uppercase tracking-wider">Capabilities</h3>
      <div className="space-y-3">
        <MenuLink href="/docs/features/memory" icon={BrainIcon} label="Persistent Memory" description="Remembers you across sessions." closeMenu={closeMenu} />
        <MenuLink href="/docs/features/browser" icon={GlobeIcon} label="Browser Control" description="Browse, fill forms, extract data." closeMenu={closeMenu} />
        <MenuLink href="/docs/features/system-access" icon={TerminalIcon} label="System Access" description="Files, shell, scripts. Full or sandboxed." closeMenu={closeMenu} />
      </div>
    </div>
    <div>
      <h3 className="text-fd-muted-foreground text-xs font-medium mb-3 uppercase tracking-wider">Extend</h3>
      <div className="space-y-3">
        <MenuLink href="/skills" icon={PuzzleIcon} label="Skills & Plugins" description="Community skills or build your own." closeMenu={closeMenu} />
        <MenuLink href="/docs/features/cloud" icon={MonitorIcon} label="Cloud Desktop VMs" description="Full Linux desktop per agent." closeMenu={closeMenu} />
        <MenuLink href="/docs/features/mcp" icon={ZapIcon} label="MCP Integration" description="260+ tools via Model Context Protocol." closeMenu={closeMenu} />
      </div>
    </div>
    <div className="p-4 rounded-xl bg-gradient-to-br from-[rgba(255,77,77,0.08)] to-fd-secondary border border-fd-border">
      <h3 className="text-fd-foreground font-semibold mb-1">Hanzo Bot</h3>
      <p className="text-fd-muted-foreground text-xs mb-3 leading-relaxed">
        One bot. Every role. Every channel. A full computer-using AI agent.
      </p>
      <div className="space-y-2 border-t border-fd-border/30 pt-3">
        <Link href="/get-started" onClick={closeMenu} className="flex items-center gap-2 text-sm text-brand hover:text-fd-foreground transition-colors font-medium">
          <DownloadIcon className="h-3.5 w-3.5" />
          Get Started Free
        </Link>
        <a href="https://app.hanzo.bot" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-fd-muted-foreground hover:text-fd-foreground transition-colors">
          <MonitorIcon className="h-3.5 w-3.5" />
          Launch in Cloud
        </a>
      </div>
    </div>
  </div>
)

/* ─── Solutions dropdown content ─── */
const SolutionsContent = ({ closeMenu }: { closeMenu: () => void }) => (
  <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
    <div>
      <h3 className="text-fd-muted-foreground text-xs font-medium mb-3 uppercase tracking-wider">By Role</h3>
      <div className="space-y-3">
        <MenuLink href="/solutions#developers" icon={CodeIcon} label="Developers" description="Code review, testing, documentation." closeMenu={closeMenu} />
        <MenuLink href="/solutions#devops" icon={ServerIcon} label="DevOps" description="Automation, monitoring, deployment." closeMenu={closeMenu} />
        <MenuLink href="/solutions#teams" icon={UsersIcon} label="Teams" description="Collaboration and knowledge sharing." closeMenu={closeMenu} />
        <MenuLink href="/solutions#enterprise" icon={ShieldIcon} label="Enterprise" description="Custom deployment, SSO, compliance." closeMenu={closeMenu} />
      </div>
    </div>
    <div>
      <h3 className="text-fd-muted-foreground text-xs font-medium mb-3 uppercase tracking-wider">Use Cases</h3>
      <div className="space-y-3">
        <MenuLink href="/solutions#assistant" icon={BotIcon} label="AI Assistant" description="Personal AI that knows your context." closeMenu={closeMenu} />
        <MenuLink href="/solutions#code-review" icon={CodeIcon} label="Code Review" description="Automated, thorough code reviews." closeMenu={closeMenu} />
        <MenuLink href="/solutions#chat-support" icon={MessageCircleIcon} label="Chat Support" description="Customer support across all channels." closeMenu={closeMenu} />
        <MenuLink href="/solutions#automation" icon={ZapIcon} label="Automation" description="Workflows, scripts, scheduled tasks." closeMenu={closeMenu} />
      </div>
    </div>
    <div>
      <h3 className="text-fd-muted-foreground text-xs font-medium mb-3 uppercase tracking-wider">Industry</h3>
      <div className="space-y-3">
        <MenuLink href="/solutions#startups" icon={ZapIcon} label="Startups" description="Ship 10x faster with fewer people." closeMenu={closeMenu} />
        <MenuLink href="/solutions#agencies" icon={UsersIcon} label="Agencies" description="Scale without scaling headcount." closeMenu={closeMenu} />
        <MenuLink href="/solutions#saas" icon={ServerIcon} label="SaaS" description="Automate support, onboarding, QA." closeMenu={closeMenu} />
      </div>
    </div>
    <div className="p-4 rounded-xl bg-fd-secondary border border-fd-border">
      <h3 className="text-fd-foreground font-semibold mb-1">Save $200K+/yr</h3>
      <p className="text-fd-muted-foreground text-xs mb-3 leading-relaxed">
        One bot replaces the cost of multiple specialized hires. It never sleeps, never takes PTO.
      </p>
      <Link href="/pricing" onClick={closeMenu} className="flex items-center gap-2 text-sm text-brand hover:text-fd-foreground transition-colors font-medium">
        View Pricing
        <ArrowRight className="h-3.5 w-3.5" />
      </Link>
    </div>
  </div>
)

/* ─── Reusable menu link ─── */
function MenuLink({
  href, icon: Icon, label, description, closeMenu, external,
}: {
  href: string
  icon: React.ElementType
  label: string
  description?: string
  closeMenu: () => void
  external?: boolean
}) {
  const content = (
    <div className="group flex items-start gap-2 py-1">
      <Icon className="h-3.5 w-3.5 mt-0.5 text-fd-muted-foreground group-hover:text-fd-foreground transition-colors shrink-0" />
      <div>
        <span className="text-sm text-fd-foreground/80 group-hover:text-fd-foreground transition-colors">{label}</span>
        {description && <p className="text-xs text-fd-muted-foreground">{description}</p>}
      </div>
    </div>
  )

  if (external) {
    return <a href={href} target="_blank" rel="noopener noreferrer" className="block">{content}</a>
  }
  return <Link href={href} onClick={closeMenu} className="block">{content}</Link>
}

/* ─── Try Hanzo dropdown (right side) ─── */
function TryHanzoDropdown() {
  const [isOpen, setIsOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false)
    }
    if (isOpen) document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [isOpen])

  return (
    <div
      className="relative"
      ref={ref}
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button className="inline-flex items-center gap-1.5 bg-brand text-brand-foreground hover:bg-brand/90 rounded-full h-9 px-4 text-sm font-semibold transition-all cursor-pointer">
        Try Hanzo
        <ChevronDown className={cn('w-3.5 h-3.5 transition-transform duration-200', isOpen && 'rotate-180')} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.96 }}
            transition={{ duration: 0.15 }}
            className="absolute right-0 mt-2 w-[340px] bg-fd-secondary/95 backdrop-blur-xl border border-fd-border rounded-2xl shadow-2xl overflow-hidden z-[100]"
          >
            {/* Get Started */}
            <div className="p-3">
              <div className="px-1 mb-2">
                <span className="text-[10px] font-semibold text-fd-muted-foreground uppercase tracking-wider">Get Started</span>
              </div>
              <div className="space-y-1">
                <Link href="/get-started" onClick={() => setIsOpen(false)} className="group flex items-start gap-3 p-3 rounded-xl hover:bg-fd-accent transition-colors">
                  <div className="w-8 h-8 rounded-lg bg-fd-accent flex items-center justify-center shrink-0 group-hover:bg-brand/20 transition-colors">
                    <DownloadIcon className="w-4 h-4 text-fd-muted-foreground group-hover:text-brand transition-colors" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-semibold text-fd-foreground">Download Free</span>
                      <span className="text-[9px] font-semibold tracking-wider uppercase text-fd-muted-foreground bg-fd-accent px-1.5 py-px rounded">CLI</span>
                    </div>
                    <p className="text-xs text-fd-muted-foreground leading-tight mt-0.5">Run locally on your own hardware.</p>
                  </div>
                </Link>
                <a href="https://app.hanzo.bot/auth/signup?plan=cloud" target="_blank" rel="noopener noreferrer" onClick={() => setIsOpen(false)} className="group flex items-start gap-3 p-3 rounded-xl hover:bg-fd-accent transition-colors">
                  <div className="w-8 h-8 rounded-lg bg-fd-accent flex items-center justify-center shrink-0 group-hover:bg-brand/20 transition-colors">
                    <ServerIcon className="w-4 h-4 text-fd-muted-foreground group-hover:text-brand transition-colors" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-semibold text-fd-foreground">Launch in Cloud</span>
                      <span className="text-[9px] font-semibold tracking-wider uppercase text-brand bg-brand/10 px-1.5 py-px rounded">$5/mo</span>
                    </div>
                    <p className="text-xs text-fd-muted-foreground leading-tight mt-0.5">Full Linux VM. Always on. No setup.</p>
                  </div>
                </a>
              </div>
            </div>

            <div className="border-t border-fd-border" />

            {/* Apps */}
            <div className="p-3">
              <div className="px-1 mb-1.5">
                <span className="text-[10px] font-semibold text-fd-muted-foreground uppercase tracking-wider">Apps</span>
              </div>
              <div className="grid grid-cols-2 gap-1">
                {[
                  { label: 'Hanzo App', desc: 'AI workspace', href: 'https://hanzo.app', icon: AppWindowIcon, external: true },
                  { label: 'Hanzo Bot', desc: 'Agent platform', href: 'https://app.hanzo.bot', icon: BotIcon, external: true },
                  { label: 'Hanzo Chat', desc: 'Chat with 100+ models', href: 'https://hanzo.chat', icon: MessageCircleIcon, external: true },
                  { label: 'Hanzo Dev', desc: 'AI coding agent', href: 'https://hanzo.ai/dev', icon: TerminalIcon, external: true },
                ].map((item) => {
                  const Icon = item.icon
                  return (
                    <a key={item.label} href={item.href} target="_blank" rel="noopener noreferrer" onClick={() => setIsOpen(false)}
                      className="group flex items-center gap-2 py-2 px-2.5 rounded-lg hover:bg-fd-accent transition-colors">
                      <Icon className="w-3.5 h-3.5 text-fd-muted-foreground group-hover:text-fd-foreground shrink-0 transition-colors" />
                      <div className="min-w-0">
                        <div className="text-[13px] font-medium text-fd-foreground">{item.label}</div>
                        <div className="text-[10px] text-fd-muted-foreground truncate">{item.desc}</div>
                      </div>
                    </a>
                  )
                })}
              </div>
            </div>

            {/* CTA */}
            <div className="p-3 pt-0">
              <a
                href="https://app.hanzo.bot"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center gap-2 w-full py-2 rounded-lg bg-brand text-brand-foreground text-sm font-medium hover:bg-brand/90 transition"
              >
                <LayoutDashboardIcon className="w-3.5 h-3.5" />
                Open Dashboard
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

/* ─── Mobile Menu ─── */
function MobileMenu({ isOpen, onClose, onOpenSearch }: { isOpen: boolean; onClose: () => void; onOpenSearch: () => void }) {
  useEffect(() => {
    if (isOpen) document.body.style.overflow = 'hidden'
    else document.body.style.overflow = ''
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-fd-background/95 backdrop-blur-md z-50"
      style={{ top: 'var(--header-height, 60px)' }}
    >
      <div className="flex flex-col gap-1 p-4 overflow-y-auto h-full">
        <button
          onClick={() => { onOpenSearch(); onClose() }}
          className="flex items-center gap-3 px-4 py-3 rounded-xl bg-fd-secondary border border-fd-border text-fd-muted-foreground text-sm w-full text-left"
        >
          <Search className="w-4 h-4" />
          Search...
          <kbd className="ml-auto text-[10px] font-mono bg-fd-accent px-1.5 py-0.5 rounded">⌘K</kbd>
        </button>

        <div className="mt-4 space-y-1">
          {[
            { label: 'Features', href: '/docs/features' },
            { label: 'Solutions', href: '/solutions' },
            { label: 'Pricing', href: '/pricing' },
            { label: 'Docs', href: '/docs' },
            { label: 'Skills', href: '/skills' },
            { label: 'Integrations', href: '/integrations' },
          ].map((item) => (
            <Link key={item.label} href={item.href} onClick={onClose}
              className="block px-4 py-3 text-fd-foreground text-base font-medium hover:bg-fd-accent rounded-lg transition-colors">
              {item.label}
            </Link>
          ))}
        </div>

        <div className="border-t border-fd-border my-4" />

        <a href="https://hanzo.ai/contact" target="_blank" rel="noopener noreferrer"
          className="block px-4 py-3 text-fd-muted-foreground text-sm hover:text-fd-foreground transition-colors">
          Contact Sales
        </a>

        <div className="mt-4 space-y-2">
          <Link href="/get-started" onClick={onClose}
            className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl border border-fd-border text-fd-foreground font-semibold text-sm hover:bg-fd-accent transition-colors">
            <DownloadIcon className="w-4 h-4" />
            Get Started Free
          </Link>
          <a href="https://app.hanzo.bot" target="_blank" rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-brand text-brand-foreground font-semibold text-sm hover:bg-brand/90 transition-colors">
            <MonitorIcon className="w-4 h-4" />
            Launch in Cloud &mdash; $5/mo
          </a>
        </div>
      </div>
    </motion.div>
  )
}

/* ─── Main Navbar ─── */
export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault()
        setIsCommandPaletteOpen((prev) => !prev)
      }
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [])

  const openCommandPalette = useCallback(() => setIsCommandPaletteOpen(true), [])
  const closeCommandPalette = useCallback(() => setIsCommandPaletteOpen(false), [])

  return (
    <>
      <nav
        className={cn(
          'fixed w-full z-50 transition-all duration-300',
          isScrolled
            ? 'bg-fd-background/80 backdrop-blur-lg shadow-sm border-b border-fd-border/50'
            : 'bg-fd-background/50 backdrop-blur-sm'
        )}
      >
        <div className="w-full max-w-[1440px] mx-auto px-4 md:px-6 lg:px-8">
          <div className="flex items-center h-[var(--header-height,60px)]">
            {/* Left: Logo */}
            <div className="shrink-0 min-w-[140px]">
              <Link href="/" className="flex items-center gap-2 text-fd-foreground no-underline">
                {logo}
                <span className="font-bold text-base">Hanzo Bot</span>
              </Link>
            </div>

            {/* Center: Desktop Nav */}
            <div className="flex-1 hidden md:flex justify-center items-center gap-5">
              <NavMenu label="Features">
                {(closeMenu) => <FeaturesContent closeMenu={closeMenu} />}
              </NavMenu>

              <NavMenu label="Solutions">
                {(closeMenu) => <SolutionsContent closeMenu={closeMenu} />}
              </NavMenu>

              <Link href="/docs" className="text-fd-muted-foreground hover:text-fd-foreground transition-colors text-sm font-medium">
                Docs
              </Link>

              <Link href="/pricing" className="text-fd-muted-foreground hover:text-fd-foreground transition-colors text-sm font-medium">
                Pricing
              </Link>
            </div>

            {/* Right: Auth / CTA (Desktop) */}
            <div className="hidden md:flex items-center gap-3 shrink-0">
              {/* Search / ⌘K */}
              <button
                onClick={openCommandPalette}
                className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-fd-secondary border border-fd-border/50 text-fd-muted-foreground hover:text-fd-foreground hover:border-fd-border transition-all text-sm cursor-pointer"
                aria-label="Search (⌘K)"
              >
                <Search className="h-4 w-4" />
                <span className="hidden lg:inline text-xs">Search...</span>
                <kbd className="inline-flex items-center gap-0.5 px-1.5 py-0.5 text-[10px] font-mono bg-fd-accent border border-fd-border/50 rounded text-fd-muted-foreground">
                  <span className="text-xs">⌘</span>K
                </kbd>
              </button>

              {/* Contact Sales */}
              <a
                href="https://hanzo.ai/contact"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full h-9 px-4 text-sm font-medium text-fd-foreground/80 hover:text-fd-foreground transition-all"
              >
                Contact Sales
              </a>

              {/* Try Hanzo CTA */}
              <TryHanzoDropdown />
            </div>

            {/* Mobile: Hamburger */}
            <div className="md:hidden ml-auto flex items-center gap-2">
              <button
                onClick={openCommandPalette}
                className="p-2 text-fd-muted-foreground hover:text-fd-foreground transition-colors cursor-pointer"
                aria-label="Search"
              >
                <Search className="w-5 h-5" />
              </button>
              <button
                onClick={() => setIsMobileOpen(!isMobileOpen)}
                className="p-2 text-fd-muted-foreground hover:text-fd-foreground transition-colors cursor-pointer"
                aria-label={isMobileOpen ? 'Close menu' : 'Open menu'}
              >
                {isMobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {isMobileOpen && (
          <MobileMenu
            isOpen={isMobileOpen}
            onClose={() => setIsMobileOpen(false)}
            onOpenSearch={openCommandPalette}
          />
        )}
      </AnimatePresence>

      <CommandPalette isOpen={isCommandPaletteOpen} onClose={closeCommandPalette} />
    </>
  )
}
