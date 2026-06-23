import React from 'react'

interface IconButtonProps {
  children: React.ReactNode
  variant?: 'outline' | 'solid' | 'glass' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  round?: boolean
  disabled?: boolean
  ariaLabel?: string
  onClick?: () => void
  style?: React.CSSProperties
}

export function IconButton({
  children,
  variant = 'outline',
  size = 'md',
  round = false,
  disabled = false,
  ariaLabel,
  onClick,
  style = {},
}: IconButtonProps) {
  const dims = { sm: 36, md: 44, lg: 52 }[size] ?? 44

  const variants: Record<string, React.CSSProperties> = {
    outline: { background: 'var(--surface-raised)', color: 'var(--ink-900)', border: '1px solid var(--border-hair)' },
    solid:   { background: 'var(--ink-900)',         color: 'var(--text-on-ink)', border: '1px solid var(--ink-900)' },
    glass:   { background: 'var(--glass-on-dark)',   color: '#fff', border: '1px solid var(--glass-border)', backdropFilter: 'blur(var(--blur-glass))', WebkitBackdropFilter: 'blur(var(--blur-glass))' },
    ghost:   { background: 'transparent',            color: 'var(--ink-900)', border: '1px solid transparent' },
  }
  const v = variants[variant]

  return (
    <button
      type="button"
      aria-label={ariaLabel}
      disabled={disabled}
      onClick={onClick}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: dims,
        height: dims,
        borderRadius: round ? 'var(--radius-pill)' : 'var(--radius-sm)',
        cursor: disabled ? 'not-allowed' : 'pointer',
        opacity: disabled ? 0.45 : 1,
        transition: 'transform var(--dur-fast) var(--ease-out), background var(--dur-fast) var(--ease-out)',
        ...v,
        ...style,
      }}
      onMouseEnter={(e) => { if (!disabled) e.currentTarget.style.transform = 'translateY(-1px)' }}
      onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)' }}
      onMouseDown={(e)  => { if (!disabled) e.currentTarget.style.transform = 'scale(0.94)' }}
      onMouseUp={(e)    => { if (!disabled) e.currentTarget.style.transform = 'translateY(-1px)' }}
    >
      {children}
    </button>
  )
}
