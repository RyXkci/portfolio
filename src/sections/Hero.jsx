import { useState, useEffect, useRef } from "react";

import "../stylesheets/home-hero.css";

import Button from "../components/Button";

import { techs } from "../utils/imports";
import MovingDots from "../components/MovingDots";

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
    <section id="homeHero" className="home-hero">
      <div className="home-hero__inner contained">
        <MovingDots />

      <p className="home-hero__text text-white">
         Ricardo Bozzi
        </p>
        {!timeoutSwitch ? (
          <h1 className="home-hero__title-small title text-white">{title}</h1>
        ) : (
          <h1 className="home-hero__title title text-white">
            Frontend <span className="home-hero__subtitle white">Developer</span>
          </h1>
        )}


        <div className="home-hero__buttons">

          <Button
          type="btn-sm"
          style="btn-fill-dark"
          link="/#projects"
          content="i miei lavori" />
           <Button
           type="btn-sm"
           style="btn-fill-light"
           link="/#about"
           content="su di me" />
        </div>
      </div>
    </section>
  );
}

{
  /* <span className='hero__subtitle title'>Developer</span> */
}
