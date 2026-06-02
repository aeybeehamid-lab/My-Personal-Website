# Deploy your site live (Vercel)

**Live URL:** [https://my-personal-website-xi-nine.vercel.app/](https://my-personal-website-xi-nine.vercel.app/)

**GitHub:** [github.com/aeybeehamid-lab/My-Personal-Website](https://github.com/aeybeehamid-lab/My-Personal-Website)

---

## Is the latest code actually live? (30-second test)

Open these two URLs in your browser:

1. [https://my-personal-website-xi-nine.vercel.app/build-version.txt](https://my-personal-website-xi-nine.vercel.app/build-version.txt)  
   **Must say:** `Site build: 2026-06-01-cv-resume-v3`

2. Scroll to the **footer** on the home page  
   **Must say:** `build 2026-06-01-cv-resume-v3`

If either is **missing or different**, Vercel is still serving an **old build** — follow **“Fix stale deployment”** below.

**View page source** (Ctrl+U on home page) and search for:

`site-build" content="2026-06-01-cv-resume-v3"`

---

## Deploy new changes (every time)

```powershell
cd "c:\Users\Abdulhamid\Documents\Website 1.1"
git add .
git commit -m "describe your change"
git push
```

Wait 1–3 minutes. Hard refresh: **Ctrl+Shift+R**.

---

## Fix stale deployment (fixes “went off” / old site)

Your code on GitHub is correct. Vercel is often pointed at the **wrong commit** or **wrong project**.

### A — Check the deployment commit

1. Vercel → project **my-personal-website-xi-nine**
2. **Deployments** → click the top row
3. Read the **commit message**. It should be recent, e.g. `chore: add deploy tag` or newer
4. If it shows an **old** message → **Redeploy** is not enough. Do **B** or **C**.

### B — Fix Git connection

**Settings → Git**

| Setting | Correct value |
|---------|----------------|
| Repository | `aeybeehamid-lab/My-Personal-Website` |
| Production Branch | `main` |
| Root Directory | *(empty)* |

**Settings → General → Build & Development**

| Setting | Value |
|---------|--------|
| Framework Preset | Vite |
| Build Command | `npm run build` |
| Output Directory | `dist` |
| Install Command | `npm install` |

Then: **Deployments** → **Create Deployment** → branch **main** → Deploy (disable build cache if asked).

**If deploy fails with `rewrites[0] should NOT have additional property handle`:**  
Your `vercel.json` must not use `"handle": "filesystem"`. Use the simple rewrite in the repo (already fixed). Push to GitHub and redeploy.

### C — Deploy from your PC (bypasses wrong Git link)

One-time install:

```powershell
npm install -g vercel
```

Login and deploy:

```powershell
cd "c:\Users\Abdulhamid\Documents\Website 1.1"
vercel login
vercel link
vercel --prod
```

Follow prompts. Link to the **xi-nine** project when asked. This uploads your **local** folder directly.

### D — Only one Vercel project

Use **one** production URL. Delete or ignore extra projects so you do not open an old link by mistake.

---

## What the working site should show

| Check | Expected |
|-------|----------|
| Nav | **CV & Resume** |
| `/resume` | Tabs: **Resume** + **Full CV** |
| Home hero button | **CV & Resume** |
| Footer | `build 2026-06-01-cv-resume-v3` |
| `/build-version.txt` | `Site build: 2026-06-01-cv-resume-v3` |
| Cover letters | Not on site |

---

## PDF files

After deploy works, add locally and push:

- `public/cv/resume.pdf`
- `public/cv/cv-full.pdf`

Then **Download resume** / **Download full CV** buttons appear on `/resume`.
