# SafeCare Transportation — Website

Standalone static website for a non-emergency medical transportation brand serving Elkhart, Indiana and nearby Northern Indiana communities.

## Focus

- Non-emergency medical appointment transportation
- Senior rides and caregiver-coordinated transportation
- Dialysis, therapy, rehab, discharge, and return trip planning
- Facility and care coordinator ride intake

## Tech Stack

- Plain HTML, CSS, and JavaScript
- No build tools required
- Local preview with any static file server

## Local Preview

```bash
python3 -m http.server 8080
```

Then open `http://localhost:8080/`.

## Cloudflare Pages

This is a static site and does not need a build step.

- Framework preset: `None` or static HTML
- Build command: leave blank
- Build output directory: `/`
- Root directory: repository root

After the project is connected to GitHub, Cloudflare Pages can deploy directly from the `main` branch.

## Launch Notes

- Replace the demo form behavior in `src/js/booking.js` with Formspree, Cloudflare Forms, or another intake tool before relying on online submissions.
- Add the final domain to metadata and sitemap once the domain is chosen.
- Confirm whether the public brand should be `SafeCare Transport` or `SafeCare Transportation` before final launch.

## Pages

- `/index.html` — Homepage and medical ride request
- `/src/pages/services.html` — Service overview
- `/src/pages/nemt.html` — Medical appointment transportation
- `/src/pages/senior.html` — Senior transportation
- `/src/pages/facilities.html` — Facility coordination
- `/src/pages/contact.html` — Medical ride intake form
