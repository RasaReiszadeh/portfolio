import { useReveal } from "../useReveal";
import s from "./Skills.module.css";

const groups = [
  {
    name: "Languages",
    color: "#FF4D6D",
    items: ["JavaScript", "TypeScript", "Python", "Java", "C++", "C", "SQL"],
  },
  {
    name: "AI & LLM Engineering",
    color: "#2DD4BF",
    items: [
      "OpenAI Agents SDK",
      "OpenRouter API",
      "Prompt Engineering",
      "RAG",
      "ChromaDB",
      "Text Embeddings",
      "Tool-calling Agents",
      "Structured Outputs (Zod)",
      "Vision AI (Gemini)",
      "Tavily Search API",
    ],
  },
  {
    name: "Frontend & Mobile",
    color: "#A78BFA",
    items: [
      "React",
      "React Native",
      "Expo Router",
      "Vite",
      "HTML5",
      "CSS3",
      "SCSS",
      "Bootstrap",
    ],
  },
  {
    name: "Backend & APIs",
    color: "#4ECDC4",
    items: [
      "Node.js",
      "Express.js",
      "Hono",
      "REST APIs",
      "WebSockets",
      "JWT Authentication",
      "Passport.js",
    ],
  },
  {
    name: "Cloud & DevOps",
    color: "#F5A623",
    items: [
      "AWS S3",
      "AWS DynamoDB",
      "Docker",
      "Microsoft Azure",
      "CI/CD",
      "PowerShell",
    ],
  },
  {
    name: "Databases",
    color: "#F87171",
    items: ["PostgreSQL", "Supabase", "MySQL", "MongoDB", "SQLite"],
  },
  {
    name: "ML & Computer Vision",
    color: "#FF8B64",
    items: ["TensorFlow", "Keras", "OpenCV", "NumPy", "Pandas"],
  },
  {
    name: "Testing & QA",
    color: "#60A5FA",
    items: [
      "Jest",
      "Vitest",
      "Supertest",
      "Selenium",
      "Cucumber",
      "Postman",
      "Hurl",
      "Agile/Scrum",
    ],
  },
];

const certs = [
  {
    name: "CS50's Introduction to Programming with Python",
    org: "Harvard University (edX)",
  },
  { name: "Programming for Everybody (Python)", org: "University of Michigan" },
  { name: "Career Essentials in Generative AI", org: "Microsoft & LinkedIn" },
];

export default function Skills() {
  const ref = useReveal();

  return (
    <section id="skills" className={`section ${s.skills}`} ref={ref}>
      <div className="section-inner">
        <div className={`reveal ${s.header}`}>
          <span className="eyebrow">Technical skills</span>
          <h2 className={s.heading}>
            The stack I <span className={s.accent}>actually use</span>
          </h2>
        </div>

        <div className={s.grid}>
          {groups.map((g, i) => (
            <div
              key={g.name}
              className={`reveal d${(i % 4) + 1} ${s.group}`}
              style={{ "--c": g.color }}
            >
              <div className={s.groupHead}>
                <div className={s.dot} />
                <span className={s.groupName}>{g.name}</span>
              </div>
              <div className={s.chips}>
                {g.items.map((item) => (
                  <span key={item} className={s.chip}>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className={`reveal d2 ${s.certsBox}`}>
          <span className="eyebrow">Certifications</span>
          <div className={s.certs}>
            {certs.map((c) => (
              <div key={c.name} className={s.cert}>
                <span className={s.certName}>{c.name}</span>
                <span className={s.certOrg}>{c.org}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
