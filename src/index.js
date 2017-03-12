import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

import createStore from './store/createStore'
import { Provider } from 'react-redux'


const store = createStore()
ReactDOM.render(
  <Provider store ={createStore()}>
    <App />
  </Provider>,
  document.getElementById('root')
);
