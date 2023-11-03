import React from 'react'
import Button from './global/Button';
import img_reviewStar from '../assets/images/misc/star.png';
import img_Ellipse1 from '../assets/images/Ellipse1.png';
import img_Ellipse2 from '../assets/images/Ellipse2.png';
import img_Ellipse3 from '../assets/images/Ellipse3.png';

const TestimonialSection = () => {
  return (
    <section className="testimonial">
      <div className="container">
        <div className="section-title">
          <h6>Testimonial</h6>
          <h2>What Our Client Says</h2>
        </div>
        <div className="testimonial-boxes">
          <div className="testimonial-box">
            {/* generic av denna? loop eller switch? */}
            <img src={img_reviewStar} alt="" />
            <img src={img_reviewStar} alt="" />
            <img src={img_reviewStar} alt="" />
            <img src={img_reviewStar} alt="" />
            <img src={img_reviewStar} alt="" />
            <p>"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium libero, ad dignissimos velit qui, dolorum obcaecati cum saepe nesciunt nemo eligendi numquam voluptate"</p>
            <div className="client">
              <img src={img_Ellipse1} alt="Cassandra Warren, Business Manaer, Dorfus" />
              <div className="client-name">
                <h4>Cassandra Warren</h4>
                <p>Business Manaer, Dorfus</p>
              </div>
            </div>
          </div>

                {/* SKAPA GENERIC BOX */}
                <div className="testimonial-box">
                    <img src={img_reviewStar} alt="" />
                    <img src={img_reviewStar} alt="" />
                    <img src={img_reviewStar} alt="" />
                    <img src={img_reviewStar} alt="" />
                    <img src={img_reviewStar} alt="" />
                    <p>"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium libero, ad dignissimos velit qui, dolorum obcaecati cum saepe nesciunt nemo eligendi numquam voluptate"</p>
                    <div className="client">
                        <img src={img_Ellipse2} alt="Amanda Tulling, Senior Developer, Square" />
                        <div className="client-name">
                            <h4>Amanda Tulling</h4>
                            <p>Senior Developer, Square</p>
                        </div>
                    </div>
                </div>

                <div className="testimonial-box">
                    <img src={img_reviewStar} alt="" />
                    <img src={img_reviewStar} alt="" />
                    <img src={img_reviewStar} alt="" />
                    <img src={img_reviewStar} alt="" />
                    <img src={img_reviewStar} alt="" />
                    <p>"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium libero, ad dignissimos velit qui, dolorum obcaecati cum saepe nesciunt nemo eligendi numquam voluptate"</p>
                    <div className="client">
                        <img src={img_Ellipse3} alt="Jack McDoggles, Key Account Manager, Gobona" />
                        <div className="client-name">
                            <h4>Jack McDoggles</h4>
                            <p>Key Account Manager, Gobona</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="testimonial-button">
              <Button
                type="black"
                text="All Reviews"
                url="/reviews"
              />
            </div>
      </div>
    </section>
  )
}

export default TestimonialSection