import { useState, useEffect } from 'react'


const NAV_LINKS = [
  { label: 'About',    href: '#about'    },
  { label: 'Skills',   href: '#skills'   },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact',  href: '#contact'  },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen]         = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const close = () => setOpen(false)

  return (
    <header className={`navbar${scrolled ? ' navbar--scrolled' : ''}`}>
      <div className="navbar__inner container">
        <a href="#home" className="navbar__logo" onClick={close}>
          SS<span className="navbar__logo-dot">.</span>
        </a>

        <nav className={`navbar__links${open ? ' navbar__links--open' : ''}`}>
          {NAV_LINKS.map(({ label, href }) => (
            <a key={href} href={href} className="navbar__link" onClick={close}>
              {label}
            </a>
          ))}
          <a
            href="mailto:sandhya@example.com"
            className="navbar__cta"
            onClick={close}
          >
            Hire me
          </a>
        </nav>

        <button
          className={`navbar__burger${open ? ' navbar__burger--open' : ''}`}
          onClick={() => setOpen(o => !o)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </div>
    </header>
  )
}