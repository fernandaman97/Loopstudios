import React from "react";
import './header.scss';

const Header = () => {
  return (
    <header className="header">
      <nav className="navbar">
        <span className="logo">
          <img src="./public/images/svg/logo.svg" alt="logo" />
        </span>
        <ul className="navbar__menu">
          <li className="navbar__menu-item">
            <a href="#home">About</a>
          </li>
          <li className="navbar__menu-item">
            <a href="#about">Careers</a>
          </li>
          <li className="navbar__menu-item">
            <a href="#services">Events</a>
          </li>
          <li className="navbar__menu-item">
            <a href="#contact">Products</a>
          </li>
          <li className="navbar__menu-item">
            <a href="#contact">Support</a>
          </li>
        </ul>
      </nav>
      <div className="header-title">
              <h2>
                INMERSIVE EXPERIENCES THAT DELIVER
              </h2>
            </div>
    </header>
  );
};

export default Header;