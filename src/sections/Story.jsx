import { useReveal } from "../useReveal";
import s from "./Story.module.css";

const timeline = [
  {
    year: "2023",
    title: "A new country. A decision to start over.",
    body: "I moved to Canada and enrolled at Seneca Polytechnic to build a career in software. Starting from scratch in a new country meant adapting fast — new language environment, new industry, new everything. I treated it like a problem to solve.",
    color: "var(--violet)",
  },
  {
    year: "2024",
    title: "Ontario Public Service co-op — the real thing.",
    body: "I earned a co-op as a Junior Software Engineer with the Government of Ontario. This wasn't a shadow role. I built and maintained automated test suites with Selenium and Cucumber, executed API testing with Postman, tracked defects in Jira, and shipped work that mattered in a regulated Agile delivery environment. At the end, the CIO recognized my QA contributions for improving testing efficiency across the team.",
    color: "var(--coral)",
  },
  {
    year: "2025",
    title: "Shipping real software.",
    body: "Built a cloud microservice API backed by AWS S3, DynamoDB, Docker, and JWT authentication. Trained a CNN for autonomous driving using TensorFlow and NVIDIA's architecture. Shipped a full-stack settlement app for newcomers to Canada with a team of 5. Published a React Native app to the Google Play Store.",
    color: "var(--gold)",
  },
  {
    year: "2025",
    title: "Going deep on AI engineering.",
    body: "Built a RAG pipeline with ChromaDB, a vision AI tool that debugs errors from screenshots, a semantic search engine using text embeddings, a multi-turn tool-calling agent, and a 3-phase job search assistant with legitimacy screening. Not demos — working pipelines built end to end in TypeScript with real APIs.",
    color: "var(--teal)",
  },
  {
    year: "Now",
    title: "Looking for a team worth joining.",
    body: "Recently graduated. Actively looking for full-time roles in software development, QA automation, and AI engineering in Canada. I want to work on a team that ships real things and cares about quality.",
    color: "var(--violet)",
  },
];

export default function Story() {
  const ref = useReveal();

  return (
    <section id="story" className={`section ${s.story}`} ref={ref}>
      <div className="section-inner">
        <div className={`reveal ${s.header}`}>
          <span className="eyebrow">My story</span>
          <h2 className={s.heading}>
            I didn't wait for opportunities.
            <br />
            <span className={s.accent}>I built the skills to earn them.</span>
          </h2>
        </div>

        <div className={s.timeline}>
          {timeline.map((item, i) => (
            <div key={i} className={`reveal d${Math.min(i + 1, 5)} ${s.entry}`}>
              <div className={s.yearCol}>
                <span className={s.year} style={{ color: item.color }}>
                  {item.year}
                </span>
                <div className={s.line} style={{ background: item.color }} />
              </div>
              <div className={s.body}>
                <h3 className={s.title}>{item.title}</h3>
                <p className={s.text}>{item.body}</p>
              </div>
            </div>
          ))}
        </div>

        {/* What makes me different */}
        <div className={`reveal d3 ${s.differentBox}`}>
          <span className="eyebrow">What actually makes me different</span>
          <div className={s.traits}>
            {[
              {
                label: "CIO-level recognition",
                desc: "Not a participation award. Actual recognition from the CIO of the Ontario Public Service for QA work that changed how a government team tested.",
              },
              {
                label: "App on the Play Store",
                desc: "Net & Notion is live on Google Play. Works on Android, iOS, and web. Taking something from idea to a published app is a different kind of proof.",
              },
              {
                label: "AI that does real things",
                desc: "RAG pipelines, vision AI tools, tool-calling agents, semantic search, legitimacy screening. Not toy demos — working systems built end to end.",
              },
              {
                label: "Full-stack across the stack",
                desc: "React, React Native, Node.js, Python, AWS, Docker, PostgreSQL, Firebase. I've shipped on every layer.",
              },
              {
                label: "New country, no shortcuts",
                desc: "Moved to Canada and built a software career from scratch. Comfortable with ambiguity, used to adapting fast.",
              },
              {
                label: "Teacher's communication",
                desc: "English tutoring and lab supervision built habits most devs lack — explaining things clearly, writing documentation people actually read.",
              },
            ].map((t) => (
              <div key={t.label} className={s.trait}>
                <span className={s.traitLabel}>{t.label}</span>
                <p className={s.traitDesc}>{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
