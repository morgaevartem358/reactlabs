import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore } from 'redux';
import {usersReducer} from './reducer.js';
import { Provider } from 'react-redux';

const store = createStore(usersReducer) 

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
    <App/>
  </React.StrictMode>
  </Provider>
  ,
  document.getElementById('root')
);

