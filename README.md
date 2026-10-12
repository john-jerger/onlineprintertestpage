# onlineprintertestpage – Next.js printer test site

Next.js 14 (App Router) static export. Pages: Home, Black & White / Color / CMYK test pages, About, Contact, Privacy, Terms, Disclaimer. Includes per-page metadata, canonical URLs, JSON-LD (WebSite, Organization, BreadcrumbList, FAQPage), sitemap.xml and robots.txt.

## Run locally
    npm install
    npm run dev        # http://localhost:3000
    npm run build      # creates the static site in ./out

## Before going live
1. Set environment variables (Cloudflare Pages / Netlify > Settings > Environment variables):
   NEXT_PUBLIC_SITE_URL = https://your-real-domain.com
   NEXT_PUBLIC_EMAIL    = your real email
   (or edit lib/site.js). Rename the brand in lib/site.js and lib/content.js if you like.
2. Add public/og.png (1200x630) for social sharing, then add `images: ['/og.png']` to openGraph in app/layout.js.
3. Submit https://your-domain/sitemap.xml in Google Search Console.
4. Privacy/Terms are templates: have them reviewed for your country.

## Deploy (Cloudflare Pages)
Connect the GitHub repo. Framework: Next.js (Static HTML Export) or None.
Build command: npm run build     Output directory: out
Set the Node version to 20 (variable NODE_VERSION=20) if the build complains.
