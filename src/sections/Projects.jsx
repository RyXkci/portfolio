import "../stylesheets/projects.css";

import Project from "../projects/Project";

export default function Projects() {
  return (
    <div className="section projects-section">
      <section className="projects__inner">
        <h1 className="title projects__title title-light">
          mieiProgetti.<span className="projects__title-span">Selezionati</span>
        </h1>
        <div className="projects-grid">
          {/* <article className="project hor project-light">
            <h3 className="project__title">Smartahol</h3>
            <div className="project__link-container">
               <a href="#" className="project__btn">
              View
            </a>
            </div>
            
          </article> */}
          <Project
          direction='hor'
          style='light'
          title='smartahol'
          link='#'/>
      
          {/* <article className="project ver project-dark">
            <h3 className="project__title">The Coloured Box Game</h3>
            <div className="project__link-container">
               <a href="#" className="project__btn">
              View
            </a>
            </div>
          </article> */}
              <Project
          direction='ver'
          style='dark'
          title='the coloured box game'
          link='#'/>
           {/* <article className="project hor project-light">
            <h3 className="project__title">Pokemon Kanto Pokedex</h3>
            <a href="#" className="project__btn">
              View
            </a>
          </article> */}
          <Project
          direction='hor'
          style='light'
          title='pokémon kanto pokédex'
          link='#'/>
         {/* <article className="project ver project-dark">
            <h3 className="project__title">Dark Souls Paper Rock Scissors</h3>
            <a href="#" className="project__btn">
              View
            </a>
          </article> */}
          <Project
          direction='ver'
          style='dark'
          title='dark souls paper rock scissors'
          link='#'/>
          {/* <article className="project hor project-light">
            <h3 className="project__title">FEM Calcolatrice Mancie</h3>
            <a href="#" className="project__btn">
              View
            </a>
          </article> */}
          <Project 
          direction='hor'
          style='light'
          title='FEM calcolatrice mancie'
          link='#'/>
        </div>
      </section>
    </div>
  );
}
