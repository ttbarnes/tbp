import React from 'react';
import PropTypes from 'prop-types';

import ListItem from './ListItem';
import { Root, ListRoot } from './styled';

const ProjectsList = ({ data }) => (
  <Root>
    <ListRoot>
      {data && data.map((year, index) => (
        <ListItem
          key={year.year}
          {...year}
          isLast={index === data.length - 1}
        />
      ))}
    </ListRoot>
  </Root>
);

ProjectsList.propTypes = {
  data: PropTypes.array.isRequired
};

export default ProjectsList;
