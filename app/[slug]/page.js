import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ALL, TESTS } from '../../lib/content';
import { SITE } from '../../lib/site';
import PrintTool from '../../components/PrintTool';
import ContactForm from '../../components/ContactForm';
import Faq from '../../components/Faq';
import JsonLd from '../../components/JsonLd';

export const dynamicParams = false;
export function generateStaticParams() { return ALL.map((p) => ({ slug: p.slug })); }
const find = (slug) => ALL.find((p) => p.slug === slug);

export function generateMetadata({ params }) {
  const p = find(params.slug);
  if (!p) return {};
  const url = `/${p.slug}/`;
  return { title: p.title, description: p.desc, alternates: { canonical: url }, openGraph: { title: p.title, description: p.desc, url, type: 'website' } };
}

export default function Page({ params }) {
  const p = find(params.slug);
  if (!p) notFound();
  const url = `${SITE.url}/${p.slug}/`;
  const crumb = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE.url}/` },
    { '@type': 'ListItem', position: 2, name: p.h1, item: url } ] };
  const faq = p.faq && { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: p.faq.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })) };
  return (
    <article>
      <JsonLd data={crumb} />{faq && <JsonLd data={faq} />}
      <nav className="crumb" aria-label="Breadcrumb"><Link href="/">Home</Link> / {p.h1}</nav>
      <h1 className="h1">{p.h1}</h1>
      {p.kind === 'test' ? (
        <>
          <p className="lead">{p.lead}</p>
          <PrintTool initial={p.tab} />
          <div className="prose">{p.blocks.map(([h, t]) => (<section key={h}><h2>{h}</h2><p>{t}</p></section>))}
            <h2>Frequently asked questions</h2><Faq items={p.faq} />
            <h2>Other test pages</h2>
            <ul>{TESTS.filter((t) => t.slug !== p.slug).map((t) => (<li key={t.slug}><Link href={`/${t.slug}/`}>{t.h1}</Link></li>))}</ul>
          </div>
        </>
      ) : (
        <div className="prose"><p className="meta2">Last updated: {p.updated}</p>
          {p.sections.map(([h, t]) => (<section key={h}><h2>{h}</h2><p>{t}</p></section>))}
          {p.kind === 'contact' && <ContactForm />}
        </div>
      )}
    </article>
  );
}
