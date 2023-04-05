import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from "./reportWebVitals";
import {Provider} from 'react-redux';
// import { configureStore } from '@reduxjs/toolkit'
import { legacy_createStore as createStore } from 'redux';
import { applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import Reducers from './reducers'

const root = ReactDOM.createRoot(document.getElementById("root"));
const store = createStore(Reducers, compose(applyMiddleware(thunk)))

root.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  // document.getElementById('root')
);

reportWebVitals();

