# Automation Exercise — Playwright + TypeScript

Full-featured **reimplementation based on the original repository's documented modules**, not a line-by-line port (original Java source archive was inaccessible).

## Includes
- Page Object Model: Home, Login, Signup/Account Information, Products, Contact Us
- UI tests: signup/account deletion, login negative and credential-driven positive, catalog, search, product details, add to cart, contact form and file upload
- Playwright API tests: product list and search
- Cucumber BDD: Signup, Products, Contact Us
- Chromium, Firefox and WebKit; screenshots, traces and videos on failure
- HTML and Allure reporting; GitHub Actions

## Install
```bash
npm install
npx playwright install
```

## Run
```bash
npm test
npm run test:headed
npm run test:ui
npm run report
npm run bdd
npm run allure
```

## Optional credentials
Copy `.env.example` to `.env` and set TEST_EMAIL and TEST_PASSWORD to run positive login.

## Notes
- Registration and Contact Us are live writes to the public demo website; use test-only information.
- Tests were generated but **not executed against the live application** in this environment. Selectors may need adjustments if the site changes, and advertisements can interfere with execution.
- Cucumber uses Chromium by default; Playwright Test handles cross-browser execution.
- Original repository: https://github.com/Dnyaneshwar4298/AutomationExerciseFramework
