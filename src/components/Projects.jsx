import "../stylesheets/projects.css";

export default function Projects() {
  return (
    <div className="section projects-section">
      <section className="projects__inner contained">
        <h1 className="title projects__title title-light">mieiProgetti.Selezionati</h1>
        <div className="projects-grid">
          <article className="project hor project-light">
            <h3 className="project__title">Title</h3>
            <a href="#" className="project__btn">View</a>
          </article>
          <article className="project ver project-dark">
            <h3 className="project__title">Title</h3>
            <a href="#" className="project__btn">View</a>
          </article>
          <article className="project hor project-light">
            <h3 className="project__title">Title</h3>
            <a href="#" className="project__btn">View</a>
          </article>
          <article className="project ver project-dark">
            <h3 className="project__title">Title</h3>
            <a href="#" className="project__btn">View</a>
          </article>
        </div>
      </section>
    </div>
  );
}
