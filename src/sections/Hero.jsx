import { useState, useEffect, useRef } from "react";

import "../stylesheets/hero.css";

import Button from "../components/Button";

import { techs } from "../utils/imports";

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
    <section className="hero">
      <div className="hero__inner contained">
        {!timeoutSwitch ? (
          <h1 className="hero__title-small title text-light">{title}</h1>
        ) : (
          <h1 className="hero__title title text-light has-text-shadow">
            Frontend <span className="hero__subtitle title">Developer</span>
          </h1>
        )}

        <p className="hero__text text-light">
          Il mio nome è Ricardo Bozzi e benvenuti sul mio sito personale
        </p>

        <div className="hero__buttons">

          <Button
          type="btn-sm"
          style="btn-fill-dark"
          link="#"
          content="i miei lavori" />
          {/* <a href="#" className="btn btn-fill-dark">
            I miei lavori
          </a> */}
           <Button
           type="btn-sm"
           style="btn-fill-light"
           link="#"
           content="su di me" />
          {/* <a href="#" className="btn btn-fill-light">
            Su di me
          </a> */}
        </div>
      </div>
    </section>
  );
}

{
  /* <span className='hero__subtitle title'>Developer</span> */
}
