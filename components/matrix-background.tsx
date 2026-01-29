'use client'

import { useEffect, useRef } from 'react'

export function MatrixBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d', { alpha: true })
    if (!ctx) return

    let animationFrameId: number | null = null
    let intervalId: NodeJS.Timeout | null = null

    // Set canvas size with device pixel ratio for better rendering
    const resizeCanvas = () => {
      const dpr = window.devicePixelRatio || 1
      canvas.width = window.innerWidth * dpr
      canvas.height = window.innerHeight * dpr
      canvas.style.width = window.innerWidth + 'px'
      canvas.style.height = window.innerHeight + 'px'
      ctx.scale(dpr, dpr)
      
      // Clear canvas on resize
      ctx.fillStyle = 'rgba(0, 0, 0, 1)'
      ctx.fillRect(0, 0, window.innerWidth, window.innerHeight)
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
      // Semi-transparent black background for trail effect - this creates the fade
      ctx.fillStyle = 'rgba(0, 0, 0, 0.08)'
      ctx.fillRect(0, 0, window.innerWidth, window.innerHeight)

      // Green text like matrix
      ctx.fillStyle = 'rgba(34, 197, 94, 0.4)' // Slightly brighter green
      ctx.font = `${fontSize}px monospace`
      ctx.textBaseline = 'top'

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

    // Use requestAnimationFrame for smooth animation
    const animate = () => {
      draw()
      animationFrameId = requestAnimationFrame(animate)
    }
    
    // Start animation immediately
    animate()

    return () => {
      if (animationFrameId !== null) {
        cancelAnimationFrame(animationFrameId)
      }
      if (intervalId !== null) {
        clearInterval(intervalId)
      }
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
