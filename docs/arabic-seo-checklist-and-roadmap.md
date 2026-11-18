# Arabic SEO — Search Console checklist and 90-day roadmap (hidayathaher.com)

Nothing here claims rankings or indexing: those can only be confirmed in Google Search Console.

## A. Search Console checklist (owner action, ~30 minutes)
1. Add property: https://search.google.com/search-console → Add property → **Domain** `hidayathaher.com` → add the TXT record in Vercel (Domains → DNS) → Verify.
   (Alternative: URL-prefix property + set `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` in Vercel and redeploy; the site adds the tag.)
2. Sitemaps → submit `https://hidayathaher.com/sitemap.xml` (50 URLs: 25 English + 25 Arabic, with hreflang and image entries).
3. URL Inspection → inspect then "Request indexing" for: `/`, `/ar`, `/ar/projects`, `/ar/services/residential-interior-design`, `/ar/services/commercial-interior-design`, `/ar/services/3d-visualization`, `/ar/process`.
4. Pages report (Indexing): after ~1–2 weeks check "Indexed" vs "Discovered / Crawled – not indexed"; note reasons per URL.
5. Performance report: filter **Country = Palestine**, then compare by page path starting `/ar`. Save the query list monthly.
6. Settings → Bing: import the property into Bing Webmaster Tools (one click) and submit the same sitemap.
7. Do not create fake listings or buy links.

## B. Arabic queries to track (from the research; volumes are NOT verified)
مصممة داخلية في نابلس · تصميم داخلي نابلس · مصممة ديكور داخلي نابلس · تصميم داخلي للمنازل والشقق · تصميم محلات تجارية نابلس · تصميم داخلي ثلاثي الأبعاد · رندر داخلي · هداية ظاهر مصممة داخلية.
Re-rank `docs/seo-keyword-map.md` using real impressions after 8–12 weeks.

## C. 90-day roadmap
**Days 0–14 (foundation)**: Search Console + Bing; request indexing for the 7 key URLs; confirm the exact Arabic spelling of the name; set Behance location to Nablus, Palestinian Territory and link the site; add `hidayathaher.com` to the Google Business Profile website field (service-area business, address hidden, only if eligible).
**Days 15–45 (profiles, not pages)**: Facebook business page and Instagram bio ("مصممة داخلية – نابلس") linking to `/ar`; same name/phone/city everywhere; list in Palestinian directories only where a freelancer designer is allowed (shobiddak interior-design category, OpenSooq services, wenak.ps); ask the An-Najah Interior Design department whether alumni portfolios can be linked.
**Days 30–60 (content, only with owner input)**: 2 Arabic articles written from Hidaya's own knowledge — «الفرق بين التصميم الداخلي والديكور» and «ما هو الرندر في التصميم الداخلي؟» (the second answers a gap found in the research). Review wording with Hidaya before publishing. No generic head-term guides (large publishers own them).
**Days 45–90 (measure and adjust)**: read Search Console (Palestine); rename titles that get impressions but no clicks; add a project page only when a new project exists; consider a Google Business Profile review request to real clients only.

## D. Needs the owner (not invented)
Arabic name spelling; whether she accepts render-only commissions; site visits for measurements; free first consultation; contact channels (WhatsApp/email/form); handover formats; whether facade design and custom furniture design are services; any real client permission for testimonials (none are shown).
