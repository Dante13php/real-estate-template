// =============================================================================
//  RENT PAGE CONTENT   (the page at "/rent")
// -----------------------------------------------------------------------------
//  1. hero    — the image header at the top
//  2. intro   — the "how renting works" numbered steps
//  3. grid    — the heading above the rentals
//  4. rentals — the grid of rental property cards
//
//  HOW TO EDIT:  change the words inside the 'single quotes' only.
// =============================================================================

import type { Listing, PageHero, Step } from './types'

// -----------------------------------------------------------------------------
//  1. PAGE HERO  — the image header
// -----------------------------------------------------------------------------
export const hero: PageHero = {
  eyebrow: 'Lettings',
  title: 'Live somewhere',
  titleEm: 'extraordinary', // shown in italic accent colour next to the title
  subtitle: "Considered rental residences in the world's most liveable districts — leased with the same care we give a sale.",
  image: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=2000&q=80',
  primary: 'Browse rentals',
  secondary: 'Talk to a lettings advisor',
}

// -----------------------------------------------------------------------------
//  2. INTRO  — the three "how it works" steps
// -----------------------------------------------------------------------------
export const intro = {
  eyebrow: 'Renting with DOMUS',
  heading: 'A lease handled like a purchase',
  // The steps are numbered automatically (01, 02, 03…).
  // `icon` must be one of: search, key-round, file-signature
  steps: [
    { icon: 'search',         title: 'Tell us the life',   body: "Share your district, timing and the feeling you're after. We listen first." },
    { icon: 'key-round',      title: 'Private viewings',   body: 'We arrange discreet viewings of vetted, ready-to-move residences.' },
    { icon: 'file-signature', title: 'Effortless signing', body: 'Our team handles references, contracts and handover — you simply arrive.' },
  ] as Step[],
}

// -----------------------------------------------------------------------------
//  3. GRID HEADING  — the title above the rentals
// -----------------------------------------------------------------------------
export const grid = {
  eyebrow: 'Available now',
  heading: 'Residences to let',
  /** Shown as: "{number} furnished & unfurnished homes" (the number is counted for you). */
  note: 'furnished & unfurnished homes',
}

// -----------------------------------------------------------------------------
//  4. RENTALS  — the grid of cards (homes to rent)
// -----------------------------------------------------------------------------
//  To ADD a rental, copy a line, paste it, give it a new `id` and change the values.
//  `badge` is optional (the label on the photo) — delete it to hide.
export const rentals: Listing[] = [
  { id: 1, image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=900&q=80', price: '$14,500/mo', title: 'Park-View Atelier',  location: 'Notting Hill, London', beds: 3, baths: 2, area: '2,100 sqft', badge: 'Furnished', cat: 'apartments' },
  { id: 2, image: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=900&q=80', price: '$9,800/mo',  title: 'Garden Maisonette', location: 'Le Marais, Paris',     beds: 2, baths: 2, area: '1,650 sqft',                     cat: 'apartments' },
  { id: 3, image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=900&q=80',  price: '$22,000/mo', title: 'Harbour Penthouse', location: 'Sé, Lisbon',           beds: 3, baths: 3, area: '2,900 sqft', badge: 'Furnished', cat: 'luxury' },
  { id: 4, image: 'https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=900&q=80', price: '$7,200/mo',  title: 'Courtyard Loft',    location: 'Mitte, Berlin',        beds: 1, baths: 1, area: '1,200 sqft',                     cat: 'apartments' },
  { id: 5, image: 'https://images.unsplash.com/photo-1600210492493-0946911123ea?auto=format&fit=crop&w=900&q=80', price: '$28,500/mo', title: 'Cliff House Villa', location: 'Èze, French Riviera',  beds: 5, baths: 4, area: '4,800 sqft', badge: 'Seasonal',  cat: 'villas' },
  { id: 6, image: 'https://images.unsplash.com/photo-1567496898669-ee935f5f647a?auto=format&fit=crop&w=900&q=80', price: '$11,400/mo', title: 'Skylight Residence',location: 'SoHo, New York',       beds: 2, baths: 2, area: '1,900 sqft',                     cat: 'apartments' },
]
