import expect from 'expect';
import { shallow } from 'enzyme';
import React from 'react';
import Helmet from 'react-helmet';
import { Link } from 'react-router';
import ContactPage from './index';

describe('<ContactPage />', () => {
  const wrapper = shallow(
    <ContactPage />
  );

  it('should have a helmet component', () => {
    const actual = wrapper.containsMatchingElement(
      <Helmet
        title="Contact"
        meta={[
          { name: 'description', content: 'Contact Tony' },
        ]}
      />
    );
    expect(actual).toEqual(true);
  });

  it('should have correct email link', () => {
    const actual = wrapper.containsMatchingElement(
      <a href="mailto:tony@tonybarnes.me">tony{'@'}tonybarnes.me</a>
    );
    expect(actual).toEqual(true);
  });

  it('should have correct twitter link', () => {
    const actual = wrapper.containsMatchingElement(
      <Link to="http://twitter.com/ttbarnes" target="_blank">{'@'}ttbarnes</Link>
    );
    expect(actual).toEqual(true);
  });
});
