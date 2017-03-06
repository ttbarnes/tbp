import React, { PropTypes } from 'react';
import {
  Root,
  Nav,
  NavLinkRoot,
  NavLink
} from './styled';

class Header extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { location } = this.props;
    const isHomePage = location.pathname === '/';

    if (isHomePage) {
      return null;
    }

    return (
      <Root>
        <Nav>
          <NavLinkRoot to="/" activeClassName="active"><b>Tony Barnes</b></NavLinkRoot>
          <br />
          <NavLink to="/about" activeClassName="active">about</NavLink>
          <NavLink to="/projects" activeClassName="active">projects</NavLink>
          <NavLink to="/hobbies" activeClassName="active">hobbies</NavLink>
          <NavLink to="/contact" activeClassName="active">contact</NavLink>
        </Nav>
      </Root>
    );
  }
}

Header.propTypes = {
  location: PropTypes.object
};


export default Header;
