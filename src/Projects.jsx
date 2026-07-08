const PROJECT_LINKS = [
  {
    title: "Software Development Portfolio",
    description: "A collection of my software development projects and experiences",
    href: "https://mallorysmith-software.netlify.app/",
  },
];

function Projects() {
  return (
    <div className="page">
      <h1 className="page-title">Projects</h1>
      <p className="page-subtitle">My collection of projects</p>

      <div className="project-grid">
        {PROJECT_LINKS.map((project) => (
          <a
            key={project.href}
            href={project.href}
            className="project-card"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className="project-card-title">{project.title}</h2>
            <p className="project-card-desc">{project.description}</p>
            <span className="project-card-cta">Visit project</span>
          </a>
        ))}
      </div>
    </div>
  );
}

export default Projects;