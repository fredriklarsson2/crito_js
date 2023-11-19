import React from 'react'
import ContactBox from '../components/boxes/ContactBox'

const ContactInformation = () => {
  return (
    <section>
        <div className="container">
            <div className="contact-information-boxes">

                <ContactBox 
                    title="Vist us"
                    p1="Sveavägen 31"
                    p2="111 34 STOCKHOLM"
                    icon="faLocationDot"
                />

                <ContactBox 
                    title="Call us"
                    p1="+46 (8) 121 470 50"
                    p2="+46 (8) 121 470 51"
                    icon="faPhone"
                />

                <ContactBox 
                    title="Email us"
                    p1="info@crito.com"
                    p2="support@crito.com"
                    icon="faEnvelope"
                />
                
            </div>
        </div>
    </section>
  )
}

export default ContactInformation