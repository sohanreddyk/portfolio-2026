# Sohan Reddy — Portfolio v2

Live Link: https://www.sohanreddy.org/

Personal portfolio. Vite + React + Framer Motion.

## Run it

```bash
cd portfolio-v2
npm install
npm run dev
```

Open the printed localhost URL (usually http://localhost:5173).

## Build for production

```bash
npm run build      # outputs to /dist
npm run preview    # preview the production build locally
```

## Editing content

All copy, projects, experience, education, and links live in one file:

    src/data/profile.js

Anything marked `CONFIRM:` is a placeholder / best guess — replace it with the
real value. Everything on the page reads from this file.

## Adding project images

Drop images in `public/projects/` and set the `coverImage` path in
`profile.js`, e.g. `coverImage: "/projects/helmsman.png"`.
Projects with no image show a clean monogram fallback.

## Resume

Put your PDF at `public/Sohan-Reddy-Resume.pdf` (or change `resumeUrl`
in `profile.js` to a Google Drive link).

## Deploy

Works out of the box on Vercel or Netlify — point it at this folder,
framework preset "Vite", build command `npm run build`, output `dist`.
