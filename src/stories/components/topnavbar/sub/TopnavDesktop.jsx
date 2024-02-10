import React from "react";
import ThemeSwitcher from "../../themeSwitcher/ThemeSwitcher";

export default function TopnavDesktop() {
  return (
    <nav className="TopnavDesktop">
      <div className="topnav-D-L1">
        <div className="L1-container">
          <div className="L1-left">
            <nav aria-label="Main Navigation">
              <ul>
                <li class="active" aria-current="true">
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
              </ul>
            </nav>
          </div>
          <div className="L1-right">
            <ul>
              <li>
                <a href="#" data-navid="premier">
                  <span>Help & Support</span>
                </a>
              </li>
              <li>
                <a href="#" data-navid="business">
                  <span>Register</span>
                </a>
              </li>
              <li>
                <ThemeSwitcher />
              </li>
              <li>
                <div class="button btn--primary">
                  <button class="cmp-button" type="button">
                    <span class="cmp-button__text">Login</span>
                  </button>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="topnav-D-L2"></div>
      <div className="topnav-D-L3"></div>
    </nav>
  );
}
