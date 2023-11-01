import React from 'react';
import NavSection from './NavSection'; 

const Header = () => {
  return (
    <header>
      <div className="container">
        <a href="index.html"><img src="images/logotype.svg" alt="Crito logotype" /></a>
        <button className="menu-bars "><i className="fa-solid fa-bars"></i></button>
        <div className="menu">
          <div className="top-menu">
            <div className="contact-information">
              <div className="content-box">
                <i className="fa-solid fa-phone"></i> +46 (8) 121 470 50
              </div>
              <div className="content-box">
                <i className="fa-solid fa-envelope"></i> info@crito.com
              </div>
              <div className="content-box last">
                <i className="fa-solid fa-location-dot"></i> Sveavägen 31, 111 34 Stockholm
              </div>
            </div>
            <div className="social-media">
              <a href="#" target="_blank"><i className="fa-brands fa-facebook"></i></a>
              <a href="#" target="_blank"><i className="fa-brands fa-twitter"></i></a>
              <a href="#" target="_blank"><i className="fa-brands fa-instagram"></i></a>
              <a href="#" target="_blank"><i className="fa-brands fa-linkedin"></i></a>
            </div>
          </div>
          <div className="main-menu">
            <NavSection />
            <a className="btn-yellow btn-login" href="#">Login <i className="fa-solid fa-arrow-right-to-bracket"></i></a>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header