

export default function Hero() {
  return (
    <section className="hero" id="home">
      {/* Background grid */}
      <div className="hero__grid" aria-hidden="true" />

      {/* Glow orbs */}
      <div className="hero__orb hero__orb--purple" aria-hidden="true" />
      <div className="hero__orb hero__orb--teal"   aria-hidden="true" />

      <div className="container hero__inner">
        <div className="hero__content fade-up">
          <span className="hero__badge">
            <span className="hero__badge-dot" />
            Open to opportunities
          </span>

          <h1 className="hero__title">
            Hi, I'm <span className="hero__name">Sandhya</span>
            <br />
            <span className="hero__role">Web Developer</span>
          </h1>

          <p className="hero__bio">
            BCA student from Nepal building clean, purposeful web experiences.
            Passionate about turning ideas into real-world applications —
            one line of code at a time.
          </p>

          <div className="hero__actions">
            <a href="#projects" className="btn btn--primary">View my work</a>
            <a href="#contact"  className="btn btn--ghost">Get in touch</a>
          </div>
        </div>

        <div className="hero__avatar fade-up" style={{ animationDelay: '0.15s' }}>
          <div className="hero__avatar-ring" />
          <div className="hero__avatar-img">
            <span>SS</span>
          </div>
          <div className="hero__avatar-badge">
            <span>🇳🇵</span> Nepal
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <a href="#about" className="hero__scroll" aria-label="Scroll to about">
        <span className="hero__scroll-line" />
      </a>
    </section>
  )
}