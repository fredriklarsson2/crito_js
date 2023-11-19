import React from 'react'
import { Link } from 'react-router-dom'

const ArticleList = ({ articles }) => {

  return (
    <ul>
    {articles.map((article, index) => (
       <li key={index}>
            <Link to="/news-details">
                <div className="article-box">
                    <img src={article.image} alt={article.alt} />
                    <div className="article-box-date">
                        <h3>{article.date}</h3>
                        <p>{article.month}</p>
                    </div>
                    <p>{article.type}</p>
                    <h4>{article.title}</h4>
                    <p>{article.text}</p>
                </div>
            </Link>
        </li> 
    ))}
    </ul>
  )
}

export default ArticleList