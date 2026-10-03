# Ms Bee Educational Support

Website for Ms Bee Educational Support — tutoring, summer camp, and daycare — built with Next.js 15 (App Router), TypeScript, Tailwind CSS v4, and Framer Motion.

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
| `/` | Animated hero, stats counters, program cards, testimonials carousel, gallery preview, FAQ |
| `/tutoring` | Subjects, how it works, pricing plans, tutoring FAQ |
| `/summer-camp` | Interactive weekly theme picker, daily schedule, tuition |
| `/daycare` | Classrooms by age group, daily routine, features |
| `/about` | Story, team, values |
| `/gallery` | Filterable gallery with keyboard-navigable lightbox |
| `/contact` | Enrollment/contact form (`?program=tutoring\|camp\|daycare` preselects a program) |

## Editing content

All text — contact info, hours, programs, camp weeks, prices, FAQs, testimonials, team, gallery — lives in
[`src/lib/data.ts`](src/lib/data.ts). Gallery tiles are emoji placeholders; swap them for real photos in `public/images/`.

## Contact form

The form validates in the browser and posts to `POST /api/contact` ([`src/app/api/contact/route.ts`](src/app/api/contact/route.ts)),
which validates again with the same rules (`src/lib/validation.ts`). Right now the route only logs each submission on the server.
To receive inquiries by email, replace the `TODO` in the route with a call to an email service such as Resend or SendGrid.
