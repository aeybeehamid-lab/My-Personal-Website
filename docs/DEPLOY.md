# Deploy your site live (Vercel)

## Fix `npm` on PowerShell (if you see "not digitally signed")

Run once in PowerShell:

```powershell
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```

Or use **Command Prompt (cmd)** instead of PowerShell for `npm run dev`.

---

## Deploy in 5 steps

1. Push latest code to GitHub:
   ```powershell
   git add .
   git commit -m "chore: prepare site for deployment"
   git push
   ```

2. Go to [https://vercel.com](https://vercel.com) → sign up with **GitHub**.

3. **Add New Project** → import **My-Personal-Website**.

4. Settings (should auto-detect):
   - Framework: **Vite**
   - Build command: `npm run build`
   - Output directory: `dist`

5. Click **Deploy**. You get a URL like `my-personal-website.vercel.app`.

Every `git push` to `main` redeploys automatically.

---

## After deploy — checklist

- [ ] Open your live URL on phone and desktop
- [ ] Test **Resume** in the nav (`/resume`) — you should see your full resume on screen
- [ ] Optional: upload `public/cv/resume.pdf` (Print from `/resume` → Save as PDF) for one-click download
- [ ] Add `public/images/profile.jpg`
- [ ] Add LinkedIn URL in `siteContent.js` → `social.linkedin`

---

## Custom domain (later)

Vercel project → **Settings** → **Domains** → add your domain and follow DNS instructions.
