import React, { PropTypes } from 'react';
import { Button, ButtonInner } from './styled';

export default class Filter extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    const {
      type,
      handleClick,
      isActive,
      isLast
    } = this.props;
    return (
      <Button
        isLast={isLast}
        isActive={isActive}
        onClick={() => handleClick(type)}
      >
        <ButtonInner>{type}</ButtonInner>
      </Button>
    );
  }
}

Filter.propTypes = {
  handleClick: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
  isLast: PropTypes.bool,
  isActive: PropTypes.bool
};
