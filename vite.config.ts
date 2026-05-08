import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

/** Absolute origin for og:image / twitter:image — crawlers require a full URL. */
function resolveOgOrigin(): string {
  const explicit = process.env.VITE_OG_ORIGIN?.trim();
  if (explicit) return explicit.replace(/\/$/, '');

  // Netlify sets URL to the site's canonical URL (custom domain or *.netlify.app).
  const netlifyUrl = process.env.URL?.trim();
  if (netlifyUrl) return netlifyUrl.replace(/\/$/, '');

  return 'https://dizzledigital.netlify.app'.replace(/\/$/, '');
}

const ogOrigin = resolveOgOrigin();

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    {
      name: 'inject-og-origin',
      transformIndexHtml(html: string) {
        return html.replaceAll('%OG_ORIGIN%', ogOrigin);
      },
    },
  ],
  server: {
    host: true,
    port: 5173,
    strictPort: false,
  },
});
