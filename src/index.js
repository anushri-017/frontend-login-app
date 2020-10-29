import React from 'react';
import ReactDOM from 'react-dom';
import  '../node_modules/bootstrap/dist/css/bootstrap.css'
import './index.css';
import App from './App';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension'
import logger from 'redux-logger';
import {createStore,applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import   LoginReducer  from './reducers/LoginReducer';

const store = createStore(LoginReducer,
  composeWithDevTools(applyMiddleware(thunk,logger)));

ReactDOM.render(
  <Provider store = {store}>
    <App />
    </Provider>,
  document.getElementById('root')
);

 