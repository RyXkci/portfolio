import { useState } from 'react'; 
import { Link } from "react-router-dom";

import '../stylesheets/navbar.css'


export default function Navbar() {

    const [isToggled, setIsToggled] =useState(false);

    const toggleNav =() => {
        setIsToggled(prevIsToggled => !prevIsToggled)
    }
  return (
    <header className={!isToggled ? "header closed" : "header open"}>
      <span>icon</span>
      <nav className="primary-navigation">
        <ul className="nav__list">
        {/* <button
        id="navToggleOpen"
        onClick={toggleNav}
        className="mobile-nav-toggle mobile-nav-toggle-open"
        aria-controls="navList"
        aria-expanded="false"
      >
        <span className="sr-only">Open menu</span>
        <span className="hamburger-visible" aria-hidden="true"></span>
      </button> */}
            <li className="nav-list-item"><Link to="/#homeHero" className="nav-list-link">Home</Link></li>
            <li className="nav-list-item"><Link to="/#about" className="nav-list-link">Su di me</Link></li>
            <li className="nav-list-item"><Link to="/#projects" className="nav-list-link">Lavori</Link></li>
            <li className="nav-list-item"><Link to="/#techs" className="nav-list-link">Tech</Link></li>
            <li className="nav-list-item"><Link to="/#contact" className="nav-list-link">Contattami</Link></li>

        </ul>
      </nav>
    </header>
  );
}
