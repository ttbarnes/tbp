import styled from 'styled-components';

const listStyleType = (props) => `
  ${props.showListStyle && 'list-style-type: disc;'};
`;

export const UL = styled.ul`
  ${listStyleType}
`;

export const LI = styled.li`
  margin-bottom: 1em;
`;
