import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react-swc";
import commonjs from "vite-plugin-commonjs";
import config from "./config";

export default ({ mode }) => {
  process.env = Object.assign(process.env, loadEnv(mode, process.cwd(), ""));

  return defineConfig({
    plugins: [commonjs(), react()],
    server: {
      host: config.HOST,
      port: config.PORT,
    },
    define: {
      "process.env": process.env,
    },
    build: {
      outDir: 'dist',
      rollupOptions: {
        external: [
          "react-slick",
        ],
        output: {
          manualChunks: false,
          inlineDynamicImports: true,
          entryFileNames: 'index.js',   // currently does not work for the legacy bundle
          assetFileNames: '[name].[ext]', // currently does not work for images
        },
      },
    },
  });
};
