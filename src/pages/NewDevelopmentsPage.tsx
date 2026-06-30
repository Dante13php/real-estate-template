import React from 'react'
import { Nav } from '../sections/Nav'
import { PageHero } from '../components/PageHero'
import { DevList } from '../sections/DevList'
import { DevRegister } from '../sections/DevRegister'
import { Footer } from '../sections/Footer'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { hero } from '../content/developments'

export function NewDevelopmentsPage() {
  useScrollReveal()
  return (
    <>
      <Nav />
      <PageHero {...hero} />
      <DevList />
      <DevRegister />
      <Footer />
    </>
  )
}
