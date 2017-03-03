import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
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

export class Projects extends React.PureComponent {

  componentDidMount() {
    const elm = ReactDOM.findDOMNode(this); // eslint-disable-line react/no-find-dom-node
    elm.style.opacity = 0;
    window.requestAnimationFrame(() => {
      elm.style.transition = 'opacity 500ms';
      elm.style.opacity = 1;
    });
  }

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
