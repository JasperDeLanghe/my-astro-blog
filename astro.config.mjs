import { defineConfig } from 'astro/config';
import netlify from "@astrojs/netlify"

import preact from '@astrojs/preact';
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  adapter: netlify(),
  integrations: [preact(), react(), tailwind()]
});