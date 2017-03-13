import expect from 'expect';
import { shallow } from 'enzyme';
import React from 'react';
import Helmet from 'react-helmet';
import { AboutPage } from './index';

describe('<About />', () => {
  const wrapper = shallow(
    <AboutPage />
  );
  it('should have helmet component', () => {
    const actual = wrapper.containsMatchingElement(
      <Helmet
        title="About"
        meta={[
          { name: 'description', content: 'About Tony Barnes' }
        ]}
      />
    );
    expect(actual).toEqual(true);
  });
});
