# Career documents — Resume, CV & Cover letter

You have **three document types**. Use the right one for each situation:

| Document | File to edit | When to use |
|----------|--------------|-------------|
| **Resume** | `resume.md` or `public/cv/resume.html` | Job applications (1–2 pages). Most employers want this. |
| **CV (full)** | `cv-full.md` or `public/cv/cv-full.html` | Scholarships, internships, academic or detailed applications |
| **Cover letter** | `cover-letter-template.md` or `public/cv/cover-letter.html` | Customize per company — never send the same letter twice |

## Save as PDF (for your website & email)

1. Run `npm run dev`
2. Open in browser:
   - Resume: http://localhost:5173/cv/resume.html
   - Full CV: http://localhost:5173/cv/cv-full.html
   - Cover letter: http://localhost:5173/cv/cover-letter.html
3. Press **Ctrl+P** → **Save as PDF**
4. For the website download button, save the resume PDF as:
   - `public/cv/resume.pdf`

## Customize the cover letter

1. Open `cover-letter-template.md` or `cover-letter.html`
2. Replace every `[BRACKET]` with the real company and role
3. Save a copy per application, e.g. `cover-letter-Siemens-2026.pdf`

## Keep in sync

When you update jobs or projects, edit:

- `src/content/siteContent.js` (website)
- `docs/career/resume.md` and `cv-full.md` (documents)

Or ask in chat: “sync my resume with siteContent.”
