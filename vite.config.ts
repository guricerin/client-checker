import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/client-checker/", // https://ja.vitejs.dev/guide/static-deploy.html#github-pages
  plugins: [svelte()]
})
