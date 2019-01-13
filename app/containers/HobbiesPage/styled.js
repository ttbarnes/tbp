import styled from 'styled-components';
import { media } from 'components/styledShared';
import Tag from 'components/Tag';

export const ListItem = styled.li`
  padding: 3em 0;
  list-style-type: none;
  border-bottom: solid 3px #EDEDED;
  ${media.xs`
    padding: 5em 0;
  `}
`;

export const StyledTag = styled(Tag)`
  margin-bottom: .5em;
`;
