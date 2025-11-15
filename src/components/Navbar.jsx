import { useState } from 'react'
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-black/30 bg-black/40 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#home" className="text-transparent bg-clip-text bg-gradient-to-r from-violet-300 via-fuchsia-300 to-sky-300 font-bold tracking-tight text-xl">
            Full‑Stack Resume
          </a>

          <nav className="hidden md:flex items-center gap-6 text-sm text-slate-200">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="hover:text-white transition-colors">
                {item.label}
              </a>
            ))}
            <div className="h-5 w-px bg-white/20" />
            <a href="#contact" className="inline-flex items-center rounded-md bg-gradient-to-r from-violet-600 to-sky-600 px-3 py-1.5 text-white hover:from-violet-500 hover:to-sky-500 transition-colors">
              Hire me
            </a>
          </nav>

          <button
            className="md:hidden text-slate-200"
            onClick={() => setOpen((s) => !s)}
            aria-label="Toggle menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {open && (
          <div className="md:hidden border-t border-white/10 py-3">
            <div className="flex flex-col gap-3 text-slate-200">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="hover:text-white transition-colors"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <div className="flex items-center gap-4 pt-2">
                <a href="https://github.com/" target="_blank" rel="noreferrer" className="hover:text-white"><Github size={18} /></a>
                <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="hover:text-white"><Linkedin size={18} /></a>
                <a href="#contact" className="hover:text-white"><Mail size={18} /></a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
