import React from 'react'
import img_reviewStar from '../../assets/images/misc/star.png'
import img_Ellipse1 from '../../assets/images/thumbnails/ellipses/Ellipse1.png'
import img_Ellipse2 from '../../assets/images/thumbnails/ellipses/Ellipse2.png'
import img_Ellipse3 from '../../assets/images/thumbnails/ellipses/Ellipse3.png'

const TestimonialBox = ({ name, title, text, star }) => {

    const image = () => {
        switch(name) {
            case 'Cassandra Warren':
                return img_Ellipse1
            case 'Amanda Tulling':
                return img_Ellipse2
            case 'Jack McDoggles':
                return img_Ellipse3
            default:
                return img_Ellipse1
        }
    }

    const stars = [];

    for (let i = 0; i < star; i++) {
        stars.push(<img key={i} src={img_reviewStar} alt={name + ', ' + title} />);
      }

  return (
    <div className="testimonial-box">
        {stars}
        <p>{text}</p>
        <div className="client">
            <img src={image()} alt={name + ', ' + title} />
            <div className="client-name">
                <h4>{name}</h4>
                <p>{title}</p>
            </div>
        </div>
    </div>
  )
}

export default TestimonialBox