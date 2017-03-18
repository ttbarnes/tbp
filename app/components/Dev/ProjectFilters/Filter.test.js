import expect from 'expect';
import { shallow } from 'enzyme';
import React from 'react';
import Filter from './Filter';
import { Button } from './styled';

const mock = {
  type: 'React',
  handleClick: () => true
};

describe('<Filter />', () => {
  const wrapper = shallow(
    <Filter
      // handleClick={mock.handleClick}
      type={mock.type}
    />
  );
  it('should render a filter with correct props', () => {
    const actual = wrapper.containsMatchingElement(
      <Button>{mock.type}</Button>
    );
    expect(actual).toBeTruthy();
  });
});
