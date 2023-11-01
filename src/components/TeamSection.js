import React from 'react'

const TeamSection = () => {
  return (
    <section className="meet-our-team">
        <div className="container">
            <div className="meet-our-team-top">
                <div className="section-title">
                    <h6>Meet Our Team</h6>
                    <div className="experience-team-members">
                        <h2>Experience Team Members</h2>
                        <button className="btn-yellow">Browse Team <i className="fa-solid fa-arrow-right"></i></button>
                    </div>
                    <div className="team-members">
                        <div>
                            <img src="images/thumbnails/kristine-palmer-thumbnail.jpeg" alt="kristine palmer portrait" />
                            <h4>Kristine Palmer</h4>
                            <p>Chef Operation Officer</p>
                        </div>
                        <div>
                            <img src="images/thumbnails/mark-aubri-thumbnail.jpeg" alt="mark aubri portrait" />
                            <h4>Mark Aubri</h4>
                            <p>Senior Consultant</p>
                        </div>
                        <div>
                            <img src="images/thumbnails/kimberly-hansen-thumbnail.jpeg" alt="kimberly hansen portrait" />
                            <h4>Kimberly Hansen</h4>
                            <p>Senior Consultant</p>
                        </div>
                        <div>
                            <img src="images/thumbnails/justin-willoman-thumbnail.jpeg" alt="justin willoman portrait" />
                            <h4>Justin Willoman</h4>
                            <p>Senior Tech Consultant</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default TeamSection