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
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
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
  faMagnifyingGlass,
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
