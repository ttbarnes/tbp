import Menu from 'react-burger-menu';
import expect from 'expect';
import { shallow } from 'enzyme';
import React from 'react';
import Nav from './index';
import {
  Root,
  NavLinkRoot,
  NavLink
} from './styled';
import { NAV_MAX_WIDTH } from '../styledShared';
const BurgerMenu = Menu.slide;

const mockLocation = { pathname: '/about' };
const mockLocationHome = { pathname: '/' };

describe('<Nav />', () => {
  it('should not render if home page', () => {
    const wrapper = shallow(
      <Nav location={mockLocationHome} />
    );
    const actual = wrapper.find(Root);
    expect(actual.length).toEqual(0);
  });

  describe('<BurgerMenu />', () => {
    it('should render a BurgerMenu', () => {
      const wrapper = shallow(
        <Nav location={mockLocation} />
      );
      const actual = wrapper.find(BurgerMenu);
      expect(actual.length).toEqual(1);
    });

    it('should render a BurgerMenu with correct props', () => {
      const wrapper = shallow(
        <Nav location={mockLocation} />
      );
      const menu = wrapper.find(BurgerMenu);
      const prop = {
        isOpen: menu.findWhere((m) => m.prop('isOpen') === false),
        width: menu.findWhere((m) => m.prop('width') === NAV_MAX_WIDTH),
        noOverlay: menu.findWhere((m) => m.prop('noOverlay') === false)
      };
      expect(prop.isOpen.length).toEqual(1);
      expect(prop.width.length).toEqual(1);
      expect(prop.noOverlay.length).toEqual(1);
    });
  });

  describe('<ListRoot />', () => {
    it('should render a name with link', () => {
      const wrapper = shallow(
        <Nav location={mockLocation} />
      );
      const actual = wrapper.containsMatchingElement(
        <NavLinkRoot to="/" activeClassName="active">Tony Barnes</NavLinkRoot>
      );
      expect(actual).toEqual(true);
    });

    it('should render correct nav items ', () => {
      const wrapper = shallow(
        <Nav location={mockLocation} />
      );
      const actual = wrapper.containsAllMatchingElements([
        <NavLink to="/about" activeClassName="active">About</NavLink>,
        <NavLink to="/projects" activeClassName="active">Projects</NavLink>,
        <NavLink to="/contact" activeClassName="active">Contact</NavLink>
      ]);
      expect(actual).toEqual(true);
    });
  });
});
