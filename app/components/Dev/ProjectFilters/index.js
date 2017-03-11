import React, { PropTypes } from 'react';
import Filter from './Filter';
import { List } from './styled';

const ProjectFilters = (props) =>
  <List>
    <Filter onClick={props.onClick} type="Web apps" currentFilter={props.activeFilter} />
    <Filter onClick={props.onClick} type="Other" currentFilter={props.activeFilter} />
  </List>
;

ProjectFilters.propTypes = {
  onClick: PropTypes.func,
  activeFilter: PropTypes.string
};

export default ProjectFilters;
