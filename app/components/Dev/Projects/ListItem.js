import React, { PropTypes } from 'react';
import {
  StyledListItem,
  StyledListItemNoLink,
  StyledListItemLink,
  StyledImg,
  StyledTag
} from './styled';

const getProjectImage = (itemId) =>
  require(`../../../assets/img/dev/${itemId}/01thumb.jpg`); // eslint-disable-line global-require

const renderMainTag = (tags) => {
  let isFullStack = false;

  if (tags.includes('Express, Node js')) {
    isFullStack = true;
  }

  if ((tags.includes('React') && !isFullStack)) {
    return 'React';
  } else if (((tags.includes('Angular') || tags.includes('AngularJS')) && !isFullStack)) {
    return 'Angular';
  } else if (isFullStack) {
    return 'Full stack JS';
  }
  return null;
};

const ListItem = (props) => {
  const {
    mini,
    id,
    name,
    tags
  } = props;

  const mainTag = tags ? renderMainTag(tags) : null;

  return (
    <StyledListItem>
      {mini === true ? (
        <StyledListItemNoLink>
          <StyledImg src={getProjectImage(id)} alt={name} />
        </StyledListItemNoLink>
      ) : (
        <StyledListItemLink
          onClick={() => props.onClick(id)}
          to={`dev/project/${id}`}
        >
          <StyledImg src={getProjectImage(id)} alt={name} />
          {mainTag && <StyledTag type={mainTag} />}
        </StyledListItemLink>
      )}
    </StyledListItem>
  );
};

ListItem.propTypes = {
  name: PropTypes.string,
  id: PropTypes.string,
  onClick: PropTypes.func,
  mini: PropTypes.bool,
  tags: PropTypes.array
};

export default ListItem;
