import React from 'react'
import { LayoutGrid, Building2, Home, Gem, Briefcase, Sparkles } from 'lucide-react'

const ICON_MAP: Record<string, React.ReactNode> = {
  'layout-grid': <LayoutGrid size={16} />,
  'building-2':  <Building2 size={16} />,
  'home':        <Home size={16} />,
  'gem':         <Gem size={16} />,
  'briefcase':   <Briefcase size={16} />,
  'sparkles':    <Sparkles size={16} />,
}

interface TabItem {
  key: string
  label: string
  icon?: string
  count?: number
}

interface CategoryTabsProps {
  items: TabItem[]
  value?: string
  onChange?: (key: string) => void
  style?: React.CSSProperties
}

export function CategoryTabs({ items, value, onChange, style = {} }: CategoryTabsProps) {
  const [internal, setInternal] = React.useState(value ?? items[0]?.key ?? '')
  const active = value ?? internal
  const select = (key: string) => { setInternal(key); onChange?.(key) }

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem', ...style }}>
      {items.map((item) => {
        const isActive = item.key === active
        return (
          <button
            key={item.key}
            type="button"
            onClick={() => select(item.key)}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              height: 46,
              padding: '0 22px',
              borderRadius: 'var(--radius-pill)',
              border: `1px solid ${isActive ? 'var(--ink-900)' : 'var(--border-soft)'}`,
              background: isActive ? 'var(--ink-900)' : 'transparent',
              color: isActive ? 'var(--text-on-ink)' : 'var(--text-body)',
              font: 'var(--text-sm)',
              fontWeight: 600,
              letterSpacing: '0.03em',
              cursor: 'pointer',
              transition: 'background var(--dur-base) var(--ease-out), color var(--dur-base) var(--ease-out), border-color var(--dur-base) var(--ease-out)',
            }}
            onMouseEnter={(e) => { if (!isActive) e.currentTarget.style.borderColor = 'var(--ink-900)' }}
            onMouseLeave={(e) => { if (!isActive) e.currentTarget.style.borderColor = 'var(--border-soft)' }}
          >
            {item.icon && ICON_MAP[item.icon]}
            {item.label}
            {item.count != null && (
              <span style={{ font: 'var(--text-xs)', opacity: 0.6, fontWeight: 500 }}>{item.count}</span>
            )}
          </button>
        )
      })}
    </div>
  )
}
