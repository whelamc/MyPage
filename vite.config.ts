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
      "/api": {
        target: "https://mypage-api.whelamc.workers.dev/",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
});
