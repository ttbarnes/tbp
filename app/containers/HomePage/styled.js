import styled from 'styled-components';
import Img from 'components/Img';
import { media } from 'components/styledShared';

export const FlexRoot = styled.article`
  text-align: center;
  ${media.xs`
    text-align: left;
  `}
  ${media.md`
    display: flex;
  `}
`;

export const StyledImg = styled(Img)`
  max-width: 150px;
  border-radius: 50%;
  padding-right: 1em;
`;
