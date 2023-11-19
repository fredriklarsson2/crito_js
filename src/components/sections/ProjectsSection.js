import React from 'react'
import Button from '../global/Button';
import ArticleBox from '../boxes/ArticleBox';

const ProjectsSection = () => {
  return (
    <section className="projects-section">
        <div className="container">
            <div className="section-title">
                <h6>Project & Case Studies</h6>
                <h2>Let's Looks Our Global Projects</h2>
            </div>
            <div className="project-articles">

                <ArticleBox
                    image="imageProject_1"
                    title="Grow your business"
                    link="/projects"                
                />

                <ArticleBox
                    image="imageProject_2"
                    title="Why your client needs a responsive website"
                    link="/projects"                
                />

                <ArticleBox
                    image="imageProject_3"
                    title="Educate your employees to get better results"
                    link="/projects"                
                />

                <ArticleBox
                    image="imageProject_4"
                    title="Business Insights is an important piece of your business"
                    link="/projects"                
                />

            </div>
            <div className="center-content">
                <Button 
                    className="black" 
                    text="All Recent Projects"
                    url="/projects"
                />
            </div>
        </div>
    </section>
  )
}

export default ProjectsSection