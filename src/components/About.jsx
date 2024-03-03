import { useState, useEffect, useRef } from "react";

import FadeIn from "./effects/FadeIn";
import aboutMeData from "../utils/aboutData.json";

import "../stylesheets/about.css";

export default function About() {
  console.log(aboutMeData);
  return (
    <section className="about about-section">
      <div className="about__inner contained">
        <div className="about about-left">
          <article className="about__content about-left-content">
            <FadeIn
              tag="h1"
              className="title about__title title-dark"
              content={aboutMeData.aboutLeft.title}
            />
            <FadeIn
              tag="p"
              className="about__text text-dark"
              content={aboutMeData.aboutLeft.content}
            />
          </article>
          <div className="about__cta about-left__cta has-box-shadow">
            <a href="#" className="about__cta-btn cta-btn btn-ghost-dark">
              Vedi i miei lavori
            </a>
          </div>
        </div>
      
      <div className="about about-right">
        <article className="about__content about-right-content">
          <FadeIn
            tag="h1"
            className="title about__title title-dark"
            content={aboutMeData.aboutRight.title}
          />
          <FadeIn
            tag="p"
            className="about__text text-dark"
            content={aboutMeData.aboutRight.content}
          />
        </article>
        <div className="about__cta about-right__cta">
          <a href="#" className="about__cta-btn cta-btn btn-ghost-dark">
            Contattami subito
          </a>
        </div>
      </div>
      </div>
    </section>
  );
}

