import React from 'react'

const ShowcaseSection = () => {
  return (
    <section className="showcase">
        <img className="background-lines" src="images/background-lines.svg" alt="background lines" />
        <div className="container">
            <div className="content">
                <h1>We Provide The Best Business Solutions</h1>
                <p>Establish your vision and value proposition and turn them into testable prototypes.</p>
                <a className="btn-yellow" href="#">Get consulting <i className="fa-solid fa-arrow-right-to-bracket"></i></a>
                <a className="btn-transparent" href="#">Learn more <i className="fa-solid fa-arrow-right-to-bracket"></i></a>
            </div>
            <img src="images/showcase-image.svg" alt="Image of a man with a tablet." />
        </div>
    </section>
  )
}

export default ShowcaseSection