import expect from 'expect';
import { shallow } from 'enzyme';
import React from 'react';
import Helmet from 'react-helmet';
import Nav from 'components/Nav';
import Footer from 'components/Footer';
import App from './index';

describe('<App />', () => {
  const wrapper = shallow(
    <App />
  );

  it('should have helmet component', () => {
    const actual = wrapper.containsMatchingElement(
      <Helmet
        titleTemplate="%s - Tony Barnes"
        defaultTitle="Tony Barnes"
        meta={[
          { name: 'description', content: 'A React.js Boilerplate application' }
        ]}
      />
    );
    expect(actual).toEqual(true);
  });

  it('should render a nav', () => {
    expect(wrapper.containsMatchingElement(
      <Nav />
    )).toBeTruthy();
  });

  it('should render a footer', () => {
    expect(wrapper.containsMatchingElement(
      <Footer />
    )).toBeTruthy();
  });
});
