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

export class ListItem extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    const {
      mini,
      id,
      name,
      tags,
      handleClick
    } = this.props;

    const mainTag = tags ? renderMainTag(tags) : null;

    return (
      <StyledListItem>
        {mini === true ? (
          <StyledListItemNoLink>
            <StyledImg src={getProjectImage(id)} alt={name} />
          </StyledListItemNoLink>
        ) : (
          <StyledListItemLink
            onClick={() => handleClick(id)}
            to={`dev/project/${id}`}
          >
            <StyledImg src={getProjectImage(id)} alt={name} />
            {mainTag && <StyledTag type={mainTag} />}
          </StyledListItemLink>
        )}
      </StyledListItem>
    );
  }
}

ListItem.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
  mini: PropTypes.bool.isRequired,
  tags: PropTypes.array.isRequired
};

export default ListItem;
