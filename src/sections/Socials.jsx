import "../stylesheets/socials.css";

// IMPORTING LOGO DATA. IMAGES, LINKS AND ALTS. STYLE PROPR FOR COLOR CHANGES
import { logos } from "../utils/imports";

export default function Socials({ style }) {
  return (
    <section className={`section socials-section socials-section-${style}`}>
      <h1 className="title">connetti()</h1>
      <div className="social__logos logos">
        {logos.map((logo) => (
          <a href={logo.link} className="socials-link" key={logo.id}>
            <img className="logo" src={logo.src} alt={logo.alt} />
          </a>
        ))}
      </div>
    </section>
  );
}
