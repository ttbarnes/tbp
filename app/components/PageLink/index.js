import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { colors, media } from '../styledShared';

const PageLink = styled(Link)`
  width: 100%;
  display: block;
  text-align:center;
  background: ${colors.blueMain};
  color: #000;
  padding: 0.8em 0.5em;
  text-decoration:none;
  transition: all 0.2s ease;
  margin-bottom: 1em;
  &:hover {
    text-decoration:underline;
    background: ${colors.blue4};
    color: #FFF;
  }
  ${media.sm`
    display: inline-block;
    width: auto;
    margin-right: 1em;
    margin-bottom: 0;
  `}
`;

export default PageLink;
