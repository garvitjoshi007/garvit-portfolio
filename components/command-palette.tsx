'use client'

import * as React from 'react'
import { useEffect, useState } from 'react'
import { Search } from 'lucide-react'

interface CommandItem {
  id: string
  label: string
  route: string
  category: string
}

const commands: CommandItem[] = [
  { id: '1', label: 'System Overview', route: '/', category: 'Navigate' },
  { id: '2', label: 'Service Description', route: '/about', category: 'Navigate' },
  { id: '3', label: 'Capabilities Matrix', route: '/capabilities', category: 'Navigate' },
  { id: '4', label: 'Deployment History', route: '/deployments', category: 'Navigate' },
  { id: '5', label: 'Project Workloads', route: '/workloads', category: 'Navigate' },
  { id: '6', label: 'System Health', route: '/status', category: 'Navigate' },
  { id: '7', label: 'Binary Download', route: '/binary', category: 'Navigate' },
  { id: '8', label: 'Support Channel', route: '/ingress', category: 'Navigate' },
]

export function CommandPalette() {
  const [open, setOpen] = useState(false)
  const [search, setSearch] = useState('')

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // ⌘K or Ctrl+K
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault()
        setOpen((prev) => !prev)
      }
      // Escape to close
      if (e.key === 'Escape') {
        setOpen(false)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  const filtered = commands.filter(
    (cmd) =>
      cmd.label.toLowerCase().includes(search.toLowerCase()) ||
      cmd.route.toLowerCase().includes(search.toLowerCase())
  )

  const handleSelect = (route: string) => {
    window.location.href = route
    setOpen(false)
  }

  if (!open) return null

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-40 bg-black/80 backdrop-blur-sm"
        onClick={() => setOpen(false)}
      />

      {/* Command palette */}
      <div className="fixed inset-0 z-50 flex items-start justify-center pt-[20vh]">
        <div className="w-full max-w-2xl mx-4 rounded-lg border border-border bg-card shadow-2xl overflow-hidden">
          {/* Input */}
          <div className="flex items-center border-b border-border px-4 py-3">
            <Search className="w-4 h-4 text-muted-foreground mr-3" />
            <input
              autoFocus
              type="text"
              placeholder="Search routes, commands..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-transparent text-foreground font-mono text-sm outline-none"
            />
            <div className="text-xs text-muted-foreground ml-2">ESC</div>
          </div>

          {/* Results */}
          <div className="max-h-96 overflow-y-auto">
            {filtered.length === 0 ? (
              <div className="px-4 py-8 text-center text-muted-foreground">
                No results found
              </div>
            ) : (
              <>
                {Array.from(new Set(filtered.map((cmd) => cmd.category))).map(
                  (category) => (
                    <div key={category}>
                      <div className="px-4 pt-3 pb-1 text-xs font-mono uppercase text-muted-foreground tracking-wider">
                        {category}
                      </div>
                      {filtered
                        .filter((cmd) => cmd.category === category)
                        .map((cmd) => (
                          <div
                            key={cmd.id}
                            onClick={() => handleSelect(cmd.route)}
                            className="px-4 py-2 cursor-pointer hover:bg-primary/10 border-l-2 border-transparent hover:border-primary text-sm font-mono transition-colors"
                          >
                            <div className="text-foreground">{cmd.label}</div>
                            <div className="text-xs text-muted-foreground">{cmd.route}</div>
                          </div>
                        ))}
                    </div>
                  )
                )}
              </>
            )}
          </div>

          {/* Footer */}
          <div className="border-t border-border px-4 py-2 bg-background/50 text-xs text-muted-foreground">
            Press <span className="font-mono">↑↓</span> to navigate,{' '}
            <span className="font-mono">Enter</span> to select,{' '}
            <span className="font-mono">ESC</span> to close
          </div>
        </div>
      </div>
    </>
  )
}
