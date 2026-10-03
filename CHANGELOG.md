# Changelog

## [2026-10-03] — Comprehensive domain-sales optimization

### I. Technical foundation
- `astro.config.mjs`: enabled `compressHTML`, viewport `prefetch`, esbuild minify for <2s loads.
- `src/layouts/BaseLayout.astro`: preconnect/dns-prefetch, hero-image preload
  (`fetchpriority=high`), deferred Font-Awesome CSS, `theme-color`, `color-scheme`.
- `src/worker.ts` (Cloudflare Workers, free plan): www→apex 301 + security
  headers on HTML (HSTS, nosniff, DENY framing, strict Referrer/Permissions
  policy, tight CSP allowing mailto:, Cloudflare Images, fonts, FA CDN).
- `public/_headers`: long-cache immutable assets, 1h sitemap/robots caching,
  robots-tag hardening.
- Verified: `robots.txt` (Allow + sitemap), `sitemap-index.xml` generated,
  canonical normalization, Product/Organization/WebSite/WebPage schema intact.

### II. SEO
- Title format: `secureaiframeworks.help | Premium Domain for Sale | Secure AI Frameworks`.
- Meta description now includes price ($11,997), availability, escrow CTA.
- Added `keywords`, OG image alt, `priceValidUntil`/`itemCondition` in Offer schema.
- New `FAQPage` + `BreadcrumbList` structured data; new `#faq` section targets
  long-tail ("premium domain names", "investment domains", "buy help domain").
- Internal linking nav: desktop/mobile nav + pricing + FAQ cross-links.

### III. CRO
- Hero above-the-fold: price ($11,997) + Buy Now / Make Offer / Contact Agent.
- Trust signals: Escrow.com, SSL-secured, instant transfer/clean title, 24h response.
- Urgency: "1 of 1 exclusive asset" badge + deterministic weekly viewer counter.
- Social proof: new `#proof` section (escrow experience + market context).
- CTAs instrumented with `data-cta` hooks for analytics.
- Exit-intent modal (email capture / flexible terms, once per session) + sticky
  mobile buy bar. Both serverless-safe, no backend required.

### IV. Mobile
- Viewport + 16px base (no-zoom), `min-h-[48px]` tap targets on all CTAs/inputs,
  `aria-expanded` menu toggle, focus-visible rings, `prefers-reduced-motion`
  support, overflow-x-hidden retained. No horizontal scroll.

### V. Authority building (on-page foundation)
- FAQ + market-context content ready for guest-post/blog expansion; schema
  supports rich results. Off-page outreach (DA 40+ backlinks, digital PR)
  remains an ongoing process outside this deploy.

### VI. Design
- Kept clean minimal dark aesthetic; added hover/fade transitions reuse,
  exclusive-asset badge, conversion bar/modal. Light-mode toggle intentionally
  deferred (dark brand system; `color-scheme: dark` declared).

### VII. Validation
- `npm run build` clean; 23/23 QA checks pass (title, H1/H2, canonical,
  schema, CTAs, faq/proof sections, tap targets, robots, sitemap);
  `wrangler deploy --dry-run` clean (104KB dist, 51.7KB HTML).
- Post-deploy: monitor 48h, then resubmit sitemap in Google Search Console.
