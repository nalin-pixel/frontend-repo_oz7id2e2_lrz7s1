import { useState } from 'react'
import { Menu, X, Rocket, Github, Linkedin, Mail } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 flex items-center justify-between rounded-2xl border border-white/20 bg-white/60 p-3 shadow-lg backdrop-blur-xl dark:border-white/10 dark:bg-gray-900/60">
          <a href="#home" className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-tr from-blue-500 to-purple-500 text-white">
              <Rocket size={18} />
            </div>
            <span className="font-semibold tracking-tight text-gray-900 dark:text-white">My Portfolio</span>
          </a>

          <nav className="hidden items-center gap-6 md:flex">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="text-sm font-medium text-gray-700 transition-colors hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <a href="https://github.com" target="_blank" rel="noreferrer" className="group rounded-xl border border-white/20 bg-white/40 p-2 text-gray-700 shadow-sm transition hover:bg-white/70 dark:text-gray-200">
              <Github size={18} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="group rounded-xl border border-white/20 bg-white/40 p-2 text-blue-700 shadow-sm transition hover:bg-white/70 dark:text-blue-400">
              <Linkedin size={18} />
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-tr from-blue-600 to-purple-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:brightness-110">
              <Mail size={16} /> <span>Say hello</span>
            </a>
          </div>

          <button onClick={() => setOpen(!open)} className="inline-flex items-center justify-center rounded-xl border border-white/20 bg-white/60 p-2 text-gray-700 shadow-sm backdrop-blur md:hidden dark:text-gray-200">
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>

        {open && (
          <div className="mt-2 overflow-hidden rounded-2xl border border-white/20 bg-white/70 shadow-lg backdrop-blur dark:bg-gray-900/70 md:hidden">
            <div className="flex flex-col divide-y divide-white/20">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="px-5 py-3 text-sm font-medium text-gray-800 transition hover:bg-white dark:text-gray-100 dark:hover:bg-gray-800/60"
                >
                  {item.label}
                </a>
              ))}
              <div className="flex items-center gap-3 px-5 py-3">
                <a href="https://github.com" target="_blank" rel="noreferrer" className="rounded-xl border border-white/20 bg-white/40 p-2 text-gray-700 shadow-sm transition hover:bg-white/70 dark:text-gray-200">
                  <Github size={18} />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="rounded-xl border border-white/20 bg-white/40 p-2 text-blue-700 shadow-sm transition hover:bg-white/70 dark:text-blue-400">
                  <Linkedin size={18} />
                </a>
                <a href="#contact" onClick={() => setOpen(false)} className="ml-auto inline-flex items-center gap-2 rounded-xl bg-gradient-to-tr from-blue-600 to-purple-600 px-3 py-2 text-sm font-semibold text-white shadow-sm transition hover:brightness-110">
                  <Mail size={16} /> <span>Say hello</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
