import React from 'react'
import Button from '../global/Button';
import MemberList from '../lists/MemberList'

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
                            className="yellow"
                            text="Browse Team"
                            url="/team"
                        />
                    </div>
                    <div className="team-members">
                        <MemberList />                        
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default TeamSection