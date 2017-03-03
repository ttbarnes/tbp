import React, { PropTypes } from 'react';
import NavBar from './NavBar';
import { Root, StyledHeaderLink } from './styled';

class Header extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { location } = this.props;
    const isHomePage = location.pathname === '/';

    if (isHomePage) {
      return null;
    }

    return (
      <Root>
        <NavBar>
          <StyledHeaderLink to="/">Home</StyledHeaderLink>
          <StyledHeaderLink to="/dev">dev</StyledHeaderLink>
          <StyledHeaderLink to="/music">music</StyledHeaderLink>
          <StyledHeaderLink to="/fpv">fpv</StyledHeaderLink>
          <StyledHeaderLink to="/timelapse">timelapse</StyledHeaderLink>
          <StyledHeaderLink to="/contact">contact</StyledHeaderLink>
        </NavBar>
      </Root>
    );
  }
}

Header.propTypes = {
  location: PropTypes.object
};


export default Header;
