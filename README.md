# Christian Staresina — Portfolio

A professional personal portfolio built with [Astro](https://astro.build/).
The first release is a focused landing page linking to
[Christian Staresina Prints](https://christianstaresinaprints.com), with room
to add résumé, skills, projects, hobbies, and interests later.

## Local development

Requires Node.js 22 or newer.

```sh
npm install
npm run dev
```

Astro starts the local site at `http://localhost:4321`.

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

The custom domain will be connected in Cloudflare Pages after the design is
approved.
