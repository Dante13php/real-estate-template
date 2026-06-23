import React from 'react'
import { MapPin, BedDouble, Bath, Maximize } from 'lucide-react'

interface PropertyCardProps {
  image: string
  price: string
  title: string
  location: string
  beds?: number
  baths?: number
  area?: string
  badge?: string
  badgeTone?: 'accent' | 'glass'
  onClick?: () => void
  style?: React.CSSProperties
}

export function PropertyCard({
  image,
  price,
  title,
  location,
  beds,
  baths,
  area,
  badge,
  badgeTone = 'accent',
  onClick,
  style = {},
}: PropertyCardProps) {
  const [hover, setHover] = React.useState(false)

  const Spec = ({ icon, value }: { icon: React.ReactNode; value: string }) => (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', font: 'var(--text-sm)', color: 'var(--text-muted)' }}>
      {icon}
      {value}
    </span>
  )

  return (
    <article
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        background: 'var(--surface-card)',
        borderRadius: 'var(--radius-lg)',
        overflow: 'hidden',
        cursor: onClick ? 'pointer' : 'default',
        boxShadow: hover ? 'var(--shadow-lg)' : 'var(--shadow-sm)',
        transform: hover ? 'translateY(-6px)' : 'translateY(0)',
        transition: 'transform var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out)',
        ...style,
      }}
    >
      <div style={{ position: 'relative', aspectRatio: '4 / 3', overflow: 'hidden' }}>
        <img
          src={image}
          alt={title}
          style={{
            width: '100%', height: '100%', objectFit: 'cover',
            transform: hover ? 'scale(1.06)' : 'scale(1)',
            transition: 'transform var(--dur-slow) var(--ease-out)',
          }}
        />
        {badge && (
          <span style={{ position: 'absolute', top: 16, left: 16 }}>
            <span style={{
              display: 'inline-flex', alignItems: 'center', height: 28, padding: '0 12px',
              borderRadius: 'var(--radius-pill)', font: 'var(--eyebrow)', letterSpacing: '0.12em',
              textTransform: 'uppercase',
              background: badgeTone === 'glass' ? 'var(--glass-on-dark)' : 'var(--accent)',
              color: '#fff',
              border: badgeTone === 'glass' ? '1px solid var(--glass-border)' : 'none',
              backdropFilter: badgeTone === 'glass' ? 'blur(var(--blur-glass))' : 'none',
              WebkitBackdropFilter: badgeTone === 'glass' ? 'blur(var(--blur-glass))' : 'none',
            }}>{badge}</span>
          </span>
        )}
        <span style={{
          position: 'absolute', bottom: 16, left: 16,
          display: 'inline-flex', alignItems: 'baseline', gap: '0.25rem',
          padding: '8px 16px', borderRadius: 'var(--radius-pill)',
          background: 'var(--glass-on-dark)', border: '1px solid var(--glass-border)',
          backdropFilter: 'blur(var(--blur-glass))', WebkitBackdropFilter: 'blur(var(--blur-glass))',
        }}>
          <span style={{ font: 'var(--display-3)', fontWeight: 500, lineHeight: 1, color: '#fff' }}>{price}</span>
        </span>
      </div>

      <div style={{ padding: '20px 22px 22px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '0.5rem' }}>
          <MapPin size={14} color="var(--text-faint)" />
          <span style={{ font: 'var(--text-xs)', letterSpacing: '0.04em', textTransform: 'uppercase', color: 'var(--text-faint)' }}>{location}</span>
        </div>
        <h3 style={{ font: 'var(--display-3)', color: 'var(--text-strong)', margin: '0 0 16px' }}>{title}</h3>
        <div style={{ display: 'flex', gap: '1.25rem', paddingTop: '14px', borderTop: '1px solid var(--border-hair)' }}>
          {beds   != null && <Spec icon={<BedDouble size={16} />} value={`${beds} Beds`} />}
          {baths  != null && <Spec icon={<Bath size={16} />}      value={`${baths} Baths`} />}
          {area   != null && <Spec icon={<Maximize size={16} />}  value={area} />}
        </div>
      </div>
    </article>
  )
}
