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
| `/` | Animated hero, program cards, programs at a glance, teaching approach, gallery preview, FAQ |
| `/programs` | Programs: focus group, one-to-one, VIP intensive, online class |
| `/early-years` | Early Years Readiness Program options, learning areas, daycare inquiry |
| `/summer-camp` | Interactive weekly theme picker and camp activities |
| `/books` | Ms Bee Activity Books: infinite-scroll cover marquee, filterable 3D-tilt bookshelf, details view, order on WhatsApp |
| `/about` | Introduction, vision, mission, core values, teaching approach, future goals |
| `/gallery` | Filterable gallery with keyboard-navigable lightbox |
| `/contact` | Phones, WhatsApp, directions, and an enrollment form (`?program=vip` etc. preselects a program) |

`/tutoring` and `/daycare` redirect to `/programs` and `/early-years`.

## Editing content

All text — contact info, programs, camp themes, values, FAQs, gallery — lives in
[`src/lib/data.ts`](src/lib/data.ts). Real photos live in `public/photos/`; add a `photo` path to a `gallery` entry to show it (photo tiles span two rows). Remaining emoji tiles are placeholders.

## Contact form → Google Sheet

The form validates in the browser and posts to `POST /api/contact` ([`src/app/api/contact/route.ts`](src/app/api/contact/route.ts)),
which validates again with the same rules (`src/lib/validation.ts`) and then adds the registration as a row in a Google Sheet,
via a small Apps Script web app ([`scripts/google-sheets/Code.gs`](scripts/google-sheets/Code.gs)).
If the sheet can't be reached, the parent is asked to call or WhatsApp instead of being told it worked.

One-time setup:

1. Create a Google Sheet (e.g. "Ms Bee Registrations") in the center's Google account.
2. In the sheet: **Extensions → Apps Script**. Replace the editor contents with `scripts/google-sheets/Code.gs` and save.
3. **Project Settings (gear) → Script Properties → Add property**: name `SECRET`, value a long random string
   (any password generator; keep it private).
4. **Deploy → New deployment →** type **Web app**. Execute as: **Me**. Who has access: **Anyone**. Deploy, approve the
   permissions prompt, and copy the **Web app URL** (ends in `/exec`).
5. In Vercel → `msbee-website` → **Settings → Environment Variables**, add for Production and Preview:
   - `GOOGLE_SHEETS_WEBHOOK_URL` = the Web app URL
   - `GOOGLE_SHEETS_WEBHOOK_SECRET` = the same value as `SECRET`
6. Redeploy, send a test registration, and check the **Registrations** tab.

Registrations go on the **Registrations** tab. The script finds the heading row (the one with "Parent name"), matches columns by heading, and fills the first empty numbered row, keeping the sheet's numbering, formatting and Status dropdowns (set to `New` when the dropdown has that option). On an empty tab it creates a simple heading row.
If you edit the script later, use **Deploy → Manage deployments → Edit → New version** so the URL stays the same.
Without the two variables, production refuses the form (asking parents to call) and local dev just logs it.

## Deployment

The Vercel project `msbee-website` is connected to this repo, so pushing to the production branch deploys to msbee.org.
