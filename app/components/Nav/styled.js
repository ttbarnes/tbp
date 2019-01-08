import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { media, colors } from '../styledShared';

const NavLinkShared = `
  padding: 0.25em 0.5em;
  text-decoration: none;
  border-radius: 0;
  -webkit-touch-callout: none;
  user-select: none;
  cursor: pointer;
  outline: 0;
  font-size: 16px; 
  color: #000;
  transition: all 0.2s ease;
  margin-bottom: 0.5em;
  font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
`;

export const Root = styled.div`
  background: ${colors.blueMain};
  position: fixed;
  width: 100%;
  height: 55px;
  top: 0;
  left: 0;
  z-index: 10;
  ${media.lg`
    position: relative;
    height: auto;
    background: none;
  `}
`;

export const ListRoot = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const NavLinkRoot = styled(NavLink)`
  ${NavLinkShared}
  padding: 0.5em;
  font-weight:bold;
  &:active,
  &:focus,
  &:hover {
    text-decoration: underline;
  }
`;

export const NavNavLink = styled(NavLink)`
  ${NavLinkShared}
  &.active,
  &:active,
  &:focus,
  &:hover {
    background: ${colors.blue4};
    color: #FFF;
    text-decoration: none;
  }
`;
