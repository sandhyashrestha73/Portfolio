const PROJECTS = [
  {
    number: '01',
    title: 'Todo App',
    description:
      'A task management app with add, delete, and complete functionality. Built to practise React state and component architecture with localStorage persistence.',
    tags: ['React', 'CSS', 'localStorage'],
    accent: '#7c6aff',
    github: 'https://github.com/sandhya',
    live: '#',
    emoji: '✅',
  },
  {
    number: '02',
    title: 'Supermarket Billing System',
    description:
      'A console-based billing application that was developed to manage supermarket sales efficiently. The system allowed users to add products, calculate total bills, apply discounts, and generate invoices. .',
    tags: ['C Language', 'Console Application', 'File Handling'],
    accent: '#b39eff',
    github: 'https://github.com/sandhya',
    live: '#',
    emoji: '📑',
  },
  {
    number: '03',
    title: 'Portfolio Website',
    description:
      'A personal portfolio built with React and Vite featuring smooth scrolling and responsive design.',
    tags: ['React', 'Vite', 'CSS'],
    accent: '#b39eff',
    github: 'https://github.com/sandhya',
    live: '#',
    emoji: '🚀',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-sm uppercase tracking-widest text-teal-600 font-semibold">
            Projects
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">
            Things I've built
          </h2>
          <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
            Real projects that helped me grow as a developer — each one a step
            forward in building functional, user-friendly applications.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((p) => (
            <article
              key={p.number}
              className="relative rounded-2xl p-6 bg-white shadow-md hover:shadow-xl transition group overflow-hidden"
            >
              {/* Accent glow */}
              <div
                className="absolute -top-10 -right-10 w-32 h-32 blur-3xl opacity-30 rounded-full"
                style={{ background: p.accent }}
              />

              {/* Top row */}
              <div className="flex items-center justify-between mb-4">
                <span className="text-2xl">{p.emoji}</span>

                <div className="flex gap-3 text-gray-500">
                  <a
                    href={p.github}
                    target="_blank"
                    className="hover:text-black transition"
                  >
                    <GitHubIcon />
                  </a>
                  <a
                    href={p.live}
                    target="_blank"
                    className="hover:text-black transition"
                  >
                    <ExternalIcon />
                  </a>
                </div>
              </div>

              {/* Number */}
              <span className="text-sm font-bold text-gray-400">
                {p.number}
              </span>

              {/* Title */}
              <h3 className="text-xl font-semibold mt-1 mb-2 group-hover:text-teal-600 transition">
                {p.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                {p.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="text-xs px-2 py-1 bg-gray-100 rounded-full text-gray-600"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>

        {/* Footer CTA */}
        <div className="text-center mt-10">
          <a
            href="https://github.com/sandhyashrestha73"
            target="_blank"
            className="inline-flex items-center gap-2 px-6 py-3 border rounded-lg hover:bg-gray-100 transition"
          >
            <GitHubIcon />
            See all on GitHub
          </a>
        </div>
      </div>
    </section>
  )
}

/* Icons */
function GitHubIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
    </svg>
  )
}

function ExternalIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  )
}