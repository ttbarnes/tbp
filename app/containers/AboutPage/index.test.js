import expect from 'expect';
import { shallow } from 'enzyme';
import React from 'react';
import Helmet from 'react-helmet';
import { AboutPage } from './index';
import aboutData from '../../data/about.json';
import { StyledTag } from './styled';
import PageLink from 'components/PageLink';

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
    it('should render \'latest\' <Tag /> \'s with correct title', () => {
      const actual = wrapper.containsAllMatchingElements([
        <StyledTag type={mockTech[0].tags[0]} />,
        <StyledTag type={mockTech[0].tags[1]} />,
        <StyledTag type={mockTech[0].tags[2]} />,
        <StyledTag type={mockTech[0].tags[3]} />
      ]);
      expect(actual).toBeTruthy();
    });
    it('should render \'api\' <Tag /> \'s', () => {
      const actual = wrapper.containsAllMatchingElements([
        <StyledTag type={mockTech[1].tags[0]} />,
        <StyledTag type={mockTech[1].tags[1]} />
      ]);
      expect(actual).toBeTruthy();
    });
    it('should render \'testing\' <Tag /> \'s', () => {
      const actual = wrapper.containsAllMatchingElements([
        <StyledTag type={mockTech[2].tags[0]} />,
        <StyledTag type={mockTech[2].tags[1]} />,
        <StyledTag type={mockTech[2].tags[2]} />,
        <StyledTag type={mockTech[2].tags[3]} />
      ]);
      expect(actual).toBeTruthy();
    });
    it('should render \'styling\' <Tag /> \'s', () => {
      const actual = wrapper.containsAllMatchingElements([
        <StyledTag type={mockTech[3].tags[0]} />,
        <StyledTag type={mockTech[3].tags[1]} />,
        <StyledTag type={mockTech[3].tags[2]} />,
        <StyledTag type={mockTech[3].tags[3]} />
      ]);
      expect(actual).toBeTruthy();
    });
    it('should render \'other\' <Tag /> \'s', () => {
      const actual = wrapper.containsAllMatchingElements([
        <StyledTag type={mockTech[4].tags[0]} />,
        <StyledTag type={mockTech[4].tags[1]} />,
        <StyledTag type={mockTech[4].tags[2]} />,
        <StyledTag type={mockTech[4].tags[3]} />
      ]);
      expect(actual).toBeTruthy();
    });
  });
  it('should render a PageLink', () => {
    const actual = wrapper.containsMatchingElement(
      <PageLink to="/projects">View projects</PageLink>
    );
    expect(actual).toBeTruthy();
  });
});
