'use client'

import { systemMetadata } from '@/lib/data'
import { StatusBadge } from '@/components/status-badge'
import { Server, X, FileText, Code2, Briefcase, Box, Activity, MessageCircle, User } from 'lucide-react'
import { useState } from 'react'

const navItems = [
  { label: 'About Me', route: '/about', icon: User, description: 'Get to know me' },
  { label: 'Capabilities Matrix', route: '/capabilities', icon: Code2, description: 'Skills & expertise' },
  { label: 'Work Experience', route: '/deployments', icon: Briefcase, description: 'Career timeline' },
  { label: 'Project Workloads', route: '/workloads', icon: Box, description: 'Featured projects' },
  { label: 'System Health', route: '/status', icon: Activity, description: 'Status page' },
  { label: 'Resume', route: '/binary', icon: FileText, description: 'Download CV' },
  { label: 'Support Channel', route: '/ingress', icon: MessageCircle, description: 'Get in touch' },
]

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <main className="min-h-screen bg-background text-foreground flex flex-col">
      {/* Global Header Bar */}
      <header className="border-b border-border px-6 py-4 sticky top-0 z-40 bg-background/80 backdrop-blur-xs">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsModalOpen(true)}
              className="hover:opacity-80 transition-opacity cursor-pointer"
              aria-label="View profile photo"
            >
              <img
                src="/profile.png"
                alt="Garvit Joshi"
                className="w-10 h-10 rounded-full border border-border object-cover"
              />
            </button>
            <div className="font-mono font-bold text-lg">portfolio.garvit</div>
            <div className="text-xs text-muted-foreground font-mono">v{systemMetadata.version.replace('v', '')}</div>
          </div>
          <div className="flex items-center gap-6 text-sm">
            <div className="flex items-center gap-2">
              <Server className="w-3 h-3" />
              <span className="text-muted-foreground">{systemMetadata.region}</span>
            </div>
            <StatusBadge status={systemMetadata.status} label="healthy" showDot />
            <div className="text-muted-foreground">⌘K</div>
          </div>
        </div>
      </header>

      {/* Main Content - Grows to fill space */}
      <div className="flex-grow flex flex-col justify-center">
        {/* Profile Overview Section */}
        <div className="max-w-7xl mx-auto w-full px-6 py-16">
          <div className="mb-12">
            <div className="text-xl font-mono text-green-400 uppercase tracking-[0.3em] font-bold mb-6 animate-pulse">
              {'> _'} garvit.joshi
            </div>
            <h1 className="text-5xl md:text-6xl font-bold font-mono uppercase tracking-tight mb-6">
              Profile Overview
            </h1>
            <p className="text-xl text-muted-foreground font-mono leading-relaxed max-w-3xl">
              Distributed systems engineer • Infrastructure reliability • Production operations
            </p>
          </div>

          {/* Navigation Grid - More creative layout */}
          <div className="mt-20">
            <h2 className="text-2xl font-bold font-mono uppercase tracking-tight mb-12 text-muted-foreground">
              Navigate
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {navItems.slice(0, 6).map((item) => {
                const Icon = item.icon
                return (
                  <a
                    key={item.route}
                    href={item.route}
                    className="group border border-border rounded-lg p-6 bg-card hover:bg-primary/5 hover:border-primary/50 transition-all duration-300 cursor-pointer hover:shadow-lg hover:shadow-primary/10"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <Icon className="w-8 h-8 text-primary/60 group-hover:text-primary group-hover:scale-110 transition-all" />
                    </div>
                    <h3 className="text-lg font-bold font-mono text-foreground mb-2 group-hover:text-primary transition-colors">
                      {item.label}
                    </h3>
                    <p className="text-sm text-muted-foreground font-mono">
                      {item.description}
                    </p>
                  </a>
                )
              })}
              {/* Support Channel - Featured */}
              <a
                href={navItems[6].route}
                className="group border border-border rounded-lg p-6 bg-gradient-to-br from-primary/10 to-primary/5 hover:from-primary/20 hover:to-primary/10 border-primary/50 hover:border-primary transition-all duration-300 cursor-pointer hover:shadow-lg hover:shadow-primary/20 md:col-span-2 lg:col-span-1 xl:col-span-1"
              >
                <div className="flex items-start justify-between mb-4">
                  <MessageCircle className="w-8 h-8 text-primary group-hover:scale-110 transition-all" />
                </div>
                <h3 className="text-lg font-bold font-mono text-primary mb-2">
                  {navItems[6].label}
                </h3>
                <p className="text-sm text-primary/80 font-mono">
                  {navItems[6].description}
                </p>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer - Floating at bottom */}
      <footer className="border-t border-border px-6 py-12 bg-background/50 mt-auto">
        <div className="max-w-7xl mx-auto text-base text-muted-foreground font-mono">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <div className="text-foreground font-semibold mb-4 text-xl">Links</div>
              <div className="mb-3">
                <a
                  href="https://github.com/garvitjoshi007"
                  className="hover:text-primary transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </div>
              <div>
                <a
                  href="https://linkedin.com/in/garvit-joshi"
                  className="hover:text-primary transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
              </div>
            </div>
            <div>
              <div className="text-foreground font-semibold mb-4 text-xl">Contact</div>
              <div className="mb-3">
                <a href="mailto:work@garvitjoshi.dev" className="hover:text-primary transition-colors">
                  work@garvitjoshi.dev
                </a>
              </div>
              <div className="text-base">+91 9981002442</div>
            </div>
          </div>
        </div>
      </footer>

      {/* Profile Photo Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className="relative bg-card rounded-lg border border-border max-w-2xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 p-2 hover:bg-primary/10 rounded-lg transition-colors"
              aria-label="Close"
            >
              <X className="w-6 h-6" />
            </button>
            <img
              src="/profile.png"
              alt="Garvit Joshi"
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>
      )}
    </main>
  )
}
