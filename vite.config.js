import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  test : {
    globals: true,  // Enables global test functions like `describe`, `it`, `expect` without imports
    environment: 'jsdom',     // Sets the testing environment to jsdom (simulated browser)
    setupFiles: './src/setupTests.js', //Specifies the setup file to run before all tests (used for importing RTL matchers like `@testing-library/jest-dom`)
    css: true,  // Enables CSS support in test files (helpful if components import CSS)
     // Configuration for code coverage reporting
    coverage: {
      reporter: ['text' , 'json', 'html'],  // Specifies the output formats for coverage reports
      all: true, 
      include: ['src/**/*.{js,jsx,ts,tsx}'],   // Patterns to include in coverage collection
      exclude: ['node_modules/**', 'src/main.jsx' , 'src/setupTests.js' , 'src/*.css']  // Patterns to exclude from coverage (e.g., entry file, setup files, and CSS)
    }
  }
})
