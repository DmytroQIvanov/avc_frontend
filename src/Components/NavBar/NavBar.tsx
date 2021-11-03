import { Link } from "react-router-dom";
import "./NavBar.sass";

export const NavBar = () => {
  return (
    <div>
      <div className={"nav-bar__block"}></div>
      <nav className="nav-bar">
        <div className="nav-bar__container">
          <Link to="/products">Absolute life</Link>
          <Link to="/products">Smart Vitamin</Link>
          <Link to="/products">Витамини</Link>
          <Link to="/products">Екіпірування</Link>
          <Link to="/products">Мерч AVC</Link>
        </div>
      </nav>
    </div>
  );
};
