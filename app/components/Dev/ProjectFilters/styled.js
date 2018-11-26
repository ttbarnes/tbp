import styled from 'styled-components';
import List from 'components/List';
import { media } from '../../styledShared';

export const FlexList = styled(List)`
  display: none;
  ${media.sm`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    font-size: 0.8em;
  `}
  ${media.lg`
    padding: 0 1.2em;
  `}
`;
