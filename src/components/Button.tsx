import React from 'react'

interface ButtonProps {
  children: React.ReactNode
  variant?: 'primary' | 'secondary' | 'ghost' | 'dark' | 'light'
  size?: 'sm' | 'md' | 'lg'
  iconLeft?: React.ReactNode
  iconRight?: React.ReactNode
  fullWidth?: boolean
  disabled?: boolean
  type?: 'button' | 'submit' | 'reset'
  onClick?: () => void
  style?: React.CSSProperties
}

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  iconLeft,
  iconRight,
  fullWidth = false,
  disabled = false,
  type = 'button',
  onClick,
  style = {},
}: ButtonProps) {
  const sizes = {
    sm: { padding: '0 16px', height: 36, fontSize: '0.78rem' },
    md: { padding: '0 24px', height: 46, fontSize: '0.85rem' },
    lg: { padding: '0 32px', height: 54, fontSize: '0.9rem'  },
  }

  const variants: Record<string, React.CSSProperties> = {
    primary:   { background: 'var(--accent)',  color: 'var(--on-accent)',   border: '1px solid transparent',          boxShadow: '0 1px 3px rgba(185,122,74,0.18)' },
    secondary: { background: 'transparent',     color: 'var(--text-strong)', border: '1px solid var(--border-hair)',    boxShadow: 'none' },
    ghost:     { background: 'transparent',     color: 'var(--text-strong)', border: '1px solid transparent',          boxShadow: 'none' },
    dark:      { background: 'var(--ink-900)',  color: 'var(--text-on-ink)', border: '1px solid transparent',          boxShadow: '0 1px 3px rgba(27,24,19,0.22)' },
    light:     { background: 'rgba(255,255,255,0.14)', color: '#fff',        border: '1px solid rgba(255,255,255,0.2)', boxShadow: 'none' },
  }

  const hoverStyles: Record<string, React.CSSProperties> = {
    primary:   { background: 'var(--accent-hover)', boxShadow: '0 4px 14px rgba(185,122,74,0.28)' },
    secondary: { background: 'var(--paper-200)',     borderColor: 'var(--stone-400)',               boxShadow: 'none' },
    ghost:     { background: 'var(--paper-200)',                                                     boxShadow: 'none' },
    dark:      { background: 'var(--ink-800)',        boxShadow: '0 4px 14px rgba(27,24,19,0.3)'  },
    light:     { background: 'rgba(255,255,255,0.22)', borderColor: 'rgba(255,255,255,0.32)',       boxShadow: 'none' },
  }

  const s = sizes[size]
  const v = variants[variant]
  const h = hoverStyles[variant]

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '0.55em',
        height: s.height,
        padding: s.padding,
        width: fullWidth ? '100%' : 'auto',
        fontFamily: 'var(--font-sans)',
        fontWeight: 600,
        fontSize: s.fontSize,
        letterSpacing: '0.05em',
        borderRadius: 'var(--radius-sm)',
        cursor: disabled ? 'not-allowed' : 'pointer',
        opacity: disabled ? 0.4 : 1,
        transition: 'background 220ms var(--ease-out), box-shadow 220ms var(--ease-out), border-color 220ms var(--ease-out), opacity 220ms',
        whiteSpace: 'nowrap',
        outline: 'none',
        ...v,
        ...style,
      }}
      onMouseEnter={(e) => {
        if (disabled) return
        const el = e.currentTarget
        Object.assign(el.style, h)
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget
        el.style.background    = v.background    as string
        el.style.boxShadow     = v.boxShadow     as string
        el.style.borderColor   = ''
      }}
      onMouseDown={(e) => { if (!disabled) e.currentTarget.style.opacity = '0.75' }}
      onMouseUp={(e)   => { if (!disabled) e.currentTarget.style.opacity = '1' }}
    >
      {iconLeft}
      {children}
      {iconRight}
    </button>
  )
}
