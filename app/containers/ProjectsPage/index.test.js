import expect from 'expect';
import { shallow } from 'enzyme';
import React from 'react';
import { Provider } from 'react-redux';
import ProjectsPage from './index';
import projectsData from '../../data/projects.json';

import configureStore from '../../configureStore';
const initialState = {};
const store = configureStore(initialState);

const mock = {
  activeFilter: 'Something',
  projects: projectsData,
  clickFunc: () => true
};

describe('<ProjectsPage />', () => {
  const wrapper = shallow(
    <Provider store={store}>
      <ProjectsPage
        projects={mock.projects}
        onClickProjectFilter={mock.clickFunc}
        onClickProjectListItem={mock.clickFunc}
        activeFilter={mock.activeFilter}
      />
    </Provider>
  );

  it('should render <Projects /> with props', () => {
    const projectsPageProps = wrapper.find(ProjectsPage).props();
    expect(projectsPageProps).toEqual({
      projects: mock.projects,
      onClickProjectFilter: mock.clickFunc,
      onClickProjectListItem: mock.clickFunc,
      activeFilter: mock.activeFilter
    });
  });
});
