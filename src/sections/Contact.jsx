import { useReveal } from '../useReveal'
import s from './Contact.module.css'

export default function Contact() {
  const ref = useReveal()

  return (
    <section id="contact" className={`section ${s.contact}`} ref={ref}>
      <div className="section-inner">
        <div className={s.grid}>
          <div className={`reveal ${s.left}`}>
            <span className="eyebrow">Get in touch</span>
            <h2 className={s.heading}>
              Let's build something<br />
              <span className={s.accent}>worth building.</span>
            </h2>
            <p className={s.bio}>
              I'm open to full-time roles, contract work, and meaningful volunteer
              positions in software development, QA automation, AI/ML, health tech,
              and bioinformatics. If you think I'd be useful to your team — or you
              just want to talk about something interesting — reach out.
            </p>
            <p className={s.bio}>I respond fast.</p>

            <div className={s.links}>
              <a href="mailto:rasarais2002@gmail.com" className={s.emailBtn}>
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <polyline points="22,6 12,13 2,6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                rasarais2002@gmail.com
              </a>

              <div className={s.social}>
                <a href="https://www.linkedin.com/in/rasareiszadeh" target="_blank" rel="noopener noreferrer" className={s.socialLink}>
                  LinkedIn ↗
                </a>
                <a href="https://github.com/RasaReiszadeh" target="_blank" rel="noopener noreferrer" className={s.socialLink}>
                  GitHub ↗
                </a>
                <a href="/RasaReiszadeh_Resume.pdf" target="_blank" rel="noopener noreferrer" className={s.socialLink}>
                  Resume PDF ↗
                </a>
              </div>
            </div>
          </div>

          <div className={`reveal d2 ${s.right}`}>
            <div className={s.card}>
              {[
                ['Looking for', 'Software Dev · QA · AI/ML · Health Tech'],
                ['Location', 'Toronto, ON · Remote friendly'],
                ['Availability', 'Aug 2026 · Open to earlier contract'],
                ['Work type', 'Full-time · Contract · Volunteer'],
                ['Open to', 'Bioinformatics · Research · Nonprofits'],
                ['Status', <span key="s" className={s.available}><span className={s.dot} />Actively looking</span>],
              ].map(([label, value]) => (
                <div key={label} className={s.row}>
                  <span className={s.rowLabel}>{label}</span>
                  <span className={s.rowValue}>{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className={`reveal ${s.footer}`}>
          <p>Built with React + Vite · Designed & developed by Rasa Reiszadeh · {new Date().getFullYear()}</p>
        </div>
      </div>
    </section>
  )
}
