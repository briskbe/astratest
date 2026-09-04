# Armatex

Dutch-language website for Armatex, built with React, Vinext and the Sites starter. The design uses deep navy, lime accents, three generated architectural mood images, an expandable image gallery, and two silent video montages. The visuals are illustrative; they are not presented as completed Armatex projects.

## Local development

Requires Node.js 22.13 or later.

```sh
npm ci
npm run dev
```

## Production build

```sh
npm run build
```

## Content

- Main page and copy: `app/page.tsx`
- Service descriptions and mobile navigation: `app/site-interactions.tsx`
- Brand styling and responsive layouts: `app/globals.css` and `app/media.css`
- Accessible image gallery and video players: `app/site-media.tsx`
- Video asset paths: `app/media-assets.ts`
- Page title and description: `app/layout.tsx`

Company contact details, operating region, and confirmed service scope have not yet been provided. The private preview uses draft service copy and clearly states that contact details are forthcoming. Replace that message with verified contact information before public launch. No enquiries are collected or sent. No fictional testimonials, project history, or certifications are included.

The original GitHub remote is retained as `origin`. Hosting metadata is in `.openai/hosting.json`. Credentials must never be added to source or Git configuration.

## Visuals and video

Images were created using the built-in image generation tool. The 18-second hero loop is rendered with Remotion from two new GPT Image 2 architectural images, with cyclic camera movement, light sweeps and crossfades. The 19-second atmosphere film is a montage of generated still images. Both are encoded as silent H.264 MP4s. They are not synthesized moving scenes. All media is served locally, with no third-party video embeds, trackers, or additional account requirement. The hero respects reduced-motion and data-saving preferences, offers pause/play, and pauses offscreen or in a hidden tab. The atmosphere film loads and plays only after a visitor starts it; native video controls then remain available.

Rebuild the hero with `npm run render:hero` (Google Chrome on macOS, or set `REMOTION_BROWSER_EXECUTABLE`). The composition is in `motion/ArmatexLight.tsx`; review frames are written to `work/remotion-review`. After changing the opening frame, copy `frame-0.jpg` to `public/images/armatex-light-poster.jpg`.
