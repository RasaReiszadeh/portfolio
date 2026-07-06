import Nav from './components/Nav'
import Hero from './sections/Hero'
import Story from './sections/Story'
import Projects from './sections/Projects'
import Skills from './sections/Skills'
import Interests from './sections/Interests'
import Contact from './sections/Contact'

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Story />
        <Projects />
        <Skills />
        <Interests />
        <Contact />
      </main>
    </>
  )
}
