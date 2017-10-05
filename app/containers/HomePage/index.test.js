import expect from 'expect';
import { shallow } from 'enzyme';
import React from 'react';
import Helmet from 'react-helmet';
import { Link } from 'react-router';
import HomePage from './index';
import { StyledH2, StyledP, StyledImg } from './styled';
import TbImage from '../../assets/img/tony-barnes.jpg';

describe('<HomePage />', () => {
  const wrapper = shallow(
    <HomePage />
  );

  it('should have a helmet component', () => {
    const actual = wrapper.containsMatchingElement(
      <Helmet
        title="Front end developer, techy, musician"
        meta={[
          { name: 'description', content: 'JavaScript developer, musician, cyclist, FPV pilot, tea drinker.' },
        ]}
      />
    );
    expect(actual).toEqual(true);
  });

  it('should render an image', () => {
    const actual = wrapper.containsMatchingElement(
      <StyledImg src={TbImage} alt="Tony Barnes" />
    );
    expect(actual).toEqual(true);
  });

  it('should have correct copy', () => {
    const actual = wrapper.containsAllMatchingElements([
      <StyledH2>Hello! I{'\''}m Tony.</StyledH2>,
      <StyledP>Developer, musician, cyclist, FPV pilot, tea drinker.</StyledP>
    ]);
    expect(actual).toEqual(true);
  });

  it('should have correct link to pages', () => {
    let actual;
    actual = wrapper.containsMatchingElement(
      <Link to="about">about me</Link>
    );
    expect(actual).toEqual(true);

    actual = wrapper.containsMatchingElement(
      <Link to="projects">my projects</Link>,
    );
    expect(actual).toEqual(true);

    actual = wrapper.containsMatchingElement(
      <Link to="hobbies">what else I get up to.</Link>
    );
    expect(actual).toEqual(true);
  });
});