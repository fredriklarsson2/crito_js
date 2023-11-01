import React from 'react'

const ChooseSection = () => {
  return (
    <section className="why-choose-us-section">
        <div className="container">
            <div className="why-choose-us-section-left">
                <div className="section-title">
                    <h6>Why Choose Us</h6>
                    <h2>Why We Are The Best Business Consulting Agency</h2>
                </div>
                <div className="why-choose-us-boxes">
                    <div className="round-icon-transparent">
                        <i className="fa-solid fa-thumbs-up"></i>
                    </div>
                    <div className="why-choose-us-box">
                        <h4>Process Excellence</h4>
                        <p>Lorem, ipsum dolor sit amet consectetur.</p>
                    </div>
                </div>
                <div className="why-choose-us-boxes">
                    <div className="round-icon-transparent">
                        <i className="fa-solid fa-gem"></i>
                    </div>
                    <div className="why-choose-us-box">
                        <h4>Strategic Planning</h4>
                        <p>Lorem, ipsum dolor sit amet consectetur.</p>
                    </div>
                </div>
                <div className="why-choose-us-boxes">
                    <div className="round-icon-transparent">
                        <i className="fa-solid fa-pen-nib"></i>
                    </div>
                    <div className="why-choose-us-box">
                        <h4>Experience Design</h4>
                        <p>Lorem, ipsum dolor sit amet consectetur.</p>
                    </div>
                </div>
                <div className="why-choose-us-boxes">
                    <div className="round-icon-transparent">
                        <i className="fa-solid fa-user-gear"></i>
                    </div>
                    <div className="why-choose-us-box">
                        <h4>Artificial Intelligence</h4>
                        <p>Lorem, ipsum dolor sit amet consectetur.</p>
                    </div>
                </div>
            </div>
            <div className="why-choose-us-section-right">
                <img src="images/why-choose-us-small.png"
                 alt="bild" />
                <div className="why-choose-us-beige-bg"></div>
            </div>
        </div>
    </section>
  )
}

export default ChooseSection