import { defineConfig } from "vite";
import { fileURLToPath, URL } from "url";
import { svelte } from "@sveltejs/vite-plugin-svelte";

// https://vitejs.dev/config/
export default defineConfig({
  base: "./",
  plugins: [svelte()],
  resolve: {
    alias: [
      {
        find: "@",
        replacement: fileURLToPath(new URL("./src", import.meta.url)),
      },
    ],
  },
  build: {
    assetsDir: "static",
    assetsInlineLimit: 4096,
  },
  server: {
    proxy: {
      "/v1/pages": {
        target: 'https://api.notion.com/v1/pages',
        changeOrigin: true,
        secure: false,
        headers: {
          Referer: 'https://api.notion.com/'
        }
      }
    }
  },
});
