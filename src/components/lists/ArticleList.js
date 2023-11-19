// import React from 'react'
// import { Link } from 'react-router-dom'
// import { useArticles } from '../../contexts/ArticleContext'

// const ArticleList = ({ numberOfArticlesToShow }) => {
//   const { articles } = useArticles()

//   // Hämtar det önskade antalet artiklar
//   const selectedArticles = articles.slice(0, numberOfArticlesToShow)

//   return (
//     <ul>


//       {selectedArticles.map((article, id) => (
//         <li key={id}>
//           <Link to={`/news-details/${article.id}`}>
//             <div className="article-box">
//               <img src={article.imageUrl} alt={article.title} />
//               <div className="article-box-date">
//                 <h3>25</h3>
//                 <p>Feb</p>
//               </div>
//               <p>{article.category}</p>
//               <h3>{article.title}</h3>
//               <p>{article.content}</p>
//             </div>
//           </Link>
//         </li>
//       ))}
//     </ul>
//   )
// }

// export default ArticleList

// ArticleList.js
import React from 'react';
import { Link } from 'react-router-dom';
import { useArticles } from '../../contexts/ArticleContext';

const ArticleList = ({ numberOfArticlesToShow }) => {
  const { articles, formatPublishedDate } = useArticles();
  const selectedArticles = articles.slice(0, numberOfArticlesToShow);

  return (
    <ul>
      {selectedArticles.map((article, id) => {
        const { day, month } = formatPublishedDate(article.published);

        return (
          <li key={id}>
            <Link to={`/news-details/${article.id}`}>
              <div className="article-box">
                <img src={article.imageUrl} alt={article.title} />
                <div className="article-box-date">
                  <h4>{day}</h4>
                  <p>{month}</p>
                </div>
                <p>{article.category}</p>
                <h3>{article.title}</h3>
                <p>{article.content}</p>
              </div>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default ArticleList;
