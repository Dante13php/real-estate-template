// =============================================================================
//  HOME PAGE CONTENT   (the page at "/")
// -----------------------------------------------------------------------------
//  Everything you see on the front page, top to bottom:
//    1. hero               — the full-screen opening image + headline
//    2. categories         — the "Browse by category" filter pills
//    3. featuredProperties — the grid of property cards (for sale)
//    4. locations          — the green "Featured locations" grid
//
//  (The "Why us", "Stats" and "Testimonials" blocks on this page are shared
//   with the About page — edit those in  site.ts  instead.)
//
//  HOW TO EDIT:  change the words inside the 'single quotes' only.
// =============================================================================

import type { Category, Listing, Location } from './types'

// -----------------------------------------------------------------------------
//  1. HERO  — the big opening screen
// -----------------------------------------------------------------------------
export const hero = {
  eyebrow: 'Private real estate, refined',
  // The headline is shown on two lines. `titleEm` is the part in italic accent colour.
  titleLine1: 'Find extraordinary',
  titleLine2: 'places to ',
  titleEm: 'call home',
  subtitle: "A curated collection of the world's most considered residences — matched to the life you intend to live in them.",
  primary: 'Explore residences',
  secondary: 'Watch the film',
  /** Full-screen background image (see README → "Changing images"). */
  image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=2000&q=80',
  // The small glass box of headline numbers sitting on the image.
  highlights: [
    { value: '$2.4B',  label: 'Sold in 2025' },
    { value: '1,200+', label: 'Residences' },
    { value: '6',      label: 'Global districts' },
  ],
}

// -----------------------------------------------------------------------------
//  2. CATEGORIES  — the filter pills above the property grid
// -----------------------------------------------------------------------------
export const categories = {
  eyebrow: 'Browse by category',
  heading: 'A residence for every chapter',
  // `key` links a pill to the `cat` field on properties below. "all" shows everything.
  // `icon` must be one of: layout-grid, building-2, home, gem, briefcase, sparkles
  items: [
    { key: 'all',        label: 'All',              icon: 'layout-grid', count: 140 },
    { key: 'apartments', label: 'Apartments',       icon: 'building-2',  count: 48  },
    { key: 'villas',     label: 'Villas',           icon: 'home',        count: 22  },
    { key: 'luxury',     label: 'Luxury Homes',     icon: 'gem',         count: 31  },
    { key: 'commercial', label: 'Commercial',       icon: 'briefcase',   count: 25  },
    { key: 'new',        label: 'New Developments', icon: 'sparkles',    count: 14  },
  ] as Category[],
}

// -----------------------------------------------------------------------------
//  3. FEATURED PROPERTIES  — the grid of cards (homes for sale)
// -----------------------------------------------------------------------------
//  To ADD a property, copy one line, paste it, and change the values.
//  Give it a new `id`. `cat` decides which filter pill shows it.
//  `badge` is optional (the little label on the photo) — delete it to hide.
export const featuredProperties: Listing[] = [
  { id: 1, image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=900&q=80', price: '$4.2M', title: 'Cliffside Modern Villa',    location: 'Belvédère, Monaco',   beds: 5, baths: 4, area: '4,200 sqft', badge: 'Featured', cat: 'villas' },
  { id: 2, image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=900&q=80', price: '$9.1M', title: 'Skyline Penthouse',        location: 'Tribeca, New York',   beds: 3, baths: 4, area: '3,600 sqft', badge: 'New',      cat: 'apartments' },
  { id: 3, image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=900&q=80', price: '$3.4M', title: 'Coastal Minimal Retreat',  location: 'Malibu, California',  beds: 3, baths: 3, area: '2,800 sqft',                    cat: 'luxury' },
  { id: 4, image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=80', price: '$6.8M', title: 'Glasshouse Pavilion',      location: 'Hampstead, London',   beds: 4, baths: 5, area: '5,100 sqft',                    cat: 'luxury' },
  { id: 5, image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=900&q=80', price: '$2.9M', title: 'Desert Courtyard House',   location: 'Scottsdale, Arizona', beds: 4, baths: 3, area: '3,900 sqft',                    cat: 'villas' },
  { id: 6, image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=900&q=80', price: '$7.5M', title: 'Lakeside Terrace Estate',  location: 'Lake Como, Italy',    beds: 6, baths: 6, area: '6,400 sqft', badge: 'Featured', cat: 'villas' },
]

// -----------------------------------------------------------------------------
//  4. LOCATIONS  — the green grid of cities
// -----------------------------------------------------------------------------
export const locations = {
  eyebrow: 'Featured locations',
  heading: 'Where our residences live',
  subtitle: "Six districts, each chosen for its character. Hover to see what's available now.",
  items: [
    { name: 'Monaco',     count: 38, avg: '$6.4M' },
    { name: 'London',     count: 64, avg: '$4.1M' },
    { name: 'New York',   count: 52, avg: '$5.8M' },
    { name: 'Lake Como',  count: 21, avg: '$7.2M' },
    { name: 'Malibu',     count: 29, avg: '$3.9M' },
    { name: 'Scottsdale', count: 18, avg: '$2.7M' },
  ] as Location[],
}
