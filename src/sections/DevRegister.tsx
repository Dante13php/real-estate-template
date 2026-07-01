import React from 'react'
import { ArrowRight } from 'lucide-react'
import { Eyebrow } from '../components/Eyebrow'
import { Button } from '../components/Button'
import { register } from '../content/developments'
import { useBreakpoint } from '../hooks/useBreakpoint'

const SHELL: React.CSSProperties = { maxWidth: 'var(--maxw-content)', margin: '0 auto', padding: '0 var(--gutter)' }

export function DevRegister() {
  const { isTablet } = useBreakpoint()

  return (
    <section style={{ background: 'var(--forest-600)', padding: 'clamp(4rem, 9vh, 7rem) 0', color: '#fff' }}>
      <div style={{
        ...SHELL,
        display: 'grid',
        gridTemplateColumns: isTablet ? '1fr' : '1.2fr 1fr',
        gap: 'clamp(2rem, 6vw, 5rem)',
        alignItems: 'center',
      }}>
        <div>
          <div style={{ color: 'var(--clay-300)' }}><Eyebrow rule>{register.eyebrow}</Eyebrow></div>
          <h2 style={{ font: 'var(--display-2)', color: '#fff', margin: '1rem 0 1rem' }}>{register.heading}</h2>
          <p style={{ font: 'var(--text-base)', color: 'rgba(255,255,255,0.74)', maxWidth: '40ch' }}>
            {register.text}
          </p>
        </div>
        <div style={{ display: 'flex', gap: '0.9rem', flexWrap: 'wrap', justifyContent: isTablet ? 'flex-start' : 'flex-end' }}>
          <Button variant="primary" size="lg" iconRight={<ArrowRight size={18} />}>{register.cta}</Button>
        </div>
      </div>
    </section>
  )
}
