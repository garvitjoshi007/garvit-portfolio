'use client'

import { FileText, ExternalLink, Copy, Check } from 'lucide-react'
import { useState } from 'react'

const EMAIL = 'work@garvitjoshi.dev'

export default function Binary() {
  const [copied, setCopied] = useState(false)

  const copyEmail = () => {
    navigator.clipboard.writeText(EMAIL)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
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
        <h1 className="text-5xl font-bold font-mono uppercase mb-2">Binary Download</h1>
        <p className="text-muted-foreground font-mono text-base mb-12">Resume • CV • Full credentials</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Resume Card */}
          <div className="border border-border rounded-lg p-8 bg-card hover:border-primary/50 transition-colors">
            <div className="flex items-center gap-3 mb-4">
              <FileText className="w-8 h-8 text-primary" />
              <h2 className="text-2xl font-bold font-mono">Resume</h2>
            </div>
            <p className="text-muted-foreground font-mono text-base mb-6">
              Full resume with complete professional history, skills, projects, and education.
            </p>
            <div className="space-y-3">
              <a
                href="https://drive.google.com/file/d/10aGLdXvAwxLy7DSfbxiCvuk8spXa2vvz/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between w-full px-4 py-3 bg-primary text-background font-mono font-semibold rounded hover:bg-primary/90 transition-colors"
              >
                <span>View Resume</span>
                <ExternalLink className="w-4 h-4" />
              </a>
              <div className="text-sm text-muted-foreground font-mono text-center">
                Opens in Google Drive
              </div>
            </div>
          </div>

          {/* Quick Facts */}
          <div className="border border-border rounded-lg p-8 bg-card">
            <h2 className="text-2xl font-bold font-mono mb-6">Quick Facts</h2>
            <div className="space-y-4">
              <div>
                <div className="text-sm font-mono uppercase text-muted-foreground tracking-widest mb-1">
                  Experience
                </div>
                <div className="font-mono">2+ years SRE & Infrastructure</div>
              </div>
              <div>
                <div className="text-sm font-mono uppercase text-muted-foreground tracking-widest mb-1">
                  Education
                </div>
                <div className="font-mono">B.E. Mechanical Engineering</div>
                <div className="text-base text-muted-foreground font-mono">RV College, 2019-2023</div>
              </div>
              <div>
                <div className="text-sm font-mono uppercase text-muted-foreground tracking-widest mb-1">
                  Location
                </div>
                <div className="font-mono">Bangalore, India</div>
              </div>
              <div>
                <div className="text-xs font-mono uppercase text-muted-foreground tracking-widest mb-1">
                  Email
                </div>
                <button
                  onClick={copyEmail}
                  className="flex items-center gap-2 px-3 py-2 font-mono text-sm bg-primary/10 border border-primary/30 rounded hover:bg-primary/20 transition-colors text-primary"
                >
                  <span>{EMAIL}</span>
                  {copied ? (
                    <Check className="w-4 h-4" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
                {copied && <div className="text-sm text-primary font-mono mt-1">✓ Copied!</div>}
              </div>
              <div>
                <div className="text-xs font-mono uppercase text-muted-foreground tracking-widest mb-1">
                  Skills
                </div>
                <div className="font-mono text-base">22 core competencies across infrastructure, databases, and observability</div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Resources */}
        <div className="mt-12 border border-border rounded-lg p-8 bg-card">
          <h2 className="text-2xl font-bold font-mono mb-6">Links</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <a
              href="https://github.com/garvitjoshi007"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-4 border border-border rounded hover:border-primary/50 transition-colors"
            >
              <span className="font-mono font-semibold">GitHub</span>
              <ExternalLink className="w-4 h-4" />
            </a>
            <a
              href="https://linkedin.com/in/garvit-joshi"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-4 border border-border rounded hover:border-primary/50 transition-colors"
            >
              <span className="font-mono font-semibold">LinkedIn</span>
              <ExternalLink className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${EMAIL}`}
              className="flex items-center justify-between p-4 border border-border rounded hover:border-primary/50 transition-colors"
            >
              <span className="font-mono font-semibold">Email</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      <footer className="border-t border-border px-6 py-8 bg-background/50 mt-16">
        <div className="max-w-7xl mx-auto text-sm text-muted-foreground font-mono">
          <div>Last Updated: 2026-01-06</div>
        </div>
      </footer>
    </main>
  )
}
