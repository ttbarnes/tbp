import React, { PropTypes } from 'react';
import Filter from './Filter';
import { FlexList } from './styled';

const ProjectFilters = (props) =>
  <FlexList>
    <Filter onClick={props.onClick} type="Web apps" currentFilter={props.activeFilter} />
    <Filter onClick={props.onClick} type="Other" currentFilter={props.activeFilter} />
  </FlexList>
;

ProjectFilters.propTypes = {
  onClick: PropTypes.func,
  activeFilter: PropTypes.string
};

export default ProjectFilters;
