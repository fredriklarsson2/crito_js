import React from 'react'

const ContactInformation = () => {
  return (
    <section>
        <div className="container">
            <div className="contact-information-boxes">
                <div className="contact-box">
                    <div className="round-icon"><i className="fa-solid fa-location-dot"></i></div>
                    <div className="contact-box-text">
                        <h4>Visit us</h4>
                        <p>Sveavägen 31</p>
                        <p>111 34 STOCKHOLM</p>
                    </div>
                </div>
                <div className="contact-box">
                    <div className="round-icon"><i className="fa-solid fa-phone"></i></div>
                    <div className="contact-box-text">
                        <h4>Call us</h4>
                        <p>+46 (8) 121 470 50</p>
                        <p>+46 (8) 121 470 51</p>
                    </div>
                </div>
                <div className="contact-box">
                    <div className="round-icon"><i className="fa-solid fa-envelope"></i></div>
                    <div className="contact-box-text">
                        <h4>Email us</h4>
                        <p>info@crito.com</p>
                        <p>support@crito.com</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default ContactInformation