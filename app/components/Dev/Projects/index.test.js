import expect from 'expect';
import { shallow } from 'enzyme';
import React from 'react';
import TreeList from 'components/TreeList';
import H1 from 'components/H1';
import H2 from 'components/H2';
import PageLink from 'components/PageLink';
import Projects from './index';
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
    />
  );
  it('should render 2 headings', () => {
    const actual = wrapper.containsAllMatchingElements([
      <H1>Projects</H1>,
      <H2>Some of the projects i{'\''}ve been a part of</H2>
    ]);
    expect(actual).toBeTruthy();
  });
  it('should render <TreeList /> with props', () => {
    const actual = wrapper.containsMatchingElement(
      <TreeList
        handleClick={mock.clickFunc}
        data={mock.projects}
        activeFilter={mock.activeFilter}
      />
    );
    expect(actual).toBeTruthy();
  });
  it('should render a PageLink to about page', () => {
    const actual = wrapper.containsMatchingElement(
      <PageLink to="/about">About</PageLink>
    );
    expect(actual).toBeTruthy();
  });
  it('should render a PageLink to contact page', () => {
    const actual = wrapper.containsMatchingElement(
      <PageLink to="/contact">Contact</PageLink>
    );
    expect(actual).toBeTruthy();
  });
});
