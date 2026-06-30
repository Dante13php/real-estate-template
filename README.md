# DOMUS — Luxury Real Estate Website Template

*A WebsiteHandcraft template.*

A clean, modern, fully responsive website template for real estate agencies, brokers
and property developers. Built so that **anyone can launch it and edit the text — no
coding experience required.**

- ✨ 4 ready-made pages: **Home**, **Rent**, **New Developments**, **About**
- 📝 All text lives in one simple folder (`src/content/`) — edit words between quotes, save, done
- 📱 Looks great on phones, tablets and desktops
- ⚡ Fast, lightweight, and ready to deploy to Vercel, Netlify or Hostinger

## Download

**[⬇ Download domus-template.zip](https://github.com/Dante13php/real-estate-template/releases/download/v1.0.0/domus-template.zip)**

Unzip the file, then follow the [installation instructions](#2-installation-run-it-on-your-computer) below.

---

## Table of contents

1. [What you need before you start](#1-what-you-need-before-you-start)
2. [Installation (run it on your computer)](#2-installation-run-it-on-your-computer)
3. [Folder structure (what is what)](#3-folder-structure-what-is-what)
4. [How to edit the text](#4-how-to-edit-the-text)
5. [How to change images](#5-how-to-change-images)
6. [How to add or remove a property](#6-how-to-add-or-remove-a-property)
7. [How to change colors and fonts](#7-how-to-change-colors-and-fonts)
8. [How to change the logo and favicon](#8-how-to-change-the-logo-and-favicon)
9. [Deploy to Vercel](#9-deploy-to-vercel)
10. [Deploy to Netlify](#10-deploy-to-netlify)
11. [Deploy to Hostinger](#11-deploy-to-hostinger)
12. [Frequently asked questions](#12-frequently-asked-questions)

---

## 1. What you need before you start

You only need **one free program**: **Node.js**.

1. Go to <https://nodejs.org>
2. Download the **LTS** version and install it (just keep clicking *Next*).
3. That's it. Node.js includes `npm`, which the steps below use.

> You do **not** need to know JavaScript or React to edit text, images, prices or colors.

---

## 2. Installation (run it on your computer)

Open a terminal **inside this project folder** and run the commands below.

> **How to open a terminal in the folder:** on Windows, open the folder, then type `cmd`
> in the address bar and press Enter. On Mac, right-click the folder → *New Terminal at Folder*.

**Step 1 — install the template (only the first time):**

```bash
npm install
```

**Step 2 — start the live preview:**

```bash
npm run dev
```

You will see a line like `Local: http://localhost:5173/`.
Open that address in your browser. **Leave this running** — every time you save a file,
the website updates instantly.

**Step 3 — when you are finished, build the final website:**

```bash
npm run build
```

This creates a `dist/` folder containing the finished website, ready to upload (see the
deployment sections below).

**Optional — check you didn't break anything:**

```bash
npm run typecheck
```

If it prints nothing, everything is fine.

---

## 3. Folder structure (what is what)

```
domus/
├─ index.html              ← page title & Google description (SEO). Edit the <title> here.
├─ package.json            ← project settings (you don't need to touch this)
│
├─ public/                 ← files served as-is
│  └─ assets/              ← logo & favicon images
│
└─ src/                    ← the website itself
   │
   ├─ content/   ⭐ EDIT YOUR TEXT HERE — this is the only folder most people need
   │  ├─ site.ts            ← brand name, menu, footer, the call-to-action band
   │  ├─ home.ts            ← the Home page (hero, categories, properties, locations)
   │  ├─ rent.ts            ← the Rent page (hero, steps, rental listings)
   │  ├─ developments.ts    ← the New Developments page
   │  ├─ about.ts           ← the About page (story, team)
   │  └─ types.ts           ← (don't edit) describes the content so mistakes are caught
   │
   ├─ styles/   🎨 COLORS & FONTS
   │  ├─ colors.css         ← every color used on the site
   │  ├─ fonts.css          ← which Google Fonts are loaded
   │  ├─ typography.css     ← text sizes
   │  └─ spacing.css        ← spacing, shadows, rounded corners
   │
   ├─ pages/                ← which sections each page shows (advanced)
   ├─ sections/             ← the building blocks of each page (advanced)
   ├─ components/           ← small reusable pieces: buttons, cards… (advanced)
   └─ ...                   ← App / main files that wire everything together
```

**The golden rule:** to change words, prices, images and listings, you only ever open the
**`src/content/`** folder. Everything else is the machinery that makes it look good.

---

## 4. How to edit the text

All text is in **`src/content/`**. Each file matches a page and is full of plain-English
comments telling you what each line does.

Open a file (for example `src/content/home.ts`) in any text editor — even Notepad works,
but a free editor like [VS Code](https://code.visualstudio.com) is nicer.

You will see lines like this:

```ts
title: 'Find extraordinary',
subtitle: 'A curated collection of the world's most considered residences …',
```

**To change the text, only edit what is between the quotes:**

```ts
title: 'Discover your dream home',
subtitle: 'Hand-picked properties in the most sought-after neighbourhoods.',
```

Save the file. If `npm run dev` is running, the website updates immediately.

### The only 4 rules

1. **Keep the quotes.** Change `'Old text'` into `'New text'`, never delete the `'` marks.
2. **Keep the commas** at the end of lines.
3. **Don't rename the words before the colon** (`title:`, `subtitle:` …) — those are labels
   the code looks for.
4. **If your text contains an apostrophe** (like *world's*), the file already handles it.
   If you ever get an error, wrap the text in double quotes instead:
   `title: "Monaco's finest homes",`

### Which file holds what?

| You want to change…                                  | Open this file                  |
|------------------------------------------------------|---------------------------------|
| Company name, logo dot color, footer, top menu       | `src/content/site.ts`           |
| The big call-to-action banner (on most pages)        | `src/content/site.ts`           |
| "Why us", the stats numbers, client testimonials     | `src/content/site.ts`           |
| Home page headline, categories, properties, cities   | `src/content/home.ts`           |
| Rent page text + rental listings                     | `src/content/rent.ts`           |
| New developments projects + text                     | `src/content/developments.ts`   |
| About page story + team members                      | `src/content/about.ts`          |
| Browser tab title & Google description (SEO)         | `index.html`                    |

> Tip: "Why us", the stats and the testimonials appear on **both** the Home and About
> pages, so they live in `site.ts` and you only edit them once.

---

## 5. How to change images

Every image is just a web link (a `image:` line). You have two easy options.

### Option A — use a free stock photo (fastest)

1. Go to <https://unsplash.com> or <https://pexels.com> and find a photo.
2. Right-click the image → **Copy image address**.
3. Paste it between the quotes on the `image:` line:

```ts
image: 'https://images.unsplash.com/photo-12345...',
```

### Option B — use your own photos

1. Put your photo files into `public/assets/` (e.g. `public/assets/villa-1.jpg`).
2. Reference them with a leading slash:

```ts
image: '/assets/villa-1.jpg',
```

> For best speed, save photos as **JPG** and keep them under ~500 KB each.

---

## 6. How to add or remove a property

Property listings are lists in the content files:

- Homes **for sale** → `featuredProperties` in `src/content/home.ts`
- Homes **to rent** → `rentals` in `src/content/rent.ts`
- **New developments** → `developments` in `src/content/developments.ts`

**To add one:** copy an existing entry, paste it right below, and change the values.
Give it a new `id` number (any number not already used).

```ts
{ id: 7, image: 'https://…', price: '$5.5M', title: 'Hilltop Glass House',
  location: 'Aspen, Colorado', beds: 4, baths: 4, area: '3,800 sqft',
  badge: 'New', cat: 'luxury' },
```

- `badge` is the little label on the photo — **delete the whole `badge: '…',` part to hide it.**
- `cat` decides which filter button shows it on the Home page. It must match one of the
  category `key` values in `home.ts` (`apartments`, `villas`, `luxury`, …).

**To remove one:** delete its whole `{ … }` line (including the comma at the end).

---

## 7. How to change colors and fonts

### Colors

Open **`src/styles/colors.css`**. Colors are defined at the top as HEX codes:

```css
--clay-500: #B97A4A;   /* the main accent / "brand" color */
--forest-600: #28372F; /* the deep green sections */
```

Change the HEX value (e.g. `#B97A4A` → `#1E6F5C`) and save. Use a tool like
<https://htmlcolorcodes.com> to pick colors. The **accent** color (`--clay-500`) is the one
used for buttons and highlights.

> The small colored dot in the logo is set separately in `src/content/site.ts`
> (`brand.accentColor`) so you can match it to your new accent color.

### Fonts

Open **`src/styles/fonts.css`**. It loads two Google Fonts (a serif for headings, a
sans-serif for body text). To swap a font:

1. Pick fonts at <https://fonts.google.com> and copy the `@import` link Google gives you.
2. Replace the link at the top of `fonts.css`.
3. Update the font names in `src/styles/typography.css` (the `--font-*` lines).

---

## 8. How to change the logo and favicon

- **The text logo** ("DOMUS") is set in `src/content/site.ts` → `brand.name`. Just change
  the word.
- **The favicon** (the little icon in the browser tab) is `public/assets/monogram.svg`.
  Replace that file with your own (keep the same name), or point to a new one in
  `index.html` on the `<link rel="icon" …>` line.

---

## 9. Deploy to Vercel

Vercel is free and the easiest option. The project already includes a `vercel.json` file.

**Easiest way (drag & drop):**

1. Run `npm run build` to create the `dist/` folder.
2. Go to <https://vercel.com>, sign up (free), and click **Add New → Project**.
3. Choose **Deploy** and, when asked, upload/point to the project.

**Recommended way (connect your GitHub):**

1. Put this project on [GitHub](https://github.com) (a free account works).
2. In Vercel, click **Add New → Project** and import that repository.
3. Vercel auto-detects Vite. Confirm these settings if asked:
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
4. Click **Deploy**. Your site is live in about a minute, on a free `*.vercel.app` address.

To use your own domain: Vercel → your project → **Settings → Domains → Add**.

---

## 10. Deploy to Netlify

Netlify is also free. A `netlify.toml` file is already included, so routing just works.

**Easiest way (drag & drop):**

1. Run `npm run build`.
2. Go to <https://app.netlify.com/drop>.
3. Drag the **`dist`** folder onto the page. Done — you get a live link instantly.

**Recommended way (connect your GitHub):**

1. Push this project to [GitHub](https://github.com).
2. In Netlify: **Add new site → Import an existing project** → pick the repository.
3. Confirm the settings (already in `netlify.toml`):
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
4. Click **Deploy**.

To use your own domain: Netlify → **Domain settings → Add a domain**.

---

## 11. Deploy to Hostinger

Hostinger uses traditional web hosting (cPanel / File Manager). You upload the finished
files yourself. The project includes a `.htaccess` file so page links keep working.

1. On your computer, run:

   ```bash
   npm run build
   ```

   This creates a **`dist/`** folder.

2. Log in to Hostinger → **hPanel** → **File Manager**.

3. Open the **`public_html`** folder of your website. (If there are old files in there you
   don't need, delete them first.)

4. Open the **`dist`** folder on your computer and upload **everything inside it** into
   `public_html`. The easiest way is to zip the *contents* of `dist`, upload the zip, then
   use File Manager's **Extract** button.

   > Important: upload the *contents* of `dist` (the `index.html`, the `assets` folder, the
   > `.htaccess` file…), **not** the `dist` folder itself.

5. Make sure the hidden **`.htaccess`** file made it in (in File Manager, enable
   *Show hidden files* if needed). It lets `/rent`, `/about`, etc. work when visitors refresh.

6. Visit your domain — the site is live. 🎉

> Whenever you change content later, run `npm run build` again and re-upload the new
> `dist` contents.

---

## 12. Frequently asked questions

**Q: I edited a file and the site broke / shows an error.**
Undo your last change (Ctrl/Cmd + Z) and save. The usual causes are a missing quote `'`
or a missing comma `,`. Run `npm run typecheck` to see exactly which line is the problem.

**Q: Do I have to keep `npm run dev` running?**
Only while you are editing and want a live preview. For the published site, what matters is
running `npm run build` and uploading the `dist` folder.

**Q: How do I add a brand-new page?**
That part needs a little React knowledge: copy a file in `src/pages/`, add it to the list
in `src/App.tsx`, and add a link in `src/content/site.ts`. If you're not comfortable, a
developer can do it in a few minutes.

**Q: The demo photos — can I use them on my live site?**
The placeholder photos come from Unsplash (free to use), but for a real business you should
replace them with your own property photos. See [section 5](#5-how-to-change-images).

**Q: Is this mobile-friendly?**
Yes. The layout automatically adapts to phones, tablets and desktops.

---

Built with **React + Vite + TypeScript**. No database, no backend — just fast static files.
Happy selling! 🏡

---

© 2026 **WebsiteHandcraft**. See `License.txt` for usage terms.
