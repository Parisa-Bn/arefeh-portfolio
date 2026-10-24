# Arefeh Hokmabadi — editable HTML portfolio

A graphic design portfolio using Arefeh Hokmabadi’s projects and artwork from her supplied PDF.

## Preview

Open `index.html` in your browser, or use VS Code Live Server. Save your changes and refresh the preview.

## Edit your website

All visible text and images are written directly in HTML. No build step is required.

- `index.html`: homepage headline, selected project cards, services, and approach.
- `work.html`: project index, filter buttons, and project cards.
- `about.html`: studio biography and approach.
- `taksa.html`, `iran-chai.html`, `bahman-clinic.html`, `pazh-shoa.html`, `bani-hashem.html`, `cedrus-group.html`, `fara-tejarat-yekta.html`, `arta-medical.html`: individual project stories and galleries.
- `styles.css`: colors in `:root`, fonts, spacing, and responsive layouts.
- `js/main.js`: menu and filtering interactions only; no content editing needed.

### Branding and text

Change the words between HTML tags. Keep the tags and class names. Studio name, email, and location are repeated in each page's header/footer; update them across the HTML files using VS Code's Find in Files (Cmd+Shift+H on Mac). Update both the visible email and `mailto:` links. Edit each page's `<title>` and description in its `<head>` too.

### Images

Put your own images in `assets/`. Change an image's `src="assets/your-image.jpg"` and write an accurate `alt` description. Each project gallery has separate image elements you can customize. Update the project's card on both `index.html` and `work.html` as well as its detail page.

### Add a project

1. Duplicate an existing project HTML file and give it a unique filename.
2. Edit its title, text, images, and metadata.
3. Copy a complete `<a class="project-card" ...>...</a>` block in `index.html` and `work.html`.
4. Set the card's `href` to your new filename and update its text, image, and plate number.
5. On `work.html`, set its `data-category` to match a filter button's `data-filter` exactly. Duplicate a filter button if adding a new category; use `aria-pressed="false"` and omit the `active` class.

`project.html` preserves old `?slug=...` bookmarks and offers project links when JavaScript is disabled. All main pages and project content work without JavaScript; mobile navigation and filtering use JavaScript.

## Publish

Upload this folder to a static host, such as Cloudflare Pages. No framework or build command is needed. Confirm contact details before launch. Artwork extracted from the PDF lives in `assets/portfolio/`; you can replace these WebP images with original high-resolution assets at any time. Fonts currently load from Google Fonts.
