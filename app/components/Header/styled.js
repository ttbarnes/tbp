import styled from 'styled-components';
import { Link } from 'react-router';

const NavLinkShared = `
  padding: 0.25em 0.5em;
  text-decoration: none;
  border-radius: 4px;
  -webkit-touch-callout: none;
  user-select: none;
  cursor: pointer;
  outline: 0;
  font-size: 16px; 
  color: #000;
  transition: all 0.2s ease;
  margin-bottom: 0.5em;
`;

export const Root = styled.header`
  @media (min-width: 900px) {
    position: fixed;
    left: 0;
    bottom: 0;
    width: 160px;
    height: 100%;
    padding: 1em;
    background: #EAEAEA;
  }
`;

export const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: baseline;
`;

export const NavLinkRoot = styled(Link)`
  ${NavLinkShared}
  &:active,
  &:focus,
  &:hover {
    text-decoration: underline;
  }
`;

export const NavLink = styled(Link)`
  ${NavLinkShared}
  &.active,
  &:active,
  &:focus,
  &:hover {
    background: #747474;
    color: #FFF;
  }
`;

export const NavChildRoot = styled.div`
  display: flex;
  flex-direction: column;
  align-items: baseline;
  padding-left: 1em;
`;
