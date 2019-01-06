import expect from 'expect';
import { shallow } from 'enzyme';
import React from 'react';
import ProjectsList from 'components/Dev/ProjectsList';
import ListItem from 'components/Dev/ProjectsList/ListItem';
import projectsData from '../../../data/projects.json';


const mock = {
  data: projectsData,
  activeFilter: 'Web apps',
  clickFunc: () => true
};

describe('<ProjectsList />', () => {
  const wrapper = shallow(
    <ProjectsList
      data={mock.data}
      activeFilter={mock.activeFilter}
      handleClick={mock.clickFunc}
    />
  );
  it('should render a list of projects with correct props', () => {
    const actual = wrapper.containsAllMatchingElements([
      <ListItem {...mock.data[0]} handleClick={mock.clickFunc} />,
      <ListItem {...mock.data[1]} handleClick={mock.clickFunc} />,
      <ListItem {...mock.data[2]} handleClick={mock.clickFunc} />,
      <ListItem {...mock.data[3]} handleClick={mock.clickFunc} />
    ]);
    expect(actual).toBeTruthy();
  });
});
