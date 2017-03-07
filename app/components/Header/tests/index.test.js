import expect from 'expect';
import { shallow } from 'enzyme';
import React from 'react';
import Header from '../index';
import {
  Nav,
  // NavLinkRoot,
  NavLink
} from '../styled';

const mockLocation = { pathname: '/about' };

// const mockLocationHome = { pathname: '/' };

describe('<Header />', () => {
  it('should render a nav', () => {
    const wrapper = shallow(
      <Header location={mockLocation} />
    );
    const actual = wrapper.find(Nav);
    expect(actual.length).toEqual(1);
  });

  // it('should render a name', () => {
  //   const actual = wrapper.find(NavLinkRoot);
  //   expect(actual.text()).toEqual('Tony Barnes');
  // });

  it('should have 4 nav items', () => {
    const wrapper = shallow(
      <Header location={mockLocation} />
    );
    const actual = wrapper.find(NavLink);
    expect(actual.length).toEqual(4);
  });

  // how to test its returned null?
  // it('should not render if home page', () => {
  //   const wrapper = shallow(
  //     <Header location={mockLocationHome} />
  //   );
  //   const actual = wrapper.find(Nav);
  //   expect(actual).toBeFalsy();
  // });
});
