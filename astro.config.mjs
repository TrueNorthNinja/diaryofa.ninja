// @ts-check
import { defineConfig } from 'astro/config';
import vue from '@astrojs/vue';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  output: "static",
  outDir: "dist",
  integrations: [vue(), tailwind()],
  markdown: {
    shikiConfig: {
      theme: 'monokai'
    }
  }
});