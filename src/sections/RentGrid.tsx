import React from 'react'
import { Eyebrow } from '../components/Eyebrow'
import { PropertyCard } from '../components/PropertyCard'
import { RENTALS } from '../data'

const SHELL: React.CSSProperties = { maxWidth: 'var(--maxw-content)', margin: '0 auto', padding: '0 var(--gutter)' }

export function RentGrid() {
  return (
    <section style={{ background: 'var(--paper-100)', padding: 'clamp(4rem, 9vh, 8rem) 0' }}>
      <div style={SHELL}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '1.2rem', marginBottom: '2.4rem' }}>
          <div>
            <Eyebrow rule>Available now</Eyebrow>
            <h2 style={{ font: 'var(--display-2)', color: 'var(--text-strong)', margin: '1rem 0 0' }}>Residences to let</h2>
          </div>
          <span style={{ font: 'var(--text-sm)', color: 'var(--text-muted)' }}>{RENTALS.length} furnished &amp; unfurnished homes</span>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(330px, 1fr))', gap: '1.8rem' }}>
          {RENTALS.map((p) => (
            <PropertyCard key={p.id} {...p} badgeTone="glass" onClick={() => {}} />
          ))}
        </div>
      </div>
    </section>
  )
}
