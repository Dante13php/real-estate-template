import React from 'react'
import { brand, footer } from '../content/site'
import { useBreakpoint } from '../hooks/useBreakpoint'

const SHELL: React.CSSProperties = { maxWidth: 'var(--maxw-content)', margin: '0 auto', padding: '0 var(--gutter)' }

export function Footer() {
  const { isMobile, isTablet } = useBreakpoint()

  const gridColumns = isMobile ? '1fr 1fr' : isTablet ? '1fr 1fr 1fr' : '1.4fr repeat(3, 1fr)'

  return (
    <footer style={{ background: 'var(--ink-950)', color: 'rgba(255,255,255,0.7)', padding: 'clamp(3.5rem, 7vh, 6rem) 0 2.5rem' }}>
      <div style={SHELL}>
        <div style={{ display: 'grid', gridTemplateColumns: gridColumns, gap: '2.5rem' }}>
          {!isMobile && (
            <div style={{ gridColumn: isTablet ? 'span 3' : undefined }}>
              <svg width="120" height="32" viewBox="0 0 240 64" aria-label={brand.name} style={{ marginBottom: '1.2rem' }}>
                <text x="0" y="44" fontFamily="'Cormorant Garamond', 'Times New Roman', serif" fontSize="46" fontWeight="500" letterSpacing="6" fill="#F7F3EC">{brand.name}</text>
                <circle cx="226" cy="16" r="3" fill={brand.accentColor} />
              </svg>
              <p style={{ font: 'var(--text-sm)', maxWidth: '30ch', color: 'rgba(255,255,255,0.55)', margin: 0 }}>
                {brand.tagline}
              </p>
            </div>
          )}
          {footer.columns.map((col) => (
            <div key={col.heading}>
              <div style={{ font: 'var(--eyebrow)', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.45)', marginBottom: '1rem' }}>{col.heading}</div>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: '0.7rem' }}>
                {col.links.map((it) => (
                  <li key={it}><a href="#" style={{ font: 'var(--text-sm)', color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>{it}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        {isMobile && (
          <div style={{ marginTop: '2rem', paddingTop: '1.5rem', borderTop: '1px solid var(--border-on-ink)' }}>
            <svg width="120" height="32" viewBox="0 0 240 64" aria-label={brand.name} style={{ marginBottom: '1rem' }}>
              <text x="0" y="44" fontFamily="'Cormorant Garamond', 'Times New Roman', serif" fontSize="46" fontWeight="500" letterSpacing="6" fill="#F7F3EC">{brand.name}</text>
              <circle cx="226" cy="16" r="3" fill={brand.accentColor} />
            </svg>
            <p style={{ font: 'var(--text-sm)', color: 'rgba(255,255,255,0.55)', margin: 0 }}>
              {brand.tagline}
            </p>
          </div>
        )}
        <div style={{ borderTop: '1px solid var(--border-on-ink)', marginTop: '3rem', paddingTop: '1.6rem', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.5rem', font: 'var(--text-xs)', color: 'rgba(255,255,255,0.4)' }}>
          <span>{footer.copyright}</span>
          <span>{footer.legal}</span>
        </div>
      </div>
    </footer>
  )
}
