import expect from 'expect';
import { shallow } from 'enzyme';
import React from 'react';
import List from './index';
import { LI } from './styled';

describe('<List />', () => {
  it('should not render if no children are passed', () => {
    const wrapper = shallow(
      <List />
    );
    expect(wrapper.find(List).length).toEqual(0);
  });

  it('should render the items as <LI />', () => {
    const items = [
      'hello',
      'world',
      'all the things'
    ];
    const wrapper = shallow(
      <List>{items}</List>
    );
    // why containsAllMatchingElements not working here?
    const actual = wrapper.containsAllMatchingElements([
      <LI>hello</LI>,
      <LI>world</LI>,
      <LI>all the things</LI>
    ]);
    expect(actual).toBeTruthy();
  });
});
