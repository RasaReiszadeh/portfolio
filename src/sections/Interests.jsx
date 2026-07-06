import { useReveal } from '../useReveal'
import s from './Interests.module.css'

const interests = [
  {
    icon: '🧬',
    title: 'Biology × Bioinformatics',
    body: 'My original field. I\'m actively exploring where computational methods meet biological data — genomics pipelines, clinical data analysis, health tech software. The lab mindset and the engineering mindset are more similar than most people think.',
    color: 'var(--teal)',
  },
  {
    icon: '🎮',
    title: 'Games that ask hard questions',
    body: 'Detroit: Become Human got me thinking about AI consciousness and ethics before it was fashionable. The Sims taught me systems design before I knew what that meant. I take games seriously as a lens for understanding human behaviour and emergent complexity.',
    color: 'var(--violet)',
  },
  {
    icon: '🤖',
    title: 'AI Ethics & Human-centred AI',
    body: 'I build AI tools. I also think about what those tools do to people. The technical and the ethical aren\'t separate conversations — they should happen in the same room, and I want to be in that room.',
    color: 'var(--coral)',
  },
  {
    icon: '📚',
    title: 'How I actually learn',
    body: 'I don\'t memorise answers — I reconstruct understanding from first principles. When I get stuck, I read primary sources. When I learn something new, I try to teach it back. That\'s a pattern from tutoring that never went away.',
    color: 'var(--gold)',
  },
  {
    icon: '🌍',
    title: 'Volunteering that leads somewhere real',
    body: 'I\'m actively looking for volunteer technical roles — open source projects, health tech nonprofits, research labs, community organisations using data. I\'m not interested in performative volunteering. I want to contribute to something that matters.',
    color: 'var(--teal)',
  },
  {
    icon: '🔬',
    title: 'Research & continuous learning',
    body: 'I read papers. I take courses. I follow researchers. Right now I\'m particularly interested in RAG architectures, computational biology tooling, and the practical side of ML deployment — not just training models but making them useful.',
    color: 'var(--violet)',
  },
]

export default function Interests() {
  const ref = useReveal()

  return (
    <section id="interests" className={`section ${s.interests}`} ref={ref}>
      <div className="section-inner">
        <div className={`reveal ${s.header}`}>
          <span className="eyebrow">Beyond the resume</span>
          <h2 className={s.heading}>
            What I actually <span className={s.accent}>think about</span>
          </h2>
          <p className={s.sub}>
            The things that make me a more interesting engineer than my commit history suggests.
          </p>
        </div>

        <div className={s.grid}>
          {interests.map((item, i) => (
            <div key={item.title} className={`reveal d${(i % 3) + 1} ${s.card}`} style={{ '--c': item.color }}>
              <span className={s.icon}>{item.icon}</span>
              <h3 className={s.title}>{item.title}</h3>
              <p className={s.body}>{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
