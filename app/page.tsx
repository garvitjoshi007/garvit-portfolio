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
          <div className="mb-12">
            <h1 className="text-5xl font-bold font-mono uppercase tracking-tight mb-2">
              System Overview
            </h1>
            <p className="text-muted-foreground font-mono text-base">
              Distributed systems engineer • Infrastructure reliability • Production operations
            </p>
          </div>

          {/* Metrics Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
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
          <div>
            <h2 className="text-base font-mono uppercase tracking-widest text-muted-foreground mb-4">
              Active Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="border border-border rounded-lg p-4 bg-card hover:border-primary/50 transition-colors">
                <div className="text-sm font-mono text-muted-foreground mb-2">SERVICE ENDPOINT</div>
                <div className="text-lg font-bold font-mono mb-3">system-overview</div>
                <StatusBadge status="healthy" label="Running" />
              </div>
              <div className="border border-border rounded-lg p-4 bg-card hover:border-primary/50 transition-colors">
                <div className="text-sm font-mono text-muted-foreground mb-2">SERVICE ENDPOINT</div>
                <div className="text-lg font-bold font-mono mb-3">capabilities-matrix</div>
                <StatusBadge status="healthy" label="Running" />
              </div>
              <div className="border border-border rounded-lg p-4 bg-card hover:border-primary/50 transition-colors">
                <div className="text-sm font-mono text-muted-foreground mb-2">SERVICE ENDPOINT</div>
                <div className="text-lg font-bold font-mono mb-3">production-workloads</div>
                <StatusBadge status="experimental" label="Experimental" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Navigation */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold font-mono uppercase tracking-tight mb-8">
          Quick Access
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
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
              className="border border-border rounded-lg p-3 bg-card hover:bg-primary/5 hover:border-primary/50 transition-colors text-sm font-mono text-foreground font-semibold"
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-border px-6 py-8 bg-background/50">
        <div className="max-w-7xl mx-auto text-sm text-muted-foreground font-mono">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="text-foreground font-semibold mb-2">Status</div>
              <div>Active Services: {systemMetadata.activeServices}</div>
              <div>Uptime: {systemMetadata.uptime}</div>
            </div>
            <div>
              <div className="text-foreground font-semibold mb-2">Links</div>
              <div>
                <a
                  href="https://github.com/garvitjoshi007"
                  className="hover:text-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </div>
              <div>
                <a
                  href="https://linkedin.com/in/garvit-joshi"
                  className="hover:text-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
              </div>
            </div>
            <div>
              <div className="text-foreground font-semibold mb-2">Contact</div>
              <div>
                <a href="mailto:garvjoshi2001@gmail.com" className="hover:text-primary">
                  garvjoshi2001@gmail.com
                </a>
              </div>
              <div>+91 9981002442</div>
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
    <div className="border border-border rounded-lg p-4 bg-card">
      <div className="flex items-start justify-between mb-3">
        <div className="text-xs font-mono uppercase text-muted-foreground tracking-wider">
          {label}
        </div>
        <div className="text-muted-foreground">{icon}</div>
      </div>
      <div className="text-2xl font-bold font-mono text-foreground">{value}</div>
    </div>
  )
}
