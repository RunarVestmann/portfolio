import { NavLink } from "react-router-dom";
import "./style.css";

const NavigationBar = () => {
  return (
    <nav>
      <NavLink
        activeClassName="selected-nav-link"
        className="nav-link"
        exact
        to="/"
      >
        Home
      </NavLink>
    </nav>
  );
};

export default NavigationBar;
