import "../stylesheets/projects.css";

export default function Projects() {
  return (
    <div className="section projects-section">
      <section className="projects__inner">
        <h1 className="title projects__title title-light">
          mieiProgetti.<span className="projects__title-span">Selezionati</span>
        </h1>
        <div className="projects-grid">
          <article className="project hor project-light">
            <h3 className="project__title">Smartahol</h3>
            {/* <a href="#" className="project__btn">
              View
            </a> */}
          </article>
          <article className="project ver project-dark">
            <h3 className="project__title">The Coloured Box Game</h3>
            {/* <a href="#" className="project__btn">
              View
            </a> */}
          </article>
          <article className="project hor project-light">
            <h3 className="project__title">Pokemon Kanto Pokedex</h3>
            {/* <a href="#" className="project__btn">
              View
            </a> */}
          </article>
          <article className="project ver project-dark">
            <h3 className="project__title">Dark Souls Paper Rock Scissors</h3>
            {/* <a href="#" className="project__btn">
              View
            </a> */}
          </article>
        </div>
      </section>
    </div>
  );
}
