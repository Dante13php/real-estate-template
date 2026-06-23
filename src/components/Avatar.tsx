import React from 'react'

interface AvatarProps {
  src?: string
  name?: string
  size?: number
  ring?: boolean
  style?: React.CSSProperties
}

export function Avatar({ src, name = '', size = 48, ring = false, style = {} }: AvatarProps) {
  const initials = name.split(' ').map((w) => w[0]).slice(0, 2).join('').toUpperCase()
  return (
    <span style={{
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: size,
      height: size,
      borderRadius: 'var(--radius-pill)',
      overflow: 'hidden',
      background: 'var(--forest-500)',
      color: 'var(--paper-100)',
      fontFamily: 'var(--font-display)',
      fontSize: size * 0.42,
      fontWeight: 500,
      flexShrink: 0,
      border: ring ? '2px solid var(--surface-raised)' : 'none',
      boxShadow: ring ? 'var(--shadow-sm)' : 'none',
      ...style,
    }}>
      {src
        ? <img src={src} alt={name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        : initials
      }
    </span>
  )
}
