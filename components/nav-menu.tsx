'use client'

import { useState, useRef, useEffect, type ReactNode } from 'react'
import { ChevronDown } from 'lucide-react'
import { cn } from '@/lib/cn'

interface NavMenuProps {
  label: string
  children: ReactNode | ((closeMenu: () => void) => ReactNode)
}

export function NavMenu({ label, children }: NavMenuProps) {
  const [isOpen, setIsOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)
  const closeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const handleMouseEnter = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current)
      closeTimeoutRef.current = null
    }
    setIsOpen(true)
  }

  const handleMouseLeave = () => {
    closeTimeoutRef.current = setTimeout(() => {
      setIsOpen(false)
    }, 150)
  }

  const closeMenu = () => setIsOpen(false)

  useEffect(() => {
    return () => {
      if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current)
    }
  }, [])

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false)
    }
    if (isOpen) document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [isOpen])

  const content = typeof children === 'function' ? children(closeMenu) : children

  return (
    <div
      className="relative"
      ref={menuRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button
        className={cn(
          'inline-flex items-center gap-1 text-sm font-medium transition-colors outline-none cursor-pointer',
          isOpen ? 'text-fd-foreground' : 'text-fd-muted-foreground hover:text-fd-foreground'
        )}
      >
        {label}
        <ChevronDown className={cn('h-3.5 w-3.5 transition-transform duration-200', isOpen && 'rotate-180')} />
      </button>

      {isOpen && (
        <div
          className="fixed left-0 w-full bg-fd-background/95 backdrop-blur-md border-b border-fd-border shadow-2xl z-50"
          style={{ top: 'var(--header-height, 60px)' }}
        >
          <div className="max-w-[1400px] mx-auto px-4 md:px-6 lg:px-10 py-6">
            {content}
          </div>
        </div>
      )}
    </div>
  )
}
