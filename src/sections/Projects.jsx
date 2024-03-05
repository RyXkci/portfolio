import { useState } from "react";

import "../stylesheets/projects.css";
import { v4 as uuid } from "uuid";

import Project from "../projects/Project";

import projectData from '../utils/projectData.json'

export default function Projects() {
  console.log(projectData)

  const [projects, setProjects] = useState(projectData);
  
  return (
    <div className="section projects-section">
      <section className="projects__inner">
        <h1 className="title projects__title title-light">
          mieiProgetti.<span className="projects__title-span">Selezionati</span>
        </h1>
        <div className="projects-grid">
         {projects.map((project) => (
           <Project
           key={uuid()}
           direction={project.direction}
           style={project.style}
           title={project.title}
           content={project}
           link={project.slug}/>
         ))}
 
          {/* <Project
          direction='hor'
          style='light'
          title='smartahol'
          link='#'/>
  
              <Project
          direction='ver'
          style='dark'
          title='the coloured box game'
          link='#'/>
       
          <Project
          direction='hor'
          style='light'
          title='pokémon kanto pokédex'
          link='#'/>
       
          <Project
          direction='ver'
          style='dark'
          title='dark souls paper rock scissors'
          link='#'/>
       
          <Project 
          direction='hor'
          style='light'
          title='FEM calcolatrice mancie'
          link='#'/> */}
        </div>
      </section>
    </div>
  );
}

         {/* <article className="project hor project-light">
            <h3 className="project__title">Smartahol</h3>
            <div className="project__link-container">
               <a href="#" className="project__btn">
              View
            </a>
            </div>
            
          </article> */}

              
          {/* <article className="project ver project-dark">
            <h3 className="project__title">The Coloured Box Game</h3>
            <div className="project__link-container">
               <a href="#" className="project__btn">
              View
            </a>
            </div>
          </article> */}

              {/* <article className="project hor project-light">
            <h3 className="project__title">Pokemon Kanto Pokedex</h3>
            <a href="#" className="project__btn">
              View
            </a>
          </article> */}

            {/* <article className="project ver project-dark">
            <h3 className="project__title">Dark Souls Paper Rock Scissors</h3>
            <a href="#" className="project__btn">
              View
            </a>
          </article> */}

             {/* <article className="project hor project-light">
            <h3 className="project__title">FEM Calcolatrice Mancie</h3>
            <a href="#" className="project__btn">
              View
            </a>
          </article> */}