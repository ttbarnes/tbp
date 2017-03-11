import expect from 'expect';
import { shallow } from 'enzyme';
import React from 'react';
import { ThoughtsItem } from './details';

const mockItems = [
  { copy: 'hello world' },
  { img: 'inner01' }
];
const mockItemCopy = mockItems[0];
const mockItemImg = mockItems[1];
const mock = {
  project: {
    id: 'network-locum',
    name: 'Network Locum'
  }
};

describe('<ProjectMain /> details', () => {
  describe('<ThoughtsItem />', () => {
    it('should render copy only', () => {
      const wrapper = shallow(
        <ThoughtsItem item={mockItemCopy} />
      );
      const actual = wrapper.containsMatchingElement(
        <p>{mockItemCopy.copy}</p>
      );
      expect(actual).toBeTruthy();
    });

    it('should render an image only', () => {
      const wrapper = shallow(
        <ThoughtsItem
          item={mockItemImg}
          projectId={mock.project.id}
          projectName={mock.project.name}
        />
      );
      const img = wrapper.find('img');
      expect(img.length).toEqual(1);
      // todo: how to test require() (tests return empty src obj)
    });
  });
});
