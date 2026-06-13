import { useState, useEffect } from 'react'
import logo from '../logo.png'
const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const close = () => setOpen(false)

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all ${
        scrolled ? 'bg-white/80 shadow-md backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-4">

        {/* Logo */}
        <a
          href="#home"
          onClick={close}
          className="text-xl font-bold text-gray-900"
        > SANDHYA
        <span className="text-teal-600">.</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          {NAV_LINKS.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              onClick={close}
              className="text-gray-700 hover:text-teal-600 transition"
            >
              {label}
            </a>
          ))}

          <a
            href="mailto:sandhya@example.com"
            className="px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition"
          >
            Hire me
          </a>
        </nav>

        {/* Mobile Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col gap-1"
          aria-label="Toggle menu"
        >
          <span className={`h-0.5 w-6 bg-gray-800 transition ${open && 'rotate-45 translate-y-1.5'}`} />
          <span className={`h-0.5 w-6 bg-gray-800 transition ${open && 'opacity-0'}`} />
          <span className={`h-0.5 w-6 bg-gray-800 transition ${open && '-rotate-45 -translate-y-1.5'}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white shadow-md px-6 py-4 space-y-4">
          {NAV_LINKS.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              onClick={close}
              className="block text-gray-700 hover:text-teal-600"
            >
              {label}
            </a>
          ))}

          <a
            href="mailto:sandhya@example.com"
            onClick={close}
            className="block w-full text-center px-4 py-2 bg-teal-600 text-white rounded-lg"
          >
            Hire me
          </a>
        </div>
      )}
    </header>
  )
}