import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const ContactBox = ({ title, p1, p2, icon }) => {

    const getIcon = () => {
        switch(icon) {
            case 'faEnvelope':
                return 'fa-solid fa-envelope'
            case 'faLocationDot':
                return 'fa-solid fa-location-dot'
            case 'faPhone':
                return 'fa-solid fa-phone'
            default:
                return null
        }
    }

  return (
    <div className="contact-box">
        <div className="round-icon">
            <FontAwesomeIcon icon={getIcon()} />
        </div>
        <div className="contact-box-text">
            <h4>{title}</h4>
            <p>{p1}</p>
            <p>{p2}</p>
        </div>
    </div>
  )
}

export default ContactBox