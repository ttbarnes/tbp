import React from 'react';
import PropTypes from 'prop-types';
import {
  ListRoot,
  ListItem,
  ListItemInner,
  ListItemCopy
} from './styled';

const ProjectsSummary = ({ projects }) => (
  <ListRoot>
    {projects.map((p) =>
      <ListItem key={p.name}>
        <ListItemInner>
          <ListItemCopy>{p.name}</ListItemCopy>
        </ListItemInner>
      </ListItem>
    )}
  </ListRoot>
);

ProjectsSummary.propTypes = {
  projects: PropTypes.array
};

export default ProjectsSummary;
