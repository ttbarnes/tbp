import React, { PropTypes } from 'react';
import ListItem from './ListItem';
import { ListRoot } from './styled';

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
      onClick
    } = this.props;

    const filteredData = filterProjectsByCategory(data, activeFilter);

    return (
      <ListRoot>
        {filteredData && filteredData.map((project) =>
          <ListItem
            name={project.name}
            key={project.id}
            id={project.id}
            mini={project.mini}
            tags={project.tech}
            onClick={onClick}
          />
        )}
      </ListRoot>
    );
  }
}

ProjectsList.propTypes = {
  data: PropTypes.array.isRequired,
  activeFilter: PropTypes.string,
  onClick: PropTypes.func.isRequired
};

export default ProjectsList;
