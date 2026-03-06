// @ts-check
import { defineConfig } from 'astro/config'

import sitemap from '@astrojs/sitemap'

// https://astro.build/config
export default defineConfig({
  i18n: {
    locales: ['es', 'eu', 'en'],
    defaultLocale: 'es',
    routing: {
      prefixDefaultLocale: true,
    },
  },

  site: 'https://scales.trukun.com',
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'es',
        locales: {
          es: 'es-ES',
          eu: 'eu',
          en: 'en-US',
        },
      },
    }),
  ],
})
