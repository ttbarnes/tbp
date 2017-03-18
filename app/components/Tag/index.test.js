import expect from 'expect';
import { shallow } from 'enzyme';
import React from 'react';
import Tag from './index';
import StyledTag from './styled';

describe('<Tag />', () => {
  const wrapper = shallow(
    <Tag type="something or rather" />
  );

  it('should render a div with type', () => {
    const actual = wrapper.containsMatchingElement(
      <StyledTag>something or rather</StyledTag>
    );
    expect(actual).toBeTruthy();
  });
  it('should not render with no type', () => {
    const wrapperNoType = shallow(
      <Tag />
    );
    const actual = wrapperNoType.containsMatchingElement(
      <StyledTag />
    );
    expect(actual).toBeFalsy();
  });
});
