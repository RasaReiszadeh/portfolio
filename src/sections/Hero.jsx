import { useEffect, useRef } from 'react'
import s from './Hero.module.css'

export default function Hero() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let raf

    const resize = () => { canvas.width = innerWidth; canvas.height = innerHeight }
    resize()
    window.addEventListener('resize', resize)

    // DNA helix-inspired dots — biology meets code
    const nodes = Array.from({ length: 120 }, () => ({
      x: Math.random() * innerWidth,
      y: Math.random() * innerHeight,
      r: Math.random() * 1.4 + 0.3,
      vx: (Math.random() - 0.5) * 0.25,
      vy: (Math.random() - 0.5) * 0.25,
      hue: Math.random() > 0.6 ? 'coral' : Math.random() > 0.5 ? 'violet' : 'teal',
    }))

    const colors = { coral: '255,77,109', violet: '167,139,250', teal: '45,212,191' }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      nodes.forEach(n => {
        n.x += n.vx; n.y += n.vy
        if (n.x < 0) n.x = canvas.width
        if (n.x > canvas.width) n.x = 0
        if (n.y < 0) n.y = canvas.height
        if (n.y > canvas.height) n.y = 0
      })

      // Connect nearby nodes — like a network/neural mesh
      nodes.forEach((a, i) => {
        nodes.slice(i + 1).forEach(b => {
          const dx = a.x - b.x, dy = a.y - b.y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 110) {
            ctx.beginPath()
            ctx.moveTo(a.x, a.y)
            ctx.lineTo(b.x, b.y)
            ctx.strokeStyle = `rgba(167,139,250,${0.07 * (1 - dist / 110)})`
            ctx.lineWidth = 0.6
            ctx.stroke()
          }
        })
        ctx.beginPath()
        ctx.arc(a.x, a.y, a.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(${colors[a.hue]},0.45)`
        ctx.fill()
      })

      raf = requestAnimationFrame(draw)
    }
    draw()

    return () => { cancelAnimationFrame(raf); window.removeEventListener('resize', resize) }
  }, [])

  return (
    <section id="top" className={s.hero}>
      <canvas ref={canvasRef} className={s.canvas} />

      <div className={s.content}>
        <div className={s.badge}>
          <span className={s.pulseDot} />
          Open to opportunities · Toronto, Canada
        </div>

        <h1 className={s.name}>
          <span className={s.first}>Rasa</span>
          <span className={s.last}>Reiszadeh</span>
        </h1>

        <p className={s.role}>
          Software Developer &nbsp;<span className={s.sep}>·</span>&nbsp;
          AI Engineer &nbsp;<span className={s.sep}>·</span>&nbsp;
          Biology × Code
        </p>

        <p className={s.statement}>
          I came from a biology lab and ended up building neural networks.
          I moved countries and earned a government engineering co-op.
          I care about technology that actually helps people — not just technology that ships.
        </p>

        <div className={s.ctas}>
          <a href="#projects" className={s.primary}>See my work</a>
          <a href="#story" className={s.secondary}>My story</a>
          <a
            href="https://github.com/RasaReiszadeh"
            target="_blank" rel="noopener noreferrer"
            className={s.ghost}
          >
            GitHub ↗
          </a>
        </div>
      </div>

      <div className={s.scrollHint}>
        <div className={s.scrollLine} />
        <span>scroll</span>
      </div>
    </section>
  )
}
