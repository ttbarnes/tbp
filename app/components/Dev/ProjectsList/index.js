import React, { PropTypes } from 'react';
import ListItem from './ListItem';
import { Root, ListRoot } from './styled';

const filterProjectsByCategory = (projects, filterCategory) => {
  if (projects) {
    if (filterCategory === 'All') {
      return projects;
    }
    return projects.filter((p) => p.category === filterCategory);
  }
  return null;
};

export class ProjectsList extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  render() {
    const {
      data,
      activeFilter,
      handleClick
    } = this.props;

    const filteredData = filterProjectsByCategory(data, activeFilter);

    return (
      <Root>
        <ListRoot>
          {filteredData && filteredData.map((project) =>
            <ListItem
              key={project.id}
              handleClick={handleClick}
              {...project}
            />
          )}
        </ListRoot>
      </Root>
    );
  }
}

ProjectsList.propTypes = {
  data: PropTypes.array.isRequired,
  activeFilter: PropTypes.string,
  handleClick: PropTypes.func.isRequired
};

export default ProjectsList;
