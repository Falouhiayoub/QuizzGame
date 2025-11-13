// src/components/Navbar.jsx
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="nav">
      <div className="nav-left">
        <h1 className="brand">React Quiz App</h1>
      </div>
      <ul className="nav-links">
        <li><NavLink to="/" end className={({isActive})=> isActive ? 'active' : ''}>Accueil</NavLink></li>
        <li><NavLink to="/quiz" className={({isActive})=> isActive ? 'active' : ''}>Quiz</NavLink></li>
        <li><NavLink to="/result" className={({isActive})=> isActive ? 'active' : ''}>Résultat</NavLink></li>
      </ul>
    </nav>
  );
};

export default NavBar;
