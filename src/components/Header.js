import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import img_logotype from '../assets/images/svg/logotypes/logotype.svg';
import Button from '../components/global/Button';
import SocialMedia from '../components/global/SocialMedia';
import Menu from './Menu';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
      <>
        { menuOpen ? (<Menu />) : (null) }

        <header>
          <div className="container">
            <Link to="/"><img src={img_logotype} alt="Crito logotype" /></Link>

            <button onClick={() => setMenuOpen(!menuOpen)} className="mobile-btn-menu">
              {menuOpen ? (<FontAwesomeIcon icon="fa-solid fa-xmark" className="x-mark" />) : (<FontAwesomeIcon icon="fa-solid fa-bars" />)}
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
                <SocialMedia />
              </div>
              <div className="main-menu">
                <nav>
                  <NavLink to="/">Home</NavLink>
                  <NavLink to="/service">Service</NavLink>
                  <NavLink to="/news">News</NavLink>
                  <NavLink to="/contact">Contact</NavLink>
                </nav>
                <Button 
                  className="yellow" 
                  text="Login" 
                  url="/login" 
                />
              </div>
            </div>
          </div>

        </header>
      </>
  )
}

export default Header