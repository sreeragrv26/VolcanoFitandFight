// @ts-check
// This is a Playwright test file. Playwright launches a real browser
// (Chromium here), drives it like a user would, and lets you assert
// ("expect") that things are true about the page.
//
// `test` and `expect` are Playwright's two core building blocks:
//   - test("description", async ({ page }) => { ... })  defines one test
//   - expect(actualValue).toBe(expectedValue)            checks a fact
// `page` is your remote-controlled browser tab, injected automatically
// by Playwright for every test.
const { test, expect } = require("@playwright/test");

// --- Lesson 1: does the homepage load, with the right title? ---
test("homepage loads with the correct title", async ({ page }) => {
  // Navigates the browser tab to baseURL + "/" (baseURL is set in
  // playwright.config.js so we don't have to repeat the full URL
  // in every test).
  await page.goto("/");

  // toHaveTitle checks the <title> tag Playwright sees in the real,
  // rendered page -- not a guess, the actual DOM.
  await expect(page).toHaveTitle(/Gym, Fitness & Martial Arts in Koyilandy/);
});

// --- Lesson 2: does clicking a nav link actually navigate? ---
test("clicking Contact in the nav goes to the contact page", async ({ page }) => {
  await page.goto("/");

  // A "locator" describes an element without fetching it yet.
  // Here: find a link inside .nav-links whose text is "Contact".
  const contactLink = page.locator(".nav-links a", { hasText: "Contact" }).first();

  await contactLink.click();

  // After the click, the URL should end in contact.html.
  await expect(page).toHaveURL(/contact\.html$/);
});

// --- Lesson 3: is the WhatsApp button wired to the right number? ---
test("WhatsApp floating button has the correct number", async ({ page }) => {
  await page.goto("/");

  const whatsappButton = page.locator(".whatsapp-float");

  // getAttribute reads a raw HTML attribute (here, href) -- useful
  // when you want to check a link's destination without clicking it
  // (clicking would try to open WhatsApp in a new tab).
  const href = await whatsappButton.getAttribute("href");

  expect(href).toContain("wa.me/919846722334");
});
