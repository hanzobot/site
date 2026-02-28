'use client'

import { useState, useEffect, useCallback, useRef } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Search, ChevronDown, ArrowRight, Menu, X, ExternalLink,
  TerminalIcon, BrainIcon, MessageCircleIcon, GlobeIcon,
  PuzzleIcon, MonitorIcon, ShieldIcon, DownloadIcon,
  ServerIcon, UsersIcon, CodeIcon, ZapIcon, BotIcon,
  AppWindowIcon, LayoutDashboardIcon,
  BookOpenIcon, MessageSquareIcon, GithubIcon, FileTextIcon,
  FlaskConicalIcon, HelpCircleIcon, HeartHandshakeIcon,
  LightbulbIcon, NewspaperIcon, PlayIcon,
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
    <div className="p-4 rounded-xl bg-gradient-to-br from-[rgba(255,255,255,0.03)] to-fd-secondary border border-fd-border">
      <h3 className="text-fd-foreground font-semibold mb-1">Hanzo Bot</h3>
      <p className="text-fd-muted-foreground text-xs mb-3 leading-relaxed">
        One bot. Every role. Every channel. A full computer-using AI agent.
      </p>
      <div className="space-y-2 border-t border-fd-border/30 pt-3">
        <Link href="/get-started" onClick={closeMenu} className="flex items-center gap-2 text-sm text-fd-foreground hover:text-fd-foreground/80 transition-colors font-medium">
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
      <Link href="/pricing" onClick={closeMenu} className="flex items-center gap-2 text-sm text-fd-foreground hover:text-fd-foreground/80 transition-colors font-medium">
        View Pricing
        <ArrowRight className="h-3.5 w-3.5" />
      </Link>
    </div>
  </div>
)

/* ─── Resources dropdown content ─── */
const ResourcesContent = ({ closeMenu }: { closeMenu: () => void }) => (
  <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
    <div>
      <h3 className="text-fd-muted-foreground text-xs font-medium mb-3 uppercase tracking-wider">Learn</h3>
      <div className="space-y-3">
        <MenuLink href="/docs/guides" icon={BookOpenIcon} label="Guides" description="Step-by-step tutorials and walkthroughs." closeMenu={closeMenu} />
        <MenuLink href="/docs/features" icon={PlayIcon} label="Getting Started" description="Quick start and first steps." closeMenu={closeMenu} />
        <MenuLink href="/blog" icon={NewspaperIcon} label="Blog" description="Product updates and engineering posts." closeMenu={closeMenu} />
        <MenuLink href="/changelog" icon={FileTextIcon} label="Changelog" description="What's new in every release." closeMenu={closeMenu} />
      </div>
    </div>
    <div>
      <h3 className="text-fd-muted-foreground text-xs font-medium mb-3 uppercase tracking-wider">Community</h3>
      <div className="space-y-3">
        <MenuLink href="https://discord.gg/hanzo" icon={MessageSquareIcon} label="Discord" description="Chat with the community." closeMenu={closeMenu} external />
        <MenuLink href="https://github.com/hanzoai/bot/discussions" icon={GithubIcon} label="GitHub Discussions" description="Ask questions and share ideas." closeMenu={closeMenu} external />
        <MenuLink href="https://github.com/hanzoai/hips" icon={LightbulbIcon} label="HIPs" description="Hanzo Improvement Proposals." closeMenu={closeMenu} external />
      </div>
    </div>
    <div>
      <h3 className="text-fd-muted-foreground text-xs font-medium mb-3 uppercase tracking-wider">Research</h3>
      <div className="space-y-3">
        <MenuLink href="/research" icon={FlaskConicalIcon} label="Research" description="Our published work and findings." closeMenu={closeMenu} />
        <MenuLink href="/comparison" icon={CodeIcon} label="Comparisons" description="How Bot stacks up." closeMenu={closeMenu} />
        <MenuLink href="/integrations" icon={PuzzleIcon} label="Integrations" description="Tools and platforms we work with." closeMenu={closeMenu} />
      </div>
    </div>
    <div>
      <h3 className="text-fd-muted-foreground text-xs font-medium mb-3 uppercase tracking-wider">Support</h3>
      <div className="space-y-3">
        <MenuLink href="/docs/faq" icon={HelpCircleIcon} label="FAQs" description="Answers to common questions." closeMenu={closeMenu} />
        <MenuLink href="https://hanzo.ai/contact" icon={HeartHandshakeIcon} label="Contact Sales" description="Talk to our team." closeMenu={closeMenu} external />
        <MenuLink href="https://github.com/hanzoai/bot/issues" icon={GithubIcon} label="Report Issue" description="File a bug or feature request." closeMenu={closeMenu} external />
      </div>
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
    <div className="group flex items-start gap-2.5 py-1">
      <Icon className="h-4 w-4 mt-0.5 text-fd-muted-foreground group-hover:text-fd-foreground transition-colors shrink-0" />
      <div>
        <span className="text-sm text-fd-foreground/80 group-hover:text-fd-foreground transition-colors flex items-center gap-1">
          {label}
          {external && <ExternalLink className="h-2.5 w-2.5 opacity-40" />}
        </span>
        {description && <p className="text-xs text-fd-muted-foreground leading-snug">{description}</p>}
      </div>
    </div>
  )

  if (external) {
    return <a href={href} target="_blank" rel="noopener noreferrer" className="block">{content}</a>
  }
  return <Link href={href} onClick={closeMenu} className="block">{content}</Link>
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
      className="fixed inset-0 bg-fd-background/98 backdrop-blur-md z-50"
      style={{ top: 'var(--header-height, 60px)' }}
    >
      <div className="flex flex-col gap-1 p-5 overflow-y-auto h-full">
        <button
          onClick={() => { onOpenSearch(); onClose() }}
          className="flex items-center gap-3 px-4 py-3 rounded-xl bg-fd-secondary border border-fd-border text-fd-muted-foreground text-sm w-full text-left mb-2"
        >
          <Search className="w-4 h-4" />
          Search...
          <kbd className="ml-auto text-[10px] font-mono bg-fd-accent px-1.5 py-0.5 rounded">⌘K</kbd>
        </button>

        <div className="space-y-0.5">
          {[
            { label: 'Features', href: '/docs/features' },
            { label: 'Solutions', href: '/solutions' },
            { label: 'Pricing', href: '/pricing' },
            { label: 'Docs', href: '/docs' },
          ].map((item) => (
            <Link key={item.label} href={item.href} onClick={onClose}
              className="block px-4 py-3 text-fd-foreground text-base font-medium hover:bg-fd-accent rounded-lg transition-colors">
              {item.label}
            </Link>
          ))}
        </div>

        <div className="border-t border-fd-border/50 my-3" />

        <div className="px-1 mb-2">
          <span className="text-[10px] font-semibold text-fd-muted-foreground uppercase tracking-wider px-3">Resources</span>
        </div>
        <div className="space-y-0.5">
          {[
            { label: 'Guides', href: '/docs/guides' },
            { label: 'Blog', href: '/blog' },
            { label: 'Changelog', href: '/changelog' },
            { label: 'Integrations', href: '/integrations' },
            { label: 'Skills', href: '/skills' },
            { label: 'FAQs', href: '/docs/faq' },
          ].map((item) => (
            <Link key={item.label} href={item.href} onClick={onClose}
              className="block px-4 py-2.5 text-fd-muted-foreground text-sm hover:text-fd-foreground hover:bg-fd-accent rounded-lg transition-colors">
              {item.label}
            </Link>
          ))}
        </div>

        <div className="border-t border-fd-border/50 my-3" />

        <div className="px-1 mb-2">
          <span className="text-[10px] font-semibold text-fd-muted-foreground uppercase tracking-wider px-3">Community</span>
        </div>
        <div className="space-y-0.5">
          {[
            { label: 'Discord', href: 'https://discord.gg/hanzo', external: true },
            { label: 'GitHub Discussions', href: 'https://github.com/hanzoai/bot/discussions', external: true },
            { label: 'HIPs', href: 'https://github.com/hanzoai/hips', external: true },
            { label: 'Research', href: '/research' },
          ].map((item) => (
            'external' in item ? (
              <a key={item.label} href={item.href} target="_blank" rel="noopener noreferrer" onClick={onClose}
                className="flex items-center gap-2 px-4 py-2.5 text-fd-muted-foreground text-sm hover:text-fd-foreground hover:bg-fd-accent rounded-lg transition-colors">
                {item.label}
                <ExternalLink className="w-3 h-3 opacity-40" />
              </a>
            ) : (
              <Link key={item.label} href={item.href} onClick={onClose}
                className="block px-4 py-2.5 text-fd-muted-foreground text-sm hover:text-fd-foreground hover:bg-fd-accent rounded-lg transition-colors">
                {item.label}
              </Link>
            )
          ))}
        </div>

        <div className="mt-auto pt-4 space-y-2">
          <Link href="https://app.hanzo.bot" onClick={onClose}
            className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-fd-muted-foreground text-sm font-medium hover:text-fd-foreground transition-colors">
            Log in
          </Link>
          <Link href="/get-started" onClick={onClose}
            className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-fd-foreground text-fd-background font-semibold text-sm hover:bg-fd-foreground/90 transition-colors">
            Try Hanzo Bot
          </Link>
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
            ? 'bg-fd-background/80 backdrop-blur-xl border-b border-fd-border/40'
            : 'bg-transparent'
        )}
      >
        <div className="w-full max-w-[1440px] mx-auto px-4 md:px-6 lg:px-8">
          <div className="flex items-center h-[var(--header-height,60px)]">
            {/* Left: Logo — collapses to icon on scroll */}
            <div className="shrink-0">
              <Link href="/" className="flex items-center gap-2.5 text-fd-foreground no-underline">
                <motion.div
                  className="flex items-center"
                  animate={{ scale: isScrolled ? 1.1 : 1 }}
                  transition={{ duration: 0.2 }}
                >
                  {logo}
                </motion.div>
                <AnimatePresence>
                  {!isScrolled && (
                    <motion.span
                      initial={{ opacity: 1, width: 'auto' }}
                      exit={{ opacity: 0, width: 0 }}
                      animate={{ opacity: 1, width: 'auto' }}
                      transition={{ duration: 0.2 }}
                      className="font-semibold text-[15px] tracking-tight overflow-hidden whitespace-nowrap"
                    >
                      Hanzo Bot
                    </motion.span>
                  )}
                </AnimatePresence>
              </Link>
            </div>

            {/* Center: Desktop Nav */}
            <div className="flex-1 hidden md:flex justify-center items-center gap-1">
              <NavMenu label="Features">
                {(closeMenu) => <FeaturesContent closeMenu={closeMenu} />}
              </NavMenu>

              <NavMenu label="Solutions">
                {(closeMenu) => <SolutionsContent closeMenu={closeMenu} />}
              </NavMenu>

              <NavMenu label="Resources">
                {(closeMenu) => <ResourcesContent closeMenu={closeMenu} />}
              </NavMenu>

              <Link href="/pricing" className="text-fd-muted-foreground hover:text-fd-foreground transition-colors text-sm font-medium px-3 py-2 rounded-md hover:bg-fd-accent/50">
                Pricing
              </Link>

              <Link href="/docs" className="text-fd-muted-foreground hover:text-fd-foreground transition-colors text-sm font-medium px-3 py-2 rounded-md hover:bg-fd-accent/50">
                Docs
              </Link>
            </div>

            {/* Right: Search + Login + CTA (Desktop) */}
            <div className="hidden md:flex items-center gap-2 shrink-0">
              {/* Search / ⌘K */}
              <button
                onClick={openCommandPalette}
                className="flex items-center gap-2 px-2.5 py-1.5 rounded-lg text-fd-muted-foreground hover:text-fd-foreground transition-all text-sm cursor-pointer hover:bg-fd-accent/50"
                aria-label="Search (⌘K)"
              >
                <Search className="h-4 w-4" />
                <kbd className="hidden lg:inline-flex items-center gap-0.5 px-1.5 py-0.5 text-[10px] font-mono bg-fd-accent/50 border border-fd-border/30 rounded text-fd-muted-foreground">
                  <span className="text-xs">⌘</span>K
                </kbd>
              </button>

              {/* Login */}
              <a
                href="https://app.hanzo.bot"
                className="inline-flex items-center justify-center rounded-md h-9 px-4 text-sm font-medium text-fd-muted-foreground hover:text-fd-foreground transition-all"
              >
                Log in
              </a>

              {/* Try Hanzo CTA — solid button like Anthropic's "Try Claude" */}
              <Link
                href="/get-started"
                className="inline-flex items-center justify-center rounded-full h-9 px-5 text-sm font-semibold bg-fd-foreground text-fd-background hover:bg-fd-foreground/90 transition-all"
              >
                Try Hanzo Bot
              </Link>
            </div>

            {/* Mobile: Hamburger */}
            <div className="md:hidden ml-auto flex items-center gap-1">
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
