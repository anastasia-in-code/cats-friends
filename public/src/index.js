import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { createLogger } from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import 'tachyons';
import './index.css';

import App from './containers/App'
import { searchCats, requestCats } from './reducers'

const rootReducer = combineReducers({
  searchCats, requestCats
})
const logger = createLogger()
const store = createStore(rootReducer, applyMiddleware(thunkMiddleware, logger))

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
