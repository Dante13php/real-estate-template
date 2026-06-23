import React from 'react'
import { ArrowRight } from 'lucide-react'
import { Eyebrow } from './Eyebrow'
import { Button } from './Button'

interface PageHeroProps {
  eyebrow?: string
  title: string
  titleEm?: string
  subtitle?: string
  image: string
  primary?: string
  secondary?: string
}

export function PageHero({ eyebrow, title, titleEm, subtitle, image, primary, secondary }: PageHeroProps) {
  return (
    <section style={{ position: 'relative', minHeight: '68vh', display: 'flex', alignItems: 'flex-end', overflow: 'hidden' }}>
      <img src={image} alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(16,14,10,0.5) 0%, rgba(16,14,10,0.12) 42%, rgba(16,14,10,0.74) 100%)' }} />
      <div style={{ maxWidth: 'var(--maxw-content)', margin: '0 auto', padding: '0 var(--gutter)', position: 'relative', width: '100%', paddingBottom: 'clamp(2.5rem, 6vh, 5rem)', paddingTop: 'clamp(3.5rem, 8vh, 5rem)' }}>
        <div style={{ maxWidth: 740 }}>
          {eyebrow && (
            <div style={{ color: 'var(--clay-300)', marginBottom: '1.3rem' }}>
              <Eyebrow rule>{eyebrow}</Eyebrow>
            </div>
          )}
          <h1 style={{ font: 'var(--display-1)', color: '#fff', margin: 0 }}>
            {title}{titleEm && <> <em style={{ fontStyle: 'italic', color: 'var(--clay-300)' }}>{titleEm}</em></>}
          </h1>
          {subtitle && (
            <p style={{ font: 'var(--text-lg)', color: 'rgba(255,255,255,0.82)', maxWidth: '48ch', marginTop: '1.4rem' }}>{subtitle}</p>
          )}
          {(primary || secondary) && (
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginTop: '2.2rem' }}>
              {primary  && <Button variant="primary" size="lg" iconRight={<ArrowRight size={18} />}>{primary}</Button>}
              {secondary && <Button variant="light"  size="lg">{secondary}</Button>}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
