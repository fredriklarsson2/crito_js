// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import { ArticleProvider } from './contexts/ArticleContext'

// // FontAwesome import library
// import { library } from '@fortawesome/fontawesome-svg-core'
// import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
// import { faBars } from '@fortawesome/free-solid-svg-icons'
// import { faChartLine } from '@fortawesome/free-solid-svg-icons'
// import { faCube } from '@fortawesome/free-solid-svg-icons'
// import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
// import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons'
// import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons'
// import { faGem } from '@fortawesome/free-solid-svg-icons'
// import { faHandshakeSimple } from '@fortawesome/free-solid-svg-icons'
// import { faLightbulb } from '@fortawesome/free-solid-svg-icons'
// import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
// import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
// import { faPenNib } from '@fortawesome/free-solid-svg-icons'
// import { faPhone } from '@fortawesome/free-solid-svg-icons'
// import { faPlay } from '@fortawesome/free-solid-svg-icons'
// import { faSquareFacebook } from '@fortawesome/free-brands-svg-icons'
// import { faSquareInstagram } from '@fortawesome/free-brands-svg-icons'
// import { faSquareXTwitter } from '@fortawesome/free-brands-svg-icons'
// import { faThumbsUp } from '@fortawesome/free-solid-svg-icons'
// import { faUserGear } from '@fortawesome/free-solid-svg-icons'

// import Home from './views/Home'
// import News from './views/News'
// import NewsDetails from './views/NewsDetails'
// import Contact from './views/Contact'
// import ConfirmationPage from './views/ConfirmationPage';
// import PageNotFound from './views/PageNotFound'

// import 'bootstrap/dist/css/bootstrap.min.css'
// import './assets/scss/style.css'

// library.add(  faArrowRight,
//               faBars,
//               faChartLine,
//               faCube,
//               faEnvelope,
//               faExclamationCircle,
//               faExclamationTriangle,
//               faGem,
//               faHandshakeSimple,
//               faLightbulb,
//               faLinkedin,
//               faLocationDot,
//               faPenNib,
//               faPhone,
//               faPlay,
//               faSquareFacebook,
//               faSquareInstagram,
//               faSquareXTwitter,
//               faThumbsUp,
//               faUserGear
//             );

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <BrowserRouter>
//     <ArticleProvider>
//       <Routes>
//         <Route exact path='/' element={<Home />} />
//         <Route path='/news' element={<News />} />
//         <Route path='/news-details' element={<NewsDetails />} />
//         <Route path='/contact' element={<Contact />} />
//         <Route path='/confirmation' element={<ConfirmationPage />} />
//         <Route path='*' element={<PageNotFound />} />
//       </Routes>
//     </ArticleProvider>
//     </BrowserRouter>
//   </React.StrictMode>
// );

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import { library } from '@fortawesome/fontawesome-svg-core'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faChartLine } from '@fortawesome/free-solid-svg-icons'
import { faCircle } from '@fortawesome/free-solid-svg-icons'
import { faCube } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons'
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons'
import { faGem } from '@fortawesome/free-solid-svg-icons'
import { faHandshakeSimple } from '@fortawesome/free-solid-svg-icons'
import { faLightbulb } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { faPenNib } from '@fortawesome/free-solid-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faPlay } from '@fortawesome/free-solid-svg-icons'
import { faSquareFacebook } from '@fortawesome/free-brands-svg-icons'
import { faSquareInstagram } from '@fortawesome/free-brands-svg-icons'
import { faSquareXTwitter } from '@fortawesome/free-brands-svg-icons'
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons'
import { faUserGear } from '@fortawesome/free-solid-svg-icons'
import { faXmark } from '@fortawesome/free-solid-svg-icons';

import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/scss/style.css';

library.add(  faArrowRight,
  faBars,
  faChartLine,
  faCircle,
  faCube,
  faEnvelope,
  faExclamationCircle,
  faExclamationTriangle,
  faGem,
  faHandshakeSimple,
  faLightbulb,
  faLinkedin,
  faLocationDot,
  faPenNib,
  faPhone,
  faPlay,
  faSquareFacebook,
  faSquareInstagram,
  faSquareXTwitter,
  faThumbsUp,
  faUserGear,
  faXmark
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
