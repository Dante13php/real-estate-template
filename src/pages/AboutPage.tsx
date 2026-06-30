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
import { hero } from '../content/about'

export function AboutPage() {
  useScrollReveal()
  return (
    <>
      <Nav />
      <PageHero {...hero} />
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
