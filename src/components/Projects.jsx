const projects = [
  {
    num: '01',
    title: 'Sangamam — Club & Event Management System',
    role: 'Individual Project · Academic',
    summary: 'A single, unified dashboard that brought four student clubs together — streamlining how events get planned, tracked, and run.',
    features: [
      'Centralized dashboard to manage events & member activities across NSS, NCC, ECPO Club and RRC',
      'Event scheduling and participation tracking across clubs',
      'Improved cross-club coordination efficiency',
    ],
  },
  {
    num: '02',
    title: 'Alumni Management System',
    role: 'Individual Project · Academic',
    summary: 'A full alumni lifecycle system — from registration to lasting engagement — backed by a clean, reliable MySQL data layer.',
    features: [
      'Alumni registration, profile updates & engagement tools',
      'Search and filter functionality for institutional outreach',
      'MySQL database backend with a Python-driven interface',
    ],
  },
]

export default function Projects() {
  return (
    <section className="work">
      <div className="wrap">
        <div className="section-head">
          <h2 className="eyebrow">PROJECTS</h2>
        </div>

        <div className="work-grid">
          {projects.map((project) => (
            <article className="work-card" key={project.num}>
              <div className="work-num">{project.num}</div>
              <h3 className="work-title">{project.title}</h3>
              <div className="work-category">{project.role}</div>
              <div className="work-thumb">
                <div className="work-thumb-bar"><span></span><span></span><span></span></div>
                <p className="work-summary">{project.summary}</p>
                <ul className="work-features">
                  {project.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
