// @ts-check
import { defineConfig } from 'astro/config'

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  i18n: {
    locales: ['es', 'eu'],
    defaultLocale: 'es',
    routing: {
      prefixDefaultLocale: true,
    },
  },

  site: 'https://scales.trukun.com',
  integrations: [sitemap()],
})