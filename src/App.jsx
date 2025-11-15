import Navbar from './components/Navbar'
import Hero from './components/Hero'
import { About, Skills, Experience, Projects, Contact } from './components/Sections'

function App() {
  return (
    <div className="min-h-screen bg-[#0a0b10] text-white">
      <Navbar />
      <main className="pt-16">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
        <footer className="bg-[#090a0f] text-slate-400 text-sm">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 flex items-center justify-between">
            <p>© {new Date().getFullYear()} Full‑Stack Developer Resume</p>
            <a href="#home" className="hover:text-slate-200">Back to top ↑</a>
          </div>
        </footer>
      </main>
    </div>
  )
}

export default App
