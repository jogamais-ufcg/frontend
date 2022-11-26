import { defineConfig } from "cypress";

export default defineConfig({
  projectId: 'adujd8',

  component: {
    devServer: {
      framework: "next",
      bundler: "webpack",
    },
  },

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    video: true,
    screenshotOnRunFailure: true,
    baseUrl: process.env.VERCEL_URL || "http://localhost:3000",
  },
});
