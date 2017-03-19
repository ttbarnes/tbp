import styled from 'styled-components';
import { media } from 'components/styledShared';
import Img from 'components/Img';

export const Root = styled.article`
  ${media.md`
    max-width: 700px;
    margin: 0 auto;
  `}
`;

export const HeadingWrap = styled.div`
  display: flex;
  align-items: baseline;
`;

export const SmallDate = styled.small`
  flex: 1 0 0;
  text-align: right;
  font-size: 75%;
  font-weight: normal;
`;

export const Row = styled.div`
  margin-bottom: 5em;
`;

export const RowSpacer = styled.div`
  margin: 2.5em 0;
  height: 1px;
  widht: 100%;
`;

export const ListFlex = styled.ul`
  display: 'flex'
`;

export const StyledImg = styled(Img)`
  display: block;
  margin: 4em auto;
`;
