import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import img_logotype from '../assets/images/logotype.svg';
import Button from '../components/global/Button';

const Header = () => {
  return (
    <header>
      <div className="container">
        <Link to="/"><img src={img_logotype} alt="Crito logotype" /></Link>
        <button className="menu-bars ">
          <i className="fa-solid fa-bars"></i>
        </button>
        <div className="menu">
          <div className="top-menu">
            <div className="contact-information">
              <div className="content-box">
                <FontAwesomeIcon icon="fa-solid fa-phone" /> +46 (8) 121 470 50
              </div>
              <div className="content-box">
                <FontAwesomeIcon icon="fa-solid fa-envelope" /> info@crito.com
              </div>
              <div className="content-box last">
              <FontAwesomeIcon icon="fa-solid fa-location-dot" /> Sveavägen 31, 111 34 Stockholm
              </div>
            </div>
            <div className="social-media">
              <Link to="https://www.facebook.com" target="_blank"><FontAwesomeIcon icon="fa-brands fa-square-facebook" /></Link>
              <Link to="https://www.x.com" target="_blank"><FontAwesomeIcon icon="fa-brands fa-square-x-twitter" /></Link>
              <Link to="https://www.instagram.com" target="_blank"><FontAwesomeIcon icon="fa-brands fa-square-instagram" /></Link>
              <Link to="https://www.linkedin.com" target="_blank"><FontAwesomeIcon icon="fa-brands fa-linkedin" /></Link>
            </div>
          </div>
          <div className="main-menu">
            <nav>
              <NavLink to="/">Home</NavLink>
              <NavLink to="/service">Service</NavLink>
              <NavLink to="/news">News</NavLink>
              <NavLink to="/contact">Contact</NavLink>
            </nav>
            <Button type="yellow" text="Login" url="/"></Button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header