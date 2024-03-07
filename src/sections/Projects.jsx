import { useState } from "react";

import "../stylesheets/projects.css";
import { v4 as uuid } from "uuid";

import Project from "../components/Project";

import projectData from '../utils/projectData.json'

export default function Projects() {
  console.log(projectData)

  const [projects, setProjects] = useState(projectData);
  
  return (
    <div id="projects" className="section projects-section">
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
        </div>
      </section>
    </div>
  );
}

        