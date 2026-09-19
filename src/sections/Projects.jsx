import styles from "./Projects.module.css";
import { useReveal } from "../useReveal";

const PROJECTS = [
  {
    title: "AI Job Market & Career Fit Analyzer",
    desc: "Autonomous TypeScript intelligence pipeline that extracts unstructured tech job postings into strict Zod schemas, performs WHOIS company verification, and computes multi-dimensional fit scoring and skill-gap reports against developer profiles.",
    tags: ["TypeScript", "Node.js", "OpenAI API", "Zod", "WHOIS"],
    repo: "https://github.com/RasaReiszadeh/ai-job-market-analyzer",
    demo: null,
    highlight: "LLM Structured Outputs & Agentic Scoring",
  },
  {
    title: "Multi-Agent AI Code Reviewer",
    desc: "Collaborative static code analysis engine deploying domain-specific review agents (Security, Performance, Clean Architecture) paired with an adversarial consensus judge model that eliminates false positives and ranks findings by severity.",
    tags: ["TypeScript", "Node.js", "OpenAI API", "Multi-Agent Systems"],
    repo: "https://github.com/RasaReiszadeh/ai-code-reviewer",
    demo: null,
    highlight: "Consensus Judge & Static AST Analysis",
  },
  {
    title: "Fragments Cloud Microservice & UI",
    desc: "Containerized, scalable cloud REST API and Next.js SPA client for multi-format content ingestion, dynamic on-the-fly media conversion (Markdown, HTML, JSON, Images), and secure authentication backed by Amazon Cognito and AWS S3.",
    tags: ["Node.js", "Express", "Next.js", "AWS S3", "Amazon Cognito", "Docker", "Jest", "Cypress"],
    repo: "https://github.com/RasaReiszadeh/fragments",
    demo: "https://github.com/RasaReiszadeh/fragments-ui",
    highlight: "Cloud Architecture & Media Pipeline",
  },
  {
    title: "SettleCAN Platform",
    desc: "Full-stack settlement assistance web platform helping Canadian newcomers manage multi-stage relocation roadmaps, track work/study permit compliance countdowns, receive automated deadline alerts, and connect through peer discussion hubs.",
    tags: ["React", "Vite", "Node.js", "Express", "PostgreSQL", "Supabase", "Docker"],
    repo: "https://github.com/RasaReiszadeh/settlecan",
    demo: null,
    highlight: "Full-Stack Enterprise & Compliance Engine",
  },
  {
    title: "Net & Notion Mobile CRM",
    desc: "Cross-platform mobile networking and contact manager featuring scannable QR card generation, camera-based contact scanning, follow-up reminder scheduling, and AI-assisted semantic contact search and auto-categorization.",
    tags: ["React Native", "Expo", "Firebase", "Firestore", "OpenAI API"],
    repo: "https://github.com/RasaReiszadeh/net-and-notion",
    demo: null,
    highlight: "Mobile QR Exchange & AI Contact Search",
  },
  {
    title: "Grand Hotel Reservation System",
    desc: "Enterprise desktop hotel management platform built with JavaFX and an embedded H2 SQL database. Features a self-service guest booking kiosk and an admin portal with automated iText PDF and CSV occupancy/revenue reporting.",
    tags: ["Java", "JavaFX", "FXML", "H2 Database", "JDBC", "Maven", "GoF Patterns"],
    repo: "https://github.com/RasaReiszadeh/grand-hotel-management-system",
    demo: null,
    highlight: "Gang of Four (GoF) Architectural Patterns",
  },
];

export default function Projects() {
  const ref = useReveal();

  return (
    <section id="projects" className={styles.projects} ref={ref}>
      <div className="container">
        <p className="section-label reveal">What I Build</p>
        <h2 className="section-title reveal">Projects</h2>
        <div className={styles.grid}>
          {PROJECTS.map((p, i) => (
            <div
              key={p.title}
              className={`${styles.card} reveal`}
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className={styles.highlight}>{p.highlight}</div>
              <h3 className={styles.title}>{p.title}</h3>
              <p className={styles.desc}>{p.desc}</p>
              <div className={styles.tags}>
                {p.tags.map((t) => (
                  <span key={t} className={styles.tag}>
                    {t}
                  </span>
                ))}
              </div>
              <div className={styles.links}>
                {p.repo && (
                  <a
                    href={p.repo}
                    className="btn btn-secondary"
                    target="_blank"
                    rel="noreferrer"
                  >
                    View Source →
                  </a>
                )}
                {p.demo && (
                  <a
                    href={p.demo}
                    className="btn btn-primary"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {p.title.includes("Fragments") ? "Frontend Repo →" : "Live Demo →"}
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
