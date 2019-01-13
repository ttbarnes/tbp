import styled from 'styled-components';
import { Link } from 'react-router-dom';
import {
  media,
  colors,
  CONTAINER_SPACING_HORIZONTAL,
  CONTAINER_OFFSET_LEFT
} from '../../components/styledShared';

export const Root = styled.footer`
  padding: 3em ${CONTAINER_SPACING_HORIZONTAL} 0 ${CONTAINER_SPACING_HORIZONTAL};
  /* duplicate flex parent prevents issue in IE. */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  ${media.sm`
    justify-content: center;
  `}
  ${media.lg`
    padding-left:${CONTAINER_OFFSET_LEFT};
  `}
`;

export const ListRoot = styled.ul`
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  align-items: center;
  ${media.sm`
    justify-content: center;
  `}
`;


const ListItemShared = `
  flex-grow: 1;
  width: 3.5em;
  max-width: 3.5em;
`;

export const ListItem = styled.li`
  ${ListItemShared}
`;

const linkShared = `
  display: block;
  opacity: .3;
  padding: 1em 0.3em;
  text-decoration: none;
  transition: all 0.3s ease;
  color: #000;
  &:hover {
    opacity:1;
    text-decoration: underline;
    color: ${colors.blue4};
  }
`;

export const StyledLink = styled.a`
  ${linkShared}
`;

export const StyledNavLink = styled(Link)`
  ${linkShared}
`;

export const ListItemNoIcon = styled.li`
  ${ListItemShared}
  max-width: 4.3em;
`;
