// =============================================================================
//  SITE-WIDE CONTENT
// -----------------------------------------------------------------------------
//  Text and data that appears on EVERY page, or on more than one page:
//    • the logo / brand name
//    • the top navigation menu
//    • the call-to-action band near the bottom of every page
//    • the footer
//    • shared blocks (Why us / Stats / Testimonials) reused on Home + About
//
//  HOW TO EDIT:  change the words inside the 'single quotes'. Keep the quotes,
//  commas and brackets exactly where they are. Save the file — the website
//  updates automatically while `npm run dev` is running.
// =============================================================================

import type { Feature, Stat, Testimonial } from './types'

// -----------------------------------------------------------------------------
//  BRAND  — your company name and logo accent
// -----------------------------------------------------------------------------
export const brand = {
  /** Shown as the logo in the header and footer. */
  name: 'DOMUS',
  /** Short sentence under the logo in the footer. */
  tagline: 'Private real estate for those who measure a home in feeling, not square footage.',
  /** Colour of the little dot next to the logo (any HEX colour, e.g. '#B97A4A'). */
  accentColor: '#B97A4A',
}

// -----------------------------------------------------------------------------
//  TOP NAVIGATION  — the menu in the header
// -----------------------------------------------------------------------------
export const nav = {
  // Each item is one menu link. `to` is the page address (must match a page).
  links: [
    { label: 'Buy',              to: '/' },
    { label: 'Rent',             to: '/rent' },
    { label: 'New Developments', to: '/new-developments' },
    { label: 'About',            to: '/about' },
  ],
  /** The button on the right of the menu. */
  cta: 'List a property',
}

// -----------------------------------------------------------------------------
//  CALL-TO-ACTION BAND  — the big image banner near the bottom of most pages
// -----------------------------------------------------------------------------
export const ctaBand = {
  title: 'Your next address is waiting',
  text: 'Speak with a private advisor and receive a shortlist tailored to you within 48 hours.',
  primary: 'Book a consultation',
  secondary: 'Browse all listings',
  /** Background image. Paste any image link here (see README → "Changing images"). */
  image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=80',
}

// -----------------------------------------------------------------------------
//  FOOTER  — the dark section at the very bottom
// -----------------------------------------------------------------------------
export const footer = {
  // Link columns. Add or remove `links` freely; keep them in quotes.
  columns: [
    { heading: 'Buy',     links: ['Apartments', 'Villas', 'Luxury Homes', 'New Developments'] },
    { heading: 'Company', links: ['About', 'Advisors', 'Press', 'Careers'] },
    { heading: 'Connect', links: ['Contact', 'Private viewings', 'Newsletter', 'Instagram'] },
  ],
  copyright: '© 2026 DOMUS Residences. All rights reserved.',
  legal: 'Privacy · Terms · Cookies',
}

// =============================================================================
//  SHARED BLOCKS  — these appear on MORE THAN ONE page.
//  Editing them here changes them everywhere they are shown.
// =============================================================================

// "Why us" benefit cards — shown on the Home page AND the About page.
export const whyUs = {
  eyebrow: 'Why DOMUS',
  heading: 'The quiet advantage of working with us',
  features: [
    { icon: 'compass',     title: 'Market Expertise',     body: "Two decades advising on the world's most discerning addresses, district by district." },
    { icon: 'badge-check', title: 'Verified Listings',    body: 'Every residence is inspected and authenticated before it reaches your shortlist.' },
    { icon: 'hand-heart',  title: 'Personalised Service', body: 'One dedicated advisor, available privately, from first viewing to final signature.' },
    { icon: 'zap',         title: 'Fast Transactions',    body: 'In-house legal and finance partners close with discretion and remarkable speed.' },
  ] as Feature[],
}

// The dark band of big numbers — shown on the Home page AND the About page.
export const stats: Stat[] = [
  { value: 2400, suffix: '+', label: 'Properties sold' },
  { value: 318,               label: 'Active listings' },
  { value: 9600, suffix: '+', label: 'Happy clients' },
  { value: 18,                label: 'Years of expertise' },
]

// Client quotes slider — shown on the Home page AND the About page.
export const testimonials = {
  eyebrow: 'What our clients say',
  items: [
    { quote: 'DOMUS understood the life we wanted before we could describe it. The home they found is, quite simply, perfect.', name: 'Amara & James Vance', role: 'Lake Como Estate',   avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=160&q=80' },
    { quote: 'Discreet, precise, and genuinely unhurried. It felt less like a transaction and more like being looked after.',    name: 'Henrik Sølvberg',     role: 'Tribeca Penthouse', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=160&q=80' },
    { quote: 'They negotiated with a calm I have rarely seen. We closed in three weeks, entirely on our terms.',                 name: 'Léa Dubois',          role: 'Monaco Villa',      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=160&q=80' },
  ] as Testimonial[],
}
