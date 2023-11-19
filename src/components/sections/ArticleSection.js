import React from 'react'
import Button from '../global/Button'
import ArticleList from '../lists/ArticleList'

const ArticleSection = ({ background }) => {

    if (background === "beige") {
        const beige = {
            backgroundColor: "#F0EFE9"
        }

        return (
            <section className="article-news-section" style={beige}>
                <div className="container">
                    <div className="section-title">
                        <h6>Article & News</h6>
                        <div className="article-news-title">
                            <h2>Get Every Single Articles & News</h2>
                            <Button 
                                className="transparent"
                                text="Browse Articles"
                                url="/news"
                            />
                        </div>
                        <div className="article-boxes">
        
                            <ArticleList numberOfArticlesToShow={3} />
        
                        </div>   
                    </div>
                </div>
            </section>
        )
    }

    else {
        const white = {
            backgroundColor: "#FFFFFF"
        }

        return (
            <section className="article-news-section" style={white}>
                <div className="container">
                    <div className="section-title">
                        <h6>Article & News</h6>
                        <div className="article-news-title">
                            <h2>Get Every Single Articles & News</h2>
                            <Button 
                                type="transparent"
                                text="Browse Articles"
                                url="/news"
                            />
                        </div>
                        <div className="article-boxes">
        
                            <ArticleList numberOfArticlesToShow={3} />
        
                        </div>   
                    </div>
                </div>
            </section>
        )
    }
}

export default ArticleSection