import React from 'react'
import { Nav } from '../sections/Nav'
import { PageHero } from '../components/PageHero'
import { Story } from '../sections/Story'
import { Stats } from '../sections/Stats'
import { WhyUs } from '../sections/WhyUs'
import { Team } from '../sections/Team'
import { Testimonials } from '../sections/Testimonials'
import { CTA } from '../sections/CTA'
import { Footer } from '../sections/Footer'
import { useScrollReveal } from '../hooks/useScrollReveal'

export function AboutPage() {
  useScrollReveal()
  return (
    <>
      <Nav />
      <PageHero
        eyebrow="About DOMUS"
        title="Private real estate,"
        titleEm="quietly done"
        subtitle="A small studio of advisors representing a deliberately small collection of the world's most considered residences."
        image="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=2000&q=80"
      />
      <Story />
      <Stats />
      <WhyUs />
      <Team />
      <Testimonials />
      <CTA />
      <Footer />
    </>
  )
}
