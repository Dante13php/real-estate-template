import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Button } from '../components/Button'

const SHELL: React.CSSProperties = { maxWidth: 'var(--maxw-content)', margin: '0 auto', padding: '0 var(--gutter)' }

const LINKS = [
  { key: 'buy',   label: 'Buy',              to: '/' },
  { key: 'rent',  label: 'Rent',             to: '/rent' },
  { key: 'new',   label: 'New Developments', to: '/new-developments' },
  { key: 'about', label: 'About',            to: '/about' },
]

function activeKey(pathname: string) {
  if (pathname.startsWith('/rent'))             return 'rent'
  if (pathname.startsWith('/new-developments')) return 'new'
  if (pathname.startsWith('/about'))            return 'about'
  return 'buy'
}

export function Nav() {
  const { pathname } = useLocation()
  const active = activeKey(pathname)

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
          <svg width="130" height="34" viewBox="0 0 240 64" role="img" aria-label="DOMUS">
            <text x="0" y="44" fontFamily="'Cormorant Garamond','Times New Roman',serif" fontSize="46" fontWeight="500" letterSpacing="6" fill="#1B1813">DOMUS</text>
            <circle cx="226" cy="16" r="3" fill="#B97A4A" />
          </svg>
        </Link>

        <nav style={{ display: 'flex', gap: '2.2rem' }}>
          {LINKS.map((l) => {
            const isActive = l.key === active
            return (
              <Link key={l.key} to={l.to} style={{
                font: 'var(--text-sm)',
                fontWeight: isActive ? 700 : 500,
                textDecoration: 'none',
                letterSpacing: '0.02em',
                color: isActive ? 'var(--accent)' : 'var(--text-body)',
                borderBottom: isActive ? '1px solid var(--accent)' : '1px solid transparent',
                paddingBottom: 2,
                transition: 'color 200ms var(--ease-out)',
              }}>{l.label}</Link>
            )
          })}
        </nav>

        <Button variant="secondary" size="sm">List a property</Button>
      </div>
    </header>
  )
}
