import React, { PropTypes } from 'react';
import Filter from './Filter';
import { FlexList, Spacer } from './styled';

const FILTERS = {
  INDUSTRY: ['Fin Tech', 'Ecommerce'],
  TECH: ['React', 'Angular'],
};

export class ProjectFilters extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  handleIsActive(filter) {
    const {
      filterByIndustry,
      filterByTech
    } = this.props;

    if (filter === 'industry' && filterByIndustry) {
      return true;
    }
    if (filter === 'tech' && filterByTech) {
      return true;
    }
    return false;
  }

  render() {
    const {
      onClickFilterByIndustry,
      onClickFilterByTech
    } = this.props;

    return (
      <div>
        <FlexList>
          <Filter
            onChange={onClickFilterByIndustry}
            type="Industry"
            items={FILTERS.INDUSTRY}
            isActive={this.handleIsActive('industry')}
          />
          <Filter
            onChange={onClickFilterByTech}
            type="Tech"
            items={FILTERS.TECH}
            isActive={this.handleIsActive('tech')}
            isLast
          />
        </FlexList>
      </div>
    );
  }
}

ProjectFilters.propTypes = {
  onClickFilterByIndustry: PropTypes.func.isRequired,
  onClickFilterByTech: PropTypes.func.isRequired,
  filterByIndustry: PropTypes.string,
  filterByTech: PropTypes.string
};


ProjectFilters.defaultProps = {
  filterByIndustry: '',
  filterByTech: ''
};

export default ProjectFilters;
