import React from 'react'

const ServicesSection = () => {
  return (
    <section className="our-services-section">
        <div className="container">
            <div className="section-title">
                <h6>Our Services</h6>
                <h2>We Provide The Best Service For Consulting</h2>
            </div>
            <div className="our-services-box-container">
                <div className="our-services-box">
                    {/* <hr> */}
                    <h3>Business Advice</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus.</p>
                    <div className="our-services-box-icon">
                        <div className="round-icon">
                            <i className="fa solid fa-arrow-right"></i>
                        </div>
                    </div>
                </div>
                <div className="our-services-box-yellow">
                    {/* <hr> */}
                    <h3>Startup Business</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus.</p>
                    <div className="our-services-box-icon">
                        <div className="round-icon-white">
                            <i className="fa solid fa-arrow-right"></i>
                        </div>
                    </div>
                </div>
                <div className="our-services-box">
                    {/* <hr> */}
                    <h3>Financial Advice</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus.</p>
                    <div className="our-services-box-icon">
                        <div className="round-icon">
                            <i className="fa solid fa-arrow-right"></i>
                        </div>
                    </div>
                </div>
                <div className="our-services-box">
                    {/* <hr> */}
                    <h3>Risk Management</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus.</p>
                    <div className="our-services-box-icon">
                        <div className="round-icon">
                            <i className="fa solid fa-arrow-right"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default ServicesSection