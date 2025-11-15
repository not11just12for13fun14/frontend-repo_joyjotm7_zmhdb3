import { Code2, ServerCog, Boxes, GitBranch, Wrench, Rocket } from 'lucide-react'

export function About() {
  return (
    <section id="about" className="relative bg-[#0b0d13] text-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">About Me</h2>
          <p className="mt-4 text-slate-300 leading-relaxed">
            I’m a full‑stack engineer specialized in Laravel, React, and 3D/interactive experiences with Three.js. I build fast, secure, and delightful products and own the full lifecycle: architecture, implementation, testing, and DevOps.
          </p>
          <div className="mt-6 grid grid-cols-2 gap-4 text-sm">
            <div className="rounded-lg border border-white/10 p-4 bg-white/5">
              <p className="text-slate-400">Location</p>
              <p className="text-white font-medium">Remote / On‑site</p>
            </div>
            <div className="rounded-lg border border-white/10 p-4 bg-white/5">
              <p className="text-slate-400">Experience</p>
              <p className="text-white font-medium">Full‑Stack • DevOps</p>
            </div>
          </div>
        </div>
        <div className="grid sm:grid-cols-2 gap-4">
          {[
            { icon: Code2, title: 'Frontend', text: 'React, Vite, Tailwind, Three.js' },
            { icon: ServerCog, title: 'Backend', text: 'Laravel (PHP), Node.js, FastAPI' },
            { icon: Boxes, title: 'Databases', text: 'MongoDB, MySQL, Postgres' },
            { icon: GitBranch, title: 'DevOps', text: 'Docker, CI/CD, Nginx, Cloud' },
          ].map(({ icon: Icon, title, text }) => (
            <div key={title} className="rounded-lg border border-white/10 p-4 bg-gradient-to-br from-violet-900/30 to-sky-900/30">
              <Icon className="text-sky-300" />
              <h3 className="mt-3 font-semibold text-white">{title}</h3>
              <p className="text-sm text-slate-300 mt-1">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Skills() {
  const skills = [
    { group: 'Frontend', items: ['React', 'Vite', 'Tailwind', 'Three.js', 'TypeScript'] },
    { group: 'Backend', items: ['Laravel', 'PHP', 'Node.js', 'FastAPI', 'REST'] },
    { group: 'DevOps', items: ['Docker', 'GitHub Actions', 'Nginx', 'AWS', 'Vercel'] },
  ]

  return (
    <section id="skills" className="relative bg-[#0a0b10] text-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-3xl sm:text-4xl font-bold text-white">Skills</h2>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {skills.map((s) => (
            <div key={s.group} className="rounded-lg border border-white/10 p-4 bg-white/5">
              <h3 className="font-semibold text-white">{s.group}</h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {s.items.map((item) => (
                  <span key={item} className="rounded-md bg-gradient-to-r from-violet-600/20 to-sky-600/20 text-sky-200 border border-white/10 px-3 py-1 text-sm">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Experience() {
  const roles = [
    {
      title: 'Full‑Stack Developer',
      company: 'Tech Co.',
      period: '2021 — Present',
      bullets: [
        'Built scalable REST APIs and microservices with Laravel',
        'Developed interactive 3D experiences with Three.js and Spline',
        'Implemented CI/CD pipelines and containerized deployments',
      ],
    },
    {
      title: 'Frontend Engineer',
      company: 'Startup Inc.',
      period: '2019 — 2021',
      bullets: [
        'Delivered React apps with performance budgets and a11y',
        'Led component library and design system initiatives',
      ],
    },
  ]

  return (
    <section id="experience" className="relative bg-[#0b0d13] text-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-3xl sm:text-4xl font-bold text-white">Experience</h2>
        <div className="mt-8 grid gap-4">
          {roles.map((r) => (
            <div key={r.title} className="rounded-lg border border-white/10 p-6 bg-white/5">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold text-white">{r.title} • {r.company}</h3>
                <span className="text-sm text-slate-400">{r.period}</span>
              </div>
              <ul className="list-disc list-inside mt-3 text-slate-300 space-y-1">
                {r.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Projects() {
  const items = [
    {
      title: '3D Product Showcase',
      desc: 'Interactive Three.js/Spline experience integrated with a Laravel API.',
    },
    {
      title: 'CI/CD DevOps Pipeline',
      desc: 'Dockerized microservices with GitHub Actions and Nginx routing.',
    },
    {
      title: 'SaaS Dashboard',
      desc: 'React + Laravel app with role-based access and analytics.',
    },
  ]

  return (
    <section id="projects" className="relative bg-[#0a0b10] text-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex items-center justify-between">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Projects</h2>
          <a href="#contact" className="inline-flex items-center rounded-md bg-gradient-to-r from-violet-600 to-sky-600 px-4 py-2 text-white text-sm hover:from-violet-500 hover:to-sky-500">Let’s build together</a>
        </div>

        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {items.map((p) => (
            <div key={p.title} className="rounded-lg border border-white/10 p-5 bg-white/5">
              <div className="flex items-center gap-2 text-sky-300">
                <Rocket size={18} />
                <span className="font-semibold text-white">{p.title}</span>
              </div>
              <p className="mt-2 text-sm text-slate-300">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Contact() {
  return (
    <section id="contact" className="relative bg-[#0b0d13] text-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-3xl sm:text-4xl font-bold text-white">Contact</h2>
        <p className="mt-3 text-slate-300">Have a project in mind? Let’s talk.</p>
        <form className="mt-8 grid sm:grid-cols-2 gap-4">
          <input className="bg-white/5 border border-white/10 rounded-md px-4 py-2 text-white placeholder:text-slate-400" placeholder="Name" />
          <input className="bg-white/5 border border-white/10 rounded-md px-4 py-2 text-white placeholder:text-slate-400" placeholder="Email" type="email" />
          <textarea className="sm:col-span-2 bg-white/5 border border-white/10 rounded-md px-4 py-2 text-white placeholder:text-slate-400" placeholder="Tell me about your project" rows={4} />
          <button type="submit" className="sm:col-span-2 inline-flex items-center justify-center rounded-md bg-gradient-to-r from-violet-600 to-sky-600 px-5 py-2.5 font-medium text-white hover:from-violet-500 hover:to-sky-500 transition-colors">Send</button>
        </form>
      </div>
    </section>
  )
}
