import React from "react";
import logo from "../../../../assets/logo.svg";

export default function MobileTopbar({ handleMenu }) {
  return (
    <>
      <div className="iah__login">
        <a className="iah__login-link" role="button" href="#">
          Log in
        </a>
        <div className="bussiness__login"> </div>
      </div>
      <div>
        <div className="iah__logo">
          <a className="iah__logo-link" href="#" title="NatWest Logo">
            <img height="60px" src={logo} alt="NatWest Logo" />
          </a>
        </div>
      </div>
      <div className="mobile__hamburger">
        <button
          aria-label="More options menu"
          className="iah__menu-link menu-open"
          aria-expanded="false"
          onClick={handleMenu}
        >
          <span className="icon-menu">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width={25}
              height={25}
              viewBox="0 0 50 50"
            >
              <path d="M 0 7.5 L 0 12.5 L 50 12.5 L 50 7.5 Z M 0 22.5 L 0 27.5 L 50 27.5 L 50 22.5 Z M 0 37.5 L 0 42.5 L 50 42.5 L 50 37.5 Z" />
            </svg>
          </span>
          <span className="opened" aria-hidden="true">
            Menu
          </span>
          <span className="icon-close" />
        </button>
      </div>
    </>
  );
}
