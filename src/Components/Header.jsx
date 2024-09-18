import React from 'react';
import './Header.css'; // Import your CSS file
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header fixed="top">
      {/* Top Bar */}
      <div className="top-bar">
        <div className="contact-info">
          <span>Email: info@example.com</span>
          <span>Phone: +92300-0000000</span>
        </div>
        <div className="social-media">
            <Link to="https://facebook.com"><FaFacebookF /></Link>
            <Link to="https://twitter.com"><FaTwitter /></Link>
            <Link to="https://linkedin.com"><FaLinkedinIn /></Link>
            <Link to="https://instagram.com"><FaInstagram /></Link>
        </div>
      </div>

      {/* Main Header */}
      <div className="main-header">
        <div className="logo">
          <h1>SOFTWARE HOUSE</h1>
        </div>
        <nav className="navbar">
          <ul>
            <li><Link to="/Home">Home</Link></li>
            <li><Link to="AboutUs">About Us</Link></li>
            <li><Link to="Services">Services</Link></li>
            <li><Link to="#portfolio">Portfolio</Link></li>
            <li><Link to="ContactUs">Contact Us</Link></li>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="#register">Registration</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
