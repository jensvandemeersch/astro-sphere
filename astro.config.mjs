import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import solidJs from '@astrojs/solid-js';

export default defineConfig({
  site: "https://studio-binnenkant.pages.dev",
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    mdx(),
    solidJs(),
  ],
});
