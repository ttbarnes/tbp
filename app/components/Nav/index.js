import React, { PropTypes } from 'react';
import Menu from 'react-burger-menu';
const BurgerMenu = Menu.slide;

import {
  ListRoot,
  NavLinkRoot,
  NavLink
} from './styled';

class Nav extends React.Component { // eslint-disable-line react/prefer-stateless-function

  render() {
    const { location } = this.props;
    const isHomePage = location.pathname === '/';

    if (isHomePage) {
      return null;
    }

    return (
      <BurgerMenu 
        width={170}>
        <ListRoot>
          <NavLinkRoot href="/" activeClassName="active"><b>Tony Barnes</b></NavLinkRoot>
          <NavLink to="/about" activeClassName="active">about</NavLink>
          <NavLink to="/projects" activeClassName="active">projects</NavLink>
          <NavLink to="/hobbies" activeClassName="active">hobbies</NavLink>
          <NavLink to="/contact" activeClassName="active">contact</NavLink>
        </ListRoot>
      </BurgerMenu>
    );
  }
}

Nav.propTypes = {
  location: PropTypes.object
};

export default Nav;
