import styled from 'styled-components';
import List from 'components/List';
import Tag from 'components/Tag';

export const StyledSection = styled.section`
  margin-bottom: 7em;
`;

export const StyledList = styled(List)`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const StyledTag = styled(Tag)`
  margin-bottom: 0;
`;
