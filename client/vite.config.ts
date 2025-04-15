import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import UnoCSS from 'unocss/vite';

const serverPort = process.env.PORT || 3000;
console.log(`api needs to be running on port ${serverPort}`);

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    UnoCSS(),
  ],
  server: {
    proxy: {
      "/api": `http://localhost:${serverPort}`,
    },
  },
});
