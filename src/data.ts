export const PROPERTIES = [
  { id: 1, image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=900&q=80', price: '$4.2M', title: 'Cliffside Modern Villa',     location: 'Belvédère, Monaco',    beds: 5, baths: 4, area: '4,200 sqft', badge: 'Featured', cat: 'villas' },
  { id: 2, image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=900&q=80', price: '$9.1M', title: 'Skyline Penthouse',         location: 'Tribeca, New York',    beds: 3, baths: 4, area: '3,600 sqft', badge: 'New',      cat: 'apartments' },
  { id: 3, image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=900&q=80', price: '$3.4M', title: 'Coastal Minimal Retreat',  location: 'Malibu, California',   beds: 3, baths: 3, area: '2,800 sqft',               cat: 'luxury' },
  { id: 4, image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=80', price: '$6.8M', title: 'Glasshouse Pavilion',      location: 'Hampstead, London',    beds: 4, baths: 5, area: '5,100 sqft',               cat: 'luxury' },
  { id: 5, image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=900&q=80', price: '$2.9M', title: 'Desert Courtyard House',   location: 'Scottsdale, Arizona',  beds: 4, baths: 3, area: '3,900 sqft',               cat: 'villas' },
  { id: 6, image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=900&q=80', price: '$7.5M', title: 'Lakeside Terrace Estate',  location: 'Lake Como, Italy',     beds: 6, baths: 6, area: '6,400 sqft', badge: 'Featured', cat: 'villas' },
]

export const CATEGORIES = [
  { key: 'all',        label: 'All',             icon: 'layout-grid', count: 140 },
  { key: 'apartments', label: 'Apartments',       icon: 'building-2',  count: 48  },
  { key: 'villas',     label: 'Villas',           icon: 'home',        count: 22  },
  { key: 'luxury',     label: 'Luxury Homes',     icon: 'gem',         count: 31  },
  { key: 'commercial', label: 'Commercial',        icon: 'briefcase',   count: 25  },
  { key: 'new',        label: 'New Developments', icon: 'sparkles',    count: 14  },
]

export const FEATURES = [
  { icon: 'compass',      title: 'Market Expertise',     body: "Two decades advising on the world's most discerning addresses, district by district." },
  { icon: 'badge-check',  title: 'Verified Listings',    body: 'Every residence is inspected and authenticated before it reaches your shortlist.' },
  { icon: 'hand-heart',   title: 'Personalised Service', body: 'One dedicated advisor, available privately, from first viewing to final signature.' },
  { icon: 'zap',          title: 'Fast Transactions',    body: 'In-house legal and finance partners close with discretion and remarkable speed.' },
]

export const STATS = [
  { value: 2400, suffix: '+', label: 'Properties sold' },
  { value: 318,               label: 'Active listings' },
  { value: 9600, suffix: '+', label: 'Happy clients' },
  { value: 18,                label: 'Years of expertise' },
]

export const TESTIMONIALS = [
  { quote: 'DOMUS understood the life we wanted before we could describe it. The home they found is, quite simply, perfect.', name: 'Amara & James Vance', role: 'Lake Como Estate',   avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=160&q=80' },
  { quote: 'Discreet, precise, and genuinely unhurried. It felt less like a transaction and more like being looked after.',    name: 'Henrik Sølvberg',   role: 'Tribeca Penthouse', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=160&q=80' },
  { quote: 'They negotiated with a calm I have rarely seen. We closed in three weeks, entirely on our terms.',                 name: 'Léa Dubois',        role: 'Monaco Villa',      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=160&q=80' },
]

export const LOCATIONS = [
  { name: 'Monaco',     count: 38, avg: '$6.4M' },
  { name: 'London',     count: 64, avg: '$4.1M' },
  { name: 'New York',   count: 52, avg: '$5.8M' },
  { name: 'Lake Como',  count: 21, avg: '$7.2M' },
  { name: 'Malibu',     count: 29, avg: '$3.9M' },
  { name: 'Scottsdale', count: 18, avg: '$2.7M' },
]

export const RENTALS = [
  { id: 1, image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=900&q=80', price: '$14,500/mo', title: 'Park-View Atelier',    location: 'Notting Hill, London',  beds: 3, baths: 2, area: '2,100 sqft', badge: 'Furnished', cat: 'apartments' },
  { id: 2, image: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=900&q=80', price: '$9,800/mo',  title: 'Garden Maisonette',   location: 'Le Marais, Paris',      beds: 2, baths: 2, area: '1,650 sqft',                cat: 'apartments' },
  { id: 3, image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=900&q=80', price: '$22,000/mo', title: 'Harbour Penthouse',   location: 'Sé, Lisbon',            beds: 3, baths: 3, area: '2,900 sqft', badge: 'Furnished', cat: 'luxury' },
  { id: 4, image: 'https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=900&q=80', price: '$7,200/mo',  title: 'Courtyard Loft',      location: 'Mitte, Berlin',         beds: 1, baths: 1, area: '1,200 sqft',                cat: 'apartments' },
  { id: 5, image: 'https://images.unsplash.com/photo-1600210492493-0946911123ea?auto=format&fit=crop&w=900&q=80', price: '$28,500/mo', title: 'Cliff House Villa',   location: 'Èze, French Riviera',   beds: 5, baths: 4, area: '4,800 sqft', badge: 'Seasonal',  cat: 'villas' },
  { id: 6, image: 'https://images.unsplash.com/photo-1567496898669-ee935f5f647a?auto=format&fit=crop&w=900&q=80', price: '$11,400/mo', title: 'Skylight Residence',  location: 'SoHo, New York',        beds: 2, baths: 2, area: '1,900 sqft',                cat: 'apartments' },
]

export const DEVELOPMENTS = [
  { id: 1, image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1100&q=80', name: 'The Meridian Collection', location: 'Belgravia, London',           status: 'Now selling',  completion: 'Q3 2026', from: '$3.2M', units: 24, blurb: "Eighteen lateral apartments and six penthouses above a private members' garden." },
  { id: 2, image: 'https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&w=1100&q=80', name: 'Aqua Verde Residences',  location: 'Costa Smeralda, Sardinia',    status: 'Final phase',  completion: 'Q1 2027', from: '$5.8M', units: 12, blurb: 'Terraced sea-villas carved into the hillside, each with infinity pool and olive terrace.' },
  { id: 3, image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1100&q=80', name: 'Hudson Stone Tower',     location: 'Hudson Yards, New York',      status: 'Coming soon',  completion: 'Q4 2027', from: '$4.1M', units: 60, blurb: 'A limestone-clad tower of light-filled residences with a sky-level wellness floor.' },
]

export const ADVISORS = [
  { name: 'Amara Vance',    role: 'Founding Partner',          avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=240&q=80' },
  { name: 'Henrik Sølvberg',role: 'Head of New Developments',  avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=240&q=80' },
  { name: 'Léa Dubois',     role: 'Private Client Advisor',    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=240&q=80' },
  { name: 'Marcus Okonkwo', role: 'Director of Lettings',      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=240&q=80' },
]
