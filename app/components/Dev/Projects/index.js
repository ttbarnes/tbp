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
        {filteredData && filteredData.map((project) => (
          <ListItem
            name={project.get('name')}
            category={project.get('category')}
            key={project.get('id')}
            id={project.get('id')}
            onClick={onClick}
          />
        ))}
      </ListRoot>
    );
  }
}

Projects.propTypes = {
  data: PropTypes.object,
  activeFilter: PropTypes.string,
  onClick: PropTypes.func
};

export default Projects;
