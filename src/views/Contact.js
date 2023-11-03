import React from 'react'
import ContactInformation from '../components/ContactInformation';
import Footer from '../components/Footer';
import FormSection from '../components/FormSection';
import Header from '../components/Header';
import img_bgLines from '../assets/images/background-lines.svg';
import img_map from '../assets/images/map.png';

const Contact = () => {
  return (
    <>
      <Header />
      <section className="showcase">
        <img className="background-lines" src={img_bgLines} alt="background lines" />
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
      <FormSection />
      <img className="map-image" src={img_map} alt="map crito location" />
      <Footer />
    </>
  )
}

export default Contact