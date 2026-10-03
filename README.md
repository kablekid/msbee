# Ms Bee Educational Support

Website for Ms Bee Educational Support and Tutorial Center (Torhailoch, Addis Ababa), live at https://msbee.org. Built with Next.js 15 (App Router), TypeScript, Tailwind CSS v4, and Framer Motion.

## Getting started

```bash
npm install
npm run dev     # http://localhost:3000
npm run build && npm start   # production
npm run lint
```

## Pages

| Route | Contents |
| --- | --- |
| `/` | Animated hero, program cards, fees at a glance, teaching approach, gallery preview, FAQ |
| `/programs` | Full price list: focus group, one-to-one, VIP intensive, online class |
| `/early-years` | Early Years Readiness Program fees, learning areas, daycare inquiry |
| `/summer-camp` | Interactive weekly theme picker and camp activities |
| `/books` | Ms Bee Activity Books: filterable 3D-tilt bookshelf, details view, order on WhatsApp |
| `/about` | Introduction, vision, mission, core values, teaching approach, future goals |
| `/gallery` | Filterable gallery with keyboard-navigable lightbox |
| `/contact` | Phones, WhatsApp, directions, and an enrollment form (`?program=vip` etc. preselects a program) |

`/tutoring` and `/daycare` redirect to `/programs` and `/early-years`.

## Editing content

All text — contact info, programs and fees (ETB), camp themes, values, FAQs, gallery — lives in
[`src/lib/data.ts`](src/lib/data.ts). Gallery tiles are emoji placeholders; swap them for real photos in `public/images/`.

## Contact form

The form validates in the browser and posts to `POST /api/contact` ([`src/app/api/contact/route.ts`](src/app/api/contact/route.ts)),
which validates again with the same rules (`src/lib/validation.ts`). Right now the route only logs each submission on the server.
To receive inquiries by email, replace the `TODO` in the route with a call to an email service such as Resend or SendGrid.

## Deployment

The Vercel project `msbee-website` is connected to this repo, so pushing to the production branch deploys to msbee.org.
