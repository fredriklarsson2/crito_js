import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const ServiceBox = ({ title, text, link }) => {

  return (
    <Link to={link} className="service-box-link">
        <div className="services-box">
            <hr />
            <h3>{title}</h3>
            <p>{text}</p>
            <div className="services-box-icon">
                <div className="round-icon">
                    <FontAwesomeIcon icon='fa-solid fa-arrow-right' />
                </div>
            </div>
        </div>
    </Link>
  )
}

export default ServiceBox