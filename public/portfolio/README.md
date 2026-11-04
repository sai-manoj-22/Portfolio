# G SAI MANOJ GOUD — Portfolio

A futuristic, multi-page personal portfolio built with **HTML5, CSS3 and vanilla JavaScript**, using **Three.js** (hero 3D particles) and **Lucide** icons. No frameworks, no build step — ready for GitHub Pages.

## Structure

```
portfolio/
├── index.html            Home (hero, overview, featured project)
├── about.html            About me & career objective
├── skills.html           Skills, currently learning, coursework
├── projects.html         Intelli-Helmet case study
├── education.html        Academic timeline
├── certifications.html   Oracle certification
├── experience.html       Leadership (Vice Chair)
├── dashboard.html        Interactive developer dashboard
├── contact.html          Contact details + form
├── 404.html              Custom 404 page
├── .nojekyll
└── assets/
    ├── css/main.css      Design system + all styles
    ├── js/site.js        Shared header/footer, links (PROFILE), animations
    ├── js/hero.js        Typed text + Three.js scene (home only)
    ├── js/dashboard.js   Dashboard tabs + platform links
    ├── js/contact.js     Form validation + Formspree / mailto fallback
    ├── img/profile.webp  Profile photo (+ profile.jpg fallback)
    ├── img/favicon.svg
    └── docs/G_SAI_MANOJ_GOUD_Resume.pdf
```

## Run locally

Open with any static server (ES modules need http, not file://):

```bash
cd portfolio
python3 -m http.server 5500
# visit http://localhost:5500
```

## Push to GitHub

```bash
cd portfolio
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin https://github.com/sai-manoj-22/portfolio.git
git push -u origin main
```

(Create an empty repository named `portfolio` on GitHub first. Name it `sai-manoj-22.github.io` to serve it at the root domain.)

## Deploy on GitHub Pages

1. Repository → **Settings → Pages**.
2. Source: **Deploy from a branch**, Branch: `main`, folder `/ (root)` → Save.
3. After ~1 minute the site is live at `https://sai-manoj-22.github.io/portfolio/`.

All paths are relative, so it works under a repository sub-path. GitHub Pages serves `404.html` automatically for missing pages.

## Replace the profile photo

Replace `assets/img/profile.webp` and `assets/img/profile.jpg` with a portrait (about 800×1200, subject centred, darker plain background blends best). Keep the same file names.

## Update links & details

- Social links, email, phone and resume path: edit the `PROFILE` object at the top of `assets/js/site.js` — header, footer, buttons and dashboard update everywhere.
- Projects: edit `projects.html` (case study) and the "Featured project" block in `index.html`. Copy an `<article class="card proj-block reveal">` block to add a new section.
- Resume: replace `assets/docs/G_SAI_MANOJ_GOUD_Resume.pdf` with the same file name.

## Enable direct form sending (Formspree)

1. Create a free form at https://formspree.io and copy its ID (e.g. `xyzabcd`).
2. Set `const FORMSPREE_ID = "xyzabcd";` in `assets/js/contact.js`.

Without an ID, the form validates input and then opens the visitor's email app with the message pre-filled — it never claims a message was sent.
