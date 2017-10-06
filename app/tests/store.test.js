/**
 * Test store addons
 */

import expect from 'expect';
import { browserHistory } from 'react-router';
import configureStore from 'configureStore';

describe('configureStore', () => {
  let store;

  before(() => {
    store = configureStore({}, browserHistory);
  });

  describe('asyncReducers', () => {
    it('should contain an object for async reducers', () => {
      expect(typeof store.asyncReducers).toEqual('object');
    });
  });
});
