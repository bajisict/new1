import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
// import db from '@astrojs/db';
import vercel from '@astrojs/vercel/serverless';

export default defineConfig({
  integrations: [react()],
  output: 'server',
  adapter: vercel()
});