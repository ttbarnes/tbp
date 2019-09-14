import expect from 'expect';
import { shallow } from 'enzyme';
import React from 'react';
import Helmet from 'react-helmet';
import { AboutPage } from './index';
import techData from '../../data/tech.json';

const mockTech = techData;

describe('<About />', () => {
  const wrapper = shallow(
    <AboutPage tech={mockTech} />
  );
  it('should have helmet component', () => {
    const actual = wrapper.containsMatchingElement(
      <Helmet
        title="About"
        meta={[
          { name: 'description', content: 'A creative engineer with a passion' }
        ]}
      />
    );
    expect(actual).toEqual(true);
  });
});
