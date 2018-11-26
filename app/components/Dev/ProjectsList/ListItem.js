import React, { PropTypes } from 'react';
import Tag from 'components/Tag';
import {
  StyledListItem
} from './styled';

const isFullStack = (tags) => {
  if (tags.includes('Express, Node js')) {
    return true;
  }
  return false;
};

export class ListItem extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    const {
      name,
      date,
      tech
    } = this.props;

    return (
      <StyledListItem>
        <h3>{name}</h3>
        <p>{date}</p>
        {isFullStack(tech) && <Tag type="Full stack JS" />}

        <ul>
          {tech && tech.map((item, index) =>
            <Tag type={item} key={index} />
          )}
        </ul>
      </StyledListItem>
    );
  }
}

ListItem.propTypes = {
  name: PropTypes.string.isRequired,
  date: PropTypes.string,
  tech: PropTypes.array
};

ListItem.defaultProps = {
  date: ''
};

export default ListItem;
