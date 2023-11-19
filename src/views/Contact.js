import React from 'react'
import ContactFormSection from '../components/sections/ContactFormSection'
import ContactInformation from '../components/ContactInformation'
import Footer from '../components/Footer'
import Header from '../components/Header'
import img_backgroundLines from '../assets/images/svg/background-lines/background-lines.svg'
import img_map from '../assets/images/misc/map.png'

const Contact = () => {
  return (
    <>
      <Header />

      <section className="showcase">
        <img className="background-lines" src={img_backgroundLines} alt="background lines" />
        <div className="container">
          <div className="content content-contact">
            <div className="title-text">
              <p id="home">Home</p>
              <p>Contact</p>
            </div>
            <h1 className="lesser-h1">Let's Connect</h1>
          </div>
        </div>
      </section>

      <ContactInformation />
      <ContactFormSection />

      <section className="map-image">
        <img src={img_map} alt="map crito location" />
      </section>
      
      <Footer />
    </>
  )
}

export default Contact