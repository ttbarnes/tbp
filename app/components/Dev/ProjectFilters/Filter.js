import React, { PropTypes } from 'react';
import { Button } from './styled';

const Filter = (props) =>
  <Button onClick={() => props.onClick(props.type)}>
    {props.type}
  </Button>
;

Filter.propTypes = {
  onClick: PropTypes.func,
  type: PropTypes.string
};

export default Filter;
