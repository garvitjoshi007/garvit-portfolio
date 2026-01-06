'use client'

import { capabilities } from '@/lib/data'
import { StatusBadge } from '@/components/status-badge'

export default function Capabilities() {
  // Group capabilities by category
  const byCategory = capabilities.reduce((acc, cap) => {
    if (!acc[cap.category]) acc[cap.category] = []
    acc[cap.category].push(cap)
    return acc
  }, {} as Record<string, typeof capabilities>)

  const categoryLabels: Record<string, string> = {
    language: 'Programming Languages',
    infra: 'Infrastructure & DevOps',
    observability: 'Observability & Monitoring',
    database: 'Databases & Storage',
    backend: 'Backend Frameworks',
    os: 'Operating Systems',
  }

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
        <h1 className="text-5xl font-bold font-mono uppercase tracking-tight mb-2">
          Capabilities Matrix
        </h1>
        <p className="text-muted-foreground font-mono text-sm mb-12">
          Infrastructure modules • Reliability tiers • Confidence metrics
        </p>

        <div className="space-y-12">
          {Object.entries(byCategory).map(([category, items]) => (
            <div key={category}>
              <h2 className="text-xl font-bold font-mono uppercase tracking-widest text-primary mb-6">
                {categoryLabels[category] || category}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {items.map((cap) => (
                  <div
                    key={cap.id}
                    className="border border-border rounded-lg p-4 bg-card hover:border-primary/50 transition-colors"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <div className="font-bold font-mono text-lg">{cap.name}</div>
                        <div className="text-xs text-muted-foreground font-mono mt-1">
                          Confidence: {cap.confidence}%
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <StatusBadge status={cap.status} label={cap.tier} showDot={false} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <footer className="border-t border-border px-6 py-8 bg-background/50 mt-16">
        <div className="max-w-7xl mx-auto text-xs text-muted-foreground font-mono">
          <div>Total Capabilities: {capabilities.length}</div>
        </div>
      </footer>
    </main>
  )
}
