import React from "react";
import logo from "../../../../assets/logo.svg";

export default function MobileLevel1({ handleMenu }) {
  return (
    <div className="iah__l1__l2__holder">
      <div className="header-top-mobile visible-xs visible-sm">
        <div className="brand-logo">
          <div className="iah__logo mobile_logo">
            <a
              className="iah__logo-link mobile-logo-link"
              href="#"
              title="NatWest Logo"
            >
              <img src={logo} alt="NatWest Logo" />
            </a>
          </div>
        </div>
      </div>
      <button
        onClick={handleMenu}
        aria-label="Close menu"
        className="iah__menu-link menu-open"
      >
        <span className="icon-close"> ✖</span>
      </button>
      <div className="iah__l1 ">
        <nav aria-label="Main Navigation">
          <ul className="ia__nav ia__navbar-nav">
            <li className="ia-active" aria-current="true">
              <a href="#" data-navid="personal" aria-current="page">
                <span>Personal</span>
              </a>
            </li>
            <li>
              <a href="#" data-navid="premier">
                <span>Premier</span>
              </a>
            </li>
            <li>
              <a href="#" data-navid="business">
                <span>Business</span>
              </a>
            </li>
            <li>
              <a href="/corporates.html" data-navid="corporates & institutions">
                <span>Corporates &amp; Institutions</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
