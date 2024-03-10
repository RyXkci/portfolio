import { useState } from 'react'; 
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'


import '../stylesheets/navbar.css'



export default function Navbar() {

    const [isToggled, setIsToggled] =useState(false);

    const toggleNav =() => {
        setIsToggled(prevIsToggled => !prevIsToggled)
    }
  return (
    <header className="header">
     <button
        onClick={toggleNav}
        className="mobile-nav-toggle"
        aria-controls="navList"
        aria-expanded="false"
      >
        <span className="sr-only">Open menu</span>
        <span className="hamburger" aria-hidden="true"><FontAwesomeIcon icon={faBars} /></span>
      </button> 
      <nav>
        <ul id="navList" className={!isToggled ? "nav__list navigation-closed" : "nav__list navigation-open"}>
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
