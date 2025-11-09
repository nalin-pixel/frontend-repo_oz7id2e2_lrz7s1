import { Mail, Send } from 'lucide-react'
import { useState } from 'react'

export default function Contact() {
  const [status, setStatus] = useState('')

  const onSubmit = (e) => {
    e.preventDefault()
    setStatus('Thanks! I will get back to you soon.')
  }

  return (
    <section id="contact" className="relative mx-auto max-w-7xl px-6 py-20">
      <div className="mx-auto max-w-2xl text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/60 px-3 py-1 text-xs font-medium text-gray-700 backdrop-blur dark:bg-gray-900/60 dark:text-gray-200">
          <Mail size={14} /> Get in touch
        </div>
        <h2 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 dark:text-white">Let’s build something great</h2>
        <p className="mt-2 text-gray-600 dark:text-gray-300">Have an idea or opportunity? Drop a message and I’ll respond promptly.</p>
      </div>

      <form onSubmit={onSubmit} className="mx-auto mt-10 max-w-xl space-y-4">
        <div>
          <label className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300">Name</label>
          <input required className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-gray-900 shadow-sm placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 dark:border-white/10 dark:bg-gray-900 dark:text-white" placeholder="Jane Doe" />
        </div>
        <div>
          <label className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300">Email</label>
          <input type="email" required className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-gray-900 shadow-sm placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 dark:border-white/10 dark:bg-gray-900 dark:text-white" placeholder="jane@email.com" />
        </div>
        <div>
          <label className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300">Message</label>
          <textarea required rows={5} className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-gray-900 shadow-sm placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 dark:border-white/10 dark:bg-gray-900 dark:text-white" placeholder="Tell me about your project..." />
        </div>
        <div className="flex items-center justify-between">
          <p className="text-sm text-green-700 dark:text-green-400">{status}</p>
          <button type="submit" className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-tr from-blue-600 to-purple-600 px-5 py-3 text-sm font-semibold text-white shadow transition hover:brightness-110">
            Send <Send size={16} />
          </button>
        </div>
      </form>
    </section>
  )
}
