import { SITE } from '../lib/site';
import { ALL } from '../lib/content';
export const dynamic = 'force-static';
// Only list indexable, canonical URLs. lastModified should change only when content really changes.
export default function sitemap() {
  return [{ url: `${SITE.url}/`, lastModified: SITE.updated }, ...ALL.map((p) => ({ url: `${SITE.url}/${p.slug}/`, lastModified: p.updated }))];
}
