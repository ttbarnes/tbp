import React, { PropTypes } from 'react';
import ListItem from './ListItem';
import { ListRoot } from './styled';

const filterProjectsByCategory = (projects, filterCategory) => {
  if (projects) {
    if (filterCategory === 'All') {
      return projects;
    }
    return projects.filter((p) => p.toJS().category === filterCategory);
  }
  return null;
};

export class Projects extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  render() {
    const {
      data,
      activeFilter,
      onClick
    } = this.props;

    const filteredData = filterProjectsByCategory(data, activeFilter);

    return (
      <ListRoot>
        {filteredData && filteredData.toJS().map((project) =>
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

Projects.propTypes = {
  data: PropTypes.object.isRequired,
  activeFilter: PropTypes.string,
  onClick: PropTypes.func.isRequired
};

export default Projects;
