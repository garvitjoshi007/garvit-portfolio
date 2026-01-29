'use client'

import { deployments } from '@/lib/data'

export default function Deployments() {
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
        <h1 className="text-5xl font-bold font-mono uppercase mb-2">Work Experience</h1>
        <p className="text-muted-foreground font-mono text-base mb-12">Career timeline • Experience • Impact</p>
        
        <div className="space-y-8">
          {deployments.map((dep) => (
            <div key={dep.id} className="border border-border rounded-lg p-6 bg-card">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold font-mono mb-2">{dep.company}</h3>
                  <div className="text-sm text-muted-foreground font-mono mb-2">{dep.role}</div>
                  <div className="text-xs text-muted-foreground font-mono">
                    {dep.period}
                  </div>
                </div>
                <div className="px-3 py-1 rounded border border-green-700/40 bg-green-900/20">
                  <div className="text-xs font-mono text-green-300 uppercase tracking-wider">{dep.status}</div>
                </div>
              </div>

              <div className="mb-4">
                <div className="text-xs font-mono uppercase text-muted-foreground tracking-widest mb-3">
                  Technologies
                </div>
                <div className="flex flex-wrap gap-2">
                  {dep.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-primary/10 border border-primary/30 rounded text-xs font-mono text-primary"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <div className="text-xs font-mono uppercase text-muted-foreground tracking-widest mb-3">
                  Impact
                </div>
                <ul className="space-y-2">
                  {dep.impact.map((item, i) => (
                    <li key={i} className="text-sm text-foreground font-mono flex gap-2">
                      <span className="text-primary">→</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      <footer className="border-t border-border px-6 py-8 bg-background/50 mt-16">
        <div className="max-w-7xl mx-auto text-sm text-muted-foreground font-mono">
          <div>Total Deployments: {deployments.length}</div>
        </div>
      </footer>
    </main>
  )
}
