import expect from 'expect';
import { shallow } from 'enzyme';
import React from 'react';
import Helmet from 'react-helmet';
import { Link } from 'react-router';
import { FadeIn } from 'components/styledShared';
import H3 from '../../components/H3';
import List from '../../components/List';
import { LI } from '../../components/List/styled';
import {
  AboutPage,
  renderAboutSection,
  renderGroup
} from './index';
import aboutData from '../../data/about.json';
import {
  Row,
  StyledTag,
  StyledList
} from './styled';

const mockTech = aboutData[0].tech;
const mockTechLength = mockTech.length;

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

  it('should render correct amount of groups', () => {
    const actual = wrapper.find(Row);
    expect(actual.length).toEqual(mockTechLength);
  });

  describe('renderGroup', () => {
    const mockGroup = {
      heading: 'test heading',
      category: 'api',
      tags: [
        'something',
        'testing',
        'test'
      ]
    };
    it('should render StyledTags if group is in `StyledTag` array', () => {
      const groupWrapper = shallow(
        renderGroup(mockGroup)
      );
      const actual = groupWrapper.containsMatchingElement(
        <List>
          <StyledTag type={mockGroup.tags[0]} />
          <StyledTag type={mockGroup.tags[1]} />
          <StyledTag type={mockGroup.tags[2]} />
        </List>
      );
      expect(actual).toBeTruthy();
    });
    it('should render a list if group is not in `StyledTag` array', () => {
      mockGroup.category = 'asdf';
      const groupWrapper = shallow(
        renderGroup(mockGroup)
      );
      const actual = groupWrapper.containsAllMatchingElements([
        <LI><p>{mockGroup.tags[0]}</p></LI>,
        <LI><p>{mockGroup.tags[1]}</p></LI>,
        <LI><p>{mockGroup.tags[2]}</p></LI>
      ]);
      expect(actual).toBeTruthy();
    });
    it('should render copy if group category is `outro`', () => {
      mockGroup.category = 'outro';
      delete mockGroup.tags;
      const groupWrapper = shallow(
        renderGroup(mockGroup)
      );
      const actual = groupWrapper.containsMatchingElement(
        <div>
          <p>Check out some <Link to="/projects">projects i{'\''}ve worked on</Link></p>
          <Link to="/contact">Get in touch</Link>
        </div>
      );
      expect(actual).toBeTruthy();
    });
  });

  describe('renderAboutSection', () => {
    const mockGroup = mockTech[0];
    const aboutSection = shallow(
      renderAboutSection(mockGroup)
    );
    it('should render <FadeIn /> with a heading and list', () => {
      const actual = aboutSection.containsMatchingElement(
        <div>
          <FadeIn>
            <H3>{mockGroup.heading}</H3>
            <StyledList>
              <StyledTag type={mockGroup.tags[0]} />
              <StyledTag type={mockGroup.tags[1]} />
              <StyledTag type={mockGroup.tags[2]} />
              <StyledTag type={mockGroup.tags[3]} />
            </StyledList>
          </FadeIn>
        </div>
      );
      expect(actual).toBeTruthy();
    });
  });
});
