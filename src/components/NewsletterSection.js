import React from 'react'
import Button from './global/Button';
import img_bgWavyLines from '../assets/images/background-wavy-lines.svg';

const NewsletterSection = () => {
  return (
    <section className="newsletter">
        <img className="background-wavy-lines" src={img_bgWavyLines} />
        <div className="container">
            <h2>Get News Updates By Signup</h2>
            <form>
                <input type="text" placeholder="username@domain.com" />
                <Button
                  type="yellow"
                  text="Subscribe"
                  url="/subscribe"
                />
            </form>
        </div>
    </section>
  )
}

export default NewsletterSection