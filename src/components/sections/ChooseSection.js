import React from 'react'
import SectionBox from '../boxes/SectionBox';
import img_chooseSection from '../../assets/images/thumbnails/misc/choose-section-small.png';

const ChooseSection = () => {
  return (
    <section className="choose-section">
        <div className="container">
            <div className="choose-section-left">
                <div className="section-title">
                    <h6>Why Choose Us</h6>
                    <h2>Why We Are The Best Business Consulting Agency</h2>
                </div>

                <SectionBox
                    className="chooseSection"
                    title="Process Excellence"
                    text="Lorem, ipsum dolor sit amet consectetur."
                    icon="faThumbsUp"
                />

                <SectionBox
                    className="chooseSection"
                    title="Strategic Planning"
                    text="Lorem, ipsum dolor sit amet consectetur."
                    icon="faGem"
                />

                <SectionBox
                    className="chooseSection"
                    title="Experience Design"
                    text="Lorem, ipsum dolor sit amet consectetur."
                    icon="faPenNib"
                />

                <SectionBox
                    className="chooseSection"
                    title="Artificial Intelligence"
                    text="Lorem, ipsum dolor sit amet consectetur."
                    icon="faUserGear"
                />

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