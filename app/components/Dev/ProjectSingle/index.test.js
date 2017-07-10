import expect from 'expect';
import { shallow } from 'enzyme';
import React from 'react';
import Helmet from 'react-helmet';
import { Link } from 'react-router';
import H1 from 'components/H1';
import H2 from 'components/H2';
import H4 from 'components/H4';
import List from 'components/List';
import Tag from 'components/Tag';
import Img from 'components/Img';
import PageLink from 'components/PageLink';
import ProjectSingle from './index';
import { ThoughtsItem } from './details';
import { SmallDate } from './styled';

const mockProject = {
  id: 'mean-tweets',
  name: 'Mean tweets',
  category: 'Web apps',
  date: '2015',
  tech: [
    'Something',
    'Another',
    'Test',
    'Another Tag'
  ],
  highlights: [
    'Created from the ground up in order to learn more about Node, Express and MongoDB',
    'Built a fairly in-depth node API that interacts with a DB',
    'Clean and modular angular app on the front end',
    'Built a timeline feature that queries the API depending on who a user follows and the followee\'s tweets/retweets'
  ],
  thoughts: [
    { copy: 'Test thought' },
    { img: 'inner01' },
    { copy: 'More thoughts' },
    { img: 'inner02' }
  ],
  urls: [
    'http://github.com/ttbarnes/tbp',
    'http://tonybarnes.me'
  ]
};

function expectedThoughtsProps(id) {
  return {
    item: mockProject.thoughts[id + 1],
    projectId: mockProject.id,
    projectName: mockProject.name
  };
}

describe('<ProjectSingle />', () => {
  const wrapper = shallow(
    <ProjectSingle data={mockProject} />
  );

  wrapper.toJS = () => true;

  // TODO: properly test Helmet props
  it('should have a helmet component', () => {
    const actual = wrapper.find(Helmet);
    expect(actual.length).toEqual(1);
  });

  it('should render 2 project headings (for seo/accessibility and design)', () => {
    const h1 = wrapper.containsMatchingElement(
      <H1 hide>{mockProject.name}</H1>
    );
    expect(h1).toBeTruthy();
    const h2 = wrapper.containsMatchingElement(
      <H2>{mockProject.name}</H2>
    );
    expect(h2).toBeTruthy();
  });

  it('should render a date', () => {
    const date = wrapper.containsMatchingElement(
      <SmallDate>{mockProject.date}</SmallDate>
    );
    expect(date).toBeTruthy();
  });

  it('should render an image', () => {
    const img = wrapper.find(Img);
    expect(img.length).toEqual(1);
    // todo: how to test require() (tests return empty src obj)
  });

  describe('tech tags', () => {
    it('should be rendered with all tags from project data', () => {
      // note: enzyme doesn't seem to like
      // mapping things within containsAllMatchingElements
      const actual = wrapper.containsAllMatchingElements([
        <Tag type={mockProject.tech[0]} />,
        <Tag type={mockProject.tech[1]} />,
        <Tag type={mockProject.tech[2]} />,
        <Tag type={mockProject.tech[3]} />
      ]);
      expect(actual).toBeTruthy();
    });
  });

  it('should render 2 lists', () => {
    // 2 Lists for highlights and links
    expect(wrapper.find(List).length).toEqual(2);
  });

  it('should render a highlights heading', () => {
    const heading = wrapper.containsMatchingElement(
      <H4>Highlights</H4>
    );
    expect(heading).toBeTruthy();
  });

  it('should render <ThoughtsItem />\'s with the correct props', () => {
    const actual = wrapper.containsAllMatchingElements([
      <ThoughtsItem {...expectedThoughtsProps(1)} />,
      <ThoughtsItem {...expectedThoughtsProps(2)} />
    ]);
    expect(actual).toBeTruthy();
  });

  it('should not render <ThoughtsItems /> when moreInfoSoon', () => {
    const mockProjectMoreInfoSoon = mockProject;
    mockProjectMoreInfoSoon.moreInfoSoon = ['More info coming soon.'];
    const wrapperMoreInfoSoon = shallow(
      <ProjectSingle data={mockProjectMoreInfoSoon} />
    );
    const items = wrapperMoreInfoSoon.containsAllMatchingElements([
      <ThoughtsItem {...expectedThoughtsProps(1)} />,
      <ThoughtsItem {...expectedThoughtsProps(2)} />
    ]);
    expect(items).toBeFalsy();
  });

  // todo: should not render highlights when moreInfoSoon

  it('should render github and live buttons', () => {
    const actual1 = wrapper.containsMatchingElement(
      <Link>GitHub repo</Link>
    );
    const actual2 = wrapper.containsMatchingElement(
      <Link>Live site</Link>
    );
    expect(actual1).toBeTruthy();
    expect(actual2).toBeTruthy();
  });

  it('should render a link to all projects', () => {
    const actual = wrapper.containsMatchingElement(
      <PageLink to="/projects">All projects</PageLink>
    );
    expect(actual).toBeTruthy();
  });
});
