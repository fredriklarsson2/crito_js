import React from 'react'

const AboutSection = () => {
  return (
    <section classNameName="about-company-section">
        <div className="container">
            <div className="about-section-left">
                <div className="about-presentation-box">
                    <div className="about-presentation-title">
                        <h4 className="h4-name">Samantha Brown,</h4>
                        <h4 className="h4-title">Founder</h4>
                    </div>
                    <p>"Lorem ipsum dolor sit amet consectetur adipisicing elit."</p>
                </div>

                <img src="images/thumbnails/woman-with-laptop.png" 
                 alt="smiling woman with laptop walking in a corridor" />

            </div>
            <div className="about-section-right">
                <div className="section-title">
                    <h6>About Company</h6>
                    <h2>We Are Business Consulting & Credit Repair Experts</h2>
                    <div className="about-section-text">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Quisquam officiis quas assumenda esse obcaecati? 
                            Ex esse error voluptates iure vel totam eos.</p>

                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Omnis esse quasi incidunt adipisci accusantium libero 
                            provident voluptate amet.</p>

                        <div className="about-section-links">
                            <a href="#" className="btn-black">
                                Learn More 
                                <i className="fa solid fa-arrow-right"></i>
                            </a>

                            <a href="#" id="intro-video-link">
                                <button className="round-icon-transparent">
                                    <i className="fa-solid fa-play"></i>
                                </button>
                                <p>Intro Video</p>
                            </a>  
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default AboutSection