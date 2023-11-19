import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Button = ({ className, text, url }) => {

    const getBtnClassName = () => {
        switch(className) {
            case 'yellow':
                return 'btn-yellow'
            case 'black':
                return 'btn-black'
            default:
                return 'btn-transparent'
        }
    }

    const linkStyle = {
        width: '100%',
        display: 'inline-block',
        textAlign: 'center'
    };

    if(text === 'All Recent Projects' && className === 'yellow') {
        return (
            <Link 
                className={`fullWidthButton ${getBtnClassName()}`}
                to={url}
                style={linkStyle}
            >
                {text} <FontAwesomeIcon icon="fa-solid fa-arrow-right" />
            </Link>
          )
    }

    else {
        return (
            <Link 
                className={getBtnClassName()}
                to={url}
            >
                {text} <FontAwesomeIcon icon="fa-solid fa-arrow-right" />
            </Link>
          )
    }

  
}

export default Button