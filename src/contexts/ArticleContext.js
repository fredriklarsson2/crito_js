import { useState, useEffect, useContext, createContext } from 'react';

const ArticleContext = createContext();

export const useArticles = () => useContext(ArticleContext);

export const formatPublishedDate = (published) => {
  const date = new Date(published);
  const year = date.getFullYear();
  const month = new Intl.DateTimeFormat('sv-SE', { month: 'short' }).format(date);
  const day = date.getDate();

  return { day, month, year };
};

export const ArticleProvider = ({ children }) => {
  const apiUrl = "https://win23-assignment.azurewebsites.net/api/articles";
  const [articles, setArticles] = useState([]);
  const [article, setArticle] = useState(null);

  useEffect(() => {
    getArticles();
  }, []);

  const getArticles = async () => {
    const result = await fetch(apiUrl);
    const data = await result.json();
    setArticles(data);
  };

  const getArticle = async (id) => {
    try {
      clearArticle();
      
      const response = await fetch(`https://win23-assignment.azurewebsites.net/api/articles/${id}`);
      const data = await response.json();
      setArticle(data);
    } catch (error) {
      console.error('Error fetching article:', error);
    }
  };

  const clearArticle = () => {
    setArticle(null);
  };

  return (
    <ArticleContext.Provider value={{
      articles,
      article,
      getArticles,
      getArticle,
      clearArticle,
      formatPublishedDate,
    }}>
      {children}
    </ArticleContext.Provider>
  );
};
