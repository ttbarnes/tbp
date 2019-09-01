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
    const { isLargeScreen } = this.state;
    if (window.matchMedia('(min-width: 990px)').matches) {
      this.setState({
        isLargeScreen: true
      });
    } else if (isLargeScreen) {
      this.setState({
        isLargeScreen: false
      });
    }
  }

  render() {
    const { location } = this.props;
    const { isLargeScreen } = this.state;

    const isHomePage = location && location.pathname === '/';

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
          <div>
            <ListRoot>
              <NavLinkRoot to="/" activeClassName="active">Tony Barnes</NavLinkRoot>
              <NavNavLink to="/about" activeClassName="active">About</NavNavLink>
              <NavNavLink to="/clients" activeClassName="active">Clients</NavNavLink>
              <NavNavLink to="/technologies" activeClassName="active">Technologies</NavNavLink>
              <NavNavLink to="/contact" activeClassName="active">Contact</NavNavLink>
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
  location: state.route.location,
});

const ConnectedNav = connect(
  mapStateToProps
)(Nav);


export default ConnectedNav;
