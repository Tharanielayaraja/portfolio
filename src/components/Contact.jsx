export default function Contact() {
  return (
    <section className="contact">
      <div className="wrap contact-grid">
        <div className="contact-cta">
          <h2>Let's Work<br />Together</h2>
          <p>Looking for a motivated developer to join your team? I'd love to connect.</p>
          <a href="mailto:tharanielayaraja22@gmail.com" className="btn-primary">LET'S CONNECT&nbsp;→</a>
        </div>

        <div className="contact-info">
          <div className="contact-item">
            <svg width="16" height="16" viewBox="0 0 24 24" className="icon-contact"><path d="M4 4h16v16H4z"/><path d="M4 5l8 7 8-7"/></svg>
            <span>tharanielayaraja22@gmail.com</span>
          </div>
          <div className="contact-item">
            <svg width="16" height="16" viewBox="0 0 24 24" className="icon-contact"><path d="M22 16.9v3a2 2 0 01-2.2 2 19.8 19.8 0 01-8.6-3 19.5 19.5 0 01-6-6 19.8 19.8 0 01-3-8.7A2 2 0 014.1 2h3a2 2 0 012 1.7c.1 1 .3 2 .7 2.9a2 2 0 01-.5 2.1L8 10a16 16 0 006 6l1.3-1.3a2 2 0 012.1-.5c.9.4 1.9.6 2.9.7a2 2 0 011.7 2z"/></svg>
            <span>+91 90431 15110</span>
          </div>
          <div className="contact-item">
            <svg width="16" height="16" viewBox="0 0 24 24" className="icon-contact"><path d="M12 22s7-5.5 7-12a7 7 0 10-14 0c0 6.5 7 12 7 12z"/><circle cx="12" cy="10" r="2.5"/></svg>
            <span>Chennai, Tamil Nadu</span>
          </div>
        </div>
      </div>

      <div className="wrap footer-bar">
        <div className="brand-mark brand-mark--sm">T</div>
        <span className="footer-tagline">Building Reliable, User-Focused Software.</span>
        <span className="footer-copy">&copy; 2026 Tharani E. All rights reserved.</span>
      </div>
    </section>
  )
}
