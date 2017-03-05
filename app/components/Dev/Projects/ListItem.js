import React from 'react';
import {
  StyledListItem,
  StyledListItemLink
} from './styled';

const getProjectImage = (itemId) =>
  require(`../../../assets/img/dev/${itemId}/01thumb.jpg`); // eslint-disable-line global-require

const ListItem = (props) =>
  <StyledListItem>
    <StyledListItemLink to={`dev/project/${props.id}`} onClick={() => props.onClick(props.id)}>
      <img src={getProjectImage(props.id)} alt={props.name} />
    </StyledListItemLink>
  </StyledListItem>
;

ListItem.propTypes = {
  name: React.PropTypes.string,
  id: React.PropTypes.string,
  onClick: React.PropTypes.func
};

export default ListItem;
