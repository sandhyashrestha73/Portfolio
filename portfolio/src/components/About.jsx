

const STATS = [
  { value: '4th',  label: 'Semester, BCA' },
  { value: '3+',   label: 'Projects built' },
  { value: '5',    label: 'Core skills' },
  { value: '∞',    label: 'Things to learn' },
]

export default function About() {
  return (
    <section className="about" id="about">
      <div className="container about__inner">
        {/* Card */}
        <div className="about__card">
          <div className="about__card-header">
            <div className="about__initials">SS</div>
            <div>
              <p className="about__card-name">Sandhya Shrestha</p>
              <p className="about__card-role">BCA Student · Web Developer</p>
            </div>
          </div>
          <div className="about__stats">
            {STATS.map(({ value, label }) => (
              <div key={label} className="about__stat">
                <span className="about__stat-value">{value}</span>
                <span className="about__stat-label">{label}</span>
              </div>
            ))}
          </div>
          <div className="about__card-footer">
            <span className="about__location">📍 Kathmandu, Nepal</span>
            <span className="about__status">
              <span className="hero__badge-dot" style={{ display: 'inline-block', width: 6, height: 6, background: 'var(--teal)', borderRadius: '50%', marginRight: '0.4rem' }} />
              Available for work
            </span>
          </div>
        </div>

        {/* Text */}
        <div className="about__text">
          <span className="section-label">About me</span>
          <h2 className="section-title">Turning curiosity into code</h2>
          <p className="about__para">
            I'm a BCA student currently in my fourth semester, on a focused journey
            toward becoming a full-stack web developer. My interest in web development
            started with a simple question: <em>how do websites actually work?</em> — and it
            grew into a passion I now pursue every day.
          </p>
          <p className="about__para">
            I work with HTML, CSS, JavaScript, and React to build clean, responsive
            interfaces. Every project I take on teaches me something new — whether it's
            state management, API integration, or just writing more maintainable code.
          </p>
          <p className="about__para">
            My goal is to grow into a developer who builds products that are both
            technically solid and genuinely useful to people. I believe in learning
            by doing, and I document that journey through real projects.
          </p>
          <a href="#contact" className="btn btn--primary about__cta">
            Let's connect →
          </a>
        </div>
      </div>
    </section>
  )
}