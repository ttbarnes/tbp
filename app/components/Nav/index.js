import React, { PropTypes } from 'react';
import Menu from 'react-burger-menu';
const BurgerMenu = Menu.slide;
import { NAV_MAX_WIDTH } from '../styledShared';
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
    this.setIsLargeScreen();
    window.addEventListener('resize', () => {
      this.setIsLargeScreen();
    });
  }

  setIsLargeScreen() {
    if (window.matchMedia('(min-width: 990px)').matches) {
      this.setState({
        isLargeScreen: true
      });
    } else if (this.state.isLargeScreen) {
      this.setState({
        isLargeScreen: false
      });
    }
  }

  render() {
    const { location } = this.props;
    const { isLargeScreen } = this.state;
    const isHomePage = location.pathname === '/';

    // temp solution for active nav of child page.
    // routing is done quite differently from boilerplate.
    const isProjectSinglePage = location.pathname.includes('projects/');

    if (isHomePage) {
      return null;
    }

    return (
      <Root>
        <BurgerMenu
          isOpen={isLargeScreen}
          width={NAV_MAX_WIDTH}
          noOverlay={isLargeScreen}
          customCrossIcon={<span></span>}
        >
          <ListRoot>
            <NavLinkRoot to="/" activeClassName="active">Tony Barnes</NavLinkRoot>
            <NavLink to="/about" activeClassName="active">About</NavLink>
            <NavLink to="/projects" activeClassName="active" className={isProjectSinglePage && 'active'}>Projects</NavLink>
            <NavLink to="/contact" activeClassName="active">Contact</NavLink>
          </ListRoot>
        </BurgerMenu>
      </Root>
    );
  }
}

Nav.propTypes = {
  location: PropTypes.object.isRequired
};

export default Nav;
