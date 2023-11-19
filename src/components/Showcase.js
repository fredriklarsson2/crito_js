import React from 'react'
import Button from '../components/global/Button'
import img_backgroundLines from '../assets/images/svg/background-lines/background-lines.svg'
import img_showcase from '../assets/images/svg/misc/showcase-image.svg'

const ShowcaseSection = () => {
  return (
    <section className="showcase">
        <img className="background-lines" src={img_backgroundLines} alt="background lines" />
        <div className="container">
            <div className="content">
                <h1>We Provide The Best Business Solutions</h1>
                <p>Establish your vision and value proposition and turn them into testable prototypes.</p>

                <Button 
                  className="yellow" 
                  text="Get Consulting" 
                  url="/services" 
                />

                <Button 
                  className="transparent"
                  text="Learn More"
                  url="/services"
                />
                
            </div>
            <img src={img_showcase} alt="image of a man in a suit with a tablet" />
        </div>
    </section>
  )
}

export default ShowcaseSection