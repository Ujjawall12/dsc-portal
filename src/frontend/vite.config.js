import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";
import dotenv from "dotenv";

dotenv.config({
  path: "config.env",
});

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
      components: resolve(__dirname, "src/components"),
      Fonts: resolve(__dirname, "src/Fonts"),
      pages: resolve(__dirname, "src/pages"),
      Layout: resolve(__dirname, "src/Layout"),
      assets: resolve(__dirname, "src/assets"),
    },
  },
  define: {
    "process.env": process.env,
  },
});
