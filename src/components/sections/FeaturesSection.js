import React from 'react'
import Button from '../global/Button'
import SectionBox from '../boxes/SectionBox'

const FeaturesSection = () => {
  return (
    <section className="features-section">
        <div className="container">
            <div className="section-title">
                <h6>Features</h6>
                <h2>Our Accounting is trusted by thousand of companies</h2>
                <Button 
                    className="yellow" 
                    text="All Recent Projects" 
                    url="/projects"
                />
            </div>
            <div className="features-grid">
                
                <SectionBox 
                    className="featuresSection"
                    title="Business Advice"
                    text="Lorem ipsum, dolor sit amet consectetur adipisicing elit."
                    icon="faHandshakeSimple"
                />

                <SectionBox 
                    className="featuresSection"
                    title="Startup Advice"
                    text="Lorem ipsum, dolor sit amet consectetur adipisicing elit."
                    icon="faLightbulb"
                />

                <SectionBox 
                    className="featuresSection"
                    title="Financial Advice"
                    text="Lorem ipsum, dolor sit amet consectetur adipisicing elit."
                    icon="faChartLine"
                />

                <SectionBox 
                    className="featuresSection"
                    title="Risk Management"
                    text="Lorem ipsum, dolor sit amet consectetur adipisicing elit."
                    icon="faCube"
                />
                
            </div>
        </div>
    </section>
  )
}

export default FeaturesSection