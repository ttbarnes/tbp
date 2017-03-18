import React, { PropTypes } from 'react';
import Filter from './Filter';
import { FlexList } from './styled';

export class ProjectFilters extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    const {
      handleClick,
      activeFilter
    } = this.props;

    return (
      <div>
        <FlexList>
          <Filter handleClick={handleClick} type="Web apps" currentFilter={activeFilter} />
          <Filter handleClick={handleClick} type="Other" currentFilter={activeFilter} />
        </FlexList>
      </div>
    );
  }
}

ProjectFilters.propTypes = {
  handleClick: PropTypes.func,
  activeFilter: PropTypes.string
};

export default ProjectFilters;
