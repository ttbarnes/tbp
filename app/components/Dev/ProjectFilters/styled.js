import styled from 'styled-components';
import { buttonHover } from '../../styledShared';

export const List = styled.ul`
  display: flex;
`;

export const Button = styled.button`
  width: auto;
  marginRight: 0.5em;
  ${buttonHover}
`;
