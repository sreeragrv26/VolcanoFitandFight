// @ts-check
const { defineConfig } = require("@playwright/test");

module.exports = defineConfig({
  testDir: "./tests",
  fullyParallel: true,
  reporter: "list",
  use: {
    baseURL: "https://volcanofitandfight.netlify.app",
    trace: "retain-on-failure",
  },
});
