/// <reference types="vitest" />
// import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  // Base path for the application (GitHub Pages deployment)
  base: '/country-capital-game/', // Replace with your GitHub repository name

  // Development server configuration
  server: {
    port: 3000, // Specify the port for the development server
  },

  // Build configuration
  build: {
    outDir: 'dist', // Output directory for the production build
  },

  // Configure CSS pre-processing
  css: {
    preprocessorOptions: {
      // Add any CSS preprocessor options here
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './test-setup.ts',
    // you might want to disable it, if you don't have tests that rely on CSS
    // since parsing CSS is slow
    css: true,
  },

  // Configure other Vite options as needed
});
