import { defineConfig } from 'astro/config';

import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  integrations: [starlight(
    {
      title: 'Cactus CSS',
      favicon: '/assets/logo-dk.svg',
      customCss: [
        './src/styles/cactus4.css',
      ],
      sidebar: [
        {
          label: 'Cactusv4',
          badge: 'New',
          collapsed: false,
          autogenerate: { directory: 'current' },
        },
        {
          label: 'Cactusv3',
          badge: { text: 'Deprecada', variant: 'caution' },
          collapsed: true,
          autogenerate: { directory: 'older-cactusv3' },
        },
      ],
    }
  )]
});