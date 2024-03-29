import { defineConfig } from 'astro/config';

import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  integrations: [starlight(
    {
      title: 'Cactus CSS',
      favicon: '/assets/logo-dk.svg',
      customCss: [
        './src/styles/cactus3.css',
      ],
    }
  )]
});