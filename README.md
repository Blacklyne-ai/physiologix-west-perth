# PhysioLogix Physiotherapy + Pilates — West Perth

Marketing website for PhysioLogix, a founder-led physiotherapy, reformer pilates, dry
needling and rehabilitation clinic in West Perth, WA. Built by Blacklyne.

Motto: **Physiotherapy at the Speed of Life.**

## Stack

- **Astro 6** (static output)
- **Tailwind CSS v4**
- **Fraunces** (display) + **Inter** (body) variable fonts via Fontsource
- `@astrojs/sitemap` for sitemap generation
- `astro-icon`

## Develop

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # static build to ./dist
npm run preview  # preview the build
npx astro check  # type-check
```

## Deploy

Cloudflare Pages — framework preset **Astro**, build command `npm run build`, output
directory **`dist`**. `public/_redirects` maps the old Wix URLs to the new clean URLs.

## Structure

- `src/data/site.ts` — single source of truth (services, conditions, team, reviews,
  hours, FAQs, stats). Edit content here.
- `src/components/` — Header, Footer, SEO + schema, PageHero, CTABand, ReviewCard,
  AudiencePage, ServiceIcon (custom SVGs), cookie banner, floating CTAs, etc.
- `src/pages/` — ~38 routes. Services and conditions are generated from data via
  `[slug].astro` dynamic routes.
- `src/styles/global.css` — design tokens (deep forest / warm ivory / electric sage)
  and motion utilities.
- `public/photos/` — imagery harvested from the existing site (see PLACEHOLDERS).

## Compliance

- Australian English, $AUD, +61, `en-AU`, Australia/Perth.
- AHPRA advertising compliance: no outcome guarantees, no "specialist" without
  registration, no comparative claims, testimonials carry an "individual results vary"
  disclaimer.
- Australian Privacy Principles (Privacy Act 1988) — privacy policy + cookie banner.
- Acknowledgement of Country (Whadjuk Noongar).

## Outstanding placeholders

See the build hand-off notes. Key items: professional email, confirmed hours, ABN,
team confirmation (Mohangi Bhatt), NDIS/DVA registration status, pricing, parking,
AHPRA registration number, contact-form endpoint.
