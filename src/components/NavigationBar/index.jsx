import { NavLink } from 'react-router-dom';
import './style.css';

const NavigationBar = () => {
    return (
        <nav>
            <NavLink activeClassName="selected-nav-link" className="nav-link" exact to="/">
                Home
            </NavLink>
            <NavLink activeClassName="selected-nav-link" className="nav-link" exact to="/projects">
                Projects
            </NavLink>
            <NavLink activeClassName="selected-nav-link" className="nav-link" exact to="/about">
                About
            </NavLink>
            <NavLink activeClassName="selected-nav-link" className="nav-link" exact to="/contact">
                Contact
            </NavLink>
        </nav>
    );
};

export default NavigationBar;
