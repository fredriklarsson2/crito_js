import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Button from '../components/global/Button';
import img_bgLines from '../assets/images/background-lines.svg';
import img_showcase from '../assets/images/showcase-image.svg';

const ShowcaseSection = () => {
  return (
    <section className="showcase">
        <img className="background-lines" src={img_bgLines} alt="background lines" />
        <div className="container">
            <div className="content">
                <h1>We Provide The Best Business Solutions</h1>
                <p>Establish your vision and value proposition and turn them into testable prototypes.</p>
                <Button type="yellow" text="Get Consulting" url="/services"></Button>
                <Button type="" text="Learn More" url="/services"></Button>
            </div>
            <img src={img_showcase} alt="image of a man in a suit with a tablet" />
        </div>
    </section>
  )
}

export default ShowcaseSection