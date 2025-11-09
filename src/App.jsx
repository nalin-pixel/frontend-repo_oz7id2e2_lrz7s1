import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50 text-gray-900 dark:from-gray-950 dark:to-gray-950 dark:text-white">
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <Contact />
      </main>
      <footer className="border-t border-gray-200/70 bg-white/60 py-8 text-center text-sm text-gray-600 backdrop-blur dark:border-white/10 dark:bg-gray-900/60 dark:text-gray-300">
        © {new Date().getFullYear()} Your Name — Crafted with love and creative code.
      </footer>
    </div>
  )
}

export default App
