import Navbar    from './components/Navbar'
import Hero      from './components/Hero'
import About     from './components/About'
import Skills    from './components/Skills'
import Contact    from './components/Contact'
import Hire        from './components/Hire'
import Projects  from './components/Projects'



export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Hire />
      </main>
    
    </>
  )
}