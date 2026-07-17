# Michael Gilsinan Personal Website

A clean Astro website for `michaelgilsinan.com`, designed for GitHub Pages.

The site intentionally avoids confidential or overly specific employment details. It presents Michael Gilsinan as Director, Strategic Projects and highlights broad work across technology leadership, analytics/data platforms, construction technology, product-minded software, the Stack exercise app, and prior music education business ownership.

## What is included

- Astro static site
- Responsive one-page portfolio
- SEO, canonical URL, Open Graph, and social preview metadata
- Custom domain file for `michaelgilsinan.com`
- GitHub Pages deployment workflow
- Setup notes for GitHub Pages and DNS

## Local setup

Install dependencies:

```bash
npm install
```

Run the local development server:

```bash
npm run dev
```

Build the production site:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Update personal links

Before publishing, update these placeholder links in `src/pages/index.astro`:

- `https://github.com/`
- `https://www.linkedin.com/`
- `hello@michaelgilsinan.com`

Replace them with the preferred GitHub profile, LinkedIn profile, and contact email.

## Publish with GitHub Pages

1. Create a GitHub repository for the site. For a personal site, either name works:
   - `michaelgilsinan.com`
   - `<your-github-username>.github.io`
2. Copy these project files into the repository.
3. Commit and push to the `main` branch.
4. In GitHub, open the repository settings.
5. Go to **Pages**.
6. Under **Build and deployment**, choose **GitHub Actions**.
7. Push a change or run the workflow manually from the **Actions** tab.

The workflow in `.github/workflows/deploy.yml` builds the Astro site and publishes the `dist` folder to GitHub Pages.

## Connect `michaelgilsinan.com`

This project includes `public/CNAME`, so GitHub Pages will keep the custom domain set to:

```text
michaelgilsinan.com
```

In the DNS provider for `michaelgilsinan.com`, add these records for the apex domain:

```text
A     @     185.199.108.153
A     @     185.199.109.153
A     @     185.199.110.153
A     @     185.199.111.153
```

For `www.michaelgilsinan.com`, add:

```text
CNAME www   <your-github-username>.github.io
```

After DNS updates propagate, return to the GitHub repository's **Pages** settings and confirm:

- Custom domain: `michaelgilsinan.com`
- Enforce HTTPS: enabled

## Project structure

```text
.
├── .github/workflows/deploy.yml
├── public/
│   ├── CNAME
│   ├── favicon.svg
│   ├── og.png
│   └── site.webmanifest
├── src/
│   ├── components/
│   ├── layouts/
│   ├── pages/
│   └── styles/
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

## Content guardrails

The current copy keeps private product plans, internal system names, and overly specific job metrics out of the public site. Keep future updates similarly broad unless the information is ready to be public.
