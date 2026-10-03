export default function Hero() {
  return (
    <section className="hero">
      <div className="wrap hero-row">
        <div className="hero-text">
          <div className="hero-kicker">Software</div>
          <h1 className="hero-headline">Developer</h1>
          <div className="hero-divider"></div>
          <p className="hero-lead">Motivated Computer Science postgraduate building web and database-driven applications.</p>
          <p className="hero-sub">Strong programming fundamentals, a collaborative mindset, and proven leadership through active community service — seeking a full-time opportunity to contribute as a software developer.</p>
          <div className="hero-signature">Tharani E</div>
        </div>

        <div className="hero-visual">
          <div className="hero-circle"></div>
          <div className="hero-photo">
            <img src="/images/tharani.jpeg" alt="Tharani" className="hero-photo-img" />
          </div>
          <div className="hero-badge">
            <svg width="14" height="14" viewBox="0 0 24 24" className="icon-star"><path d="M12 0l2.4 8.8L24 12l-9.6 3.2L12 24l-2.4-8.8L0 12l9.6-3.2z"/></svg>
            <span>OPEN TO FULL-TIME ROLES</span>
          </div>
        </div>
      </div>
    </section>
  )
}
