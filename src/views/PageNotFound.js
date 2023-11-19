import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Header from '../components/Header';
import Footer from '../components/Footer';
import img_backgroundLines from '../assets/images/svg/background-lines/background-lines.svg'

const PageNotFound = () => {
  return (
    <>
      <Header />

      <section className="showcase">
        <img className="background-lines" src={img_backgroundLines} alt="background lines" />
        <div className="container">
          <div className="content content-contact">
            <div className="title-text">
              <p id="home">404</p>
            </div>
            <h1 className="lesser-h1">Page Not Found</h1>
          </div>
        </div>
      </section>

      <div className="container center-content page-not-found">
        <FontAwesomeIcon icon="fa-solid fa-circle-exclamation" className="page-not-found-icon icon-size-big" />
        <p>The page you were trying to find does not exist.</p>
        <p>Please contact <Link to="mailto:admin@crito.com">admin@crito.com</Link>.</p>
      </div>

      <Footer />
    </>
  )
}

export default PageNotFound