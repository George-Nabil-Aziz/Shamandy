import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // @TODO: Deployment gh-pages
  // base: "/Shamandy/",
});
