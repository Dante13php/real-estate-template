import React from 'react'
import { Compass, BadgeCheck, HandHeart, Zap } from 'lucide-react'
import { Eyebrow } from '../components/Eyebrow'
import { FEATURES } from '../data'

const SHELL: React.CSSProperties = { maxWidth: 'var(--maxw-content)', margin: '0 auto', padding: '0 var(--gutter)' }

const ICON_MAP: Record<string, React.ReactNode> = {
  compass:      <Compass size={24} />,
  'badge-check': <BadgeCheck size={24} />,
  'hand-heart':  <HandHeart size={24} />,
  zap:           <Zap size={24} />,
}

export function WhyUs() {
  return (
    <section style={{ background: 'var(--paper-50)', padding: 'clamp(4.5rem, 10vh, 9rem) 0', borderTop: '1px solid var(--border-hair)' }}>
      <div style={SHELL}>
        <div style={{ maxWidth: 560 }}>
          <Eyebrow rule>Why DOMUS</Eyebrow>
          <h2 style={{ font: 'var(--display-2)', color: 'var(--text-strong)', margin: '1rem 0 0' }}>The quiet advantage of working with us</h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '2.5rem 2rem', marginTop: '3.4rem' }}>
          {FEATURES.map((f) => (
            <div key={f.title} className="domus-reveal">
              <div style={{
                width: 56, height: 56, borderRadius: 'var(--radius-md)', display: 'flex', alignItems: 'center', justifyContent: 'center',
                background: 'var(--clay-50)', color: 'var(--clay-600)', marginBottom: '1.3rem',
              }}>
                {ICON_MAP[f.icon]}
              </div>
              <h3 style={{ font: 'var(--display-3)', color: 'var(--text-strong)', margin: '0 0 0.6rem' }}>{f.title}</h3>
              <p style={{ font: 'var(--text-base)', color: 'var(--text-muted)', margin: 0 }}>{f.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
