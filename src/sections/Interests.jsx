import { useReveal } from "../useReveal";
import s from "./Interests.module.css";

const interests = [
  {
    icon: "📱",
    title: "Shipped software",
    body: "Net & Notion is live on Google Play. Works on Android, iOS, and web. Taking something from idea to a published app that real users can download is a different kind of satisfaction than finishing a course project.",
    color: "var(--violet)",
  },
  {
    icon: "🤖",
    title: "AI that solves real problems",
    body: "I build AI tools that do specific useful things — debug errors from screenshots, screen job postings for scams, answer questions about documentation using RAG. The interesting part is the engineering, not the hype.",
    color: "var(--coral)",
  },
  {
    icon: "☁️",
    title: "Cloud and distributed systems",
    body: "Building the Fragments microservice — AWS S3, DynamoDB, Docker, JWT, integration tests — taught me how production systems actually work. I want to keep going deeper into distributed architecture and cloud-native engineering.",
    color: "var(--teal)",
  },
  {
    icon: "🔍",
    title: "QA as a mindset, not a role",
    body: "My government co-op showed me that quality is an engineering discipline, not a checkbox. I think about edge cases, failure modes, and reproducibility whether I'm writing tests or writing features.",
    color: "var(--gold)",
  },
  {
    icon: "🌍",
    title: "Volunteering that leads somewhere real",
    body: "I'm open to meaningful volunteer technical roles — open source, health tech nonprofits, community organisations using data. I'm not interested in performative volunteering. I want to contribute to something that matters.",
    color: "var(--teal)",
  },
  {
    icon: "📚",
    title: "How I actually learn",
    body: "I don't memorise answers — I reconstruct understanding from first principles. When I get stuck, I read primary sources. When I learn something, I try to explain it back. That's a pattern from tutoring that never went away.",
    color: "var(--violet)",
  },
];

export default function Interests() {
  const ref = useReveal();

  return (
    <section id="interests" className={`section ${s.interests}`} ref={ref}>
      <div className="section-inner">
        <div className={`reveal ${s.header}`}>
          <span className="eyebrow">Beyond the resume</span>
          <h2 className={s.heading}>
            What I actually <span className={s.accent}>think about</span>
          </h2>
          <p className={s.sub}>
            The things that make me a more interesting engineer than my commit
            history suggests.
          </p>
        </div>

        <div className={s.grid}>
          {interests.map((item, i) => (
            <div
              key={item.title}
              className={`reveal d${(i % 3) + 1} ${s.card}`}
              style={{ "--c": item.color }}
            >
              <span className={s.icon}>{item.icon}</span>
              <h3 className={s.title}>{item.title}</h3>
              <p className={s.body}>{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
