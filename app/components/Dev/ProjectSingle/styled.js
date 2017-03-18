import styled from 'styled-components';
import Img from 'components/Img';

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

export const FlexItem = styled.div`
  padding: 0 1em;
`;

export const StyledImg = styled(Img)`
  display: block;
  margin: 4em auto;
`;
