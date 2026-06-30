import React from 'react'
import { MapPin, CalendarDays, Layers, ArrowRight } from 'lucide-react'
import { Badge } from '../components/Badge'
import { Button } from '../components/Button'
import { developments as DEVELOPMENTS, list } from '../content/developments'

const SHELL: React.CSSProperties = { maxWidth: 'var(--maxw-content)', margin: '0 auto', padding: '0 var(--gutter)' }

function DevRow({ d, i }: { d: typeof DEVELOPMENTS[number]; i: number }) {
  const flip = i % 2 === 1
  const meta = [
    { icon: <MapPin size={16} color="var(--clay-500)" />,       text: d.location },
    { icon: <CalendarDays size={16} color="var(--clay-500)" />, text: `Completion ${d.completion}` },
    { icon: <Layers size={16} color="var(--clay-500)" />,       text: `${d.units} residences` },
  ]
  return (
    <div className="domus-reveal" style={{ display: 'grid', gridTemplateColumns: '1.15fr 1fr', gap: 'clamp(1.5rem, 4vw, 4rem)', alignItems: 'center' }}>
      <div style={{ order: flip ? 2 : 1, borderRadius: 'var(--radius-lg)', overflow: 'hidden', boxShadow: 'var(--shadow-lg)', aspectRatio: '4 / 3' }}>
        <img src={d.image} alt={d.name} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
      </div>
      <div style={{ order: flip ? 1 : 2 }}>
        <div style={{ display: 'flex', gap: '0.6rem', marginBottom: '1.1rem' }}>
          <Badge tone="accent" solid>{d.status}</Badge>
          <Badge tone="neutral">From {d.from}</Badge>
        </div>
        <h3 style={{ font: 'var(--display-2)', color: 'var(--text-strong)', margin: '0 0 0.9rem' }}>{d.name}</h3>
        <p style={{ font: 'var(--text-lg)', color: 'var(--text-muted)', margin: '0 0 1.6rem', maxWidth: '42ch' }}>{d.blurb}</p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.4rem', marginBottom: '1.8rem' }}>
          {meta.map((m) => (
            <span key={m.text} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.45rem', font: 'var(--text-sm)', color: 'var(--text-body)' }}>
              {m.icon}{m.text}
            </span>
          ))}
        </div>
        <Button variant="secondary" iconRight={<ArrowRight size={16} />}>{list.cta}</Button>
      </div>
    </div>
  )
}

export function DevList() {
  return (
    <section style={{ background: 'var(--paper-100)', padding: 'clamp(4.5rem, 9vh, 8rem) 0' }}>
      <div style={{ ...SHELL, display: 'grid', gap: 'clamp(3.5rem, 8vh, 7rem)' }}>
        {DEVELOPMENTS.map((d, i) => <DevRow key={d.id} d={d} i={i} />)}
      </div>
    </section>
  )
}
