import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import promisePolyfill from 'es6-promise';
import App from 'containers/App';
import polyfills from './polyfills'; // eslint-disable-line no-unused-vars
import configureStore, { history } from './configureStore';

promisePolyfill.polyfill();

const initialState = {};
const store = configureStore(initialState);

const DOM_ELM = document.getElementById('app');

const render = () => {
  ReactDOM.render(
    <Provider store={store}>
      <App history={history} />
    </Provider>,
    DOM_ELM
  );
};

render();

// Install ServiceWorker and AppCache in the end since
// it's not most important operation and if main code fails,
// we do not want it installed
if (process.env.NODE_ENV === 'production') {
  require('offline-plugin/runtime').install(); // eslint-disable-line global-require
}
