/**
 * Combine all reducers in this file and export the combined reducers.
 */

import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import clientsReducers from 'containers/ClientsPage/reducer';
// import hobbiesReducers from 'containers/HobbiesPage/reducer';
import servicesReducer from 'reducers/services';
import techReducers from 'containers/TechnologiesPage/reducer';

/**
 * Creates the main reducer with the asynchronously loaded ones
 */
export default function createReducer(injectedReducers) {
  return combineReducers({
    route: routerReducer,
    clients: clientsReducers,
    services: servicesReducer,
    // hobbies: hobbiesReducers,
    tech: techReducers,
    ...injectedReducers
  });
}
