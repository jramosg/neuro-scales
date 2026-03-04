import { defineConfig } from 'vitest/config'

export default defineConfig({
  resolve: {
    alias: {
      '@scales': new URL('src/scales', import.meta.url).pathname,
      '@i18n': new URL('src/i18n', import.meta.url).pathname,
    },
  },
  test: {
    include: ['src/**/*.test.ts'],
  },
})
