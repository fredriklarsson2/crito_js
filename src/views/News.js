import React from 'react'
import Header from '../components/Header'
import NewsSection from '../components/sections/NewsSection'
import NewsletterSection from '../components/sections/NewsletterSection'
import Footer from '../components/Footer'
import img_backgroundLines from '../assets/images/svg/background-lines/background-lines.svg'

const News = () => {
  return (
    <>
      <Header />

      <section className="showcase">
        <img className="background-lines" src={img_backgroundLines} alt="background lines" />
        <div className="container">
          <div className="content content-contact">
            <div className="title-text">
              <p id="home">Home</p>
              <p>News</p>
            </div>
            <h1 className="lesser-h1">News & Articles</h1>
          </div>
        </div>
      </section>

      <NewsSection />
      <NewsletterSection />
      <Footer />
    </>
  )
}

export default News