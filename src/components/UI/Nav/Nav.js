import React, { useState, useEffect } from "react";

import Link from "../Link/Link";

const Nav = () => {
  const [navClass, setNavClass] = useState("");

  useEffect(() => {
    window.addEventListener("scroll", () => {
      let navClass = "";
      if (window.scrollY >= 200) {
        navClass = "scrolled";
      }
      setNavClass(navClass);
    });
  }, []);
  return (
    <nav className={`navbar navbar-expand-md bg-light ${navClass}`}>
      <div className="container">
        <a className="navbar-brand" href="!#">
          <span>kiné-villiers</span>
          <i className="fas fa-circle ml-1" />
          <span>com</span>
        </a>
        <div>
          <span />
          <span />
          <span />
        </div>

        <div>
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link target="home" offset={-120} classes="nav-link">
                Accueil
              </Link>
            </li>
            <li className="nav-item">
              <Link target="leCab" classes="nav-link">
                Le cabinet
              </Link>
            </li>
            <li className="nav-item">
              <Link target="kine" classes="nav-link">
                Les Kinés
              </Link>
            </li>

            <li className="nav-item">
              <Link target="contact" classes="nav-link">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
