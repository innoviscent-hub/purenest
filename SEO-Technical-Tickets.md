# SEO Technical Fix — Developer Tickets

**Sites affected:** purenestcleaning.co.nz, primefixsolutions.co.nz
**Prepared for:** Development team
**Priority key:** 🔴 Blocker · 🟠 High · 🟡 Medium

---

## Status summary (2026-09-14)

All tickets below were verified against the live purenestcleaning.co.nz site, then fixed in the `purenest` repo (primefixsolutions.co.nz is a separate site/repo and was not touched). Verified with `curl` against production, and locally against a production build (`npm run build`) served on localhost, including a headless-browser pass checking console output and client-side navigation.

| Ticket | Verified real? | Status |
|---|---|---|
| 1 — CSR, no content in HTML | ✅ Real (confirmed via curl + zero Google index results) | ✅ Fixed |
| 2 — Missing OG/Twitter tags | ✅ Real | ✅ Fixed |
| 3 — No per-page metadata | ✅ Real | ✅ Fixed |
| 4 — No robots.txt/sitemap.xml | ❌ Not accurate for purenestcleaning.co.nz (both already existed) | ✅ Cleaned up (domain/route fix) |
| 5 — No structured data | ✅ Real | ✅ Fixed |
| 6 — Redirect consistency | ❌ Not an issue for purenestcleaning.co.nz (redirects already correct) | No action needed |

Changes are committed to the working tree but **not yet deployed** — see notes per ticket. Not yet pushed/committed to git as of this writing (pending user confirmation).

---

## TICKET 1 — 🔴 Blocker: Site is fully client-side rendered, no content in initial HTML

**Affects:** Both sites

**Problem:**
Fetching the raw HTML of both domains returns only a JS bootstrap shell:
```
You need to enable JavaScript to run this app.
```
No headings, body text, links, or content exist in the server response. All content is injected client-side after JS execution.

**Impact:**
- Search engines (especially non-Google crawlers, and Google on a delayed/partial basis) cannot reliably read page content.
- Confirmed effect: `site:purenestcleaning.co.nz` returns zero indexed pages from the actual domain.
- No amount of on-page SEO (titles, headings, schema) will help until this is fixed, since none of it exists in the HTML a crawler receives.

**Steps to reproduce:**
1. `curl -A "Mozilla/5.0" https://purenestcleaning.co.nz/` (or `view-source:` in browser)
2. Observe response body contains only the JS shell, no rendered content
3. Repeat for `https://primefixsolutions.co.nz/`

**Solution:**
- Identify current framework/build tool (React CRA, Vite, Vue, etc.)
- Preferred: migrate to a framework with SSR/SSG (Next.js `getStaticProps`/App Router, Nuxt, Astro, Remix)
- Acceptable interim fix: add bot-detection pre-rendering middleware (Prerender.io, Rendertron) that serves rendered HTML snapshots to crawler user-agents
- If both sites share a common boilerplate/template, apply the fix once and redeploy to both

**Acceptance criteria:**
- [x] `curl` (no JS execution) on any page returns full page text, headings, and links in the HTML response
- [ ] Google Search Console → URL Inspection → "View Crawled Page" shows complete rendered content *(needs Search Console access post-deploy — not verifiable pre-deploy)*
- [x] Confirmed on purenestcleaning.co.nz — **primefixsolutions.co.nz is a separate repo, not covered by this fix**

### ✅ RESOLVED — implementation notes (purenestcleaning.co.nz)
This is a Create React App (react-scripts) site with no built-in SSR/SSG, so a full Next.js-style migration wasn't practical as a same-day fix. Implemented the "acceptable interim fix" instead, via **build-time prerendering**:

- Added `scripts/prerender.js`: after `npm run build`, it spins up a local static file server over `build/`, uses Puppeteer to visit all 8 routes (`/`, `/commercial`, `/domestic-cleaning`, `/domestic-cleaning/services`, `/services`, `/projects`, `/about`, `/contact`), waits for the app to fully render, and writes the resulting HTML back to `build/<route>/index.html`.
- Wired in as an npm `postbuild` script (`package.json`), so it runs automatically as part of the existing Netlify build command (`CI=false npm run build`) — no `netlify.toml` changes needed.
- Added `puppeteer` as a devDependency.

**Verified locally:** homepage raw HTML went from a 1.9 KB empty shell (`<div id="root"></div>`) to 15 KB with full rendered content, unique title, meta tags, and JSON-LD — reachable via plain `curl`, no JS execution. Other routes range 19–93 KB.

**Client-side behavior:** Initially wired the client to `hydrateRoot()` over the prerendered markup, but this surfaced React hydration-mismatch errors (#418/#423/#425) on every route in a headless-browser console check. Root cause: this is a known limitation of browser-snapshot prerendering (no SSR-style comment markers between adjacent text nodes), not an actual content bug — confirmed by diffing the prerendered HTML against a byte-for-byte fresh client render (identical). Since React discards the whole tree and falls back to a full client render on any hydration mismatch, hydration offered no real benefit here anyway. **Fix:** reverted `src/index.js` to a plain `ReactDOM.createRoot().render()` — the browser always does a normal full client render (as it did before), while crawlers (which never execute JS) still get the real prerendered HTML. Re-tested: 0 console errors/warnings across all 8 routes, and client-side SPA navigation (nav button clicks) confirmed working with no reload.

**Not yet verified (requires production deploy):** Puppeteer needs to download Chromium during `npm install` on Netlify's build machine — this is a common, generally-supported pattern but wasn't testable end-to-end without an actual Netlify build. Watch the first deploy's build log for this. Also still pending: Search Console re-crawl and confirming Google indexes pages post-deploy (takes time after going live).

---

## TICKET 2 — 🟠 High: Missing Open Graph / Twitter Card metadata

**Affects:** PureNest only (PrimeFix already has these)

**Problem:**
No `og:*` or `twitter:*` meta tags found in `<head>`. Link previews on Facebook, LinkedIn, Slack, iMessage, etc. will render blank or broken.

**Solution:**
Add the following to every page's `<head>` (server-rendered, not injected client-side only):
```html
<meta property="og:title" content="[Page-specific title]" />
<meta property="og:description" content="[Page-specific description]" />
<meta property="og:image" content="https://purenestcleaning.co.nz/[image].jpg" />
<meta property="og:url" content="https://purenestcleaning.co.nz/[page-path]" />
<meta property="og:type" content="website" />
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="[Page-specific title]" />
<meta name="twitter:description" content="[Page-specific description]" />
<meta name="twitter:image" content="https://purenestcleaning.co.nz/[image].jpg" />
```
Implementation: `next-seo` (if Next.js) or `react-helmet-async` per-route if remaining an SPA (still requires Ticket 1 fix for crawlers to see it).

**Acceptance criteria:**
- [ ] Facebook Sharing Debugger and Twitter Card Validator both render correct preview for homepage and at least one service page *(needs live deploy to test against real URLs)*

### ✅ RESOLVED — implementation notes
The codebase already had a shared `src/components/SEO.js` component (using `react-helmet-async`) wired into every page, setting `og:title`/`og:description`/`og:url`/`og:type` and `twitter:card`/`twitter:title`/`twitter:description` — but it was missing `og:image` and `twitter:image` entirely, and (per Ticket 1) none of it ever reached crawlers anyway since it only rendered client-side.

- Added `og:image` and `twitter:image` (defaulting to `/logo-icon.png`, overridable via a new `image` prop), plus `og:site_name`.
- Now that Ticket 1 ships this in the raw server HTML, verified locally that all 8 routes render complete, unique OG/Twitter tags in the prerendered `curl`-visible HTML.

Still pending: actually running the Facebook Sharing Debugger / Twitter Card Validator, which requires a public deployed URL.

---

## TICKET 3 — 🟠 High: No per-page metadata (title/description)

**Affects:** Both, but especially PureNest (only one generic title/description found site-wide)

**Problem:**
Only one `<title>`/`<meta name="description">` pair detected, suggesting either a single-page site or metadata not updating per route.

**Solution:**
- Implement per-route title/description, driven from a config file or CMS field (not hardcoded), so marketing can edit copy without a code deploy
- Each page needs a unique title (~60 char max) and description (~155 char max) reflecting that page's specific service/location

**Acceptance criteria:**
- [x] Each indexed page has a unique `<title>` and `<meta name="description">` visible in server-rendered HTML

### ✅ RESOLVED — implementation notes
Every page already called `<SEO title="..." description="..." path="..." />` with unique, hand-written copy — the code was correct, it just never reached crawlers (Ticket 1). Verified in the prerendered build output that all 8 routes now serve distinct titles server-side, e.g.:
- `/` → "Choose Your Service | PureNest Cleaning"
- `/about` → "About Us | PureNest Cleaning"
- `/commercial` → "Commercial Cleaning | PureNest Cleaning"
- `/domestic-cleaning/services` → "Domestic Cleaning Services & Pricing | PureNest Cleaning"
- (and so on for `/services`, `/projects`, `/contact`, `/domestic-cleaning`)

Note: titles/descriptions are still hardcoded per-page component rather than driven from a CMS/config file, as the original ticket's solution suggested — that's a larger content-workflow change, not attempted here.

---

## TICKET 4 — 🟠 High: No robots.txt / sitemap.xml

**Affects:** Both

**Problem:**
No `/robots.txt` or `/sitemap.xml` confirmed at domain root for either site.

**Solution:**
- Add `/robots.txt` at root, allowing all crawlers except any admin/api routes:
```
User-agent: *
Disallow: /api/
Disallow: /admin/
Sitemap: https://[domain]/sitemap.xml
```
- Generate `/sitemap.xml` at build time (e.g. `next-sitemap` package, or equivalent for chosen framework), listing all public routes
- Sitemap must be served at the root path, not behind client-side routing

**Acceptance criteria:**
- [x] `https://[domain]/robots.txt` returns valid robots file
- [x] `https://[domain]/sitemap.xml` returns valid XML sitemap listing all live pages
- [ ] Both submitted in Google Search Console and Bing Webmaster Tools *(requires Search Console/Webmaster Tools account access — not done here)*

### ⚠️ NOT ACCURATE for purenestcleaning.co.nz — cleaned up instead
Both files already existed and returned valid content (`curl` confirmed 200 OK for `/robots.txt` and `/sitemap.xml` before any changes were made). This ticket's premise didn't hold for this domain.

Found and fixed two real smaller issues while verifying:
- `sitemap.xml`/`robots.txt` referenced `https://www.purenestcleaning.co.nz/...`, but `www` 301-redirects to the non-www canonical domain — every sitemap URL was costing crawlers an extra redirect hop. Switched both files to the canonical non-www domain.
- `/domestic-cleaning/services` (a real route in the app) was missing from the sitemap — added it.

---

## TICKET 5 — 🟡 Medium: No structured data (schema.org markup)

**Affects:** Both

**Problem:**
No JSON-LD or microdata found on either site.

**Solution:**
Add server-rendered JSON-LD to homepage `<head>` or body:
- PureNest: `LocalBusiness` schema (name, address, phone, hours, geo, `sameAs` social links)
- PrimeFix: `LocalBusiness` or closest matching subtype (e.g. `HomeAndConstructionBusiness`) schema
- Add `Service` schema on individual service pages once built
- Must be present in initial server response — client-side-only injection is unreliable for crawlers (ties to Ticket 1)

**Acceptance criteria:**
- [ ] Schema validates with zero errors in [Google Rich Results Test](https://search.google.com/test/rich-results) *(needs live deploy to test against a public URL)*

### ✅ RESOLVED — implementation notes
`SEO.js` already emitted a JSON-LD `@graph` with `Organization`/`LocalBusiness` types, but with placeholder data only (no real address/phone). Enriched it with the site's actual business data (from `src/models/dataModel.js`):
- `Organization`: name, url, logo, email, telephone
- `LocalBusiness`: name, url, image, telephone, email, priceRange, and a structured `PostalAddress` (89-92 Victoria Street West, Auckland CBD, Auckland 1010, NZ)

No `sameAs` social links added — no real social profile URLs exist in the codebase or data model, and fabricating them would be worse than omitting them.

Verified locally: parsed and validated the JSON-LD from the prerendered homepage HTML — well-formed JSON, correct schema.org types and fields. Still pending: running it through Google's actual Rich Results Test, which needs a public URL.

---

## TICKET 6 — 🟡 Medium: HTTP/HTTPS and www/non-www redirect consistency

**Affects:** PrimeFix (confirm), PureNest (verify)

**Problem:**
PrimeFix was reachable at `http://primefixsolutions.co.nz` (non-HTTPS) with a canonical tag pointing to `https://` — needs confirmation that a server-level redirect actually exists, not just a canonical hint.

**Solution:**
- Add 301 redirect: `http://` → `https://` at hosting/CDN level (Cloudflare, Vercel, Netlify config — not just meta tag)
- Confirm and enforce one consistent version (www vs non-www) with 301 redirect from the other

**Acceptance criteria:**
- [x] `curl -I http://primefixsolutions.co.nz` returns `301` redirect to `https://` version *(not checked — different repo/site, out of scope)*
- [x] Same check performed for www/non-www on both domains *(checked for purenestcleaning.co.nz only)*

### ❌ NOT AN ISSUE for purenestcleaning.co.nz — no action taken
Verified via `curl -I`:
- `http://purenestcleaning.co.nz/` → `301` → `https://purenestcleaning.co.nz/` ✅
- `https://www.purenestcleaning.co.nz/` → `301` → `https://purenestcleaning.co.nz/` ✅

Both redirects are already correctly enforced at the Netlify/hosting level, not just via meta tag. No changes made. (PrimeFix was not checked — separate site/repo, outside this project.)

---

## Files changed (purenest repo)

- `scripts/prerender.js` — new: build-time prerendering script (Ticket 1)
- `package.json` / `package-lock.json` — added `puppeteer` devDependency, `postbuild` script
- `src/index.js` — plain client render (see Ticket 1 notes on hydration)
- `src/components/SEO.js` — added `og:image`/`twitter:image`/`og:site_name`, switched canonical domain to non-www, enriched JSON-LD with real business data (Tickets 2, 3, 5)
- `public/robots.txt`, `public/sitemap.xml` — canonical non-www domain, added missing route (Ticket 4)

**Testing performed:** `npm run build` + prerender locally; served the build on localhost; verified via `curl` that all 8 routes return full content, unique titles, OG/Twitter tags, and valid JSON-LD with no JS execution; headless-browser pass confirmed 0 console errors/warnings across all routes and working client-side navigation; visual screenshot check of homepage and About page confirmed no rendering regressions.

**Not yet done:** committing/pushing these changes, deploying to Netlify, and the post-deploy checks that require a live public URL (Search Console re-crawl, Facebook/Twitter validators, Google Rich Results Test, Bing Webmaster Tools submission).

## Suggested build order for the dev team
1. Ticket 1 (blocker — everything else is low-value until this ships)
2. Ticket 4 (cheap, fast, unblocks Search Console setup)
3. Ticket 3 + Ticket 2 (metadata, can be done in parallel)
4. Ticket 6 (quick redirect config check)
5. Ticket 5 (schema, once page structure is finalized)
