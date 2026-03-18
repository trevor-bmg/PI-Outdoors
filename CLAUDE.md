# PI Outdoors - Shopify Theme

## Client
Pawleys Island Outdoors (PI Outdoors) - managed by Paragon Agency.

## Theme Base
Shopify Dawn v15.4.1 — stock, unmodified. JSON-based Shopify 2.0 architecture.

## Project Structure

```
/assets      — CSS (85), JS (32), SVGs (68), images. No build tools; all static.
/config      — settings_schema.json, settings_data.json
/layout      — theme.liquid, password.liquid
/locales     — 51 locale files (en.default + 30 languages)
/sections    — 54 section files (.liquid + 2 .json group files)
/snippets    — 37 reusable Liquid components
/templates   — 14 templates + 7 customer account templates (all .json)
```

## Key Files

- `layout/theme.liquid` — Main layout wrapper
- `assets/base.css` — Core styles (~3,600 lines)
- `assets/global.js` — Core JS (custom elements, utilities)
- `config/settings_schema.json` — Theme settings definitions
- `config/settings_data.json` — Active theme settings/color schemes

## Architecture Notes

- **No build process.** No package.json, webpack, or preprocessors. Edit files directly.
- **Shopify 2.0 sections everywhere.** Templates are JSON; sections are Liquid with schema blocks.
- **Custom elements pattern.** JS uses Web Components (`customElements.define`) — extend existing classes, don't introduce new patterns.
- **CSS is section-scoped.** Each section loads its own `section-*.css` or `component-*.css` via `stylesheet` tags.
- **Currently stock Dawn.** No custom sections, no custom CSS overrides, no third-party libraries. All customization work starts from this baseline.

## Development Workflow

- Deploy via Shopify CLI (`shopify theme push`) or direct admin upload.
- No git hooks, linters, or CI configured.
- Test changes with `shopify theme dev` for local preview.

## Conventions

- Follow Dawn's existing patterns: Liquid section schemas, BEM-ish CSS class naming, Web Component JS.
- Keep assets static — no transpilation or bundling.
- Liquid files use 2-space indentation.
- Section schemas define all customizer settings inline at bottom of file.

## Brand Guidelines

Reference: `brand-guidelines.html` for full visual spec.

### Color Palette

**Primary:**
- Deep Blue: `#2B4C5C` — primary brand color, dark backgrounds
- Dark Blue: `#1E3A48` — deeper variant for contrast
- Antique Gold: `#C4A24E` — accent, highlights, CTAs
- Cream: `#F2E8D5` — text on dark backgrounds

**Secondary:**
- Midnight: `#152D38` — darkest background tier
- Marsh Green: `#5A7A5E` — earthy accent, CTA alternative
- Sand: `#D6C9AA` — soft neutral
- Driftwood: `#8B7D6B` — muted text, secondary info

**Neutral:**
- Charcoal: `#2C2C2C` — body text on light backgrounds
- Storm: `#6B7F8C` — subdued text, metadata
- Warm White: `#FAF7F2` — light backgrounds

### Typography

Three fonts, strict hierarchy:

1. **Playfair Display** (serif) — Headlines, section titles, hero text. Weights: 700, 900. Fallback: Georgia, 'Times New Roman', serif.
2. **Source Sans 3** (sans-serif) — Body copy, navigation, buttons, captions. Weights: 300, 400, 600. Fallback: 'Helvetica Neue', Arial, sans-serif.
3. **Libre Baskerville** (serif, italic) — Accent only. Taglines, decorative phrases. Always italic, bold (600i or 700i). One instance per page max. Fallback: Georgia, serif.

**Type Scale:** Hero 64px/900, H1 42px/700, H2 32px/700, H3 24px/700, Body 16–18px/400, Caption 13px/400.

### Brand Voice

Knowledgeable, welcoming, straightforward, proud but not loud. Speaks like a trusted local guide — experience-based, not salesy.

- **Do:** Conversational, specific, local. "Stop in and we'll get you set up."
- **Don't:** Corporate jargon, hype, generic retail language. No "premium experience" or "curated selection."

### Design Principles

- Deep Blue + Gold dominate. Cream for text on dark. Warm White for light backgrounds.
- Marsh Green for secondary CTAs and earthy accents.
- Source Sans 3 Semibold uppercase with wide letter-spacing for buttons/CTAs.
- High contrast, clear hierarchy. Heritage feel without being stuffy.
