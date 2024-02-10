import React from "react";
import DesktopLevel4 from "./DesktopLevel4";

export default function DesktopLevel3({ children: DesktopLevel4 }) {
  return (
    <div className="topnav-D-L3">
      <div className="L3-container">
        <div className="L3-left">
          <nav aria-label="Main Navigation">
            <ul>
              {["Mortgages", "Credit Cards", "Insurance"].map((text, index) => (
                <li
                  key={index}
                  className={index === 0 ? "active" : ""}
                  aria-current="true"
                >
                  <a href="#" data-navid="personal" aria-current="page">
                    <span>{text}</span>
                  </a>
                  {DesktopLevel4}
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="L3-right">
          <ul>
            <li></li>
          </ul>
        </div>
      </div>
    </div>
  );
}
