import React from 'react'
import { Eyebrow } from '../components/Eyebrow'
import { story } from '../content/about'
import { useBreakpoint } from '../hooks/useBreakpoint'

const SHELL: React.CSSProperties = { maxWidth: 'var(--maxw-content)', margin: '0 auto', padding: '0 var(--gutter)' }

export function Story() {
  const { isTablet } = useBreakpoint()

  return (
    <section style={{ background: 'var(--paper-50)', padding: 'clamp(4.5rem, 10vh, 9rem) 0', borderBottom: '1px solid var(--border-hair)' }}>
      <div style={{
        ...SHELL,
        display: 'grid',
        gridTemplateColumns: isTablet ? '1fr' : '1fr 1fr',
        gap: 'clamp(2rem, 6vw, 5rem)',
        alignItems: 'center',
      }}>
        <div className="domus-reveal">
          <Eyebrow rule>{story.eyebrow}</Eyebrow>
          <h2 style={{ font: 'var(--display-2)', color: 'var(--text-strong)', margin: '1rem 0 1.4rem' }}>
            {story.heading}
          </h2>
          <p style={{ font: 'var(--text-lg)', color: 'var(--text-body)', margin: '0 0 1.1rem' }}>
            {story.paragraph1}
          </p>
          <p style={{ font: 'var(--text-base)', color: 'var(--text-muted)', margin: 0 }}>
            {story.paragraph2}
          </p>
        </div>
        <div className="domus-reveal" style={{ borderRadius: 'var(--radius-lg)', overflow: 'hidden', boxShadow: 'var(--shadow-lg)', aspectRatio: '4 / 5' }}>
          <img
            src={story.image}
            alt=""
            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
          />
        </div>
      </div>
    </section>
  )
}
