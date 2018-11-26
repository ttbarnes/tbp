import React, { PropTypes } from 'react';
import ListItem from './ListItem';
import { Root, ListRoot } from './styled';

const filterProjects = (projects, filterIndustry, filterTech) => {
  const shouldFilter = projects && (filterIndustry || filterTech);

  if (shouldFilter) {
    return projects.filter((p) =>
      (p.industry === filterIndustry) ||
      (p.tech && p.tech.includes(filterTech))
    );
  }
  return projects;
};

export class ProjectsList extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  render() {
    const {
      data,
      filterByIndustry,
      filterByTech
    } = this.props;

    const filteredData = filterProjects(data, filterByIndustry, filterByTech);

    const showingAll = filteredData.length === data.length;

    return (
      <Root>
        <ListRoot>
          {!showingAll &&
            <div>
              <p>Showing {filteredData.length} of {data.length} projects - reset filters</p>
            </div>
          }
          {filteredData && filteredData.map((project) =>
            <ListItem
              key={project.id}
              {...project}
            />
          )}
        </ListRoot>
      </Root>
    );
  }
}

ProjectsList.propTypes = {
  data: PropTypes.array.isRequired,
  filterByIndustry: PropTypes.string,
  filterByTech: PropTypes.string
};

ProjectsList.defaultProps = {
  filterByIndustry: '',
  filterByTech: ''
};

export default ProjectsList;
