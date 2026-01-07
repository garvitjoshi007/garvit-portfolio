'use client'

import { workloads } from '@/lib/data'
import { StatusBadge } from '@/components/status-badge'
import { ExternalLink } from 'lucide-react'

export default function Workloads() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <header className="border-b border-border px-6 py-4 sticky top-0 z-40 bg-background/80 backdrop-blur-xs">
        <div className="max-w-7xl mx-auto">
          <a href="/" className="font-mono font-bold text-lg hover:text-primary">
            portfolio.garvit
          </a>
        </div>
      </header>
      <div className="max-w-7xl mx-auto px-6 py-16">
        <h1 className="text-5xl font-bold font-mono uppercase mb-2">Project Workloads</h1>
        <p className="text-muted-foreground font-mono text-base mb-12">Service status • Projects • Open source</p>
        
        <div className="space-y-6">
          {workloads.map((workload) => (
            <div key={workload.id} className="border border-border rounded-lg p-6 bg-card">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-2xl font-bold font-mono">{workload.name}</h3>
                    <span className="text-sm font-mono text-muted-foreground bg-muted px-2 py-1 rounded">
                      v{workload.version}
                    </span>
                  </div>
                  <p className="text-base text-muted-foreground mb-3">{workload.description}</p>
                </div>
                <StatusBadge status={workload.health} showDot />
              </div>

              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <div className="text-sm font-mono uppercase text-muted-foreground tracking-widest mb-1">
                    Uptime
                  </div>
                  <div className="text-lg font-bold font-mono">{workload.uptime}</div>
                </div>
                <div>
                  <div className="text-sm font-mono uppercase text-muted-foreground tracking-widest mb-1">
                    Status
                  </div>
                  <div className="text-lg font-bold font-mono capitalize">{workload.status}</div>
                </div>
              </div>

              <div className="mb-4">
                <div className="text-sm font-mono uppercase text-muted-foreground tracking-widest mb-2">
                  Stack
                </div>
                <div className="flex flex-wrap gap-2">
                  {workload.stack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-primary/10 border border-primary/30 rounded text-sm font-mono text-primary"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex gap-3">
                {workload.repo && (
                  <a
                    href={workload.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-xs font-mono text-primary hover:text-primary/80 transition-colors"
                  >
                    Repository <ExternalLink className="w-3 h-3" />
                  </a>
                )}
                {workload.demo && (
                  <a
                    href={workload.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-xs font-mono text-primary hover:text-primary/80 transition-colors"
                  >
                    Demo <ExternalLink className="w-3 h-3" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <footer className="border-t border-border px-6 py-8 bg-background/50 mt-16">
        <div className="max-w-7xl mx-auto text-sm text-muted-foreground font-mono">
          <div>Active Workloads: {workloads.filter(w => w.status === 'active').length}</div>
        </div>
      </footer>
    </main>
  )
}
