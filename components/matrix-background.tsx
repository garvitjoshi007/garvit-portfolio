'use client'

import { useEffect, useRef } from 'react'

export function MatrixBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d', { alpha: true })
    if (!ctx) return

    // Set canvas size with device pixel ratio for better rendering
    const resizeCanvas = () => {
      const dpr = window.devicePixelRatio || 1
      canvas.width = window.innerWidth * dpr
      canvas.height = window.innerHeight * dpr
      canvas.style.width = window.innerWidth + 'px'
      canvas.style.height = window.innerHeight + 'px'
      ctx.scale(dpr, dpr)
    }
    resizeCanvas()

    const handleResize = () => {
      resizeCanvas()
    }
    window.addEventListener('resize', handleResize)

    // Characters to use - mix of code symbols
    const chars = '01<>{}[]()/*+-=_.,;:|!@#$%^&*~'.split('')
    const fontSize = 14
    const columns = Math.ceil(window.innerWidth / fontSize)
    const drops: number[] = Array(columns).fill(0)

    const draw = () => {
      // Semi-transparent black background for trail effect
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)'
      ctx.fillRect(0, 0, window.innerWidth, window.innerHeight)

      // Green text like matrix
      ctx.fillStyle = 'rgba(34, 197, 94, 0.35)' // More visible green
      ctx.font = `${fontSize}px monospace`

      for (let i = 0; i < drops.length; i++) {
        const text = chars[Math.floor(Math.random() * chars.length)]
        const x = i * fontSize
        const y = drops[i] * fontSize

        ctx.fillText(text, x, y)

        // Reset drop to top randomly
        if (y > window.innerHeight || Math.random() > 0.975) {
          drops[i] = 0
        } else {
          drops[i]++
        }
      }
    }

    // Animation loop with reduced frequency for performance
    let frameCount = 0
    const animationFrame = setInterval(() => {
      frameCount++
      if (frameCount % 2 === 0) {
        // Draw every other frame for lighter effect
        draw()
      }
    }, 50)

    return () => {
      clearInterval(animationFrame)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none opacity-60 -z-10"
      style={{ 
        background: 'transparent',
        top: 0,
        left: 0,
        display: 'block'
      }}
    />
  )
}
