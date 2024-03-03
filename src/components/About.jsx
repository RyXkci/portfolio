import { useState, useEffect, useRef } from "react";

import FadeIn from "./effects/FadeIn";
import aboutMeData from "../utils/aboutData.json";

import SlideIn from "./effects/SlideIn";

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
          <SlideIn
          tag='div'
          className='about__cta about-left__cta as-box-shadow'
          direction='left'
          content="vedi i miei lavori"
          />

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
        <SlideIn
          tag='div'
          className='about__cta about-left__cta as-box-shadow'
          direction='right'
          content="contattami subito"
          />
      </div>
      </div>
    </section>
  );
}

