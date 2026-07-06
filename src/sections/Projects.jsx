import { useReveal } from '../useReveal'
import s from './Projects.module.css'

const projects = [
  {
    id: 'fragments',
    title: 'Fragments',
    kind: 'Cloud Microservice API',
    desc: 'Production-grade REST API for storing and converting user data fragments. AWS S3 for storage, DynamoDB for metadata, JWT + HTTP Basic auth via Passport.js, Docker containerization, image format conversion (Sharp), Markdown-to-HTML rendering. Unit and integration tested with Jest, Supertest, and Hurl.',
    tags: ['Node.js','Express','AWS S3','DynamoDB','Docker','Passport.js','Jest'],
    color: '#FF4D6D',
    badge: 'Cloud + Backend',
    gh: 'https://github.com/RasaReiszadeh',
  },
  {
    id: 'self-driving',
    title: 'Self-Driving Car Simulation',
    kind: 'Computer Vision · CNN',
    desc: 'NVIDIA\'s end-to-end CNN architecture for autonomous steering control. Full ML pipeline: dataset balancing to remove steering-zero bias, image augmentation (flip, brightness, zoom, pan), YUV colour preprocessing, EarlyStopping + ModelCheckpoint callbacks. Stable performance in the Udacity simulator.',
    tags: ['Python','TensorFlow','Keras','OpenCV','NumPy','Pandas'],
    color: '#FFB347',
    badge: 'ML / CV',
    gh: 'https://github.com/RasaReiszadeh',
  },
  {
    id: 'settlecan',
    title: 'SettleCAN',
    kind: 'Full-Stack Capstone · Team of 5',
    desc: 'Web platform helping newcomers to Canada navigate settlement resources — work permits, health info, checklists, community tools. I owned Task Manager, Checklist, Community Hub, email notification service, unit tests, and database schema design.',
    tags: ['React','Vite','Express.js','Supabase','PostgreSQL','Jest','SCSS'],
    color: '#A78BFA',
    badge: 'Social Impact',
    gh: 'https://github.com/RasaReiszadeh',
  },
  {
    id: 'aip444',
    title: 'AI Developer Tooling Suite',
    kind: 'LLM API · TypeScript',
    desc: 'Monorepo of AI-powered developer tools: AI commit message generator from staged diffs, structured flashcard generator with few-shot prompting, GitHub PR analyser using chain-of-thought reasoning, multi-turn tool-calling agent loop over the OpenRouter LLM API, and a Hono HTTP server with Zod-validated structured outputs.',
    tags: ['TypeScript','Node.js','Hono','Zod','OpenRouter','Prompt Engineering'],
    color: '#2DD4BF',
    badge: 'AI Tooling',
    gh: 'https://github.com/RasaReiszadeh',
  },
  {
    id: 'hotel',
    title: 'RXH Grand Hotel System',
    kind: 'Java · Database Design',
    desc: 'Full hotel management system: check-in/out, room booking, loyalty programmes, waitlists, admin dashboard with revenue reporting and occupancy tracking. I designed the complete ERD, normalised SQL schema with FK constraints, and the Java service layer. Team of 4.',
    tags: ['Java','SQLite','JDBC','OOP','ERD Design'],
    color: '#F87171',
    badge: 'Systems Design',
    gh: 'https://github.com/RasaReiszadeh',
  },
]

export default function Projects() {
  const ref = useReveal()

  return (
    <section id="projects" className={`section ${s.projects}`} ref={ref}>
      <div className="section-inner">
        <div className={`reveal ${s.header}`}>
          <span className="eyebrow">Selected work</span>
          <h2 className={s.heading}>
            Projects that went <span className={s.accent}>further than the brief</span>
          </h2>
          <p className={s.sub}>Each one taught me something the classroom didn't.</p>
        </div>

        <div className={s.grid}>
          {projects.map((p, i) => (
            <a
              key={p.id}
              href={p.gh} target="_blank" rel="noopener noreferrer"
              className={`reveal d${(i % 3) + 1} ${s.card}`}
              style={{ '--c': p.color }}
            >
              <div className={s.cardHead}>
                <span className={s.kind}>{p.kind}</span>
                <span className={s.badge} style={{ color: p.color, background: `${p.color}18` }}>
                  {p.badge}
                </span>
              </div>

              <h3 className={s.title}>{p.title}</h3>
              <p className={s.desc}>{p.desc}</p>

              <div className={s.tags}>
                {p.tags.map(t => <span key={t} className={s.tag}>{t}</span>)}
              </div>

              <div className={s.link}>
                <span>View on GitHub</span>
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
