import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const ConfirmationPage = () => {
  const navigate = useNavigate()
  const [countdown, setCountdown] = useState(5) // Nedräkning från 5 sekunder

  useEffect(() => {
    const timer = setTimeout(() => {
      if (countdown > 0) {
        setCountdown(countdown - 1)
      } else {
        navigate('/contact') // Diregera till formuläret när nedräkningen är klar
      }
    }, 1000) // Uppdatera varje sekund

    return () => clearTimeout(timer)
  }, [countdown, navigate])

  return (
    <>
      <div className="container mt-5">
        <h2>Form submitted successfully!</h2>
        <p>Thank you for your message.</p>
        <p>Returning to the form in {countdown} seconds...</p>
      </div>
    </>
    
  )
}

export default ConfirmationPage