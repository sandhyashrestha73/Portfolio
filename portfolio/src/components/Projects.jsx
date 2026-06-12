

const PROJECTS = [
  {
    number: '01',
    title: 'Todo App',
    description:
      'A task management app with add, delete, and complete functionality. Built to practise React state and component architecture with localStorage persistence.',
    tags: ['React', 'CSS', 'localStorage'],
    accent: '#7c6aff',
    github: 'https://github.com/sandhya',
    live:   '#',
    emoji:  '✅',
  },
  {
    number: '02',
    title: 'Weather App',
    description:
      'Fetches real-time weather data using the OpenWeatherMap API. Displays temperature, humidity, and conditions for any searched city with a clean card-based UI.',
    tags: ['JavaScript', 'REST API', 'CSS'],
    accent: '#00d9c0',
    github: 'https://github.com/sandhya',
    live:   '#',
    emoji:  '🌤️',
  },
  {
    number: '03',
    title: 'Portfolio Website',
    description:
      'This very site — a personal portfolio built with React and Vite, featuring smooth scrolling, responsive layout, and a dark design system built from scratch.',
    tags: ['React', 'Vite', 'CSS Variables'],
    accent: '#b39eff',
    github: 'https://github.com/sandhya',
    live:   '#',
    emoji:  '🚀',
  },
]

export default function Projects() {
  return (
    <section className="projects" id="projects">
      <div className="container">
        <div className="projects__header">
          <span className="section-label">Projects</span>
          <h2 className="section-title">Things I've built</h2>
          <p className="section-desc">
            Real projects that helped me grow as a developer — each one a step
            forward in building functional, user-friendly applications.
          </p>
        </div>

        <div className="projects__list">
          {PROJECTS.map(({ number, title, description, tags, accent, github, live, emoji }) => (
            <article
              key={number}
              className="project-card"
              style={{ '--card-accent': accent }}
            >
              <div className="project-card__top">
                <div className="project-card__emoji">{emoji}</div>
                <div className="project-card__links">
                  <a href={github} target="_blank" rel="noopener noreferrer" className="project-card__link" aria-label="GitHub">
                    <GitHubIcon />
                  </a>
                  <a href={live} target="_blank" rel="noopener noreferrer" className="project-card__link" aria-label="Live demo">
                    <ExternalIcon />
                  </a>
                </div>
              </div>

              <span className="project-card__num">{number}</span>
              <h3 className="project-card__title">{title}</h3>
              <p  className="project-card__desc">{description}</p>

              <div className="project-card__tags">
                {tags.map(t => (
                  <span key={t} className="project-card__tag">{t}</span>
                ))}
              </div>
            </article>
          ))}
        </div>

        <div className="projects__more">
          <a
            href="https://github.com/sandhya"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--ghost"
          >
            <GitHubIcon /> See all on GitHub
          </a>
        </div>
      </div>
    </section>
  )
}

function GitHubIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
    </svg>
  )
}

function ExternalIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  )
}