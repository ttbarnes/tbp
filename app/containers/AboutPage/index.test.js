import expect from 'expect';
import { shallow } from 'enzyme';
import React from 'react';
import Helmet from 'react-helmet';
import { AboutPage } from './index';
import aboutData from '../../data/about.json';
import { StyledTag } from './styled';

const mockTech = aboutData[0].tech;

describe('<About />', () => {
  const wrapper = shallow(
    <AboutPage tech={mockTech} />
  );
  it('should have helmet component', () => {
    const actual = wrapper.containsMatchingElement(
      <Helmet
        title="About"
        meta={[
          { name: 'description', content: 'About Tony Barnes' }
        ]}
      />
    );
    expect(actual).toEqual(true);
  });

  describe('renderTechGroup', () => {
    it('should render <Tag /> \'s with correct title', () => {
      const actual = wrapper.containsAllMatchingElements([
        <StyledTag type={mockTech[0].tags[0]} />,
        <StyledTag type={mockTech[0].tags[1]} />,
        <StyledTag type={mockTech[0].tags[2]} />,
        <StyledTag type={mockTech[0].tags[3]} />,
        <StyledTag type={mockTech[0].tags[4]} />,
        <StyledTag type={mockTech[0].tags[5]} />,
        <StyledTag type={mockTech[0].tags[6]} />
      ]);
      expect(actual).toBeTruthy();
    });
    it('should render \'testing\' <Tag /> \'s with correct title', () => {
      const actual = wrapper.containsAllMatchingElements([
        <StyledTag type={mockTech[0].tags[0]} />,
        <StyledTag type={mockTech[0].tags[1]} />,
        <StyledTag type={mockTech[0].tags[2]} />,
        <StyledTag type={mockTech[0].tags[3]} />,
        <StyledTag type={mockTech[0].tags[4]} />,
        <StyledTag type={mockTech[0].tags[5]} />
      ]);
      expect(actual).toBeTruthy();
    });
    it('should render \'styling\' <Tag /> \'s with correct title', () => {
      const actual = wrapper.containsAllMatchingElements([
        <StyledTag type={mockTech[0].tags[0]} />,
        <StyledTag type={mockTech[0].tags[1]} />,
        <StyledTag type={mockTech[0].tags[2]} />,
        <StyledTag type={mockTech[0].tags[3]} />
      ]);
      expect(actual).toBeTruthy();
    });
    it('should render \'other\' <Tag /> \'s with correct title', () => {
      const actual = wrapper.containsAllMatchingElements([
        <StyledTag type={mockTech[0].tags[0]} />,
        <StyledTag type={mockTech[0].tags[1]} />,
        <StyledTag type={mockTech[0].tags[2]} />,
        <StyledTag type={mockTech[0].tags[3]} />
      ]);
      expect(actual).toBeTruthy();
    });
  });
});
