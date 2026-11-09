JavaScript
import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';

export default defineConfig({
  output: 'server', // Esto hace que la web lea Google Sheets en vivo en cada visita
  adapter: vercel(),
});