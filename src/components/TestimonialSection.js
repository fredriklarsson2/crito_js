import React from 'react'

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
            <img src="images/misc/star.png" alt="" />
            <img src="images/misc/star.png" alt="" />
            <img src="images/misc/star.png" alt="" />
            <img src="images/misc/star.png" alt="" />
            <img src="images/misc/star.png" alt="" />
            <p>"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium libero, ad dignissimos velit qui, dolorum obcaecati cum saepe nesciunt nemo eligendi numquam voluptate"</p>
            <div className="client">
              <img src="images/Ellipse1.png" alt="Cassandra Warren, Business Manaer, Dorfus" />
              <div className="client-name">
                <h4>Cassandra Warren</h4>
                <p>Business Manaer, Dorfus</p>
              </div>
            </div>
          </div>

                {/* SKAPA GENERIC BOX */}
                {/* <div className="testimonial-box">
                    <img src="images/misc/star.png" alt="" />
                    <img src="images/misc/star.png" alt="" />
                    <img src="images/misc/star.png" alt="" />
                    <img src="images/misc/star.png" alt="" />
                    <img src="images/misc/star.png" alt="" />
                    <p>"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium libero, ad dignissimos velit qui, dolorum obcaecati cum saepe nesciunt nemo eligendi numquam voluptate"</p>
                    <div className="client">
                        <img src="images/Ellipse2.png" alt="Amanda Tulling, Senior Developer, Square" />
                        <div className="client-name">
                            <h4>Amanda Tulling</h4>
                            <p>Senior Developer, Square</p>
                        </div>
                    </div>
                </div> */}

                {/* <div className="testimonial-box">
                    <img src="images/misc/star.png" alt="" />
                    <img src="images/misc/star.png" alt="" />
                    <img src="images/misc/star.png" alt="" />
                    <img src="images/misc/star.png" alt="" />
                    <img src="images/misc/star.png" alt="" />
                    <p>"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium libero, ad dignissimos velit qui, dolorum obcaecati cum saepe nesciunt nemo eligendi numquam voluptate"</p>
                    <div className="client">
                        <img src="images/Ellipse3.png" alt="Jack McDoggles, Key Account Manager, Gobona" />
                        <div className="client-name">
                            <h4>Jack McDoggles</h4>
                            <p>Key Account Manager, Gobona</p>
                        </div>
                    </div>
                </div> */}
            </div>
            <div className="testimonial-button">
              <button className="btn-black">All Reviews <i className="fa-solid fa-arrow-right"></i></button>
            </div>
      </div>
    </section>
  )
}

export default TestimonialSection