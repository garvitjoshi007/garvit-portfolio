'use client'

import { HealthStatus } from '@/lib/types'

interface StatusBadgeProps {
  status: HealthStatus
  label?: string
  showDot?: boolean
}

export function StatusBadge({
  status,
  label,
  showDot = true,
}: StatusBadgeProps) {
  const statusConfig = {
    healthy: {
      bg: 'bg-green-900/20',
      border: 'border-green-700/40',
      text: 'text-green-300',
      dot: 'bg-green-500',
    },
    degraded: {
      bg: 'bg-yellow-900/20',
      border: 'border-yellow-700/40',
      text: 'text-yellow-300',
      dot: 'bg-yellow-500',
    },
    experimental: {
      bg: 'bg-blue-900/20',
      border: 'border-blue-700/40',
      text: 'text-blue-300',
      dot: 'bg-blue-500',
    },
    deprecated: {
      bg: 'bg-red-900/20',
      border: 'border-red-700/40',
      text: 'text-red-300',
      dot: 'bg-red-500',
    },
    maintenance: {
      bg: 'bg-purple-900/20',
      border: 'border-purple-700/40',
      text: 'text-purple-300',
      dot: 'bg-purple-500',
    },
  } as const satisfies Record<HealthStatus, { bg: string; border: string; text: string; dot: string }>

  const config = statusConfig[status]

  return (
    <div
      className={`inline-flex items-center gap-2 px-3 py-1 rounded font-mono text-xs font-semibold border ${config.bg} ${config.border} ${config.text}`}
    >
      {showDot && <div className={`w-2 h-2 rounded-full ${config.dot} animate-pulse`} />}
      <span className="uppercase tracking-wider">{label || status}</span>
    </div>
  )
}
