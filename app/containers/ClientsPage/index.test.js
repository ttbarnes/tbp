import expect from 'expect';
import { shallow } from 'enzyme';
import React from 'react';
import { Provider } from 'react-redux';
import ClientsPage from './index';
import projectsData from '../../data/projects.json';

import configureStore from '../../configureStore';
const initialState = {};
const store = configureStore(initialState);

const mock = {
  activeFilter: 'Something',
  projects: projectsData,
  clickFunc: () => true
};

describe('<ClientsPage />', () => {
  const wrapper = shallow(
    <Provider store={store}>
      <ClientsPage
        projects={mock.projects}
        onClickProjectFilter={mock.clickFunc}
        activeFilter={mock.activeFilter}
      />
    </Provider>
  );

  it('should render <Projects /> with props', () => {
    const clientsPageProps = wrapper.find(ClientsPage).props();
    expect(clientsPageProps).toEqual({
      projects: mock.projects,
      onClickProjectFilter: mock.clickFunc,
      activeFilter: mock.activeFilter
    });
  });
});
