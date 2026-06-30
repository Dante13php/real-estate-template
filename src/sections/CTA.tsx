import React from 'react'
import { ArrowRight } from 'lucide-react'
import { Button } from '../components/Button'
import { ctaBand } from '../content/site'

const SHELL: React.CSSProperties = { maxWidth: 'var(--maxw-content)', margin: '0 auto', padding: '0 var(--gutter)' }

export function CTA() {
  return (
    <section style={{ position: 'relative', padding: 'clamp(5rem, 12vh, 10rem) 0', overflow: 'hidden' }}>
      <img
        src={ctaBand.image}
        alt=""
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
      />
      <div style={{ position: 'absolute', inset: 0, background: 'rgba(16,14,10,0.6)' }} />
      <div style={{ ...SHELL, position: 'relative', textAlign: 'center' }}>
        <h2 style={{ font: 'var(--display-1)', color: '#fff', margin: '0 auto', maxWidth: '16ch' }}>
          {ctaBand.title}
        </h2>
        <p style={{ font: 'var(--text-lg)', color: 'rgba(255,255,255,0.82)', margin: '1.4rem auto 2.4rem', maxWidth: '44ch' }}>
          {ctaBand.text}
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Button variant="primary" size="lg" iconRight={<ArrowRight size={18} />}>{ctaBand.primary}</Button>
          <Button variant="light"   size="lg">{ctaBand.secondary}</Button>
        </div>
      </div>
    </section>
  )
}
