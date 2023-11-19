import React from 'react'
import Button from '../global/Button'
import img_backgroundWavyLines from '../../assets/images/svg/background-lines/background-wavy-lines.svg'

const NewsletterSection = () => {
  return (
    <section className="newsletter">
        <img className="background-wavy-lines" src={img_backgroundWavyLines} />
        <div className="container">
            <h2>Get News Updates By Signup</h2>
            <form>
                <input type="text" placeholder="username@domain.com" />
                <Button
                  className="yellow"
                  text="Subscribe"
                  url="/subscribe"
                />
            </form>
        </div>
    </section>
  )
}

export default NewsletterSection