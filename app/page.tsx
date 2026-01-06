'use client'

import { systemMetadata } from '@/lib/data'
import { StatusBadge } from '@/components/status-badge'
import { Activity, Server, GitBranch, AlertCircle } from 'lucide-react'

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Global Header Bar */}
      <header className="border-b border-border px-6 py-4 sticky top-0 z-40 bg-background/80 backdrop-blur-xs">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
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

      {/* System Overview Section */}
      <div className="border-b border-border">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="mb-16">
            <div className="text-xl font-mono text-green-400 uppercase tracking-[0.3em] font-bold mb-4 animate-pulse">
              {'> _'} garvit.joshi
            </div>
            <h1 className="text-4xl font-bold font-mono uppercase tracking-tight mb-4">
              System Overview
            </h1>
            <p className="text-lg text-muted-foreground font-mono leading-relaxed">
              Distributed systems engineer • Infrastructure reliability • Production operations
            </p>
          </div>

          {/* Metrics Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <MetricCard
              label="Uptime"
              value={systemMetadata.uptime}
              icon={<Activity className="w-5 h-5" />}
            />
            <MetricCard
              label="Last Deploy"
              value={new Date(systemMetadata.lastDeploy).toISOString().split('T')[0]}
              icon={<GitBranch className="w-5 h-5" />}
            />
            <MetricCard
              label="Deployment Success"
              value={systemMetadata.deploymentSuccess}
              icon={<AlertCircle className="w-5 h-5" />}
            />
            <MetricCard
              label="MTTR"
              value={systemMetadata.mttr}
              icon={<Server className="w-5 h-5" />}
            />
          </div>

          {/* Active Services */}
          <div className="mb-16">
            <h2 className="text-2xl font-mono uppercase tracking-widest text-muted-foreground mb-6">
              Active Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="border border-border rounded-lg p-6 bg-card hover:border-primary/50 transition-colors">
                <div className="text-lg font-mono text-muted-foreground mb-3">SERVICE ENDPOINT</div>
                <div className="text-2xl font-bold font-mono mb-4">system-overview</div>
                <StatusBadge status="healthy" label="Running" />
              </div>
              <div className="border border-border rounded-lg p-6 bg-card hover:border-primary/50 transition-colors">
                <div className="text-lg font-mono text-muted-foreground mb-3">SERVICE ENDPOINT</div>
                <div className="text-2xl font-bold font-mono mb-4">capabilities-matrix</div>
                <StatusBadge status="healthy" label="Running" />
              </div>
              <div className="border border-border rounded-lg p-6 bg-card hover:border-primary/50 transition-colors">
                <div className="text-lg font-mono text-muted-foreground mb-3">SERVICE ENDPOINT</div>
                <div className="text-2xl font-bold font-mono mb-4">production-workloads</div>
                <StatusBadge status="experimental" label="Experimental" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Navigation */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold font-mono uppercase tracking-tight mb-12">
          Quick Access
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { label: 'Service Description', route: '/about' },
            { label: 'Capabilities Matrix', route: '/capabilities' },
            { label: 'Deployment History', route: '/deployments' },
            { label: 'Production Workloads', route: '/workloads' },
            { label: 'System Health', route: '/status' },
            { label: 'Binary Download', route: '/binary' },
            { label: 'Support Channel', route: '/ingress' },
          ].map((item) => (
            <a
              key={item.route}
              href={item.route}
              className="border border-border rounded-lg p-5 bg-card hover:bg-primary/5 hover:border-primary/50 transition-colors text-base font-mono text-foreground font-semibold text-center"
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-border px-6 py-12 bg-background/50">
        <div className="max-w-7xl mx-auto text-base text-muted-foreground font-mono">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <div className="text-foreground font-semibold mb-4 text-xl">Status</div>
              <div className="text-base mb-2">Active Services: {systemMetadata.activeServices}</div>
              <div className="text-base">Uptime: {systemMetadata.uptime}</div>
            </div>
            <div>
              <div className="text-foreground font-semibold mb-4 text-xl">Links</div>
              <div className="mb-3">
                <a
                  href="https://github.com/garvitjoshi007"
                  className="hover:text-primary text-base"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </div>
              <div>
                <a
                  href="https://linkedin.com/in/garvit-joshi"
                  className="hover:text-primary text-base"
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
                <a href="mailto:work@garvitjoshi.dev" className="hover:text-primary text-base">
                  work@garvitjoshi.dev
                </a>
              </div>
              <div className="text-base">+91 9981002442</div>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}

interface MetricCardProps {
  label: string
  value: string
  icon: React.ReactNode
}

function MetricCard({ label, value, icon }: MetricCardProps) {
  return (
    <div className="border border-border rounded-lg p-6 bg-card">
      <div className="flex items-start justify-between mb-4">
        <div className="text-base font-mono uppercase text-muted-foreground tracking-wider">
          {label}
        </div>
        <div className="text-muted-foreground">{icon}</div>
      </div>
      <div className="text-2xl font-bold font-mono text-foreground">{value}</div>
    </div>
  )
}
