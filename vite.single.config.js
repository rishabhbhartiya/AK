// optional: one-file build for quick preview -> npx vite build -c vite.single.config.js
import {defineConfig} from 'vite';import react from '@vitejs/plugin-react';import {viteSingleFile} from 'vite-plugin-singlefile';
export default defineConfig({plugins:[react(),viteSingleFile()],build:{outDir:'dist-single',assetsInlineLimit:1e9,chunkSizeWarningLimit:99999}});
