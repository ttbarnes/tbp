import expect from 'expect';
import { shallow } from 'enzyme';
import React from 'react';
import ListItem from 'components/Dev/ProjectsList/ListItem';
import projectsData from '../../../data/projects.json';
import {
  StyledListItemNoLink,
  StyledListItemLink,
  StyledImg,
  StyledTag
} from './styled';


const mock = {
  projectLatest: projectsData[0],
  project: projectsData[20],
  clickFunc: () => 'test'
};

describe('ProjectsList <ListItem />', () => {
  it('should render an image with a link', () => {
    const wrapper = shallow(
      <ListItem {...mock.projectLatest} handleClick={mock.clickFunc} id={mock.projectLatest.id} />
    );
    const actual = wrapper.containsMatchingElement(
      <StyledListItemLink to={`projects/${mock.projectLatest.id}`}>
        <StyledImg alt={mock.projectLatest.name} />
        <StyledTag type="React" />
      </StyledListItemLink>
    );
    expect(actual).toBeTruthy();
  });

  it('should render a tech tag', () => {
    const wrapper = shallow(
      <ListItem
        {...mock.projectLatest}
        handleClick={mock.clickFunc}
        id={mock.projectLatest.id}
        tags={['React']}
      />
    );
    const actual = wrapper.containsMatchingElement(
      <StyledTag type="React" />
    );
    expect(actual).toBeTruthy();
  });

  describe('when mini project', () => {
    const wrapperMini = shallow(
      <ListItem {...mock.project} handleClick={mock.clickFunc} id={mock.project.id} mini />
    );
    it('should render an image without a link', () => {
      const actual = wrapperMini.containsMatchingElement(
        <StyledListItemNoLink>
          <StyledImg alt={mock.project.name} />
        </StyledListItemNoLink>
      );
      expect(actual).toBeTruthy();
    });
  });
});
