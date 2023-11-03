import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faSquareFacebook } from '@fortawesome/free-brands-svg-icons';
import { faSquareXTwitter } from '@fortawesome/free-brands-svg-icons';
import { faSquareInstagram } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faHandshakeSimple } from '@fortawesome/free-solid-svg-icons';
import { faLightbulb } from '@fortawesome/free-solid-svg-icons';
import { faChartLine } from '@fortawesome/free-solid-svg-icons';
import { faCube } from '@fortawesome/free-solid-svg-icons';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { faGem } from '@fortawesome/free-solid-svg-icons';
import { faPenNib } from '@fortawesome/free-solid-svg-icons';
import { faUserGear } from '@fortawesome/free-solid-svg-icons';
import Home from './views/Home';
import News from './views/News';
import NewsDetails from './views/NewsDetails';
import Contact from './views/Contact';
import NotFound from './views/NotFound';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/scss/style.css';

library.add(  faPhone, 
              faEnvelope, 
              faLocationDot, 
              faSquareFacebook, 
              faSquareXTwitter, 
              faSquareInstagram, 
              faLinkedin, 
              faArrowRight, 
              faHandshakeSimple,
              faLightbulb,
              faChartLine,
              faCube,
              faPlay,
              faThumbsUp,
              faGem,
              faPenNib,
              faUserGear
            );

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/news' element={<News />} />
        <Route path='/newsdetails' element={<NewsDetails />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
