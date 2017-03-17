import expect from 'expect';
import { shallow } from 'enzyme';
import React from 'react';
import Projects from './index';
import ProjectFilters from 'components/Dev/ProjectFilters';
import ProjectsList from 'components/Dev/ProjectsList';
import H1 from 'components/H1';
import projectsData from '../../../data/projects.json';

const mock = {
  activeFilter: 'Something',
  projects: projectsData,
  clickFunc: () => true
};

describe('<Projects />', () => {
  const wrapper = shallow(
    <Projects
      activeFilter={mock.activeFilter}
      projects={mock.projects}
      onClickProjectFilter={mock.clickFunc}
      onClickProjectListItem={mock.clickFunc}
    />
  );
  it('should render a heading', () => {
    const actual = wrapper.containsMatchingElement(
      <H1>Projects</H1>
    );
    expect(actual).toBeTruthy();
  });
  it('should render a sub heading', () => {
    const actual = wrapper.containsMatchingElement(
      <p>Some of the projects i{'\''}ve been a part of{':'}</p>
    );
    expect(actual).toBeTruthy();
  });
  it('should render <ProjectFilters /> with props', () => {
    const actual = wrapper.containsMatchingElement(
      <ProjectFilters
        handleClick={mock.clickFunc}
        activeFilter={mock.activeFilter}
      />
    );
    expect(actual).toBeTruthy();
  });
  it('should render <ProjectsList /> with props', () => {
    const actual = wrapper.containsMatchingElement(
      <ProjectsList
        handleClick={mock.clickFunc}
        data={mock.projects}
        activeFilter={mock.activeFilter}
      />
    );
    expect(actual).toBeTruthy();
  });
});
