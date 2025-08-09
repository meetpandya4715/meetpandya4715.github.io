# meetpandya4715.github.io

Personal GitHub Pages site for Meet Pandya — Computer Vision Engineer.

Contents are static (no build step). The site is optimized for performance, accessibility, and includes a dark/light theme toggle.

## Structure

- `index.html`: Main page with About, Skills, Experience, Publications, Education, and Contact
- `assets/css/styles.css`: Styles with theme variables
- `assets/js/main.js`: Theme toggle and small enhancements
- `Meet Pandya_Resume_20250525.pdf`: Resume (PDF)
- `.nojekyll`: Prevents Jekyll processing on GitHub Pages
- `robots.txt` and `sitemap.xml`: Basic SEO

## Local preview

Open `index.html` directly in your browser, or use a simple server:

```bash
python -m http.server 8000
# then visit http://localhost:8000
```

## Deploy to GitHub Pages

You have two options. The recommended path uses GitHub CLI. For user/organization sites, GitHub Pages serves from the root of the default branch automatically.

### Option A: Using GitHub CLI

Requirements: `git`, `gh` (logged in: `gh auth login`).

```powershell
Set-Location E:\CursorTestProjects\DemoProject1
git init -b main
git add .
git commit -m "Initial commit: Meet Pandya GitHub Pages site"
gh repo create meetpandya4715.github.io --public --source . --remote origin --push --confirm
```

### Option B: Manual on GitHub.com

1. Create a public repository named `meetpandya4715.github.io` under your GitHub account.
2. Then push locally:

```powershell
Set-Location E:\CursorTestProjects\DemoProject1
git init -b main
git remote add origin https://github.com/meetpandya4715/meetpandya4715.github.io.git
git add .
git commit -m "Initial commit: Meet Pandya GitHub Pages site"
git push -u origin main
```

After pushing, GitHub Pages will serve the site at `https://meetpandya4715.github.io/` within a minute or two.


