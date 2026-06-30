// =============================================================================
//  ABOUT PAGE CONTENT   (the page at "/about")
// -----------------------------------------------------------------------------
//  1. hero  — the image header at the top
//  2. story — the "Our story" text + photo
//  3. team  — the "advisors" people grid
//
//  (The "Stats", "Why us" and "Testimonials" blocks on this page are shared
//   with the Home page — edit those in  site.ts  instead.)
//
//  HOW TO EDIT:  change the words inside the 'single quotes' only.
// =============================================================================

import type { Advisor, PageHero } from './types'

// -----------------------------------------------------------------------------
//  1. PAGE HERO  — the image header (no buttons on this one)
// -----------------------------------------------------------------------------
export const hero: PageHero = {
  eyebrow: 'About DOMUS',
  title: 'Private real estate,',
  titleEm: 'quietly done', // shown in italic accent colour
  subtitle: "A small studio of advisors representing a deliberately small collection of the world's most considered residences.",
  image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=2000&q=80',
}

// -----------------------------------------------------------------------------
//  2. STORY  — text on the left, photo on the right
// -----------------------------------------------------------------------------
export const story = {
  eyebrow: 'Our story',
  heading: "We find homes the way we'd choose our own",
  paragraph1: 'DOMUS began with a quiet conviction: that finding a home should feel less like a transaction and more like being understood.',
  paragraph2: 'For eighteen years we have advised a small number of clients on the residences that shape their lives — privately, patiently, and without ever rushing the decision. We represent fewer homes than most, and we know each of them intimately.',
  image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1000&q=80',
}

// -----------------------------------------------------------------------------
//  3. TEAM  — the advisors grid
// -----------------------------------------------------------------------------
export const team = {
  eyebrow: 'The advisors',
  heading: 'People, not portals',
  // To ADD a person, copy a line, paste it and change the values.
  advisors: [
    { name: 'Amara Vance',     role: 'Founding Partner',         avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=240&q=80' },
    { name: 'Henrik Sølvberg', role: 'Head of New Developments', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=240&q=80' },
    { name: 'Léa Dubois',      role: 'Private Client Advisor',   avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=240&q=80' },
    { name: 'Marcus Okonkwo',  role: 'Director of Lettings',     avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=240&q=80' },
  ] as Advisor[],
}
