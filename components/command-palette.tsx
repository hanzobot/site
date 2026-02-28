'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import { useRouter } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Search, ArrowRight, Command, ExternalLink,
  Terminal, Brain, Bot, MessageCircle, Globe, Shield,
  PuzzleIcon, MonitorIcon, DownloadIcon, CreditCard,
  BookOpen, Code, Users, FileText, Activity,
  Cpu, Server, Zap, HelpCircle, Briefcase, Heart,
} from 'lucide-react'

interface CommandItem {
  id: string
  title: string
  description?: string
  href: string
  icon: React.ElementType
  category: string
  external?: boolean
  keywords?: string[]
}

const commands: CommandItem[] = [
  // Quick Actions
  { id: 'get-started', title: 'Get Started Free', description: 'Download and run locally', href: '/get-started', icon: DownloadIcon, category: 'Quick Actions', keywords: ['install', 'download', 'start'] },
  { id: 'launch-cloud', title: 'Launch in Cloud', description: 'Full VM — $5/mo per bot', href: 'https://app.hanzo.bot', icon: Server, category: 'Quick Actions', external: true, keywords: ['cloud', 'deploy', 'vm'] },
  { id: 'pricing', title: 'View Pricing', description: 'Free, Cloud, and Cloud Pro plans', href: '/pricing', icon: CreditCard, category: 'Quick Actions', keywords: ['cost', 'plan', 'price'] },
  { id: 'dashboard', title: 'Open Dashboard', description: 'Manage your bots', href: 'https://app.hanzo.bot', icon: MonitorIcon, category: 'Quick Actions', external: true, keywords: ['dashboard', 'login', 'app'] },

  // Features
  { id: 'local-runtime', title: 'Local Runtime', description: 'Mac, Windows, Linux — your data stays yours', href: '/docs/features/local', icon: Terminal, category: 'Features', keywords: ['local', 'mac', 'windows', 'linux'] },
  { id: 'models', title: '100+ AI Models', description: 'Claude, GPT, Gemini, Llama, and more', href: '/docs/features/models', icon: Brain, category: 'Features', keywords: ['model', 'llm', 'claude', 'gpt'] },
  { id: 'chat-apps', title: 'Every Chat App', description: 'WhatsApp, Slack, Discord, Telegram, Signal', href: '/integrations', icon: MessageCircle, category: 'Features', keywords: ['whatsapp', 'slack', 'discord', 'telegram'] },
  { id: 'memory', title: 'Persistent Memory', description: 'Remembers you across sessions', href: '/docs/features/memory', icon: Brain, category: 'Features', keywords: ['memory', 'remember', 'context'] },
  { id: 'browser', title: 'Browser Control', description: 'Browse, fill forms, extract data', href: '/docs/features/browser', icon: Globe, category: 'Features', keywords: ['browser', 'web', 'scrape'] },
  { id: 'system-access', title: 'Full System Access', description: 'Files, shell, scripts — sandboxed or full', href: '/docs/features/system-access', icon: Terminal, category: 'Features', keywords: ['shell', 'files', 'scripts'] },
  { id: 'skills', title: 'Skills & Plugins', description: 'Community skills or build your own', href: '/skills', icon: PuzzleIcon, category: 'Features', keywords: ['plugin', 'skill', 'extend'] },
  { id: 'desktop-vm', title: 'Full Desktop VMs', description: 'Cloud agents with VNC desktop access', href: '/docs/features/cloud', icon: MonitorIcon, category: 'Features', keywords: ['vm', 'desktop', 'vnc', 'cloud'] },

  // Solutions
  { id: 'sol-developers', title: 'For Developers', description: 'Code review, testing, documentation', href: '/solutions#developers', icon: Code, category: 'Solutions', keywords: ['developer', 'code', 'review'] },
  { id: 'sol-devops', title: 'For DevOps', description: 'Automation, monitoring, deployment', href: '/solutions#devops', icon: Server, category: 'Solutions', keywords: ['devops', 'deploy', 'monitor'] },
  { id: 'sol-teams', title: 'For Teams', description: 'Collaboration and knowledge sharing', href: '/solutions#teams', icon: Users, category: 'Solutions', keywords: ['team', 'collaborate'] },
  { id: 'sol-enterprise', title: 'For Enterprise', description: 'Custom deployment, SSO, compliance', href: '/solutions#enterprise', icon: Shield, category: 'Solutions', keywords: ['enterprise', 'sso', 'compliance'] },

  // Docs & Resources
  { id: 'docs', title: 'Documentation', description: 'Guides, API reference, tutorials', href: '/docs', icon: BookOpen, category: 'Resources', keywords: ['docs', 'guide', 'tutorial'] },
  { id: 'api-ref', title: 'API Reference', description: 'Bot API and SDK docs', href: '/docs/api', icon: FileText, category: 'Resources', keywords: ['api', 'sdk', 'reference'] },
  { id: 'github', title: 'GitHub', description: 'Source code and issues', href: 'https://github.com/hanzoai/bot', icon: Code, category: 'Resources', external: true, keywords: ['github', 'source', 'code'] },
  { id: 'discord', title: 'Discord', description: 'Community chat', href: 'https://discord.gg/hanzo', icon: MessageCircle, category: 'Resources', external: true, keywords: ['discord', 'chat', 'community'] },
  { id: 'status', title: 'System Status', description: 'Service health and uptime', href: 'https://hanzo.ai/status', icon: Activity, category: 'Resources', external: true, keywords: ['status', 'uptime', 'health'] },

  // Ecosystem
  { id: 'llm-gateway', title: 'LLM Gateway', description: '200+ AI models, one API', href: 'https://docs.hanzo.ai/docs/llm', icon: Zap, category: 'Ecosystem', external: true, keywords: ['gateway', 'api', 'models'] },
  { id: 'mcp', title: 'MCP Tools', description: '260+ tools for agents', href: 'https://docs.hanzo.ai/docs/mcp', icon: PuzzleIcon, category: 'Ecosystem', external: true, keywords: ['mcp', 'tools', 'protocol'] },
  { id: 'hanzo-dev', title: 'Hanzo Dev', description: 'AI-native coding agent', href: 'https://hanzo.ai/dev', icon: Terminal, category: 'Ecosystem', external: true, keywords: ['dev', 'coding', 'ide'] },
  { id: 'operative', title: 'Operative', description: 'Computer use for AI agents', href: 'https://docs.hanzo.ai/docs/operative', icon: Bot, category: 'Ecosystem', external: true, keywords: ['operative', 'computer', 'desktop'] },
  { id: 'hanzo-platform', title: 'Platform', description: 'Deploy anywhere', href: 'https://docs.hanzo.ai/docs/platform', icon: Cpu, category: 'Ecosystem', external: true, keywords: ['platform', 'deploy'] },

  // Company
  { id: 'contact', title: 'Contact Sales', description: 'Talk to the team', href: 'https://hanzo.ai/contact', icon: Briefcase, category: 'Company', external: true, keywords: ['sales', 'contact', 'demo'] },
  { id: 'about', title: 'About Hanzo', description: 'Our mission and team', href: 'https://hanzo.ai/team', icon: Users, category: 'Company', external: true, keywords: ['about', 'team', 'mission'] },
  { id: 'philosophy', title: 'Zen of Hanzo', description: 'Our principles', href: 'https://hanzo.ai/philosophy', icon: Heart, category: 'Company', external: true, keywords: ['philosophy', 'values', 'zen'] },
  { id: 'support', title: 'Support', description: 'Help center', href: 'https://hanzo.ai/contact', icon: HelpCircle, category: 'Company', external: true, keywords: ['support', 'help'] },
]

interface CommandPaletteProps {
  isOpen: boolean
  onClose: () => void
}

export function CommandPalette({ isOpen, onClose }: CommandPaletteProps) {
  const [search, setSearch] = useState('')
  const [selectedIndex, setSelectedIndex] = useState(0)
  const inputRef = useRef<HTMLInputElement>(null)
  const router = useRouter()

  const filteredCommands = search
    ? commands.filter(
        (cmd) =>
          cmd.title.toLowerCase().includes(search.toLowerCase()) ||
          cmd.description?.toLowerCase().includes(search.toLowerCase()) ||
          cmd.keywords?.some((k) => k.toLowerCase().includes(search.toLowerCase()))
      )
    : commands

  const groupedCommands = filteredCommands.reduce((acc, cmd) => {
    if (!acc[cmd.category]) acc[cmd.category] = []
    acc[cmd.category].push(cmd)
    return acc
  }, {} as Record<string, CommandItem[]>)

  const flatCommands = Object.values(groupedCommands).flat()

  useEffect(() => {
    setSelectedIndex(0)
  }, [search])

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus()
      setSearch('')
      setSelectedIndex(0)
    }
  }, [isOpen])

  const handleSelect = useCallback(
    (cmd: CommandItem) => {
      if (cmd.external) {
        window.open(cmd.href, '_blank')
      } else {
        router.push(cmd.href)
      }
      onClose()
    },
    [router, onClose]
  )

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      switch (e.key) {
        case 'ArrowDown':
          e.preventDefault()
          setSelectedIndex((prev) => (prev + 1) % flatCommands.length)
          break
        case 'ArrowUp':
          e.preventDefault()
          setSelectedIndex((prev) => (prev - 1 + flatCommands.length) % flatCommands.length)
          break
        case 'Enter':
          e.preventDefault()
          if (flatCommands[selectedIndex]) handleSelect(flatCommands[selectedIndex])
          break
        case 'Escape':
          onClose()
          break
      }
    },
    [flatCommands, selectedIndex, handleSelect, onClose]
  )

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-fd-background/60 backdrop-blur-sm z-[100]"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ duration: 0.15 }}
            className="fixed top-[10%] left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] sm:w-[calc(100%-4rem)] max-w-xl z-[101]"
          >
            <div className="bg-fd-secondary border border-fd-border rounded-xl shadow-2xl overflow-hidden">
              <div className="flex items-center gap-3 px-4 py-3 border-b border-fd-border">
                <Search className="w-5 h-5 text-fd-muted-foreground" />
                <input
                  ref={inputRef}
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Search features, docs, actions..."
                  className="flex-1 bg-transparent text-fd-foreground text-sm placeholder-fd-muted-foreground outline-none"
                />
                <kbd className="px-2 py-1 text-[10px] font-mono bg-fd-accent rounded text-fd-muted-foreground">
                  ESC
                </kbd>
              </div>

              <div className="max-h-[400px] overflow-y-auto py-2">
                {Object.keys(groupedCommands).length === 0 ? (
                  <div className="px-4 py-8 text-center text-fd-muted-foreground text-sm">
                    No results found for &ldquo;{search}&rdquo;
                  </div>
                ) : (
                  Object.entries(groupedCommands).map(([category, items]) => (
                    <div key={category}>
                      <div className="px-4 py-2 text-[10px] font-semibold text-fd-muted-foreground uppercase tracking-wider">
                        {category}
                      </div>
                      {items.map((cmd) => {
                        const Icon = cmd.icon
                        const index = flatCommands.findIndex((c) => c.id === cmd.id)
                        const isSelected = index === selectedIndex

                        return (
                          <button
                            key={cmd.id}
                            onClick={() => handleSelect(cmd)}
                            onMouseEnter={() => setSelectedIndex(index)}
                            className={`w-full flex items-center gap-3 px-4 py-2.5 text-left transition-colors cursor-pointer ${
                              isSelected
                                ? 'bg-fd-accent text-fd-foreground'
                                : 'text-fd-foreground/80 hover:bg-fd-accent/50'
                            }`}
                          >
                            <div
                              className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                                isSelected ? 'bg-brand/20' : 'bg-fd-accent'
                              }`}
                            >
                              <Icon className={`w-4 h-4 ${isSelected ? 'text-brand' : 'text-fd-muted-foreground'}`} />
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center gap-2">
                                <span className="text-sm font-medium truncate">{cmd.title}</span>
                                {cmd.external && <ExternalLink className="w-3 h-3 text-fd-muted-foreground" />}
                              </div>
                              {cmd.description && (
                                <div className="text-xs text-fd-muted-foreground truncate">{cmd.description}</div>
                              )}
                            </div>
                            {isSelected && <ArrowRight className="w-4 h-4 text-fd-muted-foreground" />}
                          </button>
                        )
                      })}
                    </div>
                  ))
                )}
              </div>

              <div className="px-4 py-2 border-t border-fd-border flex items-center justify-between">
                <div className="flex items-center gap-4 text-[10px] text-fd-muted-foreground">
                  <span className="flex items-center gap-1">
                    <kbd className="px-1.5 py-0.5 bg-fd-accent rounded">↑</kbd>
                    <kbd className="px-1.5 py-0.5 bg-fd-accent rounded">↓</kbd>
                    Navigate
                  </span>
                  <span className="flex items-center gap-1">
                    <kbd className="px-1.5 py-0.5 bg-fd-accent rounded">↵</kbd>
                    Select
                  </span>
                </div>
                <div className="flex items-center gap-1 text-[10px] text-fd-muted-foreground">
                  <Command className="w-3 h-3" />
                  <span>K to toggle</span>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
