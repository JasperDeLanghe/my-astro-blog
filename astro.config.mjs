import { defineConfig } from 'astro/config';
import netflify from "@astrojs/netflify";

import preact from '@astrojs/preact';
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  adapter: netflify(),
  integrations: [preact(), react(), tailwind()]
});