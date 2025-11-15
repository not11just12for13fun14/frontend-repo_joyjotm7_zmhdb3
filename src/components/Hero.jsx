import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[92vh] overflow-hidden bg-[#0a0b10] text-white flex items-center">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-violet-900/40 via-indigo-900/20 to-sky-900/40 pointer-events-none" />
        <div className="absolute -top-40 -left-40 h-[520px] w-[520px] rounded-full bg-fuchsia-600/20 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-40 -right-40 h-[520px] w-[520px] rounded-full bg-sky-600/20 blur-3xl pointer-events-none" />
      </div>

      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/wwTRdG1D9CkNs368/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10 items-center">
        <div className="py-20">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight"
          >
            Full‑Stack Developer
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-fuchsia-400 to-sky-400">
              Laravel • React • Three.js • DevOps
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="mt-6 text-base sm:text-lg text-slate-300 max-w-xl"
          >
            I design and build scalable web applications end‑to‑end — from pixel‑perfect interfaces to robust, production‑ready backends and CI/CD pipelines.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <a href="#projects" className="inline-flex items-center rounded-md bg-gradient-to-r from-violet-600 to-sky-600 px-5 py-2.5 font-medium text-white hover:from-violet-500 hover:to-sky-500 transition-colors">View Projects</a>
            <a href="#contact" className="inline-flex items-center rounded-md border border-white/20 px-5 py-2.5 font-medium text-white hover:bg-white/10 transition-colors">Contact Me</a>
          </motion.div>
        </div>

        <div className="hidden md:block" />
      </div>
    </section>
  )
}
