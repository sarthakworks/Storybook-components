import React from "react";

export default function DesktopLevel4() {
  return (
    <div className="topnav-D-L4">
      <div className="L4-container">
        <ul>
          <li>
            <ol>
              <a
                href="javascript:void(0)"
                class="iah__l4-column-title"
                tabindex="-1"
              >
                Mortgages
              </a>
              {[
                "See our mortgage options",
                "First time buyer mortgage",
                "Moving home",
                "Remortgage to NatWest",
                "Buy to let mortgage",
                "Mortgage calculators",
                "Get an Agreement in Principle",
                "Continue your Agreement in Principle",
                "How to apply",
              ].map((text, index) => (
                <li key={index}>
                  <a href="#" data-navid="text">
                    <span>{text}</span>
                  </a>
                </li>
              ))}
            </ol>
          </li>
          <li>
            <ol>
              <a
                href="javascript:void(0)"
                class="iah__l4-column-title"
                tabindex="-1"
              >
                Mortgages
              </a>
              {[
                "See our mortgage options",
                "First time buyer mortgage",
                "Moving home",
                "Remortgage to NatWest",
                "Buy to let mortgage",
                "Mortgage calculators",
                "Get an Agreement in Principle",
                "Continue your Agreement in Principle",
                "How to apply",
              ].map((text, index) => (
                <li key={index}>
                  <a href="#" data-navid="text">
                    <span>{text}</span>
                  </a>
                </li>
              ))}
            </ol>
          </li>
          <li>
            <ol>
              <a
                href="javascript:void(0)"
                class="iah__l4-column-title"
                tabindex="-1"
              >
                Mortgages
              </a>
              {[
                "See our mortgage options",
                "First time buyer mortgage",
                "Moving home",
                "Remortgage to NatWest",
                "Buy to let mortgage",
                "Mortgage calculators",
                "Get an Agreement in Principle",
                "Continue your Agreement in Principle",
                "How to apply",
              ].map((text, index) => (
                <li key={index}>
                  <a href="#" data-navid="text">
                    <span>{text}</span>
                  </a>
                </li>
              ))}
            </ol>
          </li>
        </ul>
      </div>
    </div>
  );
}
