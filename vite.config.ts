import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { resolve } from "path";
import dts from "vite-plugin-dts";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), dts({ insertTypesEntry: true })],
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.ts"), // main export file
      name: "DressdepoStoreRenderer", // global name (for UMD)
      fileName: "dressdepo-store-renderer",
      formats: ["es", "umd"], // esm + umd
    },
    rollupOptions: {
      external: ["react", "react-dom"], // don't bundle react
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
  },
  server: {
    proxy: {
      "/api": {
        target: "http://192.168.1.12:3001",
        changeOrigin: true,
      },
    },
  },
});
