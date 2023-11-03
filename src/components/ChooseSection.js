import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import img_chooseSection from '../assets/images/choose-section-small.png';

const ChooseSection = () => {
  return (
    <section className="choose-section">
        <div className="container">
            <div className="choose-section-left">
                <div className="section-title">
                    <h6>Why Choose Us</h6>
                    <h2>Why We Are The Best Business Consulting Agency</h2>
                </div>
                <div className="choose-section-boxes">
                    <div className="round-icon-transparent">
                        <FontAwesomeIcon icon="fa-solid fa-thumbs-up" />
                    </div>
                    <div className="choose-section-box">
                        <h4>Process Excellence</h4>
                        <p>Lorem, ipsum dolor sit amet consectetur.</p>
                    </div>
                </div>
                <div className="choose-section-boxes">
                    <div className="round-icon-transparent">
                        <FontAwesomeIcon icon="fa-solid fa-gem" />
                    </div>
                    <div className="choose-section-box">
                        <h4>Strategic Planning</h4>
                        <p>Lorem, ipsum dolor sit amet consectetur.</p>
                    </div>
                </div>
                <div className="choose-section-boxes">
                    <div className="round-icon-transparent">
                        <FontAwesomeIcon icon="fa-solid fa-pen-nib" />
                    </div>
                    <div className="choose-section-box">
                        <h4>Experience Design</h4>
                        <p>Lorem, ipsum dolor sit amet consectetur.</p>
                    </div>
                </div>
                <div className="choose-section-boxes">
                    <div className="round-icon-transparent">
                        <FontAwesomeIcon icon="fa-solid fa-user-gear" />
                    </div>
                    <div className="choose-section-box">
                        <h4>Artificial Intelligence</h4>
                        <p>Lorem, ipsum dolor sit amet consectetur.</p>
                    </div>
                </div>
            </div>
            <div className="choose-section-right">
                <img src={img_chooseSection} alt="two business women talking in front of a brick wall" />
                <div className="choose-section-beige-bg"></div>
            </div>
        </div>
    </section>
  )
}

export default ChooseSection