import React from 'react';
import PropTypes from 'prop-types';
import TreeGroup from './TreeGroup';
import { Root, ListRoot } from './styled';

const TreeList = ({ data, largeGroupHeight }) => (
  <Root>
    <ListRoot largeGroupHeight={largeGroupHeight}>
      {data && data.map((group, index) => (
        <TreeGroup
          key={group.heading}
          {...group}
          isLast={index === data.length - 1}
          largeGroupHeight={largeGroupHeight}
        />
      ))}
    </ListRoot>
  </Root>
);

TreeList.propTypes = {
  data: PropTypes.array.isRequired,
  largeGroupHeight: PropTypes.bool
};

TreeList.defaultProps = {
  largeGroupHeight: false
};

export default TreeList;
