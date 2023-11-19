import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import AubriMark from './team-members/AubriMark'
import HansenKimberly from './team-members/HansenKimberly'
import PalmerKristine from './team-members/PalmerKristine'
import WillomanJustin from './team-members/WillomanJustin'

const MemberList = () => {

    const [members, setMembers] = useState([])

    React.useEffect(() => {
        setMembers([
            AubriMark,
            HansenKimberly,
            PalmerKristine,
            WillomanJustin
        ])
    }, [])

  return (
    <ul>
    {members.map((member, index) => (
       <li key={index}>
            <Link to="/team-members">
                <div className="member">
                    <img src={member.image} alt={member.alt} />
                    <h4>{member.name}</h4>
                    <p>{member.title}</p>
                </div>
            </Link>
        </li> 
    ))}
    </ul>
  )
}

export default MemberList