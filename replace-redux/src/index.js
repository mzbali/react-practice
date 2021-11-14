import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import configureProducts from './store/products-store';

import './index.css';
import App from './App';

// const rootReducer = combineReducers({
//   shop: productReducer
// });

configureProducts();

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
