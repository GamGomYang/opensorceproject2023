import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Navigation from './Navigation';
import Routing from './Routing';
import TopBanner from './TopBanner';
import Menubar from './Menubar';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Menubar/>
    <Routing/>
  </React.StrictMode>
);

reportWebVitals();
