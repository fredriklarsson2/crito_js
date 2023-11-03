import React from 'react'
import img_paperz from '../assets/images/paperz.svg';
import img_dorfus from '../assets/images/dorfus.svg';
import img_martino from '../assets/images/martino.svg';
import img_square from '../assets/images/square.svg';
import img_gobona from '../assets/images/gobona.svg';

const ClientSection = () => {
  return (
    <section className="client-section">
        <div className="container">
            <img src={img_paperz} alt="paperz logotype" />
            <img src={img_dorfus} alt="dorfus logotype" />
            <img src={img_martino} alt="martino logotype" />
            <img src={img_square} alt="square logotype" />
            <img src={img_gobona} alt="gobona logotype" />
        </div>
    </section>
  )
}

export default ClientSection