import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useArticles, formatPublishedDate } from '../contexts/ArticleContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Header from '../components/Header'
import Footer from '../components/Footer'
import ArticleSection from '../components/sections/ArticleSection'
import img_backgroundLines from '../assets/images/svg/background-lines/background-lines.svg'

const NewsDetails = () => {
  const { article, getArticle, clearArticle } = useArticles();
  const { id } = useParams();

  useEffect(() => {
    getArticle(id);
    return () => clearArticle();
  }, []);

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

              <section className="news-details-section">
                <div className="container">
                  {
                  article ? 
                  (
                  <main className="content">

                    <div className="content-header section-title">
                      <h2>{article.title}</h2>
                      <div className="article-info">
                        <p>{`
                        ${formatPublishedDate(article.published).day} 
                        ${formatPublishedDate(article.published).month} 
                        ${formatPublishedDate(article.published).year}
                        `}</p>
                        <FontAwesomeIcon icon="fa-solid fa-circle" className="dot" />
                        <p>{article.category}</p>
                        <FontAwesomeIcon icon="fa-solid fa-circle" className="dot" />
                        <p>{article.author}</p>
                      </div>
                    </div>

                    <div className="content-main">
                      <article className="content-article">
                        <img src={article.imageUrl} alt={article.title} />
                        <p>{article.content}</p>
                      </article>
                      <div className="content-side">
                        <div className="search-field-container">
                          <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" className="search-icon" />
                          <input type="search" className="search-field" placeholder="Type to search..." />
                        </div>
                        <div className="recent-posts">
                          <h3><u>Rec</u>ent Posts</h3>
                          <h4>How To Blow Through Capital At An Incredible Rate</h4>
                          <p>14 Jan, 2020</p>
                          <hr />
                          <h4>Design Studios That Everyone Should Know About?</h4>
                          <p>14 Jan, 2020</p>
                          <hr />
                          <h4>How did we get 1M+ visitors in 30 days without anything!</h4>
                          <p>14 Jan, 2020</p>
                          <hr />
                          <h4>Figma On Figma: How We Built Our Website Design System</h4>
                          <p>14 Jan, 2020</p>
                        </div>
                        <div className="categories">
                          <h3><u>Cat</u>egories</h3>
                          <p>Technology - 20 Posts</p>
                          <p>Freelancing - 07 Posts</p> 
                          <p>Writing - 16 Posts</p>
                          <p>Marketing - 11 Posts</p>
                          <p>Business - 35 Posts</p>
                          <p>Education - 14 Posts</p>
                        </div>
                      </div>
                    </div>
                  </main>
                  ) 
                  : 
                  (
                  <div>Loading...</div>
                  )
                  }
                </div>
              </section>

              <ArticleSection background="beige" />

              <Footer />

    </>
  );
};

export default NewsDetails;
