import React from 'react';
import ReactDOM from 'react-dom';
import Homepage from './pages/homepage'
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Homepage />
  </React.StrictMode>,
  document.querySelector('.wrapper')
);

reportWebVitals();
