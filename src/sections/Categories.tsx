import React from 'react'
import { Eyebrow } from '../components/Eyebrow'
import { CategoryTabs } from '../components/CategoryTabs'
import { CATEGORIES } from '../data'

const SHELL: React.CSSProperties = { maxWidth: 'var(--maxw-content)', margin: '0 auto', padding: '0 var(--gutter)' }

interface CategoriesProps {
  active: string
  setActive: (key: string) => void
}

export function Categories({ active, setActive }: CategoriesProps) {
  return (
    <section style={{ background: 'var(--paper-100)', padding: 'clamp(4rem, 8vh, 7rem) 0 0' }}>
      <div style={SHELL}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '1.5rem', marginBottom: '2.2rem' }}>
          <div>
            <Eyebrow rule>Browse by category</Eyebrow>
            <h2 style={{ font: 'var(--display-2)', color: 'var(--text-strong)', margin: '1rem 0 0' }}>A residence for every chapter</h2>
          </div>
        </div>
        <CategoryTabs items={CATEGORIES} value={active} onChange={setActive} />
      </div>
    </section>
  )
}
