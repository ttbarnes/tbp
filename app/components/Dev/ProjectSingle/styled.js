import styled from 'styled-components';
import { Link } from 'react-router';
import { media, colors } from 'components/styledShared';
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
  margin-bottom: 3em;
  ${media.sm`
    margin-bottom: 5em;
  `}
`;

export const ListFlex = styled.ul`
  display: 'flex'
`;

export const StyledImg = styled(Img)`
  display: block;
  margin: 3em auto;
  ${media.sm`
    margin: 4em auto;
  `}
`;

export const StyledLink = styled(Link)`
  width: 100%;
  display: block;
  text-align:center;
  background: ${colors.blueMain};
  color: #000;
  padding: 0.8em 0.5em;
  text-decoration:none;
  transition: all 0.2s ease;
  &:hover {
    text-decoration:underline;
    background: ${colors.blue4};
    color: #FFF;
  }
  ${media.sm`
    display: inline-block;
    width: auto;
  `}
`;
