// Change these values (or set env vars in Cloudflare/Netlify) before going live.
export const SITE = {
  name: 'onlineprintertestpage',
  url: (process.env.NEXT_PUBLIC_SITE_URL || 'https://www.example.com').replace(/\/$/, ''),
  email: process.env.NEXT_PUBLIC_EMAIL || 'contact@example.com',
  updated: '2026-10-12',
};
