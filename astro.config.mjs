// @ts-check
import { defineConfig } from 'astro/config'

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
})
