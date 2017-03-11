import React, { PropTypes } from 'react';
import Menu from 'react-burger-menu';
const BurgerMenu = Menu.slide;
import {
  Root,
  ListRoot,
  NavLinkRoot,
  NavLink
} from './styled';

class Nav extends React.Component { // eslint-disable-line react/prefer-stateless-function

  constructor(props) {
    super(props);
    this.state = {
      isLargeScreen: false
    };
  }

  componentDidMount() {
    window.addEventListener('resize', () => {
      this.setState({
        isLargeScreen: this.isLargeScreen()
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
    const { isLargeScreen } = this.state;
    const isHomePage = location.pathname === '/';

    if (isHomePage) {
      return null;
    }

    return (
      <Root>
        <BurgerMenu
          isOpen={isLargeScreen}
          width={120}
          noOverlay={isLargeScreen}
          customCrossIcon={<span></span>}
        >
          <ListRoot>
            <NavLinkRoot href="/" activeClassName="active">Tony Barnes</NavLinkRoot>
            <NavLink to="/about" activeClassName="active">About</NavLink>
            <NavLink to="/projects" activeClassName="active">Projects</NavLink>
            <NavLink to="/hobbies" activeClassName="active">Hobbies</NavLink>
            <NavLink to="/contact" activeClassName="active">Contact</NavLink>
          </ListRoot>
        </BurgerMenu>
      </Root>
    );
  }
}

Nav.propTypes = {
  location: PropTypes.object
};

export default Nav;
