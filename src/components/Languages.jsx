const languages = [
  {
    name: 'Python',
    desc: 'Core backend logic for Sangamam and the Alumni Management System — handling data flow between the interface and database.',
    icon: <path d="M9 18h6M10 21h4M12 3a6 6 0 00-3.5 10.9c.5.4.8 1 .8 1.6v.5h5.4v-.5c0-.6.3-1.2.8-1.6A6 6 0 0012 3z" />,
  },
  {
    name: 'MySQL',
    desc: 'Designed and queried relational databases for event tracking, alumni records, and search/filter features.',
    icon: (
      <>
        <rect x="3" y="4" width="18" height="14" rx="2" />
        <path d="M3 9h18M8 21h8" />
      </>
    ),
  },
  {
    name: 'HTML',
    desc: 'Structured the front end for both academic projects with clean, semantic markup.',
    icon: (
      <>
        <rect x="6" y="2" width="12" height="20" rx="2" />
        <path d="M11 18h2" />
      </>
    ),
  },
  {
    name: 'CSS',
    desc: 'Styled responsive, user-friendly interfaces to make the dashboards easy to navigate.',
    icon: (
      <>
        <path d="M4 19V5a2 2 0 012-2h10l4 4v12a2 2 0 01-2 2H6a2 2 0 01-2-2z" />
        <path d="M16 3v4h4" />
      </>
    ),
  },
  {
    name: 'Java (Basics)',
    desc: 'Foundational object-oriented programming knowledge from academic coursework.',
    icon: (
      <>
        <circle cx="11" cy="11" r="7" />
        <path d="M21 21l-4.3-4.3" />
      </>
    ),
  },
]

export default function Languages() {
  return (
    <div className="languages">
      <h2 className="eyebrow">LANGUAGES</h2>
      <ul className="language-list">
        {languages.map((lang) => (
          <li key={lang.name}>
            <div className="language-icon">
              <svg width="18" height="18" viewBox="0 0 24 24">{lang.icon}</svg>
            </div>
            <div>
              <h3>{lang.name}</h3>
              <p>{lang.desc}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
