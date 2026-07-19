# Christian Staresina — Portfolio

Personal portfolio site built with [Astro](https://astro.build/) using the
**Signal** design system: navy technical layout, simple menu, and dark/light
mode. Includes Home, Resume, and Hobbies, plus a link to
[Christian Staresina Prints](https://christianstaresinaprints.com).

## Local development

Requires Node.js 22 or newer.

```sh
npm install
npm run dev
```

Astro starts the local site at `http://localhost:4321`.

Optional design mockups (Forge / Field / Signal) remain at
`http://localhost:4321/variants/` for comparison.

## Quality checks

```sh
npm run check
npm run build
```

The production site is generated in `dist/`. Preview it locally with
`npm run preview`.

## Deployment

The `main` branch is the production branch. Cloudflare Pages builds new
commits pushed to GitHub with:

- Framework preset: Astro
- Build command: `npm run build`
- Build output directory: `dist`
- Pages URL: <https://portfolio-2u5.pages.dev>

The custom domain will be connected in Cloudflare Pages after content is
finalized.
