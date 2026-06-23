import React from 'react'
import { Nav } from '../sections/Nav'
import { PageHero } from '../components/PageHero'
import { DevList } from '../sections/DevList'
import { DevRegister } from '../sections/DevRegister'
import { Footer } from '../sections/Footer'
import { useScrollReveal } from '../hooks/useScrollReveal'

export function NewDevelopmentsPage() {
  useScrollReveal()
  return (
    <>
      <Nav />
      <PageHero
        eyebrow="New developments"
        title="The next address,"
        titleEm="before anyone else"
        subtitle="A private portfolio of newly created residences — from lateral city apartments to terraced sea-villas."
        image="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=2000&q=80"
        primary="Explore developments"
        secondary="Register interest"
      />
      <DevList />
      <DevRegister />
      <Footer />
    </>
  )
}
