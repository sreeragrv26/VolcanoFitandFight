# Volcano Fit and Fight

Marketing website for Volcano Fit and Fight, a fitness and combat sports gym.

## Structure

- `index.html` — home page
- `classes.html` — programs and weekly class schedule
- `trainers.html` — coach profiles
- `pricing.html` — membership plans
- `contact.html` — contact info and inquiry form
- `css/styles.css` — shared styles
- `js/main.js` — mobile nav toggle + demo contact form handler
- `images/` — put real photos/logo here

## Running locally

No build step — just open `index.html` in a browser, or serve the folder:

```
npx serve .
```

or

```
python -m http.server 8000
```

## To customize

- Replace placeholder text (gym address, phone, hours, coach bios, pricing) throughout the HTML files.
- Add real photos to `images/` and swap the emoji placeholders in `.person-photo` and hero sections.
- The contact form in `contact.html` doesn't send anywhere yet — wire `js/main.js` up to an email service (e.g. Formspree, EmailJS) or your own backend endpoint.
- Colors and fonts are defined as CSS variables at the top of `css/styles.css`.

## Deploying

Since this is a static site, it can be deployed as-is to Netlify, Vercel, GitHub Pages, or Cloudflare Pages — no server required.
