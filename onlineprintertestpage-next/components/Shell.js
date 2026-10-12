'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import Logo from './Logo';
import { SITE } from '../lib/site';

const NAV = [['/', 'Home'], ['/black-and-white-test-page/', 'Black & White'], ['/color-test-page/', 'Color'], ['/cmyk-test-page/', 'CMYK']];

export default function Shell({ children }) {
  const path = usePathname();
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  return (
    <div className="app">
      <header className="top">
        <div className="top-in">
          <Link href="/" className="brand" onClick={close}><Logo />{SITE.name}</Link>
          <button className="menu" aria-expanded={open} aria-controls="tnav" onClick={() => setOpen(!open)}>{open ? 'Close' : 'Menu'}</button>
          <nav id="tnav" className={'tnav' + (open ? ' open' : '')} aria-label="Main">
            {NAV.map(([h, l]) => (<Link key={h} href={h} aria-current={path === h ? 'page' : undefined} onClick={close}>{l}</Link>))}
            <Link href="/color-test-page/" className="btn" onClick={close}>Print now</Link>
          </nav>
        </div>
      </header>
      <div className="content">
        <main className="main">{children}</main>
        <footer className="foot">
          <div className="foot-grid">
            <div><strong>{SITE.name}</strong><p>Free online printer test pages for black &amp; white, color and CMYK checks. Spot ink, nozzle and alignment problems in seconds.</p></div>
            <div><h4>Quick links</h4><Link href="/">Home</Link><Link href="/black-and-white-test-page/">Black &amp; White Test</Link><Link href="/color-test-page/">Color Test</Link><Link href="/cmyk-test-page/">CMYK Test</Link></div>
            <div><h4>Company</h4><Link href="/about/">About</Link><Link href="/contact/">Contact</Link></div>
            <div><h4>Legal</h4><Link href="/privacy/">Privacy Policy</Link><Link href="/terms/">Terms &amp; Conditions</Link><Link href="/disclaimer/">Disclaimer</Link></div>
          </div>
          <p className="copy">© 2026 {SITE.name}. Independent site, not affiliated with HP, Epson, Canon or Brother.</p>
        </footer>
      </div>
    </div>
  );
}
