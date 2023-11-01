import React from 'react'

const NewsletterSection = () => {
  return (
    <section className="newsletter">
        <img className="background-wavy-lines" src="images/background-wavy-lines.svg" />
        <div className="container">
            <h2>Get News Updates By Signup</h2>
            <form>
                <input type="text" placeholder="username@domain.com" />
                <button className="btn-yellow">Subscribe <i className="fa-solid fa-arrow-right"></i></button>
            </form>
        </div>
    </section>
  )
}

export default NewsletterSection