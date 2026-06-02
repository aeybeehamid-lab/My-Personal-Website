# How to update your website content

**One file controls almost everything:** `src/content/siteContent.js`

Edit it in Cursor, save, and the browser will refresh automatically (`npm run dev`).

---

## Quick checklist

| What you want | Where to change |
|---------------|-----------------|
| Name, email, tagline | `personal` |
| About story | `about.paragraphs` |
| Projects | `projects` array |
| Jobs / internships | `experience` |
| Skills | `skills` |
| School & certs | `education`, `certifications` |
| GitHub, LinkedIn | `social` |
| Home page featured projects | `featuredProjectSlugs` |

---

## Adding your photo

1. Save your photo as `public/images/profile.jpg`
2. In `siteContent.js`, set `personal.photo` to `'/images/profile.jpg'`

Supported formats: `.jpg`, `.png`, `.webp`

---

## CV & Resume on the website

- **View on site:** nav → **CV & Resume** (tabs: Resume | Full CV)
- **Download buttons** appear when these files exist:
  - `public/cv/resume.pdf`
  - `public/cv/cv-full.pdf`

To create PDFs: open each tab → **Save as PDF** → save with the filenames above → `git push`

---

## Adding project images

1. Put images in `public/images/projects/`  
   Example: `public/images/projects/inverter.jpg`
2. Match the path in each project’s `image` field, e.g. `'/images/projects/inverter.jpg'`

If the image file is missing, the site still works — it shows a styled placeholder.

---

## Social links

Fill in URLs in `social`. Leave as `''` to hide that icon.

```js
social: {
  github: 'https://github.com/yourusername',
  linkedin: 'https://linkedin.com/in/yourprofile',
},
```

---

## Phone number on the site

By default `personal.showPhone` is `false` (recommended for public sites).

Set `showPhone: true` if you want the number on the Contact page.

---

## Adding a new project

Copy an existing object in `projects` and change `slug` (unique, lowercase-with-dashes):

```js
{
  slug: 'my-new-project',
  title: 'My New Project',
  status: 'completed',
  shortDescription: 'One line for cards.',
  description: 'Longer text on the projects page.',
  tags: ['Tag1', 'Tag2'],
  image: '/images/projects/my-new-project.jpg',
  links: { demo: '', github: '', writeup: '' },
  highlights: ['What you did', 'Outcome'],
},
```

To show it on the home page, add `'my-new-project'` to `featuredProjectSlugs`.

---

## Need help?

Ask in chat: “update siteContent for …” and we’ll do it together.
