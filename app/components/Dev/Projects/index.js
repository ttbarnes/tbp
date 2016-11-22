/**
 *
 * Button.react.js
 *
 * A common button, if you pass it a prop "route" it'll render a link to a react-router route
 * otherwise it'll render a link with an onclick
 */

import React, { PropTypes, Children } from 'react';
import Wrapper from './Wrapper';
import ListItem from './ListItem';

function filterProjectsByCategory(projects, filterCategory) {
  if (filterCategory === 'All') {
    return projects;
  }
  return projects.filter(p => p.toJS().category === filterCategory);
}

function Projects(props) {

  const data = filterProjectsByCategory(props.data, props.activeFilter);

  return (
    <Wrapper>
      <ul>
        {data.map(project => (
          <ListItem title={project.get('title')} 
                    category={project.get('category')} 
                    key={project.get('id')}
                    id={project.get('id')} 
                    onClick={props.onClick} 
          />
        ))}
      </ul>
    </Wrapper>
  );
};

Projects.propTypes = {
  projects: PropTypes.array,
  activeFilter: PropTypes.string,
  onClick: PropTypes.func
}

export default Projects;
