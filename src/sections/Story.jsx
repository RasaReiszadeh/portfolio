import { useReveal } from '../useReveal'
import s from './Story.module.css'

const timeline = [
  {
    year: 'Iran',
    title: 'Biology lab, not a career plan',
    body: 'I spent time in a clinical laboratory — precise, procedural, and detail-oriented work. It taught me more about systematic thinking than I realised at the time. I was already debugging, just with pipettes instead of terminals.',
    color: 'var(--teal)',
  },
  {
    year: '2023',
    title: 'A new country. A new language. A new industry.',
    body: 'I moved to Canada knowing my biology background wouldn\'t automatically translate into a tech career. I enrolled at Seneca Polytechnic and started from scratch — not because I had to, but because I wanted to build something that lasted.',
    color: 'var(--violet)',
  },
  {
    year: '2024',
    title: 'Ontario Public Service co-op',
    body: 'Earned a co-op as a Junior Software Engineer with the Government of Ontario. Worked in Agile delivery, built automation with Selenium and Cucumber, and used Postman, Azure, and Jira on real enterprise systems. Recognized by the CIO for QA contributions that improved testing efficiency across the team.',
    color: 'var(--coral)',
  },
  {
    year: '2025',
    title: 'Shipping real software',
    body: 'Built a cloud microservice API (AWS S3 + DynamoDB + Docker + JWT), trained a CNN for autonomous driving, shipped a full-stack settlement app for newcomers to Canada, and built AI tooling with LLM APIs. The biology mindset — systems thinking, precision, understanding why — turned out to be an asset, not a detour.',
    color: 'var(--gold)',
  },
  {
    year: 'Now',
    title: 'Looking for a team worth joining',
    body: 'Graduating August 2026. Open to software development, QA automation, AI/ML, health tech, and bioinformatics roles — full-time or contract. I also actively look for meaningful volunteer and research opportunities that lead somewhere real.',
    color: 'var(--teal)',
  },
]

export default function Story() {
  const ref = useReveal()

  return (
    <section id="story" className={`section ${s.story}`} ref={ref}>
      <div className="section-inner">
        <div className={`reveal ${s.header}`}>
          <span className="eyebrow">My story</span>
          <h2 className={s.heading}>
            Biology taught me to think in systems.<br />
            <span className={s.accent}>Code gave me a way to build them.</span>
          </h2>
        </div>

        <div className={s.timeline}>
          {timeline.map((item, i) => (
            <div key={i} className={`reveal d${Math.min(i + 1, 5)} ${s.entry}`}>
              <div className={s.yearCol}>
                <span className={s.year} style={{ color: item.color }}>{item.year}</span>
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
              { label: 'Biology × CS', desc: 'One of the few people who can read a cell biology paper and write the pipeline to analyse it.' },
              { label: 'Lab → enterprise', desc: 'Clinical lab precision translates directly: documentation, reproducibility, catching edge cases.' },
              { label: 'New country, no shortcuts', desc: 'Adapted to a new language and industry simultaneously. Comfortable with uncertainty.' },
              { label: 'CIO-level recognition', desc: 'Not participation trophy. Actual recognition for QA work that changed how a government team tested.' },
              { label: 'Teacher\'s instinct', desc: 'English tutoring and lab supervision built communication habits most devs lack.' },
              { label: 'Detroit-level curiosity', desc: 'Games like Detroit: Become Human got me thinking about AI ethics before it was a LinkedIn buzzword.' },
            ].map(t => (
              <div key={t.label} className={s.trait}>
                <span className={s.traitLabel}>{t.label}</span>
                <p className={s.traitDesc}>{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
