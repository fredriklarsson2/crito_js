import React, { useState } from 'react'
import ConfirmationPage from '../../views/ConfirmationPage'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const ContactFormSection = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [formSent, setFormSent] = useState(false)
  const [errors, setErrors] = useState({})

  const validateEmail = (email) => {
    const emailRegex = /.+@.+\..+/
    return emailRegex.test(email)
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })

    const newErrors = { ...errors }
    if (newErrors[name]) {
      if (name === 'name' && value.length >= 2) {
        delete newErrors[name]
      } else if (name === 'email' && validateEmail(value)) {
        delete newErrors[name]
      } else if (name === 'message' && value.trim() !== '') {
        delete newErrors[name]
      }
      setErrors(newErrors)
    }
  }

  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault()
    setErrors({})

    const newErrors = {}

    if (formData.name.length < 2) {
      newErrors.name = 'Please enter a name with at least two letters.'
    }

    if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address (e.g., email@domain.com).'
    }

    if (!formData.message) {
      newErrors.message = 'Please enter a message.'
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
    } else {
      try {
        const response = await fetch('https://win23-assignment.azurewebsites.net/api/contactform', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData)
        })

        if (response.ok) {
          setFormSent(true)
          setFormData({ name: '', email: '', message: '' });
          setShowConfirmation(true);
        } else {
          // Handle other HTTP status codes if needed
        }
      } catch (error) {
        // Handle any form submission errors
      }
    }
  }

  return (
    <>
      <section className="contact-form-section">
        <div className="container">
          <div className="contact-form">
            <div className="section-title center-content">
              <h2>Leave us a message</h2>
              <h2>for any information.</h2>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <input
                  className={`form-input ${errors.name ? 'input-error' : ''}`}
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Name*"
                />
                <div className="contact-form-error-message">
                  {errors.name && (
                    <p>
                      <FontAwesomeIcon icon="fa-solid fa-exclamation-triangle" className="space" /> {errors.name}
                    </p>
                  )}
                </div>
              </div>
              <div className="mb-3">
                <input
                  className={`form-input ${errors.email ? 'input-error' : ''}`}
                  type="text"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="E-mail*"
                />
                <div className="contact-form-error-message">
                  {errors.email && (
                    <p>
                      <FontAwesomeIcon icon="fa-solid fa-exclamation-triangle" className="space" /> {errors.email}
                    </p>
                  )}
                </div>
              </div>
              <div className="mb-5">
                <textarea
                  className={`form-input ${errors.message ? 'input-error' : ''}`}
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Your message*"
                />
                <div className="contact-form-error-message">
                  {errors.message && (
                    <p>
                      <FontAwesomeIcon icon="fa-solid fa-exclamation-triangle" className="space" /> {errors.message}
                    </p>
                  )}
                </div>
              </div>
              <div className="d-grid">
                <button className="btn-yellow" type="submit">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
      {formSent ? showConfirmation && <ConfirmationPage /> : null}
    </>
    
  )
}

export default ContactFormSection
