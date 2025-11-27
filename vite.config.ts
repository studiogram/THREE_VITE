import { defineConfig } from "vite";
import { resolve } from "node:path";
import { readdirSync, Dirent } from "node:fs";
import { fileURLToPath, URL } from "node:url";

const __dirname = fileURLToPath(new URL(".", import.meta.url));

const exercisesDir = resolve(__dirname, "src/exercices");
const exercises = readdirSync(exercisesDir, { withFileTypes: true })
  .filter((dirent: Dirent) => dirent.isDirectory())
  .reduce((entries: Record<string, string>, dir: Dirent) => {
    entries[dir.name] = resolve(exercisesDir, dir.name, "index.html");
    return entries;
  }, {});

export default defineConfig({
  base: '/THREE_VITE/',
  build: {
    chunkSizeWarningLimit: 1000, // Increase limit to 1MB
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        ...exercises,
      },
      output: {
        manualChunks: {
          'three': ['three'],
          'three-addons': ['three/examples/jsm/controls/OrbitControls.js']
        }
      }
    },
  },
});
