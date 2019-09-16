import { createSelector } from 'reselect';

const selectClients = () => (state) => state.clients;

const selectClientsData = () => createSelector(
  selectClients(),
  (clientsState) => clientsState.data
);

export {
  selectClientsData
};
