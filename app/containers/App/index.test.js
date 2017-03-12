import App from './index';
import expect from 'expect';
import { shallow } from 'enzyme';
import React from 'react';
import Nav from 'components/Nav';

describe('<App />', () => {
  it('should render the nav', () => {
    const wrapper = shallow(
      <App />
    );
    expect(wrapper.containsMatchingElement(
      <Nav />
    )).toBeTruthy();
  });

  it('should render its children', () => {
    const children = (<h1>Test</h1>);
    const renderedComponent = shallow(
      <App>
        {children}
      </App>
    );
    expect(renderedComponent.contains(children)).toEqual(true);
  });
});
