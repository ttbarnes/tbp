import expect from 'expect';
import { shallow } from 'enzyme';
import React from 'react';
import NotFound from '../index';
import {
  ErrorMessage
} from '../styled';

describe('<NotFound />', () => {
  it('should render the Page Not Found text', () => {
    const wrapper = shallow(
      <NotFound />
    );

    expect(wrapper.contains(
      <ErrorMessage>oh no :(</ErrorMessage>
    )).toEqual(true);
  });
});
