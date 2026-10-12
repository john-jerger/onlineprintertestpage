import Link from 'next/link';
import Faq from '../components/Faq';
import JsonLd from '../components/JsonLd';
import { HOME_FAQ } from '../lib/content';

export const metadata = {
  title: { absolute: 'Free Printer Test Page Online – Color, Black & White, CMYK | onlineprintertestpage' },
  description: 'Print a free printer test page in one tap. Color, black & white and CMYK tests with live preview, A4/Letter/Legal sizes and a clear guide to reading the results.',
  alternates: { canonical: '/' },
  openGraph: { title: 'Free Printer Test Page Online – onlineprintertestpage', description: 'Color, black & white and CMYK printer test pages. Free, instant, any printer.', url: '/', type: 'website' },
};

const TILES = [
  ['/black-and-white-test-page/', 'Black & White', 'Toner, black ink, banding and fine lines.', 't1'],
  ['/color-test-page/', 'Color', 'All inks, mixed colors and gradients in one print.', 't2'],
  ['/cmyk-test-page/', 'CMYK', 'Each ink on its own to find the failing cartridge.', 't3'],
];

export default function Home() {
  const faq = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: HOME_FAQ.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })) };
  return (
    <>
      <JsonLd data={faq} />
      <div className="bento">
        <section className="cell hero-cell s8">
          <span className="pill">Free · No signup · Works on phone &amp; PC</span>
          <h1>Free printer test page. <em>Check any printer in one tap.</em></h1>
          <p>Choose a color, black &amp; white or CMYK test page, preview exactly what will print, and send it to your printer. Works with HP, Epson, Canon, Brother and every other printer on Windows, Mac, Android and iPhone.</p>
          <div className="actions"><Link href="/color-test-page/" className="btn">Print color test</Link><Link href="/black-and-white-test-page/" className="btn ghost">Black &amp; white</Link><Link href="/cmyk-test-page/" className="btn ghost">CMYK</Link></div>
        </section>
        <aside className="cell s4 preview" aria-hidden="true">
          <div className="mini"><div className="bars"><i style={{ background: '#00b4d8' }} /><i style={{ background: '#e91e8c' }} /><i style={{ background: '#ffd600' }} /><i style={{ background: '#111' }} /></div><div className="gradbar" /><span /><span /><span /></div>
        </aside>
        {TILES.map(([h, t, d, c]) => (<Link key={h} href={h} className={`cell s4 tile ${c}`}><b>{t}<small> test page</small></b><p>{d}</p><span className="go">Open →</span></Link>))}
        <div className="cell s4 stat"><strong>100%</strong><span>free, no account</span></div>
        <div className="cell s4 stat"><strong>4 sizes</strong><span>A4, Letter, Legal, A3</span></div>
        <div className="cell s4 stat"><strong>6 tests</strong><span>color, B&amp;W, CMYK, alignment, streaks, text</span></div>
      </div>

      <div className="prose home">
        <h2>What is a printer test page?</h2>
        <p>A printer test page is a short diagnostic print that shows whether your printer is working properly. It combines solid color blocks, a gray gradient, text in several sizes and alignment lines, so one glance tells you if ink or toner, the print head, the paper feed and the connection are healthy. Print one after setup, after changing a cartridge, after a long idle period or whenever output looks faded, streaky or crooked.</p>

        <h2>Which test page should you choose?</h2>
        <div className="tw"><table><thead><tr><th>Test</th><th>What it checks</th><th>Best for</th></tr></thead><tbody>
          <tr><td><Link href="/black-and-white-test-page/">Black &amp; White</Link></td><td>Black ink or toner, gray steps, banding, fine lines</td><td>Laser and mono printers</td></tr>
          <tr><td><Link href="/color-test-page/">Color</Link></td><td>All inks, mixed colors, gradients and text</td><td>Color inkjets, general health check</td></tr>
          <tr><td><Link href="/cmyk-test-page/">CMYK</Link></td><td>Cyan, magenta, yellow, black separately</td><td>Finding the failing cartridge</td></tr>
          <tr><td>Alignment</td><td>Margins, skew, border straightness</td><td>After moving the printer</td></tr>
          <tr><td>Streaks</td><td>Fine lines per color</td><td>Inkjets with lines or gaps</td></tr>
        </tbody></table></div>

        <h2>How to print a test page</h2>
        <ol className="steps"><li><b>Pick a test</b>Open the color, black &amp; white or CMYK page.</li><li><b>Set paper and print</b>Choose A4, Letter, Legal or A3, then press Print.</li><li><b>Use 100% scale</b>Enable Background graphics so colors print.</li><li><b>Read the result</b>Check the page in good light using the table below.</li></ol>
        <p>On Windows you can also use Settings, Printers &amp; scanners, your printer, Printer properties, Print Test Page. On Mac use System Settings, Printers &amp; Scanners. On iPhone tap Share, then Print.</p>

        <h2>How to read your test page results</h2>
        <div className="tw"><table><thead><tr><th>What you see</th><th>Likely cause</th><th>What to do</th></tr></thead><tbody>
          <tr><td>Horizontal streaks</td><td>Clogged nozzles</td><td>Run 1–2 head cleaning cycles, then reprint</td></tr>
          <tr><td>One color faded or missing</td><td>Low or empty cartridge</td><td>Check levels, reseat or replace</td></tr>
          <tr><td>Gray bands or repeating marks</td><td>Worn drum or fuser (laser)</td><td>Replace drum or toner unit</td></tr>
          <tr><td>Crooked lines, blurry text</td><td>Alignment or paper feed</td><td>Run alignment, load paper straight</td></tr>
          <tr><td>Page cut off</td><td>Wrong scale or paper size</td><td>Use 100% scale, match the tray size</td></tr>
          <tr><td>Blank page</td><td>Empty ink, tape left on, dry head</td><td>Remove tape, reseat, clean head</td></tr>
        </tbody></table></div>

        <h2>Inkjet vs laser test pages</h2>
        <p>Inkjet printers spray liquid ink through tiny nozzles, so common faults are clogged nozzles and low ink, shown as streaks or faded colors. Laser printers fuse toner with a drum and heated fuser, so faults show as gray bands, smudges or marks that repeat at regular intervals. Use the color and CMYK pages for inkjets and the black &amp; white page for lasers.</p>

        <h2>Is this a true CMYK test?</h2>
        <p>No, and we say so plainly. Browsers draw in RGB and your printer driver converts colors to ink, so no website can send exact CMYK values. These pages are still very effective at exposing a faded or blocked ink, uneven coverage and banding. For professional color proofing use a CMYK PDF from your print shop.</p>

        <h2>Common printing problems</h2>
        <h3>The test page prints but documents do not</h3>
        <p>The hardware works. Restart the Print Spooler, clear the print queue, update or reinstall the driver and try another application.</p>
        <h3>The test page is blank</h3>
        <p>Remove protective tape from new cartridges, reseat them, check ink levels and run a cleaning cycle.</p>
        <h3>Colors look wrong</h3>
        <p>Match the paper type in the print dialog to the paper loaded, run a cleaning cycle and compare each color block to find the weak channel.</p>

        <h2>Frequently asked questions</h2>
        <Faq items={HOME_FAQ} />
      </div>
    </>
  );
}
