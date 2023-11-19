import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const SectionBox = ({ icon, title, text, className }) => {

    const getIcon = () => {
        switch(icon) {
            case 'faChartLine':
                return 'fa-solid fa-chart-line'
            case 'faCube':
                return 'fa-solid fa-cube'
            case 'faGem':
                return 'fa-solid fa-gem'
            case 'faHandshakeSimple':
                return 'fa-solid fa-handshake-simple'
            case 'faLightbulb':
                return 'fa-solid fa-lightbulb'
            case 'faPenNib':
                return 'fa-solid fa-pen-nib'
            case 'faThumbsUp':
                return 'fa-solid fa-thumbs-up'
            case 'faUserGear':
                return 'fa-solid fa-user-gear'
            default:
                return null
        }
    }

    if (className === 'chooseSection') {
        return (
            <div className="choose-section-boxes">
                <div className="round-icon-transparent">
                    <FontAwesomeIcon icon={getIcon()} className="icon-size-medium" />
                </div>
                <div className="choose-section-box">
                    <h4>{title}</h4>
                    <p>{text}</p>
                </div>
            </div>
          )
    }

    else if (className === 'featuresSection') {
        return (
            <div className="feature-box">
                <div className="feature-box-title">
                    <FontAwesomeIcon icon={getIcon()} className="icon-size-medium" />
                    <h4>{title}</h4>
                </div>
            <p>{text}</p>
            </div>
        )
    }

    else {
        return null
    }
}

export default SectionBox