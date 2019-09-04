import React from 'react';
import PropTypes from 'prop-types';
import TreeGroup from './TreeGroup';
import { Root, ListRoot } from './styled';

const TreeList = ({ data }) => (
  <Root>
    <ListRoot>
      {data && data.map((group, index) => (
        <TreeGroup
          key={group.heading}
          {...group}
          isLast={index === data.length - 1}
        />
      ))}
    </ListRoot>
  </Root>
);

TreeList.propTypes = {
  data: PropTypes.array.isRequired
};

export default TreeList;
