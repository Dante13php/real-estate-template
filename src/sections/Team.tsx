import React from 'react'
import { Eyebrow } from '../components/Eyebrow'
import { ADVISORS } from '../data'

const SHELL: React.CSSProperties = { maxWidth: 'var(--maxw-content)', margin: '0 auto', padding: '0 var(--gutter)' }

export function Team() {
  return (
    <section style={{ background: 'var(--paper-100)', padding: 'clamp(4.5rem, 10vh, 9rem) 0' }}>
      <div style={SHELL}>
        <div style={{ maxWidth: 560 }}>
          <Eyebrow rule>The advisors</Eyebrow>
          <h2 style={{ font: 'var(--display-2)', color: 'var(--text-strong)', margin: '1rem 0 0' }}>People, not portals</h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '2.2rem', marginTop: '3rem' }}>
          {ADVISORS.map((a) => (
            <div key={a.name} className="domus-reveal">
              <div style={{ borderRadius: 'var(--radius-lg)', overflow: 'hidden', aspectRatio: '1 / 1', marginBottom: '1.1rem', boxShadow: 'var(--shadow-sm)' }}>
                <img src={a.avatar} alt={a.name} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
              </div>
              <div style={{ font: 'var(--display-3)', color: 'var(--text-strong)' }}>{a.name}</div>
              <div style={{ font: 'var(--text-sm)', color: 'var(--text-muted)', marginTop: 2 }}>{a.role}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
