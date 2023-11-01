import React from 'react'

const ArticleSection = () => {
  return (
    <section className="article-news-section">
        <div className="container">
            <div className="section-title">
                <h6>Article & News</h6>
                <div className="article-news-title">
                    <h2>Get Every Single Articles & News</h2>
                    <button className="btn-transparent">Browse Articles <i className="fa-solid fa-arrow-right"></i></button>
                </div>
                <div className="article-boxes">
                    <div className="article-box">
                        <img src="images/thumbnails/article_small_1.png"
                         alt="woman sitting down" />
                        <div className="article-box-date">
                            <h3>25</h3>
                            <p>Mar</p>
                        </div>
                        <p>Business</p>
                        <h4>How To Use Digitalization In The classNameroom</h4>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero.</p>
                    </div>
                    <div className="article-box">
                        <img src="images/thumbnails/article_small_2.png"
                         alt="text on computer screen" />
                        <div className="article-box-date">
                            <h3>17</h3>
                            <p>Mar</p>
                        </div>
                        <p>Business</p>
                        <h4>How To Implement Chat GPT In Your Projects</h4>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero.</p>                        
                    </div>
                    <div className="article-box">
                        <img src="images/thumbnails/article_small_3.png"
                         alt="books" />
                        <div className="article-box-date">
                            <h3>13</h3>
                            <p>Mar</p>
                        </div>
                        <p>Business</p>
                        <h4>The Guide To Support Modern CSS Design</h4>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero.</p>                        
                    </div>
                </div>   
            </div>
        </div>
    </section>
  )
}

export default ArticleSection