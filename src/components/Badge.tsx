import React from 'react'

type BadgeTone = 'neutral' | 'accent' | 'forest' | 'positive' | 'glass'

interface BadgeProps {
  children: React.ReactNode
  tone?: BadgeTone
  solid?: boolean
  iconLeft?: React.ReactNode
  style?: React.CSSProperties
}

const TONES: Record<BadgeTone, { soft: React.CSSProperties; solid: React.CSSProperties }> = {
  neutral:  { soft: { background: 'var(--paper-200)', color: 'var(--text-muted)' },   solid: { background: 'var(--ink-900)',     color: 'var(--text-on-ink)' } },
  accent:   { soft: { background: 'var(--clay-50)',   color: 'var(--clay-700)' },      solid: { background: 'var(--accent)',       color: '#fff' } },
  forest:   { soft: { background: '#E4EAE5',          color: 'var(--forest-600)' },    solid: { background: 'var(--forest-600)',   color: '#fff' } },
  positive: { soft: { background: '#E6EDE6',          color: 'var(--positive)' },      solid: { background: 'var(--positive)',     color: '#fff' } },
  glass:    { soft: { background: 'var(--glass-on-dark)', color: '#fff' },             solid: { background: 'var(--glass-on-dark)', color: '#fff' } },
}

export function Badge({ children, tone = 'neutral', solid = false, iconLeft, style = {} }: BadgeProps) {
  const t = TONES[tone][solid ? 'solid' : 'soft']
  const isGlass = tone === 'glass'
  return (
    <span style={{
      display: 'inline-flex',
      alignItems: 'center',
      gap: '0.4em',
      height: 26,
      padding: '0 11px',
      font: 'var(--eyebrow)',
      letterSpacing: '0.12em',
      textTransform: 'uppercase',
      borderRadius: 'var(--radius-pill)',
      whiteSpace: 'nowrap',
      border: isGlass ? '1px solid var(--glass-border)' : 'none',
      backdropFilter: isGlass ? 'blur(var(--blur-glass))' : 'none',
      WebkitBackdropFilter: isGlass ? 'blur(var(--blur-glass))' : 'none',
      ...t,
      ...style,
    }}>
      {iconLeft}
      {children}
    </span>
  )
}
