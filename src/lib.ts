import { SITE, AUTHOR } from './site';
export type QA = { q: string; a: string };
export const faqSchema = (items: QA[]) => ({
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: items.map((i) => ({ '@type': 'Question', name: i.q, acceptedAnswer: { '@type': 'Answer', text: i.a } })),
});
export const organizationSchema = () => ({
  '@context': 'https://schema.org', '@type': 'Organization',
  name: SITE.name, url: SITE.url + '/',
  email: SITE.email,
  logo: { '@type': 'ImageObject', url: SITE.url + '/favicon.svg' },
  description: 'Free quick-fire primary maths fluency practice (KS1–KS2) with times tables, number bonds, doubles, halves, division and square numbers.',
});
export const personSchema = () => ({
  '@context': 'https://schema.org', '@type': 'Person', name: AUTHOR.name, url: SITE.url + AUTHOR.url,
  jobTitle: AUTHOR.jobTitle, description: AUTHOR.bio, worksFor: { '@type': 'Organization', name: SITE.name, url: SITE.url },
});
export const appSchema = (name: string, path: string, description: string) => ({
  '@context': 'https://schema.org', '@type': 'WebApplication', name, url: SITE.url + path, description,
  applicationCategory: 'EducationalApplication', operatingSystem: 'Any (web browser)',
  inLanguage: 'en-GB', isAccessibleForFree: true, offers: { '@type': 'Offer', price: '0', priceCurrency: 'GBP' },
  audience: { '@type': 'EducationalAudience', educationalRole: 'student' }, educationalLevel: 'Primary school (KS1–KS2)',
  browserRequirements: 'Requires JavaScript',
  publisher: { '@type': 'Organization', name: SITE.name, url: SITE.url },
});
export const articleSchema = (headline: string, path: string, description: string, datePublished: string, dateModified = datePublished) => ({
  '@context': 'https://schema.org', '@type': 'Article', headline, description, mainEntityOfPage: SITE.url + path,
  datePublished, dateModified, inLanguage: 'en-GB', image: SITE.url + '/og-image.png',
  author: { '@type': 'Person', name: AUTHOR.name, url: SITE.url + AUTHOR.url, jobTitle: AUTHOR.jobTitle },
  publisher: { '@type': 'Organization', name: SITE.name, logo: { '@type': 'ImageObject', url: SITE.url + '/favicon.svg' } },
});
