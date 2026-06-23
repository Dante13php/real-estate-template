import React from 'react'

interface EyebrowProps {
  children: React.ReactNode
  rule?: boolean
  style?: React.CSSProperties
}

export function Eyebrow({ children, rule = false, style = {} }: EyebrowProps) {
  return (
    <span style={{
      display: 'inline-flex',
      alignItems: 'center',
      gap: '0.7rem',
      font: 'var(--eyebrow)',
      letterSpacing: 'var(--eyebrow-tracking)',
      textTransform: 'uppercase',
      color: 'var(--accent)',
      ...style,
    }}>
      {rule && <span style={{ width: 28, height: 1, background: 'currentColor', opacity: 0.6 }} />}
      {children}
    </span>
  )
}
