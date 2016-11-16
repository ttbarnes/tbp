// tslint:disable-next-line
/// <reference path='typings/globals.d.ts'/>
import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { Router, Route, browserHistory } from 'react-router';
// import { syncHistoryWithStore } from 'react-router-redux';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
// import { Map } from 'immutable';
// import thunk from 'redux-thunk';
// import * as createLogger from 'redux-logger';

import Main from './containers/main';
import Dev from './containers/dev';
import Music from './containers/music';
import DevProjectSingleContainer from './containers/devProjectSingle';

import Error from './components/error';

import tbpReducers from './reducers';

import './styles/common.css';

// declare var process: any;
// const env = process.env.NODE_ENV;
// const middlewares: Array<any> = [ thunk ];

// if (env === 'dev') {
//   middlewares.push(createLogger());
// }

const store = createStore(
  tbpReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ &&
  window.__REDUX_DEVTOOLS_EXTENSION__()
);

// const store = createStore(rootReducer, Map(), applyMiddleware(...middlewares));

// const history = syncHistoryWithStore(browserHistory, store, {
//   selectLocationState: (state: Map<string, any>) => state.get('routing')
// });

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={Main}>

        <Route path="dev" component={Dev} />
        <Route path="dev/project/:id" component={DevProjectSingleContainer} />

        <Route path="music" component={Music} />

        <Route path="*" component={Error} />

      </Route>
    </Router>
  </Provider>,
  document.getElementById('content')
);
