import { Component } from 'react';
import { Router, Route, browserHistory } from 'react-router';

import { createStore } from 'redux';
import { Provider } from 'react-redux';

import Main from './containers/main';
import Dev from './containers/dev';
import Music from './containers/music';
import DevProjectSingleContainer from './containers/devProjectSingle';

import Error from './components/error';

import tbpReducers from './reducers';

const store = createStore(
  tbpReducers,
  (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
  (window as any).__REDUX_DEVTOOLS_EXTENSION__()
);

export default class App extends Component<void, void> {
  public render() {
    return (
      <Provider store={store}>
        <Router history={browserHistory}>
          <Route path="/" component={Main}>

            <Route path="dev" component={Dev} />
            <Route path="dev/project/:id" component={DevProjectSingleContainer} />

            <Route path="music" component={Music} />

            <Route path="*" component={Error} />
          </Route>
        </Router>
      </Provider>
    );
  }
}
