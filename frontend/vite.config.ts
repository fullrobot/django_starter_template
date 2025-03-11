import path from "path"
import tailwindcss from "@tailwindcss/vite"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"
import { readFileSync } from "fs"

const pkg = JSON.parse(readFileSync(path.resolve(__dirname, "./package.json"), "utf-8"))
const appVersion = pkg.version

// https://vite.dev/config/
export default defineConfig({
  define: {
    __STATIC_ASSETS__: JSON.stringify('/static/frontend/'),
    __PROJECT_ROOT__: JSON.stringify('/Users/fullrobot/Workspace/django_starter_template/frontend'),
    "import.meta.env.VITE_APP_VERSION": JSON.stringify(appVersion),
  },
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  root: path.resolve("."),
  base: "/static/frontend/",
  server: {
    port: 3000,
    origin: "http://localhost:3000",
    cors: {
      origin: "*"
    }
  },
  build: {
    manifest: "manifest.json",
    outDir: path.resolve("build/"),
    assetsDir: "",
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: path.resolve("./src/main.tsx"),
      },
    }
  }
})
