import { createStore, applyMiddleware, compose } from 'redux';
import { createBrowserHistory } from 'history';
import createRootReducer from './reducers';

export const history = createBrowserHistory();

export default function configureStore(initialState = {}) {
  const middlewares = [];

  const enhancers = [
    applyMiddleware(...middlewares),
  ];

  const composeEnhancers =
    process.env.NODE_ENV !== 'production' &&
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : compose;

  const store = createStore(
    createRootReducer(history),
    initialState,
    composeEnhancers(...enhancers)
  );

  store.injectedReducers = {};

  // Make reducers hot reloadable, see http://mxs.is/googmo
  /* istanbul ignore next */
  if (module.hot) {
    module.hot.accept('./reducers', () => {
      store.replaceReducer(createRootReducer(store.injectedReducers));
    });
  }

  return store;
}
