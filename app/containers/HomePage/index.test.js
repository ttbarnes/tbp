import expect from 'expect';
import { shallow } from 'enzyme';
import React from 'react';
import Helmet from 'react-helmet';
import { Link } from 'react-router-dom';
import HomePage from './index';
import {
  FadeInImage, IntroCopy
} from './styled';
import TbImage from '../../assets/img/tony-barnes.jpg';

describe('<HomePage />', () => {
  const wrapper = shallow(
    <HomePage />
  );

  it('should have a helmet component', () => {
    const actual = wrapper.containsMatchingElement(
      <Helmet
        title="Freelance Front End, Full Stack JavaScript Developer"
        meta={[
          { name: 'description', content: 'Freelance developer, London' },
        ]}
      />
    );
    expect(actual).toEqual(true);
  });

  it('should render an image', () => {
    const actual = wrapper.containsMatchingElement(
      <FadeInImage src={TbImage} alt="Tony in a suit" />
    );
    expect(actual).toEqual(true);
  });

  it('should have correct link to pages', () => {
    let actual;
    actual = wrapper.containsMatchingElement(
      <Link to="about">about me</Link>
    );
    expect(actual).toEqual(true);

    actual = wrapper.containsMatchingElement(
      <IntroCopy>See <Link to="projects">who i{'\''}ve worked with</Link></IntroCopy>
    );
    expect(actual).toEqual(true);
  });
});
