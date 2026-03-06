export const profile = {
  name: "Ahmet Furkan Karslı",
  role: "Data Analyst & Scientist",
  location: "Sarıyer · Istanbul · Türkiye",
  availability: "Open to data analyst & scientist roles",
  summary:
    "Data analyst with hands-on experience in product analytics, marketing analytics, and applied ML research. I build dashboards and data systems used by C-level and cross-functional teams — from raw data ingestion to business-facing insights.",
  contact: {
    email: "ahmetfkarsli@gmail.com",
    phone: "+90 553 014 22 43",
    linkedin: "https://www.linkedin.com/in/ahmetfkarsli",
    github: "https://github.com/ahmtkrsl",
  },
};

export const metrics = [
  { label: "Years of experience", value: "2+", subtext: "Internships & full-time across finance, SaaS, research" },
  { label: "GPA · Industrial Engineering", value: "3.35", subtext: "Yıldız Technical University · Expected 2026" },
  { label: "Dashboards shipped", value: "10+", subtext: "Metabase, Power BI — used daily by C-level teams" },
  { label: "ML research track", value: "AI-BOSS", subtext: "Time-series forecasting · LSTM, PatchTST, Chronos-2" },
];

export const stacks = [
  {
    title: "Data Platforms",
    description: "Cloud-native data modeling, ingestion, and orchestration.",
    items: ["Google Cloud Platform", "BigQuery", "Cloud Run", "Google Scheduler", "Metabase"],
  },
  {
    title: "Analytics & BI",
    description: "End-to-end insights from raw SQL to executive-ready dashboards.",
    items: ["SQL", "PL/SQL", "Power BI", "Cohort Analysis", "Data Visualization"],
  },
  {
    title: "AI & Machine Learning",
    description: "Applied ML research and production-ready model prototypes.",
    items: ["Python", "Scikit-learn", "TensorFlow", "LSTM", "Bi-LSTM", "PatchTST", "Chronos-2", "Time Series Forecasting"],
  },
  {
    title: "Product & Growth Analytics",
    description: "KPI storytelling and anomaly detection for product and marketing teams.",
    items: ["Anomaly Detection", "LTV Modeling", "CRM Analytics", "Automation"],
  },
];

export const services = [
  {
    title: "Backend Data Build",
    description: "Designing low-latency data stacks on Google Cloud and BigQuery with clean modeling standards.",
    bullets: ["Cloud Run automations", "Secure dataset governance", "CDC & ingestion pipelines"],
  },
  {
    title: "BI & Dashboarding",
    description: "Executive-ready dashboards that surface KPIs for product, CRM, and operations teams.",
    bullets: ["Metabase semantic layers", "Power BI storytelling", "Metric documentation"],
  },
  {
    title: "Applied AI & ML",
    description: "Research-backed experimentation on LLMs and classical ML for forecasting and process automation.",
    bullets: ["Model evaluation suites", "Feature engineering notebooks", "Prompt libraries"],
  },
  {
    title: "Automation Development",
    description: "Workflow tooling that merges SQL, scripts, and APIs to remove repetitive reporting work.",
    bullets: ["Ops scripts & notebooks", "Alerting and monitoring", "Stakeholder enablement"],
  },
  {
    title: "Product Intelligence",
    description: "Mobile app KPI deep-dives that inform retention, monetization, and experiment design.",
    bullets: ["Growth metric monitoring", "Cohort and funnel analysis", "Anomaly detection"],
  },
  {
    title: "Growth & Content Ops",
    description: "SEO and content frameworks powered by AI tooling learned at MDP Group internships.",
    bullets: ["Keyword research systems", "AI-assisted copy workflows", "Editorial analytics"],
  },
];

export const works = [
  {
    title: "AppNation — Product & Marketing Analytics",
    category: "Data Analyst · Jul 2025 – Present",
    description:
      "Supporting two app studios across product and marketing analytics. Built Metabase dashboards from scratch for studio-level reporting, used daily by marketing, product, and C-level teams as the primary decision tool.",
    highlights: [
      "Designed and built Metabase dashboards for user behavior and product reporting.",
      "Built the company’s first anomaly detection system, sending metric alerts to Slack automatically.",
      "Developed LTV models using cohort analysis and ML to measure campaign efficiency across mobile apps.",
    ],
    tags: ["BigQuery", "Metabase", "Anomaly Detection", "LTV Modeling", "Cohort Analysis"],
  },
  {
    title: "Yapı Kredi Bank — CRM Analytics",
    category: "Data Analytics & Visualization Intern · Feb–Jun 2025",
    description:
      "Worked on large-scale financial datasets within the CRM team. Delivered SQL-driven analyses and Power BI dashboards that made customer data accessible to senior stakeholders.",
    highlights: [
      "Wrote SQL queries on large-scale financial datasets, independently mapping table structures from documentation.",
      "Performed customer segmentation analysis focused on credit products.",
      "Delivered Power BI dashboards with end-to-end flow from raw data processing to visualization.",
    ],
    tags: ["SQL", "PL/SQL", "Power BI", "CRM Analytics", "Customer Segmentation"],
  },
  {
    title: "AI-BOSS — Multivariate Time Series Forecasting",
    category: "Research Assistant · Jul 2024 – Present",
    description:
      "Applied ML research on Multivariate Time Series forecasting as part of a university research group at Yıldız Technical University, led by a faculty advisor.",
    highlights: [
      "Explored deep learning architectures including LSTM, Bi-LSTM, PatchTST, and Chronos-2.",
      "Covered both academic foundations and practical ML applications over a 2-year collaboration.",
      "Maintained reproducible experiment notebooks across model benchmarking cycles.",
    ],
    tags: ["Python", "LSTM", "Bi-LSTM", "PatchTST", "Chronos-2", "Time Series"],
  },
];

export const testimonials = [
  {
    name: "AI-BOSS Research Collective",
    title: "YTU Industrial Engineering",
    quote:
      "Documented impact: translated research questions into ML pipelines, kept experimentation reproducible, and shared learnings with peers.",
    date: "2024 – Present",
  },
  {
    name: "AppNation Data Team",
    title: "Mobile Product Analytics",
    quote:
      "Documented impact: automated dashboards on BigQuery models provided product squads with a single source of truth for retention KPIs.",
    date: "2025",
  },
  {
    name: "Yapı Kredi CRM Office",
    title: "Banking Analytics",
    quote:
      "Documented impact: SQL wrangling plus Power BI delivery made CRM data narratives accessible for senior banking stakeholders.",
    date: "2025",
  },
];

export const workflow = [
  { step: "Goals & Objectives", detail: "Clarify the KPI, user, and business need before touching data." },
  { step: "Research", detail: "Audit existing datasets, capture constraints, and define the success metric." },
  { step: "Wireframe", detail: "Sketch the data model and dashboard interactions for rapid feedback." },
  { step: "Prototyping", detail: "Build in notebooks or staging pipelines with versioned SQL and Python." },
  { step: "Finalize Design", detail: "Harden the build, automate refreshes, and ship enablement guides." },
];

export const internships = [
  {
    company: "AppNation",
    role: "Data Analyst",
    period: "Jul 2025 – Present",
    focus: "Product & marketing analytics, Metabase dashboards, anomaly detection, LTV modeling.",
    year: 2025,
    isCurrent: true,
  },
  {
    company: "Yapı Kredi Bank",
    role: "Data Analytics & Visualization Intern",
    period: "Feb 2025 – Jun 2025",
    focus: "SQL-driven CRM analytics, customer segmentation, Power BI dashboards.",
    year: 2025,
    isCurrent: false,
  },
  {
    company: "YTU AI-BOSS",
    role: "Research Assistant",
    period: "Jul 2024 – Present",
    focus: "Multivariate Time Series forecasting, LSTM/Bi-LSTM/PatchTST/Chronos-2 architectures.",
    year: 2024,
    isCurrent: true,
  },
];

export const education = [
  {
    school: "Yıldız Technical University",
    program: "BSc Industrial Engineering",
    details: "GPA 3.35 / 4.00 · 2023 – 2026 · Transferred from Electronic & Communication Engineering (2021–2023).",
  },
  {
    school: "Pertevniyal High School",
    program: "Science Track",
    details: "2016 – 2020",
  },
];

