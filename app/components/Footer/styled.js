import styled from 'styled-components';
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
  ${media.lg`
    padding-left:${CONTAINER_OFFSET_LEFT};
  `}
`;

export const ListRoot = styled.ul`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
`;

const ListItemShared = `
  flexGrow: 1;
  max-width: 3.5em;
`;

export const ListItem = styled.li`
  ${ListItemShared}
`;

export const StyledLink = styled.a`
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

export const ListItemNoIcon = styled.li`
  ${ListItemShared}
  max-width: 4.3em;
`;
