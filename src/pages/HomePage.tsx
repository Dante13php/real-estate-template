import React from 'react'
import { Nav } from '../sections/Nav'
import { Hero } from '../sections/Hero'
import { Categories } from '../sections/Categories'
import { Featured } from '../sections/Featured'
import { WhyUs } from '../sections/WhyUs'
import { Stats } from '../sections/Stats'
import { Testimonials } from '../sections/Testimonials'
import { Locations } from '../sections/Locations'
import { CTA } from '../sections/CTA'
import { Footer } from '../sections/Footer'
import { useScrollReveal } from '../hooks/useScrollReveal'

export function HomePage() {
  const [active, setActive] = React.useState('all')
  useScrollReveal()
  return (
    <>
      <Nav />
      <Hero />
      <Categories active={active} setActive={setActive} />
      <Featured active={active} />
      <WhyUs />
      <Stats />
      <Testimonials />
      <Locations />
      <CTA />
      <Footer />
    </>
  )
}
