import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { Button } from '../components/Button'
import { brand, nav } from '../content/site'
import { useBreakpoint } from '../hooks/useBreakpoint'

const SHELL: React.CSSProperties = { maxWidth: 'var(--maxw-content)', margin: '0 auto', padding: '0 var(--gutter)' }

function isActive(to: string, pathname: string) {
  return to === '/' ? pathname === '/' : pathname.startsWith(to)
}

function Logo({ fill = '#1B1813' }: { fill?: string }) {
  return (
    <svg width="130" height="34" viewBox="0 0 240 64" role="img" aria-label={brand.name}>
      <text x="0" y="44" fontFamily="'Cormorant Garamond','Times New Roman',serif" fontSize="46" fontWeight="500" letterSpacing="6" fill={fill}>{brand.name}</text>
      <circle cx="226" cy="16" r="3" fill={brand.accentColor} />
    </svg>
  )
}

export function Nav() {
  const { pathname } = useLocation()
  const { isMobile } = useBreakpoint()
  const [menuOpen, setMenuOpen] = React.useState(false)

  React.useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  React.useEffect(() => { setMenuOpen(false) }, [pathname])

  React.useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <>
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
            <Logo />
          </Link>

          {!isMobile && (
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
          )}

          {isMobile ? (
            <button
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: 8,
                color: 'var(--text-strong)',
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <Menu size={26} />
            </button>
          ) : (
            <Button variant="secondary" size="sm">{nav.cta}</Button>
          )}
        </div>
      </header>

      {isMobile && menuOpen && (
        <div style={{
          position: 'fixed',
          inset: 0,
          background: 'var(--paper-100)',
          zIndex: 200,
          display: 'flex',
          flexDirection: 'column',
          padding: '0 var(--gutter)',
        }}>
          <div style={{ height: 72, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <Link to="/" onClick={() => setMenuOpen(false)} style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
              <Logo />
            </Link>
            <button
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: 8,
                color: 'var(--text-strong)',
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <X size={26} />
            </button>
          </div>

          <div style={{ borderTop: '1px solid var(--border-hair)', marginTop: 0 }} />

          <nav style={{ display: 'flex', flexDirection: 'column', paddingTop: '2rem', gap: '0.25rem' }}>
            {nav.links.map((l) => {
              const active = isActive(l.to, pathname)
              return (
                <Link key={l.to} to={l.to} style={{
                  font: 'var(--display-3)',
                  fontWeight: active ? 700 : 400,
                  textDecoration: 'none',
                  color: active ? 'var(--accent)' : 'var(--text-strong)',
                  padding: '0.75rem 0',
                  borderBottom: '1px solid var(--border-hair)',
                  letterSpacing: '0.01em',
                }}>{l.label}</Link>
              )
            })}
          </nav>

          <div style={{ marginTop: 'auto', paddingBottom: '3rem', paddingTop: '2rem' }}>
            <Button variant="primary" size="lg">{nav.cta}</Button>
          </div>
        </div>
      )}
    </>
  )
}
