/**
 *
 * Button.react.js
 *
 * A common button, if you pass it a prop "route" it'll render a link to a react-router route
 * otherwise it'll render a link with an onclick
 */

import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import Wrapper from './Wrapper';
import ListItem from './ListItem';

function filterProjectsByCategory(projects, filterCategory) {
  if (projects) {
    if (filterCategory === 'All') {
      return projects;
    }
    return projects.filter((p) => p.toJS().category === filterCategory);
  }
  return null;
}

export class Projects extends React.PureComponent {

  componentDidMount() {
    /* eslint-disable react/no-find-dom-node */
    const elm = ReactDOM.findDOMNode(this);
    /* eslint-enable react/no-find-dom-node */
    elm.style.opacity = 0;
    window.requestAnimationFrame(() => {
      elm.style.transition = 'opacity 500ms';
      elm.style.opacity = 1;
    });
  }

  render() {
    const data = filterProjectsByCategory(this.props.data, this.props.activeFilter);

    return (
      <Wrapper>
        <ul>
          {data && data.map((project) => (
            <ListItem
              name={project.get('name')}
              category={project.get('category')}
              key={project.get('id')}
              id={project.get('id')}
              onClick={this.props.onClick}
            />
          ))}
        </ul>
      </Wrapper>
    );
  }
}

Projects.propTypes = {
  data: PropTypes.array,
  activeFilter: PropTypes.string,
  onClick: PropTypes.func
};

export default Projects;
