# Brisk

Brisk portfolio website in Dutch, built with React, Vinext and Sites. Includes the homepage, an expertise page, 17 website projects, all 55 supplied product-design images, an accessible image viewer, mobile navigation and phone contact.

## Development

Node.js 22.13 or later. Run `npm ci` and `npm run dev`. Run `npm run build` for production.

## Content

- `app/page.tsx`: homepage
- `app/expertise/page.tsx`: websites, webshops, custom software and product design
- `app/projects.ts`: all user-supplied portfolio URLs
- `app/brisk-data.ts`: services and approach
- `app/design-assets.json`: supplied design asset index
- `app/site-media.tsx`: portfolio expansion, design lightbox and showreel playback
- `app/brisk.css`: responsive visual styling
- `app/site-header.tsx`: navigation, shared footer and phone contact

The user supplied the logos and 55 design images in Brisk.zip, and named NMBS, Idewe, De Watergroep, RBFA Voetbalbond and Museumpass as clients. Phone: +32 470 070 981. No email address or contact form backend is configured; contact actions use the confirmed telephone number.

## Portfolio images

Website captures were obtained through Microlink on 8 September 2026 and stored locally in `public/brisk/websites`. No visitor-time API request or API key is needed. The capture for Roetfilterlatenreinigen did not render its content, so that project uses a name card and working external link. Some live pages include their own cookie/promotion overlays or incomplete hero animation in their captures. All 17 original URLs remain available.

The product designs in `public/brisk/design` are resized copies of the supplied work, not generated mockups. Logos are supplied SVGs; the favicon uses their original symbol. These design examples do not imply ownership of third-party brands pictured inside them.

## Showreel

`npm run render:hero` renders the 15-second silent Brisk montage with Remotion from three supplied product designs. Source: `motion/BriskShowreel.tsx`. Set `REMOTION_BROWSER_EXECUTABLE` for a Chrome executable outside the default macOS location. The composition loops, respects reduced-motion and data-saving preferences in the site, offers pause/play, and pauses when offscreen or in a hidden tab. Review stills go into the ignored `work/remotion-review` directory.

## Hosting

The original GitHub remote remains `origin`. The existing Sites project is retained in `.openai/hosting.json`; its URL still contains the former brand's slug. Credentials must never be stored in source, Git config or remote URLs.
