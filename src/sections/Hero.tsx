import React from 'react'
import { ArrowRight, Play } from 'lucide-react'
import { Button } from '../components/Button'
import { Eyebrow } from '../components/Eyebrow'
import { hero } from '../content/home'

const SHELL: React.CSSProperties = { maxWidth: 'var(--maxw-content)', margin: '0 auto', padding: '0 var(--gutter)' }

export function Hero() {
  return (
    <section style={{ position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'flex-end', overflow: 'hidden' }}>
      <img
        src={hero.image}
        alt=""
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
      />
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(16,14,10,0.55) 0%, rgba(16,14,10,0.15) 38%, rgba(16,14,10,0.72) 100%)' }} />

      <div style={{ ...SHELL, position: 'relative', width: '100%', paddingBottom: 'clamp(3rem, 8vh, 7rem)', paddingTop: 'clamp(4rem, 10vh, 6rem)' }}>
        <div style={{ maxWidth: 760 }}>
          <div style={{ color: 'var(--clay-300)', marginBottom: '1.4rem' }}>
            <Eyebrow rule>{hero.eyebrow}</Eyebrow>
          </div>
          <h1 style={{ font: 'var(--display-hero)', color: '#fff', margin: 0 }}>
            {hero.titleLine1}<br />{hero.titleLine2}<em style={{ fontStyle: 'italic', color: 'var(--clay-300)' }}>{hero.titleEm}</em>
          </h1>
          <p style={{ font: 'var(--text-lg)', color: 'rgba(255,255,255,0.82)', maxWidth: '46ch', marginTop: '1.6rem' }}>
            {hero.subtitle}
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginTop: '2.4rem' }}>
            <Button variant="primary" size="lg" iconRight={<ArrowRight size={18} />}>{hero.primary}</Button>
            <Button variant="light"   size="lg" iconLeft={<Play size={18} />}>{hero.secondary}</Button>
          </div>
        </div>

        <div style={{
          marginTop: 'clamp(2.5rem, 6vh, 4.5rem)', display: 'inline-flex', flexWrap: 'wrap', gap: '2.6rem',
          padding: '1.4rem 2.2rem', borderRadius: 'var(--radius-lg)',
          background: 'var(--glass-on-dark)', border: '1px solid var(--glass-border)',
          backdropFilter: 'blur(var(--blur-glass))', WebkitBackdropFilter: 'blur(var(--blur-glass))',
          boxShadow: 'var(--shadow-glass)',
        }}>
          {hero.highlights.map((h) => (
            <div key={h.label}>
              <div style={{ font: 'var(--display-3)', fontWeight: 500, color: '#fff', lineHeight: 1 }}>{h.value}</div>
              <div style={{ font: 'var(--text-xs)', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.72)', marginTop: 6 }}>{h.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ position: 'absolute', bottom: 26, left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
        <span style={{ font: 'var(--text-xs)', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.6)' }}>Scroll</span>
        <span className="domus-scroll-dot" style={{ width: 1, height: 38, background: 'linear-gradient(rgba(255,255,255,0.7), transparent)' }} />
      </div>
    </section>
  )
}
