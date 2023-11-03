import React from 'react'

const FormSection = () => {
  return (
    <section className="contact-form-section">
        <div className="container">
            <div className="contact-form">
                <div className="section-title center-content">
                    <h2>Leave us a message</h2>
                    <h2>for any information.</h2>
                </div>
                <form method="post">
                    <div className="mb-3">
                        <input className="form-input" type="text" id="name" placeholder="Name*" tabindex="1" />
                    </div>
                    <div className="mb-3">
                        <input className="form-input" type="email" id="email" placeholder="Email*" tabindex="2" />
                    </div>
                    <div className="mb-5">
                        <textarea className="form-input" id="message" placeholder="Your message*" tabindex="3" />
                    </div>
                    <div className="d-grid">
                        <button className="btn-yellow" type="submit">Send Message</button>
                    </div>
                </form>
            </div>
        </div>
    </section>
  )
}

export default FormSection