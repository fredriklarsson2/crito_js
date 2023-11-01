import React from 'react'

const ProjectsSection = () => {
  return (
    <section className="project-case-section">
        <div className="container">
            <div className="section-title">
                <h6>Project & Case Studies</h6>
                <h2>Let's Looks Our Global Projects</h2>
            </div>
            <div className="project-and-cases">
                <article>
                    <img src="images/thumbnails/image_project_small_1.png" alt="man reading a business paper" />
                    <h3>Grow your business</h3>
                    <a href="#">Read More <i className="fa-solid fa-arrow-right"></i></a>
                </article>
                <article>
                    <img src="images/thumbnails/image_project_small_2.png" alt="pink apple products on a desk" />
                    <h3>Why your client needs a responsive website</h3>
                    <a href="#">Read More <i className="fa-solid fa-arrow-right"></i></a>
                </article>
                <article>
                    <img src="images/thumbnails/image_project_small_3.png" alt="desk with office supplies" />
                    <h3>Educate your employees to get better results</h3>
                    <a href="#">Read More <i className="fa-solid fa-arrow-right"></i></a>
                </article>
                <article>
                    <img src="images/thumbnails/image_project_small_4.png" alt="laptop with business intelligence insights" />
                    <h3>Business Insights is an important piece of your business</h3>
                    <a href="#">Read More <i className="fa-solid fa-arrow-right"></i></a>
                </article>
            </div>
            <div className="center-content">
                <a className="btn-black" href="#">All Recent Projects <i className="fa solid fa-arrow-right"></i></a>
            </div>
        </div>
    </section>
  )
}

export default ProjectsSection