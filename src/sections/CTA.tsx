import React from 'react'
import { ArrowRight } from 'lucide-react'
import { Button } from '../components/Button'

const SHELL: React.CSSProperties = { maxWidth: 'var(--maxw-content)', margin: '0 auto', padding: '0 var(--gutter)' }

export function CTA() {
  return (
    <section style={{ position: 'relative', padding: 'clamp(5rem, 12vh, 10rem) 0', overflow: 'hidden' }}>
      <img
        src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=80"
        alt=""
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
      />
      <div style={{ position: 'absolute', inset: 0, background: 'rgba(16,14,10,0.6)' }} />
      <div style={{ ...SHELL, position: 'relative', textAlign: 'center' }}>
        <h2 style={{ font: 'var(--display-1)', color: '#fff', margin: '0 auto', maxWidth: '16ch' }}>
          Your next address is waiting
        </h2>
        <p style={{ font: 'var(--text-lg)', color: 'rgba(255,255,255,0.82)', margin: '1.4rem auto 2.4rem', maxWidth: '44ch' }}>
          Speak with a private advisor and receive a shortlist tailored to you within 48 hours.
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Button variant="primary" size="lg" iconRight={<ArrowRight size={18} />}>Book a consultation</Button>
          <Button variant="light"   size="lg">Browse all listings</Button>
        </div>
      </div>
    </section>
  )
}
