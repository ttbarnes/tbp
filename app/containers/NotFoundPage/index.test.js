import expect from 'expect';
import { shallow } from 'enzyme';
import React from 'react';
import { Link } from 'react-router-dom';
import H1 from '../../components/H1';
import H2 from '../../components/H2';
import NotFound from './index';

describe('<NotFound />', () => {
  it('should render the Page Not Found copy', () => {
    const wrapper = shallow(
      <NotFound />
    );

    expect(wrapper.containsMatchingElement(
      <div>
        <H1 hide>Oh no</H1>
        <H2 h1Size>Oh no, something has gone wrong :(</H2>
        <Link to="/">Start again</Link>
      </div>
    )).toEqual(true);
  });
});
