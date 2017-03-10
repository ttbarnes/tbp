import React, { PropTypes } from 'react';
import {
  StyledListItem,
  StyledListItemNoLink,
  StyledListItemLink
} from './styled';

const getProjectImage = (itemId) =>
  require(`../../../assets/img/dev/${itemId}/01thumb.jpg`); // eslint-disable-line global-require

const ListItem = (props) =>
  <StyledListItem>
    {props.mini === true ? (
      <StyledListItemNoLink>
        <img src={getProjectImage(props.id)} alt={props.name} />
      </StyledListItemNoLink>
    ) : (
      <StyledListItemLink
        onClick={() => props.onClick(props.id)}
        to={`dev/project/${props.id}`}
      >
        <img src={getProjectImage(props.id)} alt={props.name} />
      </StyledListItemLink>
    )}
  </StyledListItem>
;

ListItem.propTypes = {
  name: PropTypes.string,
  id: PropTypes.string,
  onClick: PropTypes.func,
  mini: PropTypes.bool
};

export default ListItem;
