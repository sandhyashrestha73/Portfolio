

const SKILLS = [
  {
    category: 'Frontend',
    icon: '⬡',
    items: [
      { name: 'HTML5',      level: 90, color: '#e34f26' },
      { name: 'CSS3',       level: 85, color: '#1572b6' },
      { name: 'JavaScript', level: 75, color: '#f7df1e' },
      { name: 'React',      level: 60, color: '#61dafb' },
    ],
  },
  {
    category: 'Tools & Workflow',
    icon: '⬡',
    items: [
      { name: 'Git & GitHub', level: 70, color: '#f05032' },
      { name: 'VS Code',      level: 88, color: '#007acc' },
      { name: 'Vite',         level: 55, color: '#646cff' },
      { name: 'Responsive UI',level: 80, color: '#00d9c0' },
    ],
  },
]

const LEARNING = ['Node.js', 'Express.js', 'MongoDB', 'REST APIs', 'TypeScript']

export default function Skills() {
  return (
    <section className="skills" id="skills">
      <div className="container">
        <div className="skills__header">
          <span className="section-label">Technical skills</span>
          <h2 className="section-title">What I work with</h2>
          <p className="section-desc">
            A focused set of frontend tools I use to build real projects,
            growing steadily toward the full stack.
          </p>
        </div>

        <div className="skills__grid">
          {SKILLS.map(({ category, items }) => (
            <div key={category} className="skills__card">
              <h3 className="skills__cat">{category}</h3>
              <div className="skills__items">
                {items.map(({ name, level, color }) => (
                  <div key={name} className="skill">
                    <div className="skill__top">
                      <span className="skill__name">{name}</span>
                      <span className="skill__pct">{level}%</span>
                    </div>
                    <div className="skill__track">
                      <div
                        className="skill__fill"
                        style={{ '--w': `${level}%`, '--color': color }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Currently learning */}
        <div className="skills__learning">
          <span className="skills__learning-label">Currently learning →</span>
          <div className="skills__tags">
            {LEARNING.map(tag => (
              <span key={tag} className="skills__tag">{tag}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}