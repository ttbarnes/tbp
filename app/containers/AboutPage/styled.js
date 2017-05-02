import styled, { keyframes } from 'styled-components';
import List from 'components/List';
import Tag from 'components/Tag';

export const Intro = styled.div`
  margin-bottom: 7em;
`;

export const Row = styled.div`
  margin-bottom: 15em;
`;

export const StyledList = styled(List)`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const popUp = keyframes`
  from {
    margin-top: 2em;
  }
  to {
    margin-top: 0;
  }
`;

const tagAnimation = (props) => `
  animation: ${popUp} 0.${props.index + 1}s linear;
`;

export const StyledTag = styled(Tag)`
  ${tagAnimation}
`;
