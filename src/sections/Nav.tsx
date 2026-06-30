import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Button } from '../components/Button'
import { brand, nav } from '../content/site'

const SHELL: React.CSSProperties = { maxWidth: 'var(--maxw-content)', margin: '0 auto', padding: '0 var(--gutter)' }

// Highlights the menu link that best matches the current page address.
function isActive(to: string, pathname: string) {
  return to === '/' ? pathname === '/' : pathname.startsWith(to)
}

export function Nav() {
  const { pathname } = useLocation()

  React.useEffect(() => { window.scrollTo(0, 0) }, [pathname])

  return (
    <header style={{
      position: 'sticky',
      top: 0,
      zIndex: 50,
      background: 'rgba(247,243,236,0.92)',
      backdropFilter: 'blur(16px)',
      WebkitBackdropFilter: 'blur(16px)',
      borderBottom: '1px solid var(--border-hair)',
    }}>
      <div style={{ ...SHELL, height: 72, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Link to="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
          <svg width="130" height="34" viewBox="0 0 240 64" role="img" aria-label={brand.name}>
            <text x="0" y="44" fontFamily="'Cormorant Garamond','Times New Roman',serif" fontSize="46" fontWeight="500" letterSpacing="6" fill="#1B1813">{brand.name}</text>
            <circle cx="226" cy="16" r="3" fill={brand.accentColor} />
          </svg>
        </Link>

        <nav style={{ display: 'flex', gap: '2.2rem' }}>
          {nav.links.map((l) => {
            const active = isActive(l.to, pathname)
            return (
              <Link key={l.to} to={l.to} style={{
                font: 'var(--text-sm)',
                fontWeight: active ? 700 : 500,
                textDecoration: 'none',
                letterSpacing: '0.02em',
                color: active ? 'var(--accent)' : 'var(--text-body)',
                borderBottom: active ? '1px solid var(--accent)' : '1px solid transparent',
                paddingBottom: 2,
                transition: 'color 200ms var(--ease-out)',
              }}>{l.label}</Link>
            )
          })}
        </nav>

        <Button variant="secondary" size="sm">{nav.cta}</Button>
      </div>
    </header>
  )
}
