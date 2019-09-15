import { createSelector } from 'reselect';

const selectClients = () => (state) => state.clients;

const selectClientsSummary = () => (state) => state.clients.summary;

const selectClientsData = () => createSelector(
  selectClients(),
  (clientsState) => clientsState.data
);

export {
  selectClientsSummary,
  selectClientsData
};
