# MyStation Landing Page

Product landing page for MyStation e-paper departure board.

## Setup

1. Replace `img/mystation-hero.jpg` with actual product photo
2. Replace the `href="#"` in the "Jetzt bestellen" button with your Stripe Payment Link
3. Deploy to GitHub Pages or Netlify

## Deploy to GitHub Pages

```bash
# Push to GitHub, enable Pages in repo settings (source: main branch, / root)
git remote add origin git@github.com:gogo-boot/mystation-landing.git
git push -u origin main
```

## Local Preview

```bash
# Landing page (static HTML)
python3 -m http.server 8000
```

### Docusaurus Documentation Preview

```bash
cd website
npm install
npm start              # English (default)
npm start -- --locale de   # German
```

Opens at `http://localhost:3000`.

## Stripe Integration

1. Create account at [stripe.com](https://stripe.com)
2. Dashboard → Payment Links → Create
3. Set product name, price (€79), photo
4. Copy the generated URL
5. Replace `href="#"` in the buy button with the Stripe URL

## Links

- [Documentation](https://gogo-boot.github.io/mystation/)
- [Firmware Repository](https://github.com/gogo-boot/mystation)
