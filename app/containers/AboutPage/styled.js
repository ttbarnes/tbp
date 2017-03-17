import styled, { keyframes } from 'styled-components';
import List from 'components/List';
import Tag from 'components/Tag';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

export const FadeIn = styled.div`
  display: inline-block;
  animation: ${fadeIn} 1s linear;
`;

export const StyledSection = styled.section`
  margin-bottom: 5em;
`;

export const StyledList = styled(List)`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const StyledTag = styled(Tag)`
  margin-bottom: 0;
`;
