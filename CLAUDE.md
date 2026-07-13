# More Timely Data Prototype

A GOV.UK Prototype Kit project for the Department for Education's **More Timely Data** service.

## Stack

- **GOV.UK Prototype Kit** v13.20.1 — Node.js/Express, Nunjucks templating
- **govuk-frontend** v6.2.0 — GOV.UK Design System components and styles
- **dfe-frontend** v2.0.1 — DfE Design System components layered on top of GOV.UK
- Views live in `app/views/`, routes in `app/routes.js`, session defaults in `app/data/session-data-defaults.js`

## Running locally

```bash
npm run dev
```

## Design system rules

### GOV.UK Design System (primary)

- Use GOV.UK Design System components by default: https://design-system.service.gov.uk
- All markup must use `govuk-` prefixed classes (e.g. `govuk-button`, `govuk-input`, `govuk-grid-row`)
- Use Nunjucks macros for components wherever possible — never hand-roll HTML for things that have a macro (buttons, inputs, error summaries, breadcrumbs, etc.)
- Follow GOV.UK typography scale: `govuk-heading-xl/l/m/s`, `govuk-body`, `govuk-body-s`
- Spacing must use GOV.UK spacing overrides: `govuk-!-margin-*`, `govuk-!-padding-*` — no custom CSS spacing
- Page titles must follow the pattern: `[Page name] – [Service name] – GOV.UK`
- Every page must have a single `<h1>`
- Error handling must use the GOV.UK error summary component at the top of the page linked to individual field errors

### DfE Design System (supplementary)

- Use DfE-specific components from `dfe-frontend` when they are a better fit than the GOV.UK equivalent — DfE components use `dfe-` prefixed classes
- DfE design system reference: https://design.education.gov.uk
- The DfE header/footer patterns should be used where the DfE branding is required rather than the standard GOV.UK crown header
- Do not mix `dfe-` and `govuk-` classes for the same component — pick one

### General frontend rules

- Do not write custom CSS unless there is no GOV.UK or DfE utility class that achieves the same result
- Do not use inline styles
- All interactive elements must be keyboard accessible and meet WCAG 2.2 AA
- Use `govuk-visually-hidden` for screen-reader-only text rather than `display:none` or `visibility:hidden`
- Links within body copy must use `govuk-link` class

## Prototype-specific conventions

- Session data is stored via the prototype kit's built-in session; set defaults in `app/data/session-data-defaults.js`
- Routes go in `app/routes.js`; keep route handlers thin — no business logic
- New pages go under `app/views/` as `.html` files (Nunjucks)
- Extend `layouts/main.html` for all pages
- Service name is configured in `app/config.json` — reference it in templates as `{{ serviceName }}`
- This is a prototype, not production code — focus on clarity and speed of iteration over robustness
