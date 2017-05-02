import expect from 'expect';
import { shallow } from 'enzyme';
import React from 'react';
import Filter from './Filter';
import { Button, ButtonInner } from './styled';

const mock = {
  type: 'React',
  handleClick: () => true
};

describe('<Filter />', () => {
  const wrapper = shallow(
    <Filter
      type={mock.type}
      handleClick={mock.handleClick}
      isLast
      isActive
    />
  );
  it('should render a filter with correct props', () => {
    const actual = wrapper.containsMatchingElement(
      <Button>
        <ButtonInner>{mock.type}</ButtonInner>
      </Button>
    );
    expect(actual).toBeTruthy();
  });
});
