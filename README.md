# Nikhil Tiwari — Backend Engineer Portfolio

A cinematic, recruiter-ready portfolio built with Next.js. Opens with a welcome gate and hero intro video, then scrolls through experience, projects, skills, and contact details.

**Live site:** [nikhiltiwari.netlify.app](https://nikhiltiwari.netlify.app)

## Features

- **Portfolio gate** — Full-screen welcome overlay with a single click-to-enter action
- **Cinematic hero** — Intro video with play/pause, mute controls, and a poster frame after playback ends
- **Mobile-friendly playback** — Video starts on the same tap/click that dismisses the gate; falls back to muted playback with a "Tap for sound" prompt when the browser blocks audio
- **Professional sections** — About, skills, experience, projects, education, resume, and contact
- **SEO & sharing** — Open Graph metadata, Twitter cards, and JSON-LD structured data
- **Motion & effects** — GSAP scroll reveals and a lightweight Three.js particle layer

## Tech stack

- [Next.js 16](https://nextjs.org/) (App Router)
- [React 19](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS 4](https://tailwindcss.com/)
- [GSAP](https://gsap.com/) — hero and scroll animations
- [Three.js](https://threejs.org/) — ambient particle background

## Quick start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start the development server |
| `npm run build` | Create a production build |
| `npm start` | Serve the production build |
| `npm run lint` | Run ESLint |

## Customize content

Most copy and data lives in a single file:

**`lib/portfolio/profile.ts`** — name, headline, contact links, skills, experience, projects, and education.

Hero-specific settings are in **`lib/cinematic/config.ts`** — video path, poster image, end trim, and on-screen name/role text.

### Replace media assets

| Asset | Path | Notes |
|-------|------|-------|
| Intro video | `public/nikhilPortfolioIntro.mp4` | Keep file size reasonable for mobile (~2–5 MB) |
| Hero still (after video) | `public/hero-poster.png` | Also used for Open Graph / social previews |
| Resume PDF | `public/resume.pdf` | Optional local copy; profile also links to an external URL |

## Project structure

```
app/                  # Next.js App Router (layout, page, global styles)
components/
  cinematic/          # Hero video intro and particle layer
  layout/             # Site navigation and footer
  PortfolioGate/      # Welcome overlay
  sections/           # About, skills, experience, projects, etc.
  seo/                # JSON-LD structured data
lib/
  portfolio/          # Profile and section content
  cinematic/          # Hero video configuration
  utils/              # Shared helpers
public/               # Static assets (video, images, resume)
```

## Environment variables

| Variable | Required | Description |
|----------|----------|-------------|
| `NEXT_PUBLIC_SITE_URL` | Recommended for production | Canonical site URL for Open Graph, Twitter cards, and JSON-LD |

Example:

```bash
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

If unset, the app defaults to `https://nikhiltiwari.netlify.app`.

## Deploy

### Vercel

1. Push the repo to GitHub
2. Import the project on [vercel.com](https://vercel.com)
3. Set `NEXT_PUBLIC_SITE_URL` to your production domain
4. Deploy

### Netlify

1. Connect the GitHub repo on [netlify.com](https://netlify.com)
2. Build command: `npm run build`
3. Publish directory: `.next` (or use the Netlify Next.js adapter)
4. Set `NEXT_PUBLIC_SITE_URL` to your production domain

## Mobile video behavior

Mobile browsers (especially Chrome) only allow **unmuted** video playback when `play()` runs synchronously inside a user tap or click. The app handles this by:

1. Starting playback immediately when the gate button is clicked
2. Avoiding delayed/async playback retries that fall outside the user gesture
3. Falling back to muted playback and showing **"Tap for sound"** if audio is still blocked

If you replace the intro video, use an MP4 with H.264 video and AAC audio for the widest mobile support.

## LinkedIn

Add your live URL to LinkedIn **Featured** or **Contact info → Website** so recruiters land on the full portfolio experience.

## License

Private portfolio project. All rights reserved.
