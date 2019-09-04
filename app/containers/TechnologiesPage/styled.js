import styled, { keyframes } from 'styled-components';
import List from 'components/List';
import Tag from 'components/Tag';
import { media } from '../../components/styledShared';

const isLast = (props) => `
  ${props.isLast && `
    margin-bottom: 5em;
  `}
`;

export const Row = styled.div`
  margin-bottom: 8em;
  ${media.sm`
    margin-bottom: 25em;
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
