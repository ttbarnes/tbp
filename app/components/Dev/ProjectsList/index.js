import React, { PropTypes } from 'react';
import ListItem from './ListItem';
import { Root, ListRoot } from './styled';

export class ProjectsList extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  render() {
    const {
      data,
    } = this.props;

    return (
      <Root>
        <ListRoot>
          {data && data.map((year) =>
            <ListItem
              key={year.year}
              {...year}
            />
          )}
        </ListRoot>
      </Root>
    );
  }
}

ProjectsList.propTypes = {
  data: PropTypes.array.isRequired
};

export default ProjectsList;
