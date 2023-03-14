import { Link, NavLink } from "react-router-dom";
import { Navigation } from "./Navigation";
import styles from "./Navigation.module.css";


export const MainNavigation = () => {
  return (
    <Navigation>    
          <li><NavLink to="/" className={({ isActive }) => isActive ? styles["active-style"] : undefined }>Home</NavLink></li>
          <li><NavLink to="/about" className={({ isActive }) => isActive ? styles["active-style"] : undefined }>About</NavLink></li>
          <li><Link to="/characters">Characters</Link></li>       
    </Navigation>
    );
};
