import React from 'react'
import Header from '../components/Header';
import Footer from '../components/Footer';

const NotFound = () => {
  return (
    <>
      <Header />
      <section className="page-not-found">
        <div className="container">
          <h1>Page Not Found</h1>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default NotFound