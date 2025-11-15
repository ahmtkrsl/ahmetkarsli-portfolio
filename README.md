# Ahmet Furkan Karslı - Personal Portfolio Website

A modern, responsive portfolio website showcasing professional experience, skills, and projects in Data & AI fields.

## About This Website

This is a single-page portfolio website built to present my background as a Data & AI-focused Industrial Engineering student. The site features:

- **Professional Timeline**: Visual journey from first internship to current role at AppNation
- **Works Gallery**: Showcase of data projects including AppNation Mobile Intelligence, Yapı Kredi CRM Dashboards, and AI-BOSS research
- **Technical Stacks**: Data platforms (GCP, BigQuery), Analytics & BI tools (SQL, Power BI), AI/ML frameworks (Python, TensorFlow)
- **Services Overview**: Backend data builds, BI dashboards, applied AI/ML, automation development
- **Research Engagement**: Active participation in YTU's AI-BOSS research group

## Content Highlights

- **4 Internships**: AppNation (Data Intern), Yapı Kredi Bank (Data Analytics), MDP Group (Growth), Engin Grup (HR)
- **Education**: 4th-year Industrial Engineering student at Yıldız Technical University (GPA 3.28/4.00)
- **Research**: Member of AI-BOSS research group since July 2024, focusing on LLMs and ML applications
- **Skills**: Google Cloud Platform, BigQuery, SQL, Power BI, Python, Machine Learning, Data Visualization

## Technology Stack

- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
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

The site will be available at `http://localhost:5173`

### Build for Production

```bash
npm run build
```

Output will be in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

## Deployment

This site is automatically deployed to GitHub Pages via GitHub Actions when changes are pushed to the `main` branch.

- **Live URL**: `https://ahmtkrsl.github.io/ahmetkarsli-portfolio/`
- **Workflow**: `.github/workflows/deploy.yml`

## Project Structure

```
ahmet-portfolio/
├── src/
│   ├── components/     # Reusable UI components (NavBar, Footer, SectionHeading)
│   ├── sections/        # Page sections (Hero, Stacks, Works, Timeline, etc.)
│   ├── data/           # Single source of truth for all content (profile.ts)
│   └── main.tsx        # Application entry point
├── public/             # Static assets
└── .github/workflows/  # GitHub Actions deployment workflow
```

## Content Management

All website content is centralized in `src/data/profile.ts`. To update:

- Personal information, metrics, and contact details
- Technical stacks and services
- Work experience and projects
- Timeline entries and internships
- Testimonials and workflow steps

Simply edit `profile.ts` and the changes will reflect across the entire site.

## AI-Generated Content

**Note**: This website, including its structure, components, styling, and initial content, was generated with the assistance of AI (Claude/Cursor). The content is based on the CV document (`Ahmet_Furkan_Karsli_CV3.pdf`) and has been tailored to create a professional portfolio presentation.

## License

This project is for personal portfolio use.

## Contact

- **Email**: ahmetfkarsli@gmail.com
- **LinkedIn**: [ahmetfkarsli](https://www.linkedin.com/in/ahmetfkarsli)
- **Location**: Sarıyer, Istanbul, Türkiye
