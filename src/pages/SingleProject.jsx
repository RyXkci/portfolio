import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import "../stylesheets/single-project.css";
import projectData from "../utils/projectData.json";

import LinksStripe from "../components/LinksStripe";
import ContactStripe from "../components/ContactStripe";

export default function SingleProject() {
  const { title } = useParams();

  const [project, setProject] = useState("");
  const [links, setLinks] = useState({})

  useEffect(() => {
    //   FINDS THE PROJECT WITH THE SLUG THAT MATCHES THE TITLE PASSED IN TO THE ROUTE   //
    const currentProject = projectData.find(
      (el) => el.slug === title
    );
    console.log(currentProject)
    //   SETS THAT SINGLE PRPJECT IN TO STATE FOR RENDERING   //
    setProject(currentProject);
    //  SAVING THE EXTERNAL LINKS TO STATE TO PASS AS PROP TP LINK STRIPE   //
    setLinks(currentProject.externalLinks)
  }, []);



  return (
    <>
      <div className="hero has-gradient-bg">
        <h1 className="hero__title title title-white has-dark-text-shadow">
          {project.title}
        </h1>
      </div>
      <div className="project-section">
        <div className="project-section__inner contained">
            <h1 className="project-section__title title-black">{project.title}</h1>
            <article className="project__info">
                <h1 className="project__info-title title-black">Che cos'è?</h1>
                <p className="project__info-text text-black">{project.content}</p>
            </article>
            <article className="project__info">
                <h1 className="project__info-title title-black">Di quali tecnologie fa uso?</h1>
                <p className="project__info-text text-black">{project.techs}</p>
            </article>
            <article className="project__info">
                <h1 className="project__info-title title-black">Le sfide:</h1>
                <p className="project__info-text text-black">{project.challenges}</p>
            </article>
            
        </div>
      </div>
      <section className="project__links">
                <h1 className="project__links-title title title-black">I link</h1>
                <LinksStripe
                content={links} 
                style='black'
                />
            </section>
            <section className="contact-link-section">
                <ContactStripe
                style="light" />
            </section>
    </>
  );
}
