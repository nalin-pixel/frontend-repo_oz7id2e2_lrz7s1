import Spline from '@splinetool/react-spline'
import { Sparkles } from 'lucide-react'

export default function Hero() {
  return (
    <section id="home" className="relative isolate min-h-[90vh] w-full overflow-hidden pt-24">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/40 via-white/20 to-white/60 dark:from-gray-950/40 dark:via-gray-950/20 dark:to-gray-950/80" />

      <div className="relative mx-auto flex min-h-[90vh] max-w-7xl flex-col items-start justify-center px-6">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/60 px-3 py-1 text-xs font-medium text-gray-700 backdrop-blur dark:bg-gray-900/60 dark:text-gray-200">
          <Sparkles size={14} /> Interactive • Playful • Modern
        </div>
        <h1 className="mt-5 max-w-2xl text-4xl font-extrabold tracking-tight text-gray-900 drop-shadow-sm sm:text-6xl dark:text-white">
          I build dynamic, immersive web experiences.
        </h1>
        <p className="mt-4 max-w-xl text-lg text-gray-700 sm:text-xl dark:text-gray-300">
          Frontend engineer crafting delightful products with React, Three.js, and creative code.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href="#projects" className="inline-flex items-center rounded-xl bg-gray-900 px-5 py-3 text-sm font-semibold text-white shadow hover:bg-gray-800 dark:bg-white dark:text-gray-900">
            View Projects
          </a>
          <a href="#contact" className="inline-flex items-center rounded-xl border border-gray-300 bg-white/70 px-5 py-3 text-sm font-semibold text-gray-900 backdrop-blur hover:bg-white dark:border-white/20 dark:bg-gray-900/60 dark:text-white">
            Contact Me
          </a>
        </div>
      </div>
    </section>
  )
}
