import styled, { keyframes } from 'styled-components';
import List from 'components/List';
import Tag from 'components/Tag';
import { media } from '../../components/styledShared';

export const Intro = styled.div`
  ${media.sm`
    margin-bottom: 13em;
  `}
`;

const isLast = (props) => `
  ${props.isLast && `
    margin-bottom: 15em;
  `}
`;

export const Row = styled.div`
  margin-bottom: 8em;
  ${media.sm`
    margin-bottom: 30em;
  `}
  ${isLast}
`;

export const StyledList = styled(List)`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const popUp = keyframes`
  from {
    margin-top: 8em;
  }
  to {
    margin-top: 0.3em;
  }
`;

const tagAnimation = (props) => `
  transition: all 0.3s ease;
  animation: ${popUp} 0.${props.index + 1}s linear;
`;

export const StyledTag = styled(Tag)`
  ${tagAnimation}
`;

export const TechList = styled.ul`
  margin-top: 2.5em;
  ${media.md`
    margin-top: 5em;
  `}
`;

export const TechListItem = styled.li`
  margin-bottom: 0;
  ${media.md`
    margin-bottom: 1em;
  `}
`;
