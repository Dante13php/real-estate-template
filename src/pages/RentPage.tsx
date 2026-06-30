import React from 'react'
import { Nav } from '../sections/Nav'
import { PageHero } from '../components/PageHero'
import { RentIntro } from '../sections/RentIntro'
import { RentGrid } from '../sections/RentGrid'
import { CTA } from '../sections/CTA'
import { Footer } from '../sections/Footer'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { hero } from '../content/rent'

export function RentPage() {
  useScrollReveal()
  return (
    <>
      <Nav />
      <PageHero {...hero} />
      <RentIntro />
      <RentGrid />
      <CTA />
      <Footer />
    </>
  )
}
