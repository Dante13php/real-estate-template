import React from 'react'
import { PropertyCard } from '../components/PropertyCard'
import { featuredProperties as PROPERTIES } from '../content/home'

const SHELL: React.CSSProperties = { maxWidth: 'var(--maxw-content)', margin: '0 auto', padding: '0 var(--gutter)' }

interface FeaturedProps {
  active: string
}

export function Featured({ active }: FeaturedProps) {
  const list = active && active !== 'all' ? PROPERTIES.filter((p) => p.cat === active) : PROPERTIES
  const shown = list.length ? list : PROPERTIES

  return (
    <section style={{ background: 'var(--paper-100)', padding: 'clamp(2.5rem, 5vh, 3.5rem) 0 clamp(4rem, 9vh, 8rem)' }}>
      <div style={SHELL}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(330px, 1fr))', gap: '1.8rem' }}>
          {shown.map((p) => (
            <PropertyCard key={p.id} {...p} onClick={() => {}} />
          ))}
        </div>
      </div>
    </section>
  )
}
