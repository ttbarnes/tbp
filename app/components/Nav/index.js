import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Menu from 'react-burger-menu';
import { NAV_MAX_WIDTH } from '../styledShared';
import {
  Root,
  ListRoot,
  NavLinkRoot,
  NavNavLink
} from './styled';
const BurgerMenu = Menu.slide;

class Nav extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false,
      isLargeScreen: false
    };
  }

  componentDidMount() {
    this.handleLargeScreen();
    window.addEventListener('resize', () => {
      this.handleLargeScreen();
    });
  }

  handleLargeScreen() {
    if (window.matchMedia('(min-width: 990px)').matches) {
      this.openMenu();
      this.setState({
        isLargeScreen: true
      });
    } else {
      this.closeMenu();
      this.setState({
        isLargeScreen: false
      });
    }
  }

  closeMenu() {
    this.toggleMenu(false);
  }

  openMenu() {
    this.toggleMenu(true);
  }

  toggleMenu(bool) {
    this.setState({
      menuOpen: bool
    });
  }

  render() {
    const { location } = this.props;
    const {
      menuOpen,
      isLargeScreen
    } = this.state;

    const isHomePage = location && location.pathname === '/';

    if (isHomePage) {
      return null;
    }

    return (
      <Root>
        <BurgerMenu
          isOpen={menuOpen}
          onStateChange={(state) => this.toggleMenu(state.isOpen)}
          width={NAV_MAX_WIDTH}
          noOverlay={!menuOpen || isLargeScreen}
          customCrossIcon={<span></span>}
          disableCloseOnEsc
        >
          <div>
            <ListRoot>

              <NavLinkRoot
                to="/"
                activeClassName="active"
                onClick={() => !isLargeScreen && this.closeMenu()}
              >Tony Barnes
              </NavLinkRoot>

              <NavNavLink
                to="/about"
                activeClassName="active"
                onClick={() => !isLargeScreen && this.closeMenu()}
              >
                About
              </NavNavLink>

              <NavNavLink
                to="/clients"
                activeClassName="active"
                onClick={() => !isLargeScreen && this.closeMenu()}
              >Clients
              </NavNavLink>

              <NavNavLink
                to="/technologies"
                activeClassName="active"
                onClick={() => !isLargeScreen && this.closeMenu()}
              >Technologies
              </NavNavLink>

              <NavNavLink
                to="/contact"
                activeClassName="active"
                onClick={() => !isLargeScreen && this.closeMenu()}
              >Contact
              </NavNavLink>

            </ListRoot>
          </div>
        </BurgerMenu>
      </Root>
    );
  }
}

Nav.propTypes = {
  location: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  location: state.router.location
});

const ConnectedNav = connect(
  mapStateToProps
)(Nav);


export default ConnectedNav;
