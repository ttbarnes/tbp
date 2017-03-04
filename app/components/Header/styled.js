import styled from 'styled-components';
import { Link } from 'react-router';

export const Root = styled.header`
  @media (min-width: 900px) {
    position: fixed;
    left: 0;
    bottom: 0;
    width: 160px;
    height: 100%;
    padding: 1em;
  }
`;

export const Nav = styled.nav``;

export const NavLink = styled(Link)`
  display: inline-flex;
  padding: 0.25em 2em 0.25em 0;
  text-decoration: none;
  border-radius: 4px;
  -webkit-font-smoothing: antialiased;
  -webkit-touch-callout: none;
  user-select: none;
  cursor: pointer;
  outline: 0;
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-weight: bold;
  font-size: 16px; 
  color: #000;
  
  &:active {
    background: #41ADDD;
    color: #000;
  }
`;

