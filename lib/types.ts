// System architecture types - LOCKED SPEC v1.0

/**
 * Core capability/skill unit
 * Treated as an infrastructure module in the system
 */
export interface Capability {
  id: string
  name: string
  category: 'language' | 'infra' | 'observability' | 'database' | 'backend' | 'os'
  tier: 'core' | 'reliable' | 'experimental'
  confidence: number // 0-100
  status: 'healthy' | 'degraded' | 'experimental'
  lastUpdated: string // ISO date
  version?: string
}

/**
 * Project/service as a workload unit
 * Reflects production deployment metrics
 */
export interface Workload {
  id: string
  name: string
  version: string
  health: 'healthy' | 'experimental' | 'deprecated'
  uptime: string // percentage
  status: 'active' | 'maintained' | 'archived'
  stack: string[] // technology names
  description: string
  longDescription?: string
  repo?: string
  demo?: string
  lastUpdated: string // ISO date
}

/**
 * Experience as deployment record
 * Timeline entry in service lifecycle
 */
export interface Deployment {
  id: string
  company: string
  role: string
  period: string // "Jul 2023 - Present" or "Feb 2023 - Jun 2023"
  status: 'stable' | 'completed' | 'archived'
  impact: string[] // key metrics/achievements
  technologies: string[]
  startDate: string // ISO date
  endDate: string | null // null for current
}

/**
 * Global system metadata - displayed everywhere
 * Represents portfolio as a single service
 */
export interface SystemMetadata {
  version: string // v1.0.0
  uptime: string // 99.998%
  region: string // ap-south-1
  lastDeploy: string // ISO date
  status: 'healthy' | 'degraded' | 'maintenance'
  deploymentSuccess: string // percentage
  mttr: string // mean time to recovery
  activeServices: number
}

/**
 * Navigation item for command palette & menu
 */
export interface NavItem {
  id: string
  label: string
  route: string
  icon: string
  category: 'core' | 'utility' | 'external'
}

/**
 * Status badge representation
 */
export type HealthStatus = 'healthy' | 'degraded' | 'experimental' | 'deprecated' | 'maintenance'

export type ServiceTier = 'core' | 'reliable' | 'experimental'
