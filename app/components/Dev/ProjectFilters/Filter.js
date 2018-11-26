import React, { PropTypes } from 'react';

export default class Filter extends React.Component { // eslint-disable-line react/prefer-stateless-function
  handleOnChange = (ev) => {
    this.props.onChange(ev.target.value);
  }

  render() {
    const { items } = this.props;

    return (
      <div>
        <select onChange={this.handleOnChange}>
          {items.map((i) =>
            <option key={i} value={i}>{i}</option>
          )}
        </select>
      </div>
    );
  }
}

Filter.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
  onChange: PropTypes.func.isRequired
};
