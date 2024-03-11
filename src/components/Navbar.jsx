import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

import "../stylesheets/navbar.css";

export default function Navbar() {
  const [isToggled, setIsToggled] = useState(false);

  const toggleNav = () => {
    setIsToggled((prevIsToggled) => !prevIsToggled);
  };

  // DIFFERENT BUTTON ICON FOR WHEN NAV IS OPEN OR CLOSED
  const navIcon = !isToggled ? (
    <FontAwesomeIcon icon={faAngleLeft} />
  ) : (
    <FontAwesomeIcon icon={faAngleRight} />
  );

  return (
    <header className="header">

      {/* BUTTON THAT TOGGLES NAVBAR IN OR OUT. ARIA FOR ACCESSIBILITY */}
      <button
        onClick={toggleNav}
        className="mobile-nav-toggle"
        aria-controls="navList"
        aria-expanded={!isToggled ? "false" : "true"}
      >
        {/* SCREAN READER ONLY SPAN. INVISIBLE BUT NOT REMOVED FROM DOM */}
        <span className="sr-only">Open menu</span>

        {/* MOBILE TOGGLE BUTTON. VISIBLE BUT IGNORED BY SCREEN READER */}
        <span className="hamburger" aria-hidden="true">
          {navIcon}
        </span>
      </button>
      <nav
        className={!isToggled ? "nav navigation-closed" : "nav navigation-open"}
      >
        <ul id="navList" className="nav__list">
          <li className="nav-list-item has-link-hover">
            <NavLink to="/#homeHero" className="nav-list-link" onClick={toggleNav}>
              Home
            </NavLink>
          </li>
          <li className="nav-list-item has-link-hover">
            <Link  to="/#about" className="nav-list-link" onClick={toggleNav}>
              Su di me
            </Link>
          </li>
          <li className="nav-list-item has-link-hover">
            <Link to="/#projects" className="nav-list-link" onClick={toggleNav}>
              Lavori
            </Link>
          </li>
          <li className="nav-list-item has-link-hover">
            <Link to="/#techs" className="nav-list-link" onClick={toggleNav}>
              Tech
            </Link>
          </li>
          <li className="nav-list-item has-link-hover">
            <Link to="/#contact" className="nav-list-link" onClick={toggleNav}>
              Contattami
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
