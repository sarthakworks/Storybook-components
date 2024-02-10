import React from "react";
import logo from "../../../assets/logo.svg";

export default function TopnavMobile() {
  return (
    <div className="TopnavMobile">
      <div className="TopnavMobile__main-content horizontal-view">
        <div className="iah__l2 ">
          <div className="iah__container">
            <div className="iah__l2__main-links">
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
                >
                  <span className="icon-menu" />
                  <span className="opened" aria-hidden="true">
                    Menu
                  </span>
                  <span className="icon-close" />
                  <span className="closed" aria-hidden="true">
                    Close
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="iah__over-lay">Overlay</div>
    </div>
  );
}
