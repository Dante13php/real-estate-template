import React from 'react'
import { Eyebrow } from '../components/Eyebrow'

const SHELL: React.CSSProperties = { maxWidth: 'var(--maxw-content)', margin: '0 auto', padding: '0 var(--gutter)' }

export function Story() {
  return (
    <section style={{ background: 'var(--paper-50)', padding: 'clamp(4.5rem, 10vh, 9rem) 0', borderBottom: '1px solid var(--border-hair)' }}>
      <div style={{ ...SHELL, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'clamp(2rem, 6vw, 5rem)', alignItems: 'center' }}>
        <div className="domus-reveal">
          <Eyebrow rule>Our story</Eyebrow>
          <h2 style={{ font: 'var(--display-2)', color: 'var(--text-strong)', margin: '1rem 0 1.4rem' }}>
            We find homes the way we'd choose our own
          </h2>
          <p style={{ font: 'var(--text-lg)', color: 'var(--text-body)', margin: '0 0 1.1rem' }}>
            DOMUS began with a quiet conviction: that finding a home should feel less like a transaction and more like being understood.
          </p>
          <p style={{ font: 'var(--text-base)', color: 'var(--text-muted)', margin: 0 }}>
            For eighteen years we have advised a small number of clients on the residences that shape their lives — privately, patiently, and without ever rushing the decision. We represent fewer homes than most, and we know each of them intimately.
          </p>
        </div>
        <div className="domus-reveal" style={{ borderRadius: 'var(--radius-lg)', overflow: 'hidden', boxShadow: 'var(--shadow-lg)', aspectRatio: '4 / 5' }}>
          <img
            src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1000&q=80"
            alt=""
            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
          />
        </div>
      </div>
    </section>
  )
}
