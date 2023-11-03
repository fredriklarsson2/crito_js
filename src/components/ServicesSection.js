import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const ServicesSection = () => {
  return (
    <section className="services-section">
        <div className="container">
            <div className="section-title">
                <h6>Our Services</h6>
                <h2>We Provide The Best Service For Consulting</h2>
            </div>
            <div className="services-box-container">
                <div className="services-box">
                    <hr />
                    <h3>Business Advice</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus.</p>
                    <div className="services-box-icon">
                        <div className="round-icon">
                            <FontAwesomeIcon icon="fa-solid fa-arrow-right" />
                        </div>
                    </div>
                </div>
                <div className="services-box-yellow">
                    <hr />
                    <h3>Startup Business</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus.</p>
                    <div className="services-box-icon">
                        <div className="round-icon-white">
                            <FontAwesomeIcon icon="fa-solid fa-arrow-right" />
                        </div>
                    </div>
                </div>
                <div className="services-box">
                    <hr />
                    <h3>Financial Advice</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus.</p>
                    <div className="services-box-icon">
                        <div className="round-icon">
                            <FontAwesomeIcon icon="fa-solid fa-arrow-right" />
                        </div>
                    </div>
                </div>
                <div className="services-box">
                    <hr />
                    <h3>Risk Management</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus.</p>
                    <div className="services-box-icon">
                        <div className="round-icon">
                            <FontAwesomeIcon icon="fa-solid fa-arrow-right" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default ServicesSection