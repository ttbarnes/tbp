import expect from 'expect';
import { shallow } from 'enzyme';
import React from 'react';
import { Link } from 'react-router';
import NotFound from '../index';
import {
  ErrorMessage
} from '../styled';

describe('<NotFound />', () => {
  it('should render the Page Not Found copy', () => {
    const wrapper = shallow(
      <NotFound />
    );

    expect(wrapper.containsMatchingElement(
      <div>
        <ErrorMessage>Oh no, something has gone wrong :(</ErrorMessage>
        <Link to="/">Start again</Link>
      </div>
    )).toEqual(true);
  });
});
