# Tadoba Pench Safari — Website

Next.js 15 + Tailwind CSS + TypeScript boilerplate for tadobapenchsafari.com

## Quick start (StackBlitz — recommended)

1. Upload the ZIP to [stackblitz.com](https://stackblitz.com) (or drag-drop the folder)
2. StackBlitz auto-installs dependencies and runs `npm run dev`
3. Website opens in the preview pane instantly

## Quick start (local)

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Quick start (GitHub + Vercel — recommended for production)

```bash
# 1. Push to GitHub
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/YOUR_USERNAME/tadoba-pench-safari.git
git push -u origin main

# 2. Import on Vercel
# Go to vercel.com → New Project → import the repo → deploy
```

Once deployed, connect your domain `tadobapenchsafari.com` in Vercel settings.

## Project structure

```
app/
├── (marketing)/        — Public pages
│   ├── destinations/   — Tadoba & Pench detail pages
│   ├── properties/     — Property listings + detail
│   ├── packages/       — Package listings + detail
│   ├── about/
│   └── contact/        — Inquiry form
├── page.tsx            — Homepage
├── layout.tsx          — Root layout with fonts + nav/footer
└── globals.css

components/marketing/   — Header, footer, WhatsApp float
data/content.ts         — All dummy content (edit this for real data)
lib/utils.ts            — Helpers (cn, formatINR)
```

## Editing content

All content lives in `/data/content.ts`. Edit destinations, properties, packages there — the site rebuilds automatically.

## Design system

Brand colors are in `tailwind.config.ts`:
- `bark` — deep forest brown, main text
- `canopy` — dark moss green, primary
- `bamboo` — sage accent
- `sunrise` — warm amber, CTAs
- `bone` — warm off-white, background
- `paper` — card surfaces
- `rust` — secondary CTA

Fonts: **Fraunces** (display) + **Inter** (body) via `next/font/google`.

## Deployment checklist

Before going live on your domain:
- [ ] Replace all `+91 99999 99999` with your real phone number
- [ ] Replace all `info@tadobapenchsafari.com` if you want a different primary email
- [ ] Replace Unsplash stock photos with your own property photos
- [ ] Update content in `data/content.ts` with real properties, packages, gates
- [ ] Add Google Analytics 4 ID in `app/layout.tsx`
- [ ] Add Meta Pixel ID
- [ ] Implement `/api/inquiry` route to send form submissions to your email
- [ ] Connect domain in Vercel settings
- [ ] Test on mobile devices (iPhone, Android)
- [ ] Run Lighthouse audit (target 90+)
- [ ] Submit sitemap to Google Search Console

## Next features to add

1. `/api/inquiry` route + email delivery (Resend)
2. Blog system (markdown-based, eventually move to CMS)
3. Safari gates dedicated pages
4. Gallery page with lightbox
5. Reviews/testimonials
6. B2B agent portal (auth-protected)
7. Booking engine with Razorpay
8. Admin dashboard (Prisma + PostgreSQL)

See `tadoba_pench_safari_spec.md` for the full roadmap.
