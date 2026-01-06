'use client'

export default function About() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <header className="border-b border-border px-6 py-4 sticky top-0 z-40 bg-background/80 backdrop-blur-xs">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <a href="/" className="font-mono font-bold text-lg hover:text-primary">
              portfolio.garvit
            </a>
          </div>
          <div className="text-muted-foreground text-xs">⌘K</div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="mb-12">
          <div className="text-xs font-mono text-primary uppercase tracking-widest mb-2">
            Garvit Joshi
          </div>
          <div className="text-sm font-mono text-muted-foreground uppercase mb-4">Service Description</div>
          <h1 className="text-5xl font-bold font-mono uppercase tracking-tight mb-6">
            About
          </h1>
          <p className="text-lg text-muted-foreground font-mono">
            Senior SRE with deep expertise in distributed systems, infrastructure reliability, and production operations.
          </p>
        </div>

        <div className="prose prose-invert max-w-none">
          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-bold font-mono uppercase tracking-tight mb-4">
                Engineer Profile
              </h2>
              <p className="text-foreground/80 mb-4">
                I design, build, and operate production infrastructure systems at scale. With 2+ years at PhonePe, I've owned reliability for 50+ distributed services, reduced Mean Time To Recovery (MTTR) by 25%, and driven incident response with measurable impact.
              </p>
              <p className="text-foreground/80">
                My focus: infrastructure as code, observability, automated operations, and building systems that scale reliably.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold font-mono uppercase tracking-tight mb-4">
                Core Competencies
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { title: 'Infrastructure', items: ['Terraform', 'Kubernetes', 'Docker', 'Linux'] },
                  { title: 'Observability', items: ['Prometheus', 'Grafana', 'InfluxDB', 'Kibana'] },
                  { title: 'Databases', items: ['MySQL', 'MariaDB', 'Elasticsearch', 'RabbitMQ'] },
                  { title: 'Languages', items: ['Python', 'Bash', 'SQL', 'C/C++'] },
                ].map((category) => (
                  <div key={category.title} className="border border-border rounded-lg p-4 bg-card">
                    <h3 className="font-mono font-semibold text-base mb-3">{category.title}</h3>
                    <ul className="space-y-2">
                      {category.items.map((item) => (
                        <li key={item} className="text-base text-foreground/70">
                          • {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold font-mono uppercase tracking-tight mb-4">
                Education
              </h2>
              <div className="border border-border rounded-lg p-4 bg-card">
                <div className="font-mono font-semibold mb-1">B.E. Mechanical Engineering</div>
                <div className="text-base text-muted-foreground">R.V. College of Engineering (2019-2023)</div>
                <div className="text-base text-foreground/70 mt-3">
                  Focus: Systems Programming, Distributed Systems, Machine Learning, Computational Methods
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  )
}
