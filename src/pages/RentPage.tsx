import React from 'react'
import { Nav } from '../sections/Nav'
import { PageHero } from '../components/PageHero'
import { RentIntro } from '../sections/RentIntro'
import { RentGrid } from '../sections/RentGrid'
import { CTA } from '../sections/CTA'
import { Footer } from '../sections/Footer'
import { useScrollReveal } from '../hooks/useScrollReveal'

export function RentPage() {
  useScrollReveal()
  return (
    <>
      <Nav />
      <PageHero
        eyebrow="Lettings"
        title="Live somewhere"
        titleEm="extraordinary"
        subtitle="Considered rental residences in the world's most liveable districts — leased with the same care we give a sale."
        image="https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=2000&q=80"
        primary="Browse rentals"
        secondary="Talk to a lettings advisor"
      />
      <RentIntro />
      <RentGrid />
      <CTA />
      <Footer />
    </>
  )
}
