import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { ArticleProvider } from './contexts/ArticleContext';
import Home from './views/Home';
import News from './views/News';
import NewsDetails from './views/NewsDetails';
import Contact from './views/Contact';
import PageNotFound from './views/PageNotFound';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <BrowserRouter>
      <ArticleProvider>
      <ScrollToTop />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/news' element={<News />} />
          <Route path="/news-details/:id" component={NewsDetails} element={<NewsDetails />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='*' element={<PageNotFound />} />
        </Routes>
      </ArticleProvider>
    </BrowserRouter>
  );
}

export default App;