import "./BottomPanel.sass";
import logo from "../../assets/logo.svg";
import facebook from "./assets/facebook.svg";
import instagram from "./assets/instagram.svg";

export const BottomPanel = () => {
  return (
    <footer className="bottom-panel">
      <div className="bottom-panel__container">
        <img src={logo} className="bottom-panel__logo" />
        <div className="bottom-panel__copyright">
          Copyright © 2021 All rights reserved.
        </div>
        <div className="bottom-panel__social-networks">
          <a href="https://www.facebook.com/media/set/?set=a.119352787037916&type=3">
            <img src={facebook} />
          </a>
          <a href="https://www.instagram.com/avc__team_/">
            <img src={instagram} />
          </a>
        </div>
      </div>
    </footer>
  );
};
