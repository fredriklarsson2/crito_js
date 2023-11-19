import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const SocialMedia = () => {
  return (
    <div className="social-media">

        <Link to="https://www.facebook.com" target="_blank">
          <FontAwesomeIcon icon="fa-brands fa-square-facebook" />
        </Link>

        <Link to="https://www.x.com" target="_blank">
          <FontAwesomeIcon icon="fa-brands fa-square-x-twitter" />
        </Link>

        <Link to="https://www.instagram.com" target="_blank">
          <FontAwesomeIcon icon="fa-brands fa-square-instagram" />
        </Link>

        <Link to="https://www.linkedin.com" target="_blank">
          <FontAwesomeIcon icon="fa-brands fa-linkedin" />
        </Link>
        
    </div>
  )
}

export default SocialMedia