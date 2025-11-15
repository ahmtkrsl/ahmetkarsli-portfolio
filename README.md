# Ahmet Portfolio

English single-page portfolio inspired by yasinerendursun.com. Built with Vite + React + TypeScript + Tailwind CSS. All content is sourced from Ahmet Furkan Karslı’s CV (`Ahmet_Furkan_Karsli_CV3.pdf`).

## Scripts

```bash
npm install
npm run dev
npm run build
npm run preview
```

## Structure

- `src/data/profile.ts`: Single source of truth for hero summary, stacks, services, works, testimonials, timeline, and education data.
- `src/sections/*`: Page sections mirroring the reference site (hero, stacks, works gallery, solutions suite, testimonials, workflow, timeline).
- `src/components/*`: Shared UI primitives (navbar, footer, headings).

## Notes

- Tailwind config already set up; fonts pulled from Google Fonts (`Space Grotesk`).
- No API keys or dynamic data required. All values can be customized from `profile.ts`.
- When running locally for the first time, delete `node_modules` if present from other projects to avoid conflicts and then run `npm install`.

## Deployment (GitHub Pages + ahmetkarsli.com)

1. Push this folder to GitHub (for example `github.com/ahmetfkarsli/ahmet-portfolio`).
2. In repo settings → Pages, pick **GitHub Actions** and add a workflow that runs `npm install`, `npm run build`, and deploys the `dist` directory (GitHub suggests a ready Vite workflow).
3. After the first successful run, site is reachable at `https://<kullanıcı>.github.io/ahmet-portfolio/`.
4. To use the custom domain `ahmetkarsli.com`:
   - Buy/renew the domain at your registrar.
   - In DNS records add a `CNAME` pointing `www.ahmetkarsli.com` to `<kullanıcı>.github.io` and (optional) `A` records for the apex domain that GitHub Pages documents (185.199.108.153, .154, .155, .156).
   - Add a `CNAME` file at repo root containing `ahmetkarsli.com` and enter the same domain under Pages → Custom domain.
   - Wait for DNS propagation (usually minutes) and GitHub will auto-provision HTTPS.

With this setup hosting remains free; yalnızca domain için registrar’a yıllık ücret ödersin.

