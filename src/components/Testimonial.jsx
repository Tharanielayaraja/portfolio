export default function Testimonial() {
  return (
    <section className="testimonial">
      <div className="wrap testimonial-row">
        <div className="testimonial-text">
          <svg width="34" height="26" viewBox="0 0 34 26" className="icon-quote"><path d="M0 26V14.6C0 5.4 5.5 0 14.8 0v6.1c-5 0-7.6 2.8-7.6 7.6h6.5V26H0zm18.6 0V14.6C18.6 5.4 24.1 0 33.4 0v6.1c-5 0-7.6 2.8-7.6 7.6h6.5V26H18.6z"/></svg>
          <p>From organizing blood donation camps and NSS outreach drives to spending a day bringing joy to underprivileged children through Aatral — I believe real leadership starts with community service.</p>
          <div className="testimonial-author">— THARANI E, NSS VOLUNTEER</div>
        </div>
        <div className="testimonial-photo">
          <svg width="30" height="30" viewBox="0 0 24 24" className="icon-user"><circle cx="12" cy="8" r="4"/><path d="M4 21c0-4.4 3.6-7 8-7s8 2.6 8 7"/></svg>
        </div>
      </div>
    </section>
  )
}
