import { Menu, Github, Linkedin } from 'lucide-react'

const links = [
  { href: '#home', label: 'Home' },
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#education', label: 'Education' },
  { href: '#achievements', label: 'Achievements' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const scrollTo = (e, href) => {
    e.preventDefault()
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/70 border-b border-black/5">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex items-center justify-between h-16">
          <a href="#home" onClick={(e)=>scrollTo(e,'#home')} className="font-semibold tracking-tight text-gray-900">
            dev.portfolio
          </a>

          <nav className="hidden md:flex items-center gap-6 text-sm text-gray-700">
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={(e)=>scrollTo(e,l.href)} className="hover:text-gray-900 transition-colors">
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a href="https://github.com" target="_blank" rel="noreferrer" aria-label="GitHub" className="p-2 rounded-md hover:bg-gray-100">
              <Github size={18} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="p-2 rounded-md hover:bg-gray-100">
              <Linkedin size={18} />
            </a>
            <button className="md:hidden p-2 rounded-md hover:bg-gray-100" aria-label="Menu">
              <Menu size={18} />
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}
