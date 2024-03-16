import { useState, useEffect, useRef } from "react";

// IMPORTED EFFECT COMPONENTS. THEY TAKE HTML ELEMENTS AND APPLY ANIMATIONS. 
// OWN COMPONENTS TO FACILITATE INTERSETIONOBSERVER.
import FadeIn from "../components/effects/FadeIn";
import SlideIn from "../components/effects/SlideIn";

// DATA TO PASS TO ANIMATION COMPONENTS. AVOIDS HIGE STRINGS AS PROPS
import aboutMeData from "../utils/aboutData.json";


import "../stylesheets/about.css";

export default function About() {
  return (
    <section id="about" className="about about-section">
      <div className="about__inner contained">
        <div className="about about-left">
          <article className="about__content about-left-content">
            <FadeIn
              tag="h1"
              className="title about__title title-acc--dark"
              content={aboutMeData.aboutLeft.title}
            />
            <FadeIn
              tag="p"
              className="about__text text-white"
              content={aboutMeData.aboutLeft.content}
            />
          </article>

          {/* SLIDE IN EFFECT. DIRECTION PPROP DETERMINES WHICH DIRECTION IT SLIDES IN FROM */}
          <SlideIn
          tag='div'
          className='about__cta cta--dark about-left__cta as-box-shadow'
          btnColor="dark"
          direction='left'
          content="vedi i miei lavori"
          link="/#projects"
          />

        </div>
      
      <div className="about about-right">
        <article className="about__content about-right-content">
          <FadeIn
            tag="h1"
            className="title about__title title-acc--light"
            content={aboutMeData.aboutRight.title}
          />
          <FadeIn
            tag="p"
            className="about__text text-white"
            content={aboutMeData.aboutRight.content}
          />
        </article>

         {/* SLIDE IN EFFECT. DIRECTION PPROP DETERMINES WHICH DIRECTION IT SLIDES IN FROM */}
        <SlideIn
          tag='div'
          className='about__cta cta--light about-left__cta as-box-shadow'
          btnColor="light"
          direction='right'
          content="contattami subito"
          link="/#contact"
          />
      </div>
      </div>
    </section>
  );
}

