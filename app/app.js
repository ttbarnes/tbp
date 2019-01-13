/**
 * app.js
 *
 * This is the entry file for the application, only setup and boilerplate
 * code.
 */

/* eslint-disable*/
// Load the favicon
// import 'file-loader?name=[name].[ext]!./favicon.ico';

// Import all the third party stuff

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import promisePolyfill from 'es6-promise';
import polyfills from './polyfills';
import createHistory from 'history/createBrowserHistory';
import 'sanitize.css/sanitize.css';
import App from 'containers/App';
import ScrollToTop from 'components/ScrollToTop';
import configureStore from './configureStore';
import './global-styles';
/* eslint-enable*/

promisePolyfill.polyfill();

const initialState = {};
const history = createHistory();
const store = configureStore(initialState, history);

const DOM_ELM = document.getElementById('app');

const render = () => {
  ReactDOM.render(
    <Provider store={store}>
      <ConnectedRouter
        history={history}
      >

        <ScrollToTop>
          <App location={history.location} />
        </ScrollToTop>

      </ConnectedRouter>
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
