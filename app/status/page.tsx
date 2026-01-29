'use client'

import { systemMetadata, workloads, capabilities } from '@/lib/data'
import { StatusBadge } from '@/components/status-badge'
import { CheckCircle2 } from 'lucide-react'

export default function Status() {
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
        <h1 className="text-5xl font-bold font-mono uppercase mb-2">System Health</h1>
        <p className="text-muted-foreground font-mono text-base mb-12">/status • Synthetic metrics • Uptime dashboard</p>
        
        {/* System Status Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-12">
        </div>

        {/* Overall Status */}
        <div className="border border-border rounded-lg p-6 bg-card mb-12">
          <div className="flex items-center gap-3 mb-4">
            <CheckCircle2 className="w-6 h-6 text-green-500" />
            <h2 className="text-xl font-bold font-mono">Overall Status</h2>
          </div>
          <StatusBadge status={systemMetadata.status} />
          <div className="text-base text-muted-foreground font-mono mt-4">
            All systems operational • Last check: {new Date(systemMetadata.lastDeploy).toISOString().split('T')[0]}
          </div>
        </div>

        {/* Service Health */}
        <div className="mb-12">
          <h2 className="text-xl font-bold font-mono uppercase tracking-widest mb-6">Service Health</h2>
          <div className="space-y-3">
            {workloads.map((workload) => (
              <div key={workload.id} className="border border-border rounded-lg p-4 bg-card flex items-center justify-between">
                <div>
                  <div className="font-mono font-semibold">{workload.name}</div>
                  <div className="text-sm text-muted-foreground font-mono">v{workload.version} • {workload.status}</div>
                </div>
                <StatusBadge status={workload.health} showDot />
              </div>
            ))}
          </div>
        </div>

        {/* Capability Status */}
        <div>
          <h2 className="text-xl font-bold font-mono uppercase tracking-widest mb-6">Capability Status</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {capabilities.map((cap) => (
              <div key={cap.id} className="border border-border rounded-lg p-3 bg-card text-center hover:border-primary/50 transition-colors">
                <div className="font-mono text-base font-semibold mb-2">{cap.name}</div>
                <StatusBadge status={cap.status} label={cap.tier} showDot={false} />
              </div>
            ))}
          </div>
        </div>
      </div>

      <footer className="border-t border-border px-6 py-8 bg-background/50 mt-16">
        <div className="max-w-7xl mx-auto text-sm text-muted-foreground font-mono">
        </div>
      </footer>
    </main>
  )
}
