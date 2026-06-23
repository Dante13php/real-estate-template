import React from 'react'
import { MapPin } from 'lucide-react'
import { Eyebrow } from '../components/Eyebrow'
import { LOCATIONS } from '../data'

const SHELL: React.CSSProperties = { maxWidth: 'var(--maxw-content)', margin: '0 auto', padding: '0 var(--gutter)' }

export function Locations() {
  const [hover, setHover] = React.useState<string | null>(null)

  return (
    <section style={{ background: 'var(--forest-600)', padding: 'clamp(4.5rem, 10vh, 9rem) 0', color: '#fff' }}>
      <div style={SHELL}>
        <div style={{ display: 'grid', gridTemplateColumns: 'minmax(260px, 1fr) 1.3fr', gap: 'clamp(2rem, 6vw, 5rem)', alignItems: 'center' }}>
          <div>
            <div style={{ color: 'var(--clay-300)' }}><Eyebrow rule>Featured locations</Eyebrow></div>
            <h2 style={{ font: 'var(--display-2)', color: '#fff', margin: '1rem 0 1.2rem' }}>Where our residences live</h2>
            <p style={{ font: 'var(--text-base)', color: 'rgba(255,255,255,0.72)', maxWidth: '38ch' }}>
              Six districts, each chosen for its character. Hover to see what's available now.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1px', background: 'var(--border-on-ink)', borderRadius: 'var(--radius-lg)', overflow: 'hidden' }}>
            {LOCATIONS.map((l) => (
              <div
                key={l.name}
                onMouseEnter={() => setHover(l.name)}
                onMouseLeave={() => setHover(null)}
                style={{
                  padding: '1.6rem 1.8rem',
                  background: hover === l.name ? 'var(--forest-500)' : 'var(--forest-700)',
                  transition: 'background 320ms var(--ease-out)',
                  cursor: 'pointer',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.7rem' }}>
                  <MapPin size={16} color="var(--clay-300)" />
                  <span style={{ font: 'var(--text-lg)', fontWeight: 600 }}>{l.name}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', font: 'var(--text-sm)', color: 'rgba(255,255,255,0.7)' }}>
                  <span>{l.count} residences</span>
                  <span style={{ color: 'var(--clay-300)' }}>avg {l.avg}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
