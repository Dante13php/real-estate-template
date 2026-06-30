import React from 'react'
import { StatCounter } from '../components/StatCounter'
import { stats as STATS } from '../content/site'

const SHELL: React.CSSProperties = { maxWidth: 'var(--maxw-content)', margin: '0 auto', padding: '0 var(--gutter)' }

export function Stats() {
  return (
    <section style={{ background: 'var(--ink-900)', padding: 'clamp(4rem, 9vh, 7.5rem) 0' }}>
      <div style={SHELL}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '2.5rem' }}>
          {STATS.map((s) => (
            <div key={s.label} style={{ borderLeft: '1px solid var(--border-on-ink)', paddingLeft: '1.6rem' }}>
              <StatCounter value={s.value} suffix={s.suffix ?? ''} label={s.label} onDark />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
