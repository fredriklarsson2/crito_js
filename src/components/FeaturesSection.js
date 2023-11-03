import React from 'react'
import Button from '../components/global/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const FeaturesSection = () => {
  return (
    <section className="features-section">
        <div className="container">
            <div className="section-title">
                <h6>Features</h6>
                <h2>Our Accounting is trusted by thousand of companies</h2>
                <Button 
                    type="yellow" 
                    text="All Recent Projects" 
                    url="/projects" 
                    // fullWidth={true}
                />
            </div>
            <div className="features-grid">
                <div className="feature-box">
                    <div className="feature-box-title">
                        <FontAwesomeIcon icon="fa-solid fa-handshake-simple" />
                        <h4>Business Advice</h4>
                    </div>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                </div>
                <div className="feature-box">
                    <div className="feature-box-title">
                        <FontAwesomeIcon icon="fa-solid fa-lightbulb" />
                        <h4>Startup Advice</h4>
                    </div>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                </div>
                <div className="feature-box">
                    <div className="feature-box-title">
                        <FontAwesomeIcon icon="fa-solid fa-chart-line" />
                        <h4>Financial Advice</h4>
                    </div>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                </div>
                <div className="feature-box">
                    <div className="feature-box-title">
                        <FontAwesomeIcon icon="fa-solid fa-cube" />
                        <h4>Risk Management</h4>
                    </div>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default FeaturesSection