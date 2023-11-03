import React from 'react'
import Button from './global/Button';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import img_imageProjectSmall_1 from '../assets/images/thumbnails/image_project_small_1.png';
import img_imageProjectSmall_2 from '../assets/images/thumbnails/image_project_small_2.png';
import img_imageProjectSmall_3 from '../assets/images/thumbnails/image_project_small_3.png';
import img_imageProjectSmall_4 from '../assets/images/thumbnails/image_project_small_4.png';

const ProjectsSection = () => {
  return (
    <section className="projects-section">
        <div className="container">
            <div className="section-title">
                <h6>Project & Case Studies</h6>
                <h2>Let's Looks Our Global Projects</h2>
            </div>
            <div className="project-articles">
                {/* gör en generic för article */}
                <article>
                    <img src={img_imageProjectSmall_1} alt="man reading a business paper" />
                    <h3>Grow your business</h3>
                    <Link to="/projects">
                        Read More <FontAwesomeIcon icon="fa-solid fa-arrow-right" />
                    </Link>
                </article>
                <article>
                    <img src={img_imageProjectSmall_2} alt="pink apple products on a desk" />
                    <h3>Why your client needs a responsive website</h3>
                    <Link to="/projects">
                        Read More <FontAwesomeIcon icon="fa-solid fa-arrow-right" />
                    </Link>
                </article>
                <article>
                    <img src={img_imageProjectSmall_3} alt="desk with office supplies" />
                    <h3>Educate your employees to get better results</h3>
                    <Link to="/projects">
                        Read More <FontAwesomeIcon icon="fa-solid fa-arrow-right" />
                    </Link>
                </article>
                <article>
                    <img src={img_imageProjectSmall_4} alt="laptop with business intelligence insights" />
                    <h3>Business Insights is an important piece of your business</h3>
                    <Link to="/projects">
                        Read More <FontAwesomeIcon icon="fa-solid fa-arrow-right" />
                    </Link>
                </article>
            </div>
            <div className="center-content">
                <Button 
                    type="black" 
                    text="All Recent Projects"
                    url="/projects"
                />
            </div>
        </div>
    </section>
  )
}

export default ProjectsSection