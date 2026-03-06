# Ahmet Furkan Karslı – Data & AI Portfolio

Single-page portfolio website for showcasing my work as a **Data Analyst & Scientist** — from product and marketing analytics to ML research and dashboards used by C-level teams.

## About This Website

This project is a modern, responsive one-page site that mirrors the content defined in `src/data/profile.ts`. It focuses on:

- **Product & Marketing Analytics** at AppNation (dashboards, anomaly detection, LTV modeling)
- **CRM Analytics** at Yapı Kredi Bank (SQL on large financial datasets, Power BI dashboards)
- **ML Research** at YTU AI-BOSS (multivariate time series forecasting with deep learning architectures)
- **Education** in Industrial Engineering at Yıldız Technical University

The landing page is composed of five main sections:

- **Hero** – Role, availability, headline, and key metrics
- **Stacks** – Data platforms, analytics & BI, AI/ML, and product analytics stacks
- **Works** – Detailed case-style cards for AppNation, Yapı Kredi, and AI-BOSS
- **Timeline** – Internships, research assistantship, and education milestones
- **Call to Action** – Contact and collaboration options

## Content Highlights

All structured content comes from `src/data/profile.ts`:

- **Profile & Metrics**
  - Name, role, location, availability, and summary
  - Metrics such as years of experience, GPA, dashboards shipped, and research track
- **Stacks**
  - Data Platforms: Google Cloud Platform, BigQuery, Cloud Run, Google Scheduler, Metabase
  - Analytics & BI: SQL, PL/SQL, Power BI, cohort analysis, visualization
  - AI & ML: Python, Scikit-learn, TensorFlow, LSTM/Bi-LSTM, PatchTST, Chronos-2, time series forecasting
  - Product & Growth Analytics: anomaly detection, LTV modeling, CRM analytics, automation
- **Works**
  - AppNation — Product & Marketing Analytics
  - Yapı Kredi Bank — CRM Analytics
  - AI-BOSS — Multivariate Time Series Forecasting
- **Experience & Education**
  - Internships at AppNation, Yapı Kredi Bank, and research assistant role at YTU AI-BOSS
  - BSc Industrial Engineering at Yıldız Technical University and prior studies at Pertevniyal High School

Updating any of these structures in `profile.ts` automatically refreshes the site.

## Technology Stack

- **Framework**: React 18 with TypeScript
- **Tooling**: Vite 5
- **Styling**: Tailwind CSS
- **Icons**: `lucide-react`
- **Deployment**: GitHub Pages (via GitHub Actions)

## Development

### Prerequisites

- Node.js 18+ and npm

### Installation

```bash
npm install
```

### Local Development

```bash
npm run dev
```

The site will be available at `http://localhost:5173`.

### Build for Production

```bash
npm run build
```

The production build is emitted to the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

### Linting

```bash
npm run lint
```

## Deployment

This site is automatically deployed to GitHub Pages via GitHub Actions when changes are pushed to the `main` branch.

- **Live URL**: `https://ahmtkrsl.github.io/ahmetkarsli-portfolio/`
- **Workflow**: `.github/workflows/deploy.yml`
- **Vite base**: configured as `/ahmetkarsli-portfolio/` in `vite.config.ts`

## Project Structure

```text
ahmet-portfolio/
├── src/
│   ├── components/        # Shared UI components (NavBar, Footer, SectionHeading)
│   ├── sections/          # Page sections (Hero, Stacks, Works, Timeline, CallToAction)
│   ├── data/              # Single source of truth for all content (profile.ts)
│   └── main.tsx           # Application entry point
├── public/                # Static assets
└── .github/workflows/     # GitHub Actions deployment workflow
```

## Content Management

All main website content is centralized in `src/data/profile.ts`. To update:

- Personal information, availability, and summary
- Metrics (experience, GPA, dashboards, research)
- Technical stacks and services
- Works (AppNation, Yapı Kredi, AI-BOSS)
- Timeline entries, internships, and education
- Testimonials and workflow steps

Editing `profile.ts` is enough to keep the deployed site in sync.

## AI-Assisted Setup

The initial project structure, components, and styling were generated with the assistance of AI tools (Claude/Cursor), then curated and updated manually. Current data, descriptions, and highlights are maintained directly in this repository.

## License

This project is for personal portfolio use.

## Contact

- **Email**: ahmetfkarsli@gmail.com
- **LinkedIn**: [ahmetfkarsli](https://www.linkedin.com/in/ahmetfkarsli)
- **GitHub**: [ahmtkrsl](https://github.com/ahmtkrsl)
- **Location**: Sarıyer, Istanbul, Türkiye
