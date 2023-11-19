import React from 'react'
import img_paperz from '../../assets/images/svg/clients/paperz.svg';
import img_dorfus from '../../assets/images/svg/clients/dorfus.svg';
import img_martino from '../../assets/images/svg/clients/martino.svg';
import img_square from '../../assets/images/svg/clients/square.svg';
import img_gobona from '../../assets/images/svg/clients/gobona.svg';

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