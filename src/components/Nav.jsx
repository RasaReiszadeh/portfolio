import { useState, useEffect } from 'react'
import s from './Nav.module.css'

const links = ['Story', 'Projects', 'Skills', 'Interests', 'Contact']

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <nav className={`${s.nav} ${scrolled ? s.scrolled : ''}`}>
      <a href="#top" className={s.logo}>
        RR<span className={s.dot}>.</span>
      </a>

      <ul className={`${s.links} ${open ? s.open : ''}`}>
        {links.map(l => (
          <li key={l}>
            <a href={`#${l.toLowerCase()}`} onClick={() => setOpen(false)}>{l}</a>
          </li>
        ))}
        <li>
          <a href="/RasaReiszadeh_Resume.pdf" target="_blank" rel="noopener noreferrer" className={s.resume}>
            Resume ↗
          </a>
        </li>
      </ul>

      <button className={s.burger} onClick={() => setOpen(!open)} aria-label="Menu">
        <span /><span /><span />
      </button>
    </nav>
  )
}
