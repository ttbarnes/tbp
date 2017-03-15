import expect from 'expect';
import { shallow } from 'enzyme';
import React from 'react';
import Helmet from 'react-helmet';
import DevProjectMain from './index';
import H2 from 'components/H2';
import H4 from 'components/H4';
import List from 'components/List';
import Tag from 'components/Tag';
import Img from 'components/Img';
import { ThoughtsItem } from './details';

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

describe('<ProjectMain />', () => {
  const wrapper = shallow(
    <DevProjectMain data={mockProject} />
  );

  wrapper.toJS = () => true;

  // TODO: properly test Helmet props
  it('should have a helmet component', () => {
    const actual = wrapper.find(Helmet);
    expect(actual.length).toEqual(1);
  });

  it('should render heading and date', () => {
    const heading = wrapper.containsMatchingElement(
      <H2>{mockProject.name}</H2>
    );
    expect(heading).toBeTruthy();

    const date = wrapper.containsMatchingElement(
      <p><small>{mockProject.date}</small></p>
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

  describe('highlights', () => {
    it('should render a heading', () => {
      const heading = wrapper.containsMatchingElement(
        <H4>Highlights</H4>
      );
      expect(heading).toBeTruthy();
    });

    it('should render a list', () => {
      expect(wrapper.find(List).length).toEqual(1);
    });
  });

  it('should render <ThoughtsItem />\'s with the correct props', () => {
    function expectedProps(id) {
      return {
        item: mockProject.thoughts[id + 1],
        projectId: mockProject.id,
        projectName: mockProject.name
      };
    }
    const actual = wrapper.containsAllMatchingElements([
      <ThoughtsItem {...expectedProps(1)} />,
      <ThoughtsItem {...expectedProps(2)} />
    ]);
    expect(actual).toBeTruthy();
  });

  it('should render github and live buttons', () => {
    const actual1 = wrapper.containsMatchingElement(
      <button>github repo</button>
    );
    const actual2 = wrapper.containsMatchingElement(
      <button>View the live site</button>
    );
    expect(actual1).toBeTruthy();
    expect(actual2).toBeTruthy();
  });
});
