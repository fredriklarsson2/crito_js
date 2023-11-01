import React from 'react'

const FeaturesSection = () => {
  return (
    <section className="features-section">
        <div className="container">
            <div className="section-title">
                <h6>Features</h6>
                <h2>Our Accounting is trusted by thousand of companies</h2>
                <button className="btn-yellow" href="#">All Recent Projects <i className="fa solid fa-arrow-right"></i></button>
            </div>
            <div className="features-grid">
                <div className="feature-box">
                    <div className="feature-box-title">
                        <i className="fa-regular fa-handshake"></i>
                        <h4>Business Advice</h4>
                    </div>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                </div>
                <div className="feature-box">
                    <div className="feature-box-title">
                        <i className="fa-regular fa-lightbulb"></i>
                        <h4>Startup Advice</h4>
                    </div>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                </div>
                <div className="feature-box">
                    <div className="feature-box-title">
                        <i className="fa-solid fa-chart-line"></i>
                        <h4>Financial Advice</h4>
                    </div>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                </div>
                <div className="feature-box">
                    <div className="feature-box-title">
                        <i className="fa-solid fa-cube"></i>
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