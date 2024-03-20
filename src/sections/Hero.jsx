import { useState, useEffect, useRef } from "react";

import "../stylesheets/home-hero.css";

import Button from "../components/Button";

import { techs } from "../utils/imports";
import MovingDotsRandom from "../components/effects/MovingDotsRandom";

export default function Hero() {
  const [isAnimating, setIsAnimating] = useState(false);
  const [title, setTitle] = useState("");
  let [titleIndex, setTitleIndex] = useState(0);

  const [timeoutSwitch, setTimeoutSwitch] = useState(false);

  const intervalRef = useRef(null);

  // sets up the loop over the array for the tech words in the title //

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setTitleIndex((prevTitleIndex) => (prevTitleIndex + 1) % techs.length);
    }, 100);
    return () => clearInterval(intervalRef.current);
  }, []);

  // changes the words according to the index of the array   //
  useEffect(() => {
    setTitle(techs[titleIndex]);
  }, [titleIndex]);

  useEffect(() => {
    setTimeout(() => {
      clearInterval(intervalRef.current);
      setTimeoutSwitch(true);
    }, 2000);
  }, []);

  return (
    <section className="home-hero">
      <div id="homeHero" className="home-hero__inner contained">
      

      <p className="home-hero__text has-dark-text-stroke has-reveal-effect">
         Ricardo Bozzi
        </p>
        {!timeoutSwitch ? (
          <h1 className="home-hero__title-small title has-dark-text-stroke">{title}</h1>
        ) : (
          <h1 className="home-hero__title title has-dark-text-stroke has-reveal-effect">
            Frontend <span className="home-hero__subtitle has-light-text-stroke">Developer</span>
          </h1>
        )}


        <div className="home-hero__buttons">

          <Button
          type="btn-sm"
          style="btn-ghost-dark"
          link="/#projects"
          content="i miei lavori" />
           <Button
           type="btn-sm"
           style="btn-ghost-light"
           link="/#about"
           content="su di me" />
        </div>
        <MovingDotsRandom />
      </div>
    </section>
  );
}

{
  /* <span className='hero__subtitle title'>Developer</span> */
}
