import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { colors } from '../styledShared';

const StyledLink = styled(Link)`
  background: ${colors.blueMain};
  color: #000;
  padding: 1em;
`;

export default StyledLink;
