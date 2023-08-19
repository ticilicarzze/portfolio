import { NavLink, Link } from "react-router-dom";
import "./index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faCircleHalfStroke } from "@fortawesome/free-solid-svg-icons";

const Header = () => (
  <div className='nav-bar'>
    <Link className='home-icon' to='/'>
      <FontAwesomeIcon icon={faHome} color='#FF8A00' />
    </Link>
    <nav className='nav'>
      <NavLink
        exact='true'
        activeclassname='active'
        className='about-link'
        to='/about'
      >
        <p>ABOUT</p>
      </NavLink>
      <NavLink
        exact='true'
        activeclassname='active'
        className='project-link'
        to='/projects'
      >
        <p>WORK</p>
      </NavLink>
      <NavLink
        exact='true'
        activeclassname='active'
        className='contact-link'
        to='/work'
      >
        <p>CONTACT</p>
      </NavLink>
    </nav>
    <div className='toggle-mode'>
      <FontAwesomeIcon icon={faCircleHalfStroke} color='#FF8A00' />
    </div>
  </div>
);

export default Header;
