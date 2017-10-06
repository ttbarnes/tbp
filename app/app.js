/**
 * app.js
 *
 * This is the entry file for the application, only setup and boilerplate
 * code.
 */

/* eslint-disable import/no-unresolved, import/extensions */
// Load the favicon
// import 'file-loader?name=[name].[ext]!./favicon.ico';
/* eslint-enable import/no-unresolved, import/extensions */

// Import all the third party stuff
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import ReactGA from 'react-ga';

import 'sanitize.css/sanitize.css';
import App from 'containers/App';
import configureStore from './configureStore';
import { GA_TRACKING } from './constants';
import './global-styles';
ReactGA.initialize(GA_TRACKING);

const initialState = {};
const history = createHistory();
const store = configureStore(initialState, history);

const logPageView = () => {
  ReactGA.set({ page: window.location.pathname });
  ReactGA.pageview(window.location.pathname);
};

const DOM_ELM = document.getElementById('app');

const render = () => {
  ReactDOM.render(
    <Provider store={store}>
      <ConnectedRouter
        history={history}
        onUpdate={logPageView}
      >
        {/* <App location={history.location} /> */}
        <App />
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
