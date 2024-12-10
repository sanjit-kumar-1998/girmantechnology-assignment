import React from 'react';
import './Header.css';
import logo from '../assets/Logo.png'

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="Girman Technologies" />
      </div>
      <nav>
      <ul className="nav-links">
          <li><a href="#search">SEARCH</a></li>
          <li><a href="https://girmantech.com" target="_blank" rel="noopener noreferrer">WEBSITE</a></li>
          <li><a href="https://www.linkedin.com/company/girman-technologies" target="_blank" rel="noopener noreferrer">LINKEDIN</a></li>
          <li><a href="mailto:contact@girmantech.com">CONTACT</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
