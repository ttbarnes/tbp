import expect from 'expect';
import { shallow } from 'enzyme';
import React from 'react';
import ProjectFilters from './index';
import Filter from './Filter';

const mock = {
  activeFilter: 'test filter'
};

describe('<ProjectFilters />', () => {
  it('should render 2 filters with correct props', () => {
    const wrapper = shallow(
      <ProjectFilters
        onClick={() => true}
        activeFilter={mock.activeFilter}
      />
    );
    const actual = wrapper.containsAllMatchingElements([
      <Filter type="Web apps" currentFilter={mock.activeFilter} />,
      <Filter type="Other" currentFilter={mock.activeFilter} />
    ]);
    expect(actual).toBeTruthy();
  });

  // it('should call onClick passed through props', () => {

  // });
});
