'use client';
import { useState } from 'react';

const TABS = [['color', 'Color'], ['bw', 'Black & White'], ['cmyk', 'CMYK'], ['align', 'Alignment'], ['streak', 'Streaks'], ['text', 'Text']];
const PAPER = { A4: [210, 297], Letter: [215.9, 279.4], Legal: [215.9, 355.6], A3: [297, 420] };
const C = { c: '#00b4d8', m: '#e91e8c', y: '#ffd600', k: '#111' };

const Row = ({ items, sm }) => (
  <div className={'row' + (sm ? ' sm' : '')}>{items.map(([l, bg, fg]) => (<div key={l} style={{ background: bg, color: fg || '#fff' }}>{l}</div>))}</div>
);
const Gray = ({ n }) => (
  <div className="gr">{Array.from({ length: n }).map((_, i) => { const v = Math.round(255 - (i * 255) / (n - 1)); return <i key={i} style={{ background: `rgb(${v},${v},${v})` }} />; })}</div>
);
const SIZES = [[5, '24pt'], [3.6, '18pt'], [2.8, '14pt'], [2.2, '11pt'], [1.7, '8pt'], [1.2, '6pt']];
const Txt = () => (<div className="lines">{SIZES.map(([s, l]) => (<div key={l} style={{ fontSize: s + 'cqw' }}>The quick brown fox jumps over the lazy dog 0123456789 — {l}</div>))}</div>);

function Body({ tab }) {
  if (tab === 'color') return (<><h5>Primary inks</h5><Row items={[['Cyan', C.c], ['Magenta', C.m], ['Yellow', C.y, '#333'], ['Black', C.k]]} /><h5>Mixed colors</h5><Row sm items={[['Red', '#ff3b30'], ['Green', '#34c759'], ['Blue', '#007aff'], ['C+M', '#2b3fa8'], ['C+Y', '#17a34a'], ['M+Y', '#e8382a']]} /><h5>Gray gradient</h5><Gray n={11} /><h5>Text</h5><Txt /><p className="note">Solid, even blocks and a smooth gradient mean healthy ink flow. Fading, bands or lines point to low ink or clogged nozzles.</p></>);
  if (tab === 'bw') return (<><h5>Gray gradient (look for banding)</h5><Gray n={16} /><h5>Solid black and fine patterns</h5><div className="row"><div style={{ background: '#000' }}>100% black</div><div style={{ background: 'repeating-linear-gradient(45deg,#000 0 .25cqw,#fff .25cqw .9cqw)' }} /><div style={{ background: 'repeating-linear-gradient(90deg,#000 0 .3cqw,#fff .3cqw .6cqw)' }} /></div><h5>Text</h5><Txt /><p className="note">Black should be uniform with no streaks. Fine patterns should stay crisp, not blur together.</p></>);
  if (tab === 'cmyk') return (<><h5>Individual inks — 100% solid</h5><div className="row tall">{[['C Cyan', C.c], ['M Magenta', C.m], ['Y Yellow', C.y, '#333'], ['K Black', C.k]].map(([l, b, f]) => (<div key={l} style={{ background: b, color: f || '#fff' }}>{l}</div>))}</div><h5>Ink combinations</h5><Row sm items={[['C+M  blue-violet', '#2b3fa8'], ['C+Y  green', '#17a34a'], ['M+Y  red-orange', '#e8382a']]} /><h5>Density check</h5><Gray n={9} /><p className="note">If one block is faded or banded, that cartridge is low or blocked. If C+Y is not green, one of those two inks is weak. Colors here are RGB converted by your driver, not true CMYK.</p></>);
  if (tab === 'align') return (<><div className="al"><i className="v" /><i className="h" /><i className="ring" /><b style={{ left: '1.5cqw', top: '1.5cqw' }}>TOP LEFT</b><b style={{ right: '1.5cqw', top: '1.5cqw' }}>TOP RIGHT</b><b style={{ left: '1.5cqw', bottom: '1.5cqw' }}>BOTTOM LEFT</b><b style={{ right: '1.5cqw', bottom: '1.5cqw' }}>BOTTOM RIGHT</b></div><p className="note">All four borders should be visible and even, grid lines straight and the circle round. A cut corner means wrong paper size or scaling.</p></>);
  if (tab === 'streak') return (<><p className="note" style={{ marginTop: 0 }}>Fine lines per color. Any gap or faded stretch suggests a blocked nozzle. For a firmware-level nozzle check also use your printer&apos;s own Maintenance menu.</p>{[['Cyan', C.c], ['Magenta', C.m], ['Yellow', C.y], ['Black', C.k]].map(([n, c]) => (<div key={n}><h5>{n}</h5>{[1.6, 1.3, 1, .7].map((h) => (<div key={h} style={{ height: h + 'cqw', background: c, marginBottom: '.9cqw' }} />))}</div>))}</>);
  return (<><h5>Sharpness at every size</h5><Txt /><h5>Characters</h5><div style={{ fontSize: '2.4cqw', lineHeight: 1.5 }}>ABCDEFGHIJKLMNOPQRSTUVWXYZ<br />abcdefghijklmnopqrstuvwxyz<br />0123456789 !@#$%&amp;*()</div><p className="note">Letters should have clean edges with no ghosting or smearing, even at the smallest size.</p></>);
}

export default function PrintTool({ initial = 'color' }) {
  const [tab, setTab] = useState(initial);
  const [paper, setPaper] = useState('A4');
  const [orient, setOrient] = useState('portrait');
  const [w, h] = PAPER[paper];
  const ratio = orient === 'portrait' ? `${w}/${h}` : `${h}/${w}`;
  const title = TABS.find((t) => t[0] === tab)[1];
  const date = new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });
  return (
    <section className="tool-wrap" aria-label="Printer test tool">
      <style>{`@page{size:${paper} ${orient};margin:10mm}`}</style>
      <div className="tabs" role="group" aria-label="Test type">
        {TABS.map(([k, l]) => (<button key={k} aria-pressed={tab === k} onClick={() => setTab(k)}>{l}</button>))}
      </div>
      <div className="tool">
        <div className="stage"><div className="sheet" style={{ aspectRatio: ratio }}><div className="sin"><h4>{title} test page</h4><div className="meta">onlineprintertestpage · {date} · {paper}</div><Body tab={tab} /></div></div></div>
        <aside className="panel">
          <label htmlFor="ps">Paper size</label>
          <select id="ps" value={paper} onChange={(e) => setPaper(e.target.value)}>{Object.keys(PAPER).map((p) => <option key={p}>{p}</option>)}</select>
          <label htmlFor="or">Orientation</label>
          <select id="or" value={orient} onChange={(e) => setOrient(e.target.value)}><option value="portrait">Portrait</option><option value="landscape">Landscape</option></select>
          <button className="btn full" onClick={() => window.print()}>Print test page</button>
          <button className="btn alt full" onClick={() => { alert('In the print window choose Destination: Save as PDF and enable Background graphics.'); window.print(); }}>Save as PDF</button>
          <p className="hint">The preview matches the printout. Set scale to 100% and enable Background graphics. Colors are RGB; your driver converts them to ink, so this checks your printer, not true CMYK.</p>
        </aside>
      </div>
    </section>
  );
}
