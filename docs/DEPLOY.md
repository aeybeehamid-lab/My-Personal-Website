# Deploy your site live (Vercel)

**Your site:** [https://my-personal-website-xi-nine.vercel.app/](https://my-personal-website-xi-nine.vercel.app/)

**Your GitHub repo:** `https://github.com/aeybeehamid-lab/My-Personal-Website`

Vercel only shows what is on GitHub `main`. Clicking **Redeploy** without pushing code does **not** add new fixes.

---

## Deploy new changes (every time)

```powershell
cd "c:\Users\Abdulhamid\Documents\Website 1.1"
git add .
git commit -m "describe your change"
git push
```

Wait 1–3 minutes. In Vercel → **Deployments** → latest should be **Ready**.

Hard refresh the site: **Ctrl+Shift+R**.

---

## Check the live site is the latest version

Scroll to the **footer**. You should see:

`build 2026-06-01-cv-resume`

If that line is **missing** or shows an old tag, Vercel is not building your latest GitHub code.

---

## Fixes disappeared after redeploy?

Usually one of these:

### 1. Code never reached GitHub

```powershell
git status
git log -1 --oneline
git push
```

Latest commit on GitHub should match your work (e.g. `refactor: CV and resume only`).

### 2. Wrong Vercel project or repo

Vercel → **Settings** → **Git**:

| Setting | Must be |
|---------|---------|
| Repository | `aeybeehamid-lab/My-Personal-Website` |
| Production Branch | `main` |
| Root Directory | empty (project root) |
| Build Command | `npm run build` |
| Output Directory | `dist` |

### 3. Redeployed an old deployment

In **Deployments**, open the top one and check the **commit message**.

- Good: `refactor: CV and resume only` or newer  
- Bad: old commit → click **⋯** on latest GitHub deployment → **Redeploy**  
- Or: **Deployments** → **Create Deployment** → branch `main` → deploy

Turn **off** “Use existing Build Cache” if offered.

### 4. Two Vercel projects

You may have:

- `my-personal-website-git-main-...vercel.app` (old)  
- `my-personal-website-xi-nine.vercel.app` (new)

Use **one** project linked to GitHub. Delete or ignore the other so you are not confused.

### 5. Force a fresh deploy

```powershell
git commit --allow-empty -m "chore: trigger Vercel redeploy"
git push
```

---

## What you should see when it works

| Check | URL |
|-------|-----|
| Nav says **CV & Resume** | [home](https://my-personal-website-xi-nine.vercel.app/) |
| Two tabs: Resume + Full CV | [/resume](https://my-personal-website-xi-nine.vercel.app/resume) |
| Footer build tag | `build 2026-06-01-cv-resume` |
| No cover letters in nav | — |

---

## Fix `npm` on PowerShell

```powershell
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```

Or use **Command Prompt (cmd)** for `npm run dev`.

---

## PDF downloads

Add files locally, then push:

- `public/cv/resume.pdf`
- `public/cv/cv-full.pdf`
