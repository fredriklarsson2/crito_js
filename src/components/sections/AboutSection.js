import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import img_womanWithLaptop from '../../assets/images/thumbnails/misc/woman-with-laptop.png'
import Button from '../global/Button'

const AboutSection = () => {
  return (
    <section className="about-company-section">
        <div className="container">
            <div className="about-section-left">
                <div className="about-presentation-box">
                    <div className="about-presentation-title">
                        <h4 className="h4-name">Samantha Brown,</h4>
                        <h4 className="h4-title">Founder</h4>
                    </div>
                    <p>"Lorem ipsum dolor sit amet consectetur adipisicing elit."</p>
                </div>
                <img src={img_womanWithLaptop} alt="smiling woman with laptop walking in a corridor" />
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
                            <Button
                                className="black"
                                text="Learn More"
                                url="/about-company"
                            />
                            <Link to="/play-video" id="intro-video-link">
                                <button className="round-icon-transparent">
                                    <FontAwesomeIcon icon="fa-solid fa-play" />
                                </button>
                                <p>Intro Video</p>
                            </Link>  
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default AboutSection