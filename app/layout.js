import './globals.css';
import Shell from '../components/Shell';
import JsonLd from '../components/JsonLd';
import { SITE } from '../lib/site';

export const metadata = {
  metadataBase: new URL(SITE.url),
  title: { default: `${SITE.name} – Free Printer Test Page Online`, template: `%s | ${SITE.name}` },
  description: 'Free printer test pages: color, black & white and CMYK. Print in one tap and find ink, nozzle and alignment problems on any printer.',
  robots: { index: true, follow: true, 'max-image-preview': 'large' },
  openGraph: { type: 'website', siteName: SITE.name, locale: 'en_US' },
  twitter: { card: 'summary_large_image' },
  verification: {
    google: 'zrRm8djv_XPFz7FSp-5Fb7cVX29qTtjPK1wvqQ4aANs',
  },
};
export const viewport = { width: 'device-width', initialScale: 1, themeColor: '#0f1226' };

export default function RootLayout({ children }) {
  const graph = { '@context': 'https://schema.org', '@graph': [
    { '@type': 'WebSite', '@id': `${SITE.url}/#site`, url: `${SITE.url}/`, name: SITE.name, inLanguage: 'en' },
    { '@type': 'Organization', '@id': `${SITE.url}/#org`, name: SITE.name, url: `${SITE.url}/`, email: SITE.email },
  ] };
  return (
    <html lang="en">
      <head>
        <meta name="google-site-verification" content="zrRm8djv_XPFz7FSp-5Fb7cVX29qTtjPK1wvqQ4aANs" />
      </head>
      <body><JsonLd data={graph} /><Shell>{children}</Shell></body>
    </html>
  );
}
