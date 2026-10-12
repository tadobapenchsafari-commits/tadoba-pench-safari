# SEO + AEO Audit — tadobapenchsafari.com — 12 Oct 2026

Goal: maximum leads. Evidence: GA4 exports (Jan–Oct 12 and Sep 14–Oct 11), live-site crawl, Lighthouse mobile, repo vs. live diff, SERP checks (US index).

## Headline

~1,100 pageviews in 9 months, **0 key events recorded**, site absent from SERPs for every money term checked. Technical SEO is clean (Lighthouse SEO 100, schema everywhere). The leaks are: (1) built work never deployed, (2) conversions not measured, (3) no reviews/entity, (4) no authority. Fix in that order.

## P0 — this week, near-zero effort

| # | Finding | Evidence | Fix |
|---|---|---|---|
| 1 | **10 commits unpushed; live site is stale** | `main` ahead of `origin/main` by 10. Live home still has 2 `<video>` elements (LCP 10.7 s mobile); live package pages have no inline lead form; /testimonials hub, 3 cornerstone guides, media-weight cut all local-only | `git push` → Vercel auto-deploys |
| 2 | **No GA4 key events** | `whatsapp_click`, `phone_click`, `email_click`, `generate_lead`, `plan_form_whatsapp` all fire in code; GA shows Key events = 0 | GA4 Admin → Events → toggle "Mark as key event" on all five |
| 3 | **Old /properties URLs 404** | 10 × 404 views YTD; `/properties`, `/properties/<slug>` return 404 with no redirect; GA still sees visits to "7 Tigers Resort", "A1 Tiger Resort", "All Properties" | `next.config.js` redirects: `/properties` → `/packages`, `/properties/:slug` → `/destinations/tadoba` (301) |
| 4 | **Conflicting prices across schema/AEO surfaces** | Home FAQ JSON-LD: "from ₹15,000 pp / 2 nights"; TravelAgency `priceRange` "₹19,500–₹1,10,000"; Quick Answers + llms.txt: "₹74,000/couple"; Luxury package ₹1,20,000 exceeds priceRange max | One source of truth in `data/content.ts`; derive FAQ text, priceRange, llms.txt from it |
| 5 | **Unsubstantiated trust claims** | Hero trust bar: "4.9 ★ Google rating", "4,500+ guests", "94% sighting rate". No Google Business Profile found; `testimonials.ts` empty; no AggregateRating | Either create/verify GBP and link it, or drop the rating claim. A rating claim with no reviews is a trust/manual-action risk |
| 6 | **Bing unverified** | Placeholder in `app/layout.tsx`. ChatGPT search + Copilot answer from Bing's index — this is an AEO blocker, not a nice-to-have | Verify in Bing Webmaster, submit sitemap |

## P1 — lead capture (the site gets traffic it doesn't convert)

| # | Finding | Fix |
|---|---|---|
| 7 | **WhatsApp-only capture, no server record.** Every form opens `wa.me`; the "Email instead" button is a `mailto:`. Desktop users without WhatsApp Web, and any visitor who closes the tab, are lost. Form offers US/UK/UAE/Germany — many won't use WhatsApp | Add a real POST: Vercel serverless → Resend/Formspree email + Google Sheet. Keep WhatsApp as the *second* button. Fire `generate_lead` on successful submit, not on click |
| 8 | **High-intent pages have no conversion element.** Blog template has one `/contact` text link; gate pages same. "Tadoba Safari Cost 2026" averages 78 s engagement — highest intent on the site — and offers nothing to do | Add `PlanMySafariForm` + a "Packages from ₹74,000/couple" card to the blog and gate templates (one edit each) |
| 9 | **/packages is thin.** #2 page by traffic, 273 words, zero H2s, meta description 49 chars | Intro copy, Budget/Mid/Luxury/Pench/Combo comparison table, "which tier is right for me" FAQ, inline form |
| 10 | **Budget package meta description 269 chars** (truncated in SERP) | Trim to ≤155 |
| 11 | **/destinations hub 200 words** | Same treatment as /packages |
| 12 | **Homepage H1 has no keyword**: "Walk Tadoba & Pench with those who know the forest best." | e.g. "Tadoba & Pench tiger safaris, run by people who know the forest" |

## P2 — traffic & authority (the actual ceiling)

| # | Finding | Fix |
|---|---|---|
| 13 | **Not ranking.** Absent from results for "tadoba safari package booking", "tadoba pench safari", "tadoba safari cost 2026", even for the domain name. Winners: wildtrails.in, safarilab.in (145 Google reviews), bigcatsindia.com, veenaworld, tourradar | Export GSC Performance → Queries (28 d) to find positions 8–20 and target those first. I can't see GSC |
| 14 | **Zero review signals.** Competitors show 70–145 Google reviews | GBP (item 5) + 3 real testimonials into `data/testimonials.ts` (self-activates hub, schema, footer link, sitemap) |
| 15 | **No backlink footprint found** | Listings: TripAdvisor, TourRadar, Justdial, Sulekha, IndiaMART, Nagpur tourism directories; ask partner resorts for a "book via" link; one guest post per month on Indian travel blogs |
| 16 | **Content gaps with buy intent** (the city-page pattern already works: Hyderabad/Mumbai pages get traffic) | Add: `pench-safari-from-nagpur`, `tadoba-safari-from-chennai`/`kolkata`/`ahmedabad`; "Tadoba resorts near Moharli gate" (10 properties exist in `content.ts` with no page — revive as `/stays/`); "Tadoba 2-night package"; "Tadoba family package"; "Tadoba safari for foreigners: cost & permits"; "Tadoba honeymoon package" |
| 17 | **Sitemap `lastModified: now` on every URL** — Google learns to ignore it | Real dates per entry; same for hardcoded `dateModified: '2026-06-18'` in Product/TouristAttraction schema |
| 18 | **llms.txt stale** — "all 3-nights Tadoba", omits Pench Classic and 5N Combo | Regenerate from `content.ts` |
| 19 | **Performance.** Home LCP 10.7 s mobile (video; fixed by unpushed commit). Package LCP 6.3 s: hero served at 1920 px to phones ("Properly size images" 620 KB) | Deploy; set `sizes="100vw"` and let `next/image` pick srcset; a11y `color-contrast` + `heading-order` |

## AEO scorecard

Already good: FAQPage + speakable, "At a glance" Q&A, llms.txt, TL;DRs, author byline, BreadcrumbList, Product/TouristTrip.

Gaps: inconsistent facts (item 4 — AI engines punish contradiction harder than Google does); no `sameAs` on TravelAgency (Instagram/Facebook/YouTube in footer but not in schema); no GBP entity; author has no `Person` page/`sameAs` (E-E-A-T thin); Bing unverified (item 6); zero reviews.

## Order of work

1. Push (1) → mark key events (2) → redirects (3) → price consistency (4) → Bing (6). One day.
2. Server-side lead capture (7) + form on blog/gate templates (8) + /packages rebuild (9). One week.
3. GBP + testimonials (5, 14) — needs you. Then backlinks and content gaps (15, 16) ongoing.

Re-measure after 30 days: key events per 100 sessions, GSC impressions on money terms.
