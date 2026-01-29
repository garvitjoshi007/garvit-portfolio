'use client'

import { useEffect, useRef } from 'react'

export function MatrixBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    // Characters to use - mix of code symbols and matrix style
    const chars = '01アイウエオカキクケコサシスセソタチツテト'.split('')
    const fontSize = 14
    const columns = Math.ceil(canvas.width / fontSize)
    const drops: number[] = Array(columns).fill(0)

    const draw = () => {
      // Semi-transparent black background for trail effect
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Green text like matrix
      ctx.fillStyle = 'rgba(34, 197, 94, 0.35)' // More visible green
      ctx.font = `${fontSize}px monospace`

      for (let i = 0; i < drops.length; i++) {
        const text = chars[Math.floor(Math.random() * chars.length)]
        const x = i * fontSize
        const y = drops[i] * fontSize

        ctx.fillText(text, x, y)

        // Reset drop to top randomly
        if (y > canvas.height || Math.random() > 0.975) {
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
      window.removeEventListener('resize', resizeCanvas)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none opacity-60 -z-10"
      style={{ background: 'transparent' }}
    />
  )
}
