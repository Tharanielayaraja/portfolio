const highlights = [
  'Designed and developed the company website',
  'Assisted in managing and coordinating the IT team',
]

export default function Experience() {
  return (
    <div className="experience">
      <h2 className="eyebrow">EXPERIENCE</h2>
      <div className="experience-card">
        <div className="experience-icon">
          <svg width="18" height="18" viewBox="0 0 24 24"><rect x="3" y="7" width="18" height="13" rx="2" /><path d="M8 7V5a2 2 0 012-2h4a2 2 0 012 2v2" /><path d="M3 12h18" /></svg>
        </div>
        <div>
          <h3>Software Developer Intern</h3>
          <div className="experience-meta">Chennai Rice Industries · 6 Months</div>
          <ul className="experience-list">
            {highlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
