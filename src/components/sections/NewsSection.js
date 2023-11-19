import React from 'react'
import ArticleList from '../lists/ArticleList'

const NewsSection = () => {

  return (
    <section className="article-news-section">
        <div className="container">
            <div className="section-title">
                <div className="article-news-title">
                    <h2>Our News & Articles</h2>
                </div>
                <div className="article-boxes">

                    <ArticleList />
                    
                </div>   
            </div>
        </div>
    </section>
  )
}

export default NewsSection