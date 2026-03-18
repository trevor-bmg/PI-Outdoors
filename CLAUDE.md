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
