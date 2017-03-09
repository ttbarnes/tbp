import React, { PropTypes } from 'react';
import Menu from 'react-burger-menu';
const BurgerMenu = Menu.slide;

import {
  ListRoot,
  NavLinkRoot,
  NavLink
} from './styled';

class Nav extends React.Component { // eslint-disable-line react/prefer-stateless-function

  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
  }

  componentDidMount() {
    window.addEventListener('resize', () => {
      this.setState({
        isOpen: this.isLargeScreen()
      });
    });
  }

  isLargeScreen() {
    if (window.innerWidth >= 990) {
      return true;
    }
    return false;
  }

  render() {
    const { location } = this.props;
    const { isOpen } = this.state;
    const isHomePage = location.pathname === '/';

    if (isHomePage) {
      return null;
    }

    return (
      <BurgerMenu
        isOpen={isOpen}
        width={120}
      >
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
