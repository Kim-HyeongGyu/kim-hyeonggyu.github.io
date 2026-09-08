import { defineConfig } from "astro/config";

const configuredBase = process.env.PUBLIC_BASE || "/";
const cleanedBase = configuredBase.replace(/^\/+|\/+$/g, "");
const base = cleanedBase ? `/${cleanedBase}/` : "/";

export default defineConfig({
  output: "static",
  base,
  build: {
    assets: "assets"
  }
});
