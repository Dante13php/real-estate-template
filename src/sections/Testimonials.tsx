import React from 'react'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { Eyebrow } from '../components/Eyebrow'
import { Avatar } from '../components/Avatar'
import { IconButton } from '../components/IconButton'
import { TESTIMONIALS } from '../data'

const SHELL: React.CSSProperties = { maxWidth: 940, margin: '0 auto', padding: '0 var(--gutter)' }

export function Testimonials() {
  const [i, setI] = React.useState(0)
  const go = (n: number) => setI((n + TESTIMONIALS.length) % TESTIMONIALS.length)
  const t = TESTIMONIALS[i]

  return (
    <section style={{ background: 'var(--paper-100)', padding: 'clamp(4.5rem, 10vh, 9rem) 0' }}>
      <div style={SHELL}>
        <div style={{ textAlign: 'center' }}>
          <Eyebrow>What our clients say</Eyebrow>
        </div>
        <blockquote key={i} className="domus-fade" style={{
          font: 'var(--display-2)', fontWeight: 400, color: 'var(--text-strong)',
          textAlign: 'center', margin: '2rem auto 2.6rem', maxWidth: '20ch', lineHeight: 1.12,
        }}>
          "{t.quote}"
        </blockquote>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem' }}>
          <Avatar src={t.avatar} name={t.name} size={56} ring />
          <div style={{ textAlign: 'left' }}>
            <div style={{ font: 'var(--text-base)', fontWeight: 600, color: 'var(--text-strong)' }}>{t.name}</div>
            <div style={{ font: 'var(--text-sm)', color: 'var(--text-muted)' }}>{t.role}</div>
          </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '0.8rem', marginTop: '2.4rem' }}>
          <IconButton variant="outline" round ariaLabel="Previous" onClick={() => go(i - 1)}><ArrowLeft size={18} /></IconButton>
          <IconButton variant="outline" round ariaLabel="Next"     onClick={() => go(i + 1)}><ArrowRight size={18} /></IconButton>
        </div>
      </div>
    </section>
  )
}
