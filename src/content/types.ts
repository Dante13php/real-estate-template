// =============================================================================
//  CONTENT TYPES  —  ⚠️  You do NOT need to edit this file.
// -----------------------------------------------------------------------------
//  This file only *describes* the shape of the content (which fields exist and
//  whether they are required). Its only job is to let your code editor gently
//  warn you if you accidentally delete a required field while editing text.
//
//  To change the words on the website, edit the other files in this folder:
//    site.ts, home.ts, rent.ts, developments.ts, about.ts
// =============================================================================

/** A property shown in a card (used for "for sale" and "to rent" listings). */
export interface Listing {
  id: number
  image: string
  price: string
  title: string
  location: string
  beds?: number
  baths?: number
  area?: string
  badge?: string
  /** Category key — must match one of the keys in home.ts → categories.items */
  cat?: string
}

/** A pill/tab in the "Browse by category" filter on the Home page. */
export interface Category {
  /** Internal id — must match the `cat` field on listings. Use "all" to show everything. */
  key: string
  label: string
  /** Icon name. Allowed: layout-grid, building-2, home, gem, briefcase, sparkles */
  icon?: string
  count?: number
}

/** One of the "Why us" benefit cards. */
export interface Feature {
  /** Icon name. Allowed: compass, badge-check, hand-heart, zap */
  icon: string
  title: string
  body: string
}

/** A big animated number in the dark stats band. */
export interface Stat {
  value: number
  /** Optional text after the number, e.g. "+" */
  suffix?: string
  label: string
}

/** A client quote in the testimonials slider. */
export interface Testimonial {
  quote: string
  name: string
  role: string
  avatar: string
}

/** A city tile in the "Featured locations" grid. */
export interface Location {
  name: string
  count: number
  avg: string
}

/** A "how it works" numbered step on the Rent page. */
export interface Step {
  /** Icon name. Allowed: search, key-round, file-signature */
  icon: string
  title: string
  body: string
}

/** A new-development project on the New Developments page. */
export interface Development {
  id: number
  image: string
  name: string
  location: string
  status: string
  completion: string
  from: string
  units: number
  blurb: string
}

/** A team member on the About page. */
export interface Advisor {
  name: string
  role: string
  avatar: string
}

/** The large image header shown at the top of inner pages (Rent / Developments / About). */
export interface PageHero {
  eyebrow?: string
  title: string
  /** Optional second part of the title, shown in italic accent color. */
  titleEm?: string
  subtitle?: string
  image: string
  /** Optional primary button label. Leave out to hide the button. */
  primary?: string
  /** Optional secondary button label. Leave out to hide the button. */
  secondary?: string
}
