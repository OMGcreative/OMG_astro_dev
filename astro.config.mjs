// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://omgcreative.com.au',
  compressHTML: true,
  build: {
    inlineStylesheets: 'auto'
  }
});
