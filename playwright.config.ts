import { defineConfig } from "@playwright/test";
export default defineConfig({
  testDir: "tests",
  use: { baseURL: "http://localhost:4200" },
  webServer: {
    command: "node node_modules/@angular/cli/bin/ng.js serve --host 127.0.0.1",
    url: "http://localhost:4200",
    reuseExistingServer: !process.env["CI"],
    timeout: 120000,
  },
  reporter: "list",
});
