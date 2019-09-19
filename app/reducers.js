/**
 * Combine all reducers in this file and export the combined reducers.
 */

import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import clientsReducers from 'containers/ClientsPage/reducer';
// import hobbiesReducers from 'containers/HobbiesPage/reducer';
import servicesReducer from 'reducers/services';
import techReducers from 'containers/TechnologiesPage/reducer';

/**
 * Creates the main reducer with the asynchronously loaded ones
 */
// export default function createReducer(injectedReducers) {
const createRootReducer = (history) => combineReducers({
  router: connectRouter(history),
  clients: clientsReducers,
  services: servicesReducer,
  // hobbies: hobbiesReducers,
  tech: techReducers
  // ...injectedReducers
});

export default createRootReducer;
