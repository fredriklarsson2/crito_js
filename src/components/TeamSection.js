import React from 'react'
import Button from './global/Button';
import img_kPalmer from '../assets/images/team/kristine-palmer-thumbnail.jpeg';
import img_mAubri from '../assets/images/team/mark-aubri-thumbnail.jpeg';
import img_kHansen from '../assets/images/team/kimberly-hansen-thumbnail.jpeg';
import img_jWilloman from '../assets/images/team/justin-willoman-thumbnail.jpeg';

const TeamSection = () => {
  return (
    <section className="meet-our-team">
        <div className="container">
            <div className="meet-our-team-top">
                <div className="section-title">
                    <h6>Meet Our Team</h6>
                    <div className="experience-team-members">
                        <h2>Experience Team Members</h2>
                        <Button
                            type="yellow"
                            text="Browse Team"
                            url="/team"
                        />
                    </div>
                    {/* gör generic av team members */}
                    <div className="team-members">
                        <div>
                            <img src={img_kPalmer} alt="kristine palmer portrait" />
                            <h4>Kristine Palmer</h4>
                            <p>Chef Operation Officer</p>
                        </div>
                        <div>
                            <img src={img_mAubri} alt="mark aubri portrait" />
                            <h4>Mark Aubri</h4>
                            <p>Senior Consultant</p>
                        </div>
                        <div>
                            <img src={img_kHansen} alt="kimberly hansen portrait" />
                            <h4>Kimberly Hansen</h4>
                            <p>Senior Consultant</p>
                        </div>
                        <div>
                            <img src={img_jWilloman} alt="justin willoman portrait" />
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