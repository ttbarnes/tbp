import React, { PropTypes } from 'react';
import { Button } from './styled';

export default class Filter extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    const {
      type,
      handleClick
    } = this.props;
    return (
      <Button onClick={() => handleClick(type)}>{type}</Button>
    );
  }
}

Filter.propTypes = {
  handleClick: PropTypes.func,
  type: PropTypes.string
};
