import styled from 'styled-components';
import { Link } from 'react-router';
import { media } from '../styledShared';

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

export const Root = styled.div`
  background: #d1dde6;
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
