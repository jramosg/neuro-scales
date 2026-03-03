import { defineConfig } from 'vitest/config';
import { resolve } from 'path';

export default defineConfig({
  resolve: {
    alias: {
      '@scales': resolve(__dirname, 'src/scales'),
      '@i18n': resolve(__dirname, 'src/i18n'),
    },
  },
  test: {
    include: ['src/**/*.test.ts'],
  },
});
