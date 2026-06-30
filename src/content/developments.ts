// =============================================================================
//  NEW DEVELOPMENTS PAGE CONTENT   (the page at "/new-developments")
// -----------------------------------------------------------------------------
//  1. hero         — the image header at the top
//  2. developments — the list of new-build projects
//  3. list         — the button label under each project
//  4. register     — the green "priority register" band at the bottom
//
//  HOW TO EDIT:  change the words inside the 'single quotes' only.
// =============================================================================

import type { Development, PageHero } from './types'

// -----------------------------------------------------------------------------
//  1. PAGE HERO  — the image header
// -----------------------------------------------------------------------------
export const hero: PageHero = {
  eyebrow: 'New developments',
  title: 'The next address,',
  titleEm: 'before anyone else', // shown in italic accent colour
  subtitle: 'A private portfolio of newly created residences — from lateral city apartments to terraced sea-villas.',
  image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=2000&q=80',
  primary: 'Explore developments',
  secondary: 'Register interest',
}

// -----------------------------------------------------------------------------
//  2. DEVELOPMENTS  — the alternating image/text rows
// -----------------------------------------------------------------------------
//  To ADD a project, copy a block, paste it, give it a new `id` and edit the values.
export const developments: Development[] = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1100&q=80',
    name: 'The Meridian Collection',
    location: 'Belgravia, London',
    status: 'Now selling',     // the coloured pill, e.g. "Now selling" / "Coming soon"
    completion: 'Q3 2026',
    from: '$3.2M',             // starting price
    units: 24,                 // number of residences
    blurb: "Eighteen lateral apartments and six penthouses above a private members' garden.",
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&w=1100&q=80',
    name: 'Aqua Verde Residences',
    location: 'Costa Smeralda, Sardinia',
    status: 'Final phase',
    completion: 'Q1 2027',
    from: '$5.8M',
    units: 12,
    blurb: 'Terraced sea-villas carved into the hillside, each with infinity pool and olive terrace.',
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1100&q=80',
    name: 'Hudson Stone Tower',
    location: 'Hudson Yards, New York',
    status: 'Coming soon',
    completion: 'Q4 2027',
    from: '$4.1M',
    units: 60,
    blurb: 'A limestone-clad tower of light-filled residences with a sky-level wellness floor.',
  },
]

// -----------------------------------------------------------------------------
//  3. LIST  — text shared by every project row
// -----------------------------------------------------------------------------
export const list = {
  /** The button under each development. */
  cta: 'View the development',
}

// -----------------------------------------------------------------------------
//  4. REGISTER  — the green band at the bottom
// -----------------------------------------------------------------------------
export const register = {
  eyebrow: 'Priority register',
  heading: 'See new releases before the market',
  text: 'Registered clients receive first sight of every DOMUS development — often months ahead of public launch.',
  cta: 'Join the register',
}
