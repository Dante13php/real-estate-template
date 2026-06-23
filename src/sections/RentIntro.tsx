import React from 'react'
import { Search, KeyRound, FileSignature } from 'lucide-react'
import { Eyebrow } from '../components/Eyebrow'

const SHELL: React.CSSProperties = { maxWidth: 'var(--maxw-content)', margin: '0 auto', padding: '0 var(--gutter)' }

const STEPS = [
  { icon: <Search size={22} />,       title: 'Tell us the life',    body: "Share your district, timing and the feeling you're after. We listen first." },
  { icon: <KeyRound size={22} />,     title: 'Private viewings',    body: 'We arrange discreet viewings of vetted, ready-to-move residences.' },
  { icon: <FileSignature size={22} />,title: 'Effortless signing',  body: 'Our team handles references, contracts and handover — you simply arrive.' },
]

export function RentIntro() {
  return (
    <section style={{ background: 'var(--paper-50)', padding: 'clamp(4.5rem, 9vh, 8rem) 0', borderBottom: '1px solid var(--border-hair)' }}>
      <div style={SHELL}>
        <div style={{ maxWidth: 560 }}>
          <Eyebrow rule>Renting with DOMUS</Eyebrow>
          <h2 style={{ font: 'var(--display-2)', color: 'var(--text-strong)', margin: '1rem 0 0' }}>A lease handled like a purchase</h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '2.4rem 2rem', marginTop: '3.2rem' }}>
          {STEPS.map((s, i) => (
            <div key={s.title} className="domus-reveal">
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.9rem', marginBottom: '1.1rem' }}>
                <span style={{ width: 48, height: 48, borderRadius: 'var(--radius-md)', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--clay-50)', color: 'var(--clay-600)' }}>
                  {s.icon}
                </span>
                <span style={{ font: 'var(--display-3)', color: 'var(--stone-400)' }}>0{i + 1}</span>
              </div>
              <h3 style={{ font: 'var(--display-3)', color: 'var(--text-strong)', margin: '0 0 0.5rem' }}>{s.title}</h3>
              <p style={{ font: 'var(--text-base)', color: 'var(--text-muted)', margin: 0 }}>{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
