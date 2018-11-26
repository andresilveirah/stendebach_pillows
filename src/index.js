import 'react-app-polyfill/ie9'; // adds support to IE9-11

import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';

import { createStore } from 'redux';

import reducer from './reducers';

import App from './components/App';

import { config } from '../package.json';

const loadConfig = () => fetch(config.pillowsJSON)
  .then(response => response.json())
  .then(config => store.dispatch({ config, type: 'CONFIG_READY' }));

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

loadConfig();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
