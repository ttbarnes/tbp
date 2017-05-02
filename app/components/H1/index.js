import styled from 'styled-components';

const hasHide = (props) => `
  ${props.hide && `
    visibility: hidden;
  `}
`;

const H1 = styled.h1`
  font-size: 2em;
  margin-top: 0;
  margin-bottom: 0.25em;
  ${hasHide}
`;

export default H1;
