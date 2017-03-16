import expect from 'expect';
import { shallow } from 'enzyme';
import React from 'react';
import Helmet from 'react-helmet';
import Tag from 'components/Tag';
import { AboutPage } from './index';
import aboutData from '../../data/about.json';

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
        <Tag type={mockTech[0].tags[0]} />,
        <Tag type={mockTech[0].tags[1]} />,
        <Tag type={mockTech[0].tags[2]} />,
        <Tag type={mockTech[0].tags[3]} />,
        <Tag type={mockTech[0].tags[4]} />,
        <Tag type={mockTech[0].tags[5]} />,
        <Tag type={mockTech[0].tags[6]} />
      ]);
      expect(actual).toBeTruthy();
    });
    it('should render \'testing\' <Tag /> \'s with correct title', () => {
      const actual = wrapper.containsAllMatchingElements([
        <Tag type={mockTech[0].tags[0]} />,
        <Tag type={mockTech[0].tags[1]} />,
        <Tag type={mockTech[0].tags[2]} />,
        <Tag type={mockTech[0].tags[3]} />,
        <Tag type={mockTech[0].tags[4]} />,
        <Tag type={mockTech[0].tags[5]} />
      ]);
      expect(actual).toBeTruthy();
    });
    it('should render \'styling\' <Tag /> \'s with correct title', () => {
      const actual = wrapper.containsAllMatchingElements([
        <Tag type={mockTech[0].tags[0]} />,
        <Tag type={mockTech[0].tags[1]} />,
        <Tag type={mockTech[0].tags[2]} />,
        <Tag type={mockTech[0].tags[3]} />
      ]);
      expect(actual).toBeTruthy();
    });
    it('should render \'other\' <Tag /> \'s with correct title', () => {
      const actual = wrapper.containsAllMatchingElements([
        <Tag type={mockTech[0].tags[0]} />,
        <Tag type={mockTech[0].tags[1]} />,
        <Tag type={mockTech[0].tags[2]} />,
        <Tag type={mockTech[0].tags[3]} />
      ]);
      expect(actual).toBeTruthy();
    });
  });
});
