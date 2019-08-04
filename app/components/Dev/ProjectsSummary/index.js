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
    {projects.map((p) => (
      <ListItem key={p.name}>
        <ListItemInner
          style={{
            background: p.colors.bg,
            color: p.colors.text,
            border: `solid 1px ${p.colors.border}`
          }}
        >
          <ListItemCopy>{p.name}</ListItemCopy>
        </ListItemInner>
      </ListItem>
    ))}
  </ListRoot>
);

ProjectsSummary.propTypes = {
  projects: PropTypes.array.isRequired
};

export default ProjectsSummary;
