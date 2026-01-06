'use client'

import { Mail, Phone, MessageSquare, Github, Linkedin, Clock } from 'lucide-react'

export default function Ingress() {
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
        <h1 className="text-5xl font-bold font-mono uppercase mb-2">Support Channel</h1>
        <p className="text-muted-foreground font-mono text-sm mb-12">/ingress • Contact • Response SLA</p>
        
        {/* Primary Contact Methods */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <a
            href="mailto:garvjoshi2001@gmail.com"
            className="border border-border rounded-lg p-8 bg-card hover:border-primary/50 transition-colors group"
          >
            <div className="flex items-center gap-3 mb-4">
              <Mail className="w-8 h-8 text-primary group-hover:text-primary/80" />
              <h2 className="text-2xl font-bold font-mono">Email</h2>
            </div>
            <div className="font-mono text-lg mb-4">garvjoshi2001@gmail.com</div>
            <div className="text-xs text-muted-foreground font-mono">
              Response SLA: 24 hours
            </div>
          </a>

          <a
            href="tel:+919981002442"
            className="border border-border rounded-lg p-8 bg-card hover:border-primary/50 transition-colors group"
          >
            <div className="flex items-center gap-3 mb-4">
              <Phone className="w-8 h-8 text-primary group-hover:text-primary/80" />
              <h2 className="text-2xl font-bold font-mono">Phone</h2>
            </div>
            <div className="font-mono text-lg mb-4">+91 9981002442</div>
            <div className="text-xs text-muted-foreground font-mono">
              Available during IST business hours
            </div>
          </a>
        </div>

        {/* Social Links */}
        <div className="mb-12">
          <h2 className="text-xl font-bold font-mono uppercase tracking-widest mb-6">Social Profiles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <a
              href="https://github.com/garvitjoshi007"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-border rounded-lg p-4 bg-card hover:border-primary/50 transition-colors flex items-center gap-3"
            >
              <Github className="w-6 h-6 text-primary" />
              <div>
                <div className="font-mono font-semibold">GitHub</div>
                <div className="text-xs text-muted-foreground font-mono">github.com/garvitjoshi007</div>
              </div>
            </a>

            <a
              href="https://linkedin.com/in/garvit-joshi"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-border rounded-lg p-4 bg-card hover:border-primary/50 transition-colors flex items-center gap-3"
            >
              <Linkedin className="w-6 h-6 text-primary" />
              <div>
                <div className="font-mono font-semibold">LinkedIn</div>
                <div className="text-xs text-muted-foreground font-mono">linkedin.com/in/garvit-joshi</div>
              </div>
            </a>
          </div>
        </div>

        {/* Availability & SLA */}
        <div className="border border-border rounded-lg p-8 bg-card">
          <div className="flex items-center gap-3 mb-6">
            <Clock className="w-6 h-6 text-primary" />
            <h2 className="text-2xl font-bold font-mono">Response SLA</h2>
          </div>
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="border border-border rounded p-4">
                <div className="text-xs font-mono uppercase text-muted-foreground tracking-widest mb-2">
                  Email
                </div>
                <div className="font-mono font-semibold">24 hours</div>
              </div>
              <div className="border border-border rounded p-4">
                <div className="text-xs font-mono uppercase text-muted-foreground tracking-widest mb-2">
                  Phone
                </div>
                <div className="font-mono font-semibold">IST 9AM-6PM</div>
              </div>
              <div className="border border-border rounded p-4">
                <div className="text-xs font-mono uppercase text-muted-foreground tracking-widest mb-2">
                  Availability
                </div>
                <div className="font-mono font-semibold">Weekdays</div>
              </div>
            </div>
            <p className="text-sm text-muted-foreground font-mono pt-4">
              For urgent matters, please call. For detailed discussions or project inquiries, email is preferred.
            </p>
          </div>
        </div>

        {/* Follow Up */}
        <div className="mt-12 border border-border rounded-lg p-8 bg-card text-center">
          <MessageSquare className="w-8 h-8 text-primary mx-auto mb-4" />
          <h3 className="text-xl font-bold font-mono mb-2">Let's Connect</h3>
          <p className="text-muted-foreground font-mono text-sm">
            Always open to discussing infrastructure challenges, SRE best practices, or new opportunities.
          </p>
        </div>
      </div>

      <footer className="border-t border-border px-6 py-8 bg-background/50 mt-16">
        <div className="max-w-7xl mx-auto text-xs text-muted-foreground font-mono">
          <div>Timezone: IST (UTC+5:30) • Bangalore, India</div>
        </div>
      </footer>
    </main>
  )
}
