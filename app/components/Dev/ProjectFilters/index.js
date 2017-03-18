import React, { PropTypes } from 'react';
import Filter from './Filter';
import { FlexList, Spacer } from './styled';

export class ProjectFilters extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  handleIsActive(filter) {
    const currentFilter = this.props.activeFilter;
    if (currentFilter === filter) {
      return true;
    }
    return false;
  }
  render() {
    const {
      handleClick,
      activeFilter
    } = this.props;

    return (
      <div>
        <FlexList>
          <Filter
            handleClick={handleClick}
            type="Web apps"
            currentFilter={activeFilter}
            isActive={this.handleIsActive('Web apps')}
          />
          <Spacer>{' | '}</Spacer>
          <Filter
            handleClick={handleClick}
            type="Other"
            currentFilter={activeFilter}
            isActive={this.handleIsActive('Other')}
            isLast
          />
        </FlexList>
      </div>
    );
  }
}

ProjectFilters.propTypes = {
  handleClick: PropTypes.func.isRequired,
  activeFilter: PropTypes.string.isRequired
};

export default ProjectFilters;
