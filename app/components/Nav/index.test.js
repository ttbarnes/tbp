import expect from 'expect';
import { shallow } from 'enzyme';
import React from 'react';
import Menu from 'react-burger-menu';
const BurgerMenu = Menu.slide;
import Nav from './index';
import { NavLink } from './styled';

const mockLocation = { pathname: '/about' };

// const mockLocationHome = { pathname: '/' };

describe('<Nav />', () => {
  it('should render a BurgerMenu', () => {
    const wrapper = shallow(
      <Nav location={mockLocation} />
    );
    const actual = wrapper.find(BurgerMenu);
    expect(actual.length).toEqual(1);
  });

  // burger menu should have correct props

  // it('should render a name', () => {
  //   const actual = wrapper.find(NavLinkRoot);
  //   expect(actual.text()).toEqual('Tony Barnes');
  // });

  it('should have 4 nav items', () => {
    const wrapper = shallow(
      <Nav location={mockLocation} />
    );
    const actual = wrapper.find(NavLink);
    expect(actual.length).toEqual(4);
  });

  // how to test its returned null?
  // it('should not render if home page', () => {
  //   const wrapper = shallow(
  //     <Nav location={mockLocationHome} />
  //   );
  //   const actual = wrapper.find(Nav);
  //   expect(actual).toBeFalsy();
  // });
});
