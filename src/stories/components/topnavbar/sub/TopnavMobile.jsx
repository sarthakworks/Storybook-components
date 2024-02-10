import React, { useState } from "react";
import logo from "../../../assets/logo.svg";
import MobileTopbar from "./MobileLevel/MobileTopbar";
import MobileLevel1 from "./MobileLevel/MobileLevel1";

export default function TopnavMobile() {
  const [active, setActive] = useState(false);

  function handleMenu() {
    setActive((p) => !p);
  }
  return (
    <div className="TopnavMobile">
      <div className="TopnavMobile__main-content horizontal-view">
        <div className="iah__l2 ">
          <div className="iah__container">
            <div className="iah__l2__main-links">
              {!active ? (
                <MobileTopbar handleMenu={handleMenu} />
              ) : (
                <MobileLevel1 handleMenu={handleMenu} />
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="iah__over-lay">Overlay</div>
    </div>
  );
}
