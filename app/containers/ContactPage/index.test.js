import expect from 'expect';
import { shallow } from 'enzyme';
import React from 'react';
import Helmet from 'react-helmet';
import ContactPage from './index';
import { StyledLink } from './styled';

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
      <StyledLink href="mailto:tony@tonybarnes.me">tony[at]tonybarnes.me</StyledLink>
    );
    expect(actual).toEqual(true);
  });
});
