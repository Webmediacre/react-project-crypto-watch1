
// react import
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// import CrytoContext to be used in whole app
import CrytoContext from './CrytoContext';

import 'react-alice-carousel/lib/alice-carousel.css';

ReactDOM.render(
  <React.StrictMode>
    <CrytoContext>
      <App />
    </CrytoContext> 
  </React.StrictMode>,
  document.getElementById('root')
);


