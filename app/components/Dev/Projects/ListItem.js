import React from 'react';
import {
  StyledListItem,
  StyledListItemLink
} from './styled';

const ListItem = (props) =>
  <StyledListItem>
    <StyledListItemLink to={`dev/project/${props.id}`} onClick={() => props.onClick(props.id)}>
      {props.name}
    </StyledListItemLink>
  </StyledListItem>
;

ListItem.propTypes = {
  name: React.PropTypes.string,
  id: React.PropTypes.string,
  onClick: React.PropTypes.func
};

export default ListItem;
