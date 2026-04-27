import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://clawd.rip",
  vite: {
    plugins: [tailwindcss()],
  },
});
