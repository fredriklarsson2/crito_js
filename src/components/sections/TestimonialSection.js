import React from 'react'
import Button from '../global/Button';
import TestimonialBox from '../boxes/TestimonialBox';

const TestimonialSection = () => {
  return (
    <section className="testimonial">
      <div className="container">
        <div className="section-title">
          <h6>Testimonial</h6>
          <h2>What Our Client Says</h2>
        </div>
        <div className="testimonial-boxes">

          <TestimonialBox
            name="Cassandra Warren"
            title="Business Manager, Dorfus"
            text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium libero, ad dignissimos velit qui, dolorum obcaecati cum saepe nesciunt nemo eligendi numquam voluptate."
            star="3"
          />

          <TestimonialBox
            name="Amanda Tulling"
            title="Senior Developer, Square"
            text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium libero, ad dignissimos velit qui, dolorum obcaecati cum saepe nesciunt nemo eligendi numquam voluptate."
            star="4"
          />

          <TestimonialBox
            name="Jack McDoggles"
            title="Key Account Manager, Gobona"
            text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium libero, ad dignissimos velit qui, dolorum obcaecati cum saepe nesciunt nemo eligendi numquam voluptate."
            star="5"
          />

        </div>
        <div className="testimonial-button">
          <Button
            className="black"
            text="All Reviews"
            url="/reviews"
          />
        </div>
      </div>
    </section>
  )
}

export default TestimonialSection