import React from 'react'
import Button from '../global/Button'
import ServiceBox from '../boxes/ServiceBox'
import img_backgroundLinesRight from '../../assets/images/svg/background-lines/background-lines-right.svg'

const ServicesSection = () => {
  return (
    <section className="services-section">
        <img className="background-lines" src={img_backgroundLinesRight} alt="background lines" />
        <div className="container">
            <div className="section-title">
                <h6>Our Services</h6>
                <h2>We Provide The Best Service For Consulting</h2>
            </div>
            <div className="services-box-container">

                <ServiceBox 
                    title="Business Advice"
                    text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus."
                    link="/business-advice"
                />

                <ServiceBox
                    title="Startup Business"
                    text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus."
                    link="/startup-business"
                />

                <ServiceBox 
                    title="Financial Advice"
                    text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus."
                    link="/financial-advice"
                />

                <ServiceBox 
                    title="Risk Management"
                    text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus."
                    link="/risk-management"
                />

            </div>

            <div className="center-content">
                <Button 
                    className="transparent"
                    text="Browse Services"
                    url="/services"
                />
            </div>
            
        </div>
    </section>
  )
}

export default ServicesSection