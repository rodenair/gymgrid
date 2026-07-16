# GYM GRID

A single-page marketing site for **GYM GRID**, a fictional performance-apparel brand built around an "engineered discipline" aesthetic — dark, editorial, grid-driven. Built with Next.js (App Router) and TypeScript.

## Stack

- [Next.js 16](https://nextjs.org) (App Router, Turbopack)
- React 19 + TypeScript
- CSS Modules for layout/responsive rules, inline styles for one-off design values
- `next/font` (Oswald + Inter, self-hosted via Google Fonts)
- `next/image` for optimized, responsive imagery

No backend, CMS, or database — content is static, and the email signup form validates and confirms client-side only.

## Sections

| Component | Purpose |
|---|---|
| `Nav` | Sticky header with a slide-down mobile menu |
| `Hero` | Full-bleed hero image with gradient overlay and CTAs |
| `Philosophy` | Brand statement paired with the monogram mark |
| `Collection` | Product grid for the seasonal drop |
| `Join` | Email capture with inline validation and success state |
| `SocialStrip` | Instagram-style placeholder grid |
| `Footer` | Sitemap links and legal footer |

Each section is a self-contained component with its own CSS module for breakpoints, so the page composes cleanly in `src/app/page.tsx`.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it.

Other scripts:

```bash
npm run build   # production build
npm run start   # serve the production build
npm run lint    # eslint
```

## Project Structure

```
src/
  app/          # root layout, page, global styles
  components/   # one component + CSS module per section
  lib/          # shared fonts and theme tokens
public/assets/  # hero/product imagery and logo marks
```

## Notes

- Fully responsive, with dedicated breakpoints per section (see each `*.module.css`) down to small mobile widths.
- The nav and join form are the only client components (`"use client"`); everything else renders statically.
