import React, { useState } from "react";

import { NavLink } from "react-router-dom";
import "./index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleHalfStroke,
  faBars,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";

function Header() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <nav className='navbar'>
        <NavLink
          to='/'
          className='navbar-logo nav-links'
          onClick={closeMobileMenu}
        >
          HOME
        </NavLink>
        <div className='menu-icon' onClick={handleClick}>
          <FontAwesomeIcon icon={click ? faXmark : faBars} color='#FF8A00' />
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className='nav-item'>
            <NavLink
              to='/about'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              ABOUT
            </NavLink>
          </li>
          <li className='nav-item'>
            <NavLink to='/work' className='nav-links' onClick={closeMobileMenu}>
              WORK
            </NavLink>
          </li>
          <li className='nav-item'>
            <NavLink
              to='/contact'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              CONTACT
            </NavLink>
          </li>
        </ul>
        <FontAwesomeIcon
          icon={faCircleHalfStroke}
          color='#FF8A00'
          className='mode-icon'
        />
      </nav>
    </>
  );
}

export default Header;
