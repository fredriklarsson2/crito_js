import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Button = ({ type, text, url }) => {

    const getBtnClassName = () => {
        switch(type) {
            case 'yellow':
                return 'btn-yellow'
            case 'black':
                return 'btn-black'
            default:
                return 'btn-transparent'
        }
    }

    // const buttonStyle = fullWidth ? { width: '100%' } : {}

  return (
    <Link 
        className={getBtnClassName()}
        to={url} 
        // style={buttonStyle}
    >
        {text} <FontAwesomeIcon icon="fa-solid fa-arrow-right" />
    </Link>
  )
}

export default Button