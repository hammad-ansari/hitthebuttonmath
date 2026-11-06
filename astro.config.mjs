import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
const tables = Object.fromEntries([2,3,4,5,6,7,8,9,10,11,12].map((n) => [`/times-tables/${n}-times-table/`, `/times-tables/#${n}-times-table`]));
const LASTMOD = new Date('2026-11-06T12:00:00.000Z');
export default defineConfig({
  site: 'https://hitthebuttonmath.com',
  trailingSlash: 'always',
  integrations: [sitemap({
    filter: (p) => !p.includes('404'),
    serialize(item) {
      item.lastmod = LASTMOD;
      return item;
    },
  })],
  build: { inlineStylesheets: 'always' },
  redirects: {
    ...tables,
    '/division/': '/times-tables/#division',
    '/square-numbers/': '/times-tables/#square-numbers',
    '/halves/': '/doubles/#halves',
    '/how-to-play/': '/#how-to-play',
    '/blog/number-bonds-explained/': '/number-bonds/',
    '/football/': '/sports/',
    '/basketball/': '/sports/',
  },
});
