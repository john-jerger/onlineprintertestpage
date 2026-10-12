// Change these values (or set env vars in Cloudflare/Netlify) before going live.
export const SITE = {
  name: 'onlineprintertestpage',
  url: (process.env.NEXT_PUBLIC_SITE_URL || 'https://onlineprintertestpage.pages.dev').replace(/\/$/, ''),
  email: process.env.NEXT_PUBLIC_EMAIL || 'contact@onlineprintertestpage.pages.dev',
  updated: '2026-10-12',
};
