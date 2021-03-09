import React from 'react';  
import ReactDOM from 'react-dom';
import { BrowserRouter as Router  } from 'react-router-dom';  
import App from './app';
import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';

ReactDOM.render(<Router basename={process.env.PUBLIC_URL + '/'}>< App /></Router>, document.getElementById('root'));

