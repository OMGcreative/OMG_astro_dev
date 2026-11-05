// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: process.env.SITE_URL || 'https://omgcreative.com.au',
  base: process.env.BASE_PATH || '/',
  trailingSlash: 'always',
  compressHTML: true,
  build: {
    inlineStylesheets: 'auto'
  }
});
