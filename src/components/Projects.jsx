import { useEffect, useState } from 'react'
import { ExternalLink, Code } from 'lucide-react'

const projectsSeed = [
  {
    title: 'Interactive 3D Landing',
    description: 'Hero section powered by Spline and smooth motion interactions.',
    tags: ['React', 'Spline', 'Framer Motion'],
    link: 'https://example.com',
  },
  {
    title: 'Design System',
    description: 'Composable UI kit with accessibility-first components.',
    tags: ['React', 'Radix', 'Tailwind'],
    link: 'https://example.com',
  },
  {
    title: 'Realtime Dashboard',
    description: 'Live charts, metrics, and collaborative widgets.',
    tags: ['React', 'WebSocket', 'D3'],
    link: 'https://example.com',
  },
]

export default function Projects() {
  const [projects, setProjects] = useState(projectsSeed)

  useEffect(() => {
    // In a real app, fetch from backend. Using local seed for now per instructions.
    setProjects(projectsSeed)
  }, [])

  return (
    <section id="projects" className="relative mx-auto max-w-7xl px-6 py-20">
      <div className="mb-10 flex items-end justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">Featured Projects</h2>
          <p className="mt-2 max-w-xl text-gray-600 dark:text-gray-300">A selection of things I’ve built recently.</p>
        </div>
        <a href="#contact" className="hidden rounded-xl border border-gray-200 bg-white px-4 py-2 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-50 dark:border-white/10 dark:bg-gray-900 dark:text-white md:inline-flex">
          Let’s collaborate
        </a>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <article key={p.title} className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition hover:shadow-md dark:border-white/10 dark:bg-gray-900">
            <div className="flex h-36 items-center justify-center rounded-xl bg-gradient-to-tr from-blue-100 to-purple-100 text-blue-700 dark:from-blue-950 dark:to-purple-950 dark:text-blue-200">
              <Code size={28} />
            </div>
            <h3 className="mt-4 text-lg font-semibold text-gray-900 dark:text-white">{p.title}</h3>
            <p className="mt-1 line-clamp-2 text-sm text-gray-600 dark:text-gray-300">{p.description}</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {p.tags.map((t) => (
                <span key={t} className="rounded-full border border-gray-200 px-2 py-1 text-xs text-gray-700 dark:border-white/10 dark:text-gray-300">
                  {t}
                </span>
              ))}
            </div>
            <a href={p.link} target="_blank" rel="noreferrer" className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-600 hover:underline dark:text-blue-400">
              Visit <ExternalLink size={14} />
            </a>
            <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-transparent transition group-hover:ring-blue-300/60 dark:group-hover:ring-blue-400/30" />
          </article>
        ))}
      </div>
    </section>
  )
}
