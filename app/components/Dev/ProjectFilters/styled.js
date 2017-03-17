import styled from 'styled-components';
import { buttonHover } from '../../styledShared';
import List from 'components/List';

export const FlexList = styled(List)`
  display: flex;
`;

export const Button = styled.button`
  width: auto;
  marginRight: 0.5em;
  ${buttonHover}
`;
