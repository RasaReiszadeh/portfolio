import { useReveal } from "../useReveal";
import styles from "./Projects.module.css";

const projects = [
  {
    title: "Net & Notion",
    subtitle: "Published on Google Play · Android, iOS & Web",
    tags: ["React Native", "Expo 54", "Firebase", "React Navigation"],
    color: "#A78BFA",
    description:
      "A mobile app for saving professional contacts with context — who you met, where you met them, and what to follow up on. Scan or share contacts instantly with QR codes. Works on Android, iOS, and web. Published on the Google Play Store. Built with a team of 4.",
    link: "https://play.google.com/store/apps/details?id=com.rbdfranck.netandnotion",
    highlight: "🎉 Live on Google Play",
  },
  {
    title: "AI Dev Tooling Suite",
    subtitle: "AI Tools for Real Developer Problems",
    tags: ["TypeScript", "Node.js", "OpenRouter", "ChromaDB", "Tavily", "Zod"],
    color: "#4ECDC4",
    description:
      "A set of AI-powered tools that solve real developer problems. Take a screenshot of an error — it tells you what's wrong and how to fix it. Search a product catalogue by describing what you need in plain English. Ask questions about the Node.js docs and get direct answers. Analyse a GitHub pull request and get structured feedback. Screen job postings for red flags automatically. Each tool was built end-to-end using TypeScript, LLM APIs, vector search, and web scraping.",
    link: "https://github.com/RasaReiszadeh",
    highlight: "RAG · Vision AI · Agents",
  },
  {
    title: "Fragments",
    subtitle: "Cloud Microservice API",
    tags: ["Node.js", "Express", "AWS S3", "DynamoDB", "Docker", "Jest"],
    color: "#FF4D6D",
    description:
      "A cloud API that lets users store, retrieve, and convert text and image data. Supports plain text, Markdown, HTML, PNG, and JPEG — and converts between formats on request. Built with AWS S3 for storage, DynamoDB for metadata, Docker for deployment, and JWT authentication. Includes a companion web app where users can manage and convert their data in the browser.",
    link: "https://github.com/RasaReiszadeh",
  },
  {
    title: "SettleCAN",
    subtitle: "Full-Stack Capstone · Team of 5",
    tags: [
      "React",
      "Vite",
      "Express.js",
      "Supabase",
      "PostgreSQL",
      "WebSockets",
    ],
    color: "#C084FC",
    description:
      "A web app that helps newcomers to Canada find and track settlement resources — work permits, health services, housing checklists, and community tools. Built with a team of 5. I owned the task manager, checklist, community hub, real-time notifications, scheduled email reminders, and database schema.",
    link: "https://github.com/RasaReiszadeh",
    highlight: "Social Impact",
  },
  {
    title: "Self-Driving Car",
    subtitle: "CNN Simulation",
    tags: ["Python", "TensorFlow", "Keras", "OpenCV", "NumPy"],
    color: "#FFB347",
    description:
      "A machine learning model that learns to steer a car on its own inside a driving simulator. Trained on camera footage using NVIDIA's neural network architecture. Built the full data pipeline — cleaning and balancing the dataset, augmenting images to improve accuracy, and preprocessing frames. The model drives without human input in the Udacity simulator.",
    link: "https://github.com/RasaReiszadeh",
  },
  {
    title: "RXH Grand Hotel",
    subtitle: "Hotel Management System",
    tags: ["Java", "SQLite", "JDBC", "OOP", "ERD Design"],
    color: "#FF8B64",
    description:
      "A desktop app that manages hotel operations — guest check-in and check-out, room bookings, loyalty programmes, waitlists, and an admin dashboard with revenue reports and activity logs. Designed the full database from scratch including the schema, table relationships, and constraints. Team of 4.",
    link: "https://github.com/RasaReiszadeh",
  },
];

export default function Projects() {
  const ref = useReveal();

  return (
    <section id="projects" className={styles.projects} ref={ref}>
      <div className={styles.inner}>
        <div className={`${styles.header} reveal`}>
          <p className={styles.label}>Selected work</p>
          <h2 className={styles.heading}>
            Projects that went
            <br />
            <span className={styles.accent}>beyond the tutorial</span>
          </h2>
        </div>

        <div className={styles.grid}>
          {projects.map((p, i) => (
            <a
              key={p.title}
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.card} reveal reveal-delay-${(i % 3) + 1}`}
              style={{ "--accent": p.color }}
            >
              <div className={styles.cardTop}>
                <div
                  className={styles.cardIcon}
                  style={{ background: `${p.color}18`, color: p.color }}
                >
                  {p.title.charAt(0)}
                </div>
                {p.highlight && (
                  <span className={styles.badge}>{p.highlight}</span>
                )}
              </div>

              <h3 className={styles.cardTitle}>{p.title}</h3>
              <p className={styles.cardSubtitle}>{p.subtitle}</p>
              <p className={styles.cardDesc}>{p.description}</p>

              <div className={styles.tags}>
                {p.tags.map((t) => (
                  <span key={t} className={styles.tag}>
                    {t}
                  </span>
                ))}
              </div>

              <div className={styles.cardArrow}>
                <span>
                  {p.title === "Net & Notion"
                    ? "View on Google Play"
                    : "View on GitHub"}
                </span>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path
                    d="M3 8h10M9 4l4 4-4 4"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
