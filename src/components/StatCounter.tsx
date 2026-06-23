import React from 'react'

interface StatCounterProps {
  value: number
  suffix?: string
  prefix?: string
  label?: string
  onDark?: boolean
  duration?: number
  style?: React.CSSProperties
}

export function StatCounter({ value, suffix = '', prefix = '', label, onDark = false, duration = 1600, style = {} }: StatCounterProps) {
  const ref = React.useRef<HTMLDivElement>(null)
  const [display, setDisplay] = React.useState(0)
  const started = React.useRef(false)

  React.useEffect(() => {
    const el = ref.current
    if (!el) return
    const run = () => {
      if (started.current) return
      started.current = true
      const start = performance.now()
      const tick = (now: number) => {
        const p = Math.min(1, (now - start) / duration)
        const eased = 1 - Math.pow(1 - p, 3)
        setDisplay(value * eased)
        if (p < 1) requestAnimationFrame(tick)
        else setDisplay(value)
      }
      requestAnimationFrame(tick)
    }
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) run() })
    }, { threshold: 0.4 })
    io.observe(el)
    return () => io.disconnect()
  }, [value, duration])

  const rounded = Number.isInteger(value) ? Math.round(display) : display.toFixed(1)
  const formatted = Number(rounded).toLocaleString()

  return (
    <div ref={ref} style={style}>
      <div style={{ font: 'var(--numeral-xl)', color: onDark ? 'var(--paper-100)' : 'var(--text-strong)', display: 'flex', alignItems: 'baseline', lineHeight: 1 }}>
        <span style={{ color: 'var(--accent)' }}>{prefix}</span>
        <span>{formatted}</span>
        <span style={{ color: 'var(--accent)' }}>{suffix}</span>
      </div>
      {label && (
        <div style={{ font: 'var(--text-sm)', letterSpacing: '0.04em', color: onDark ? 'var(--text-on-ink-muted)' : 'var(--text-muted)', marginTop: '0.6rem' }}>
          {label}
        </div>
      )}
    </div>
  )
}
