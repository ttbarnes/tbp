import expect from 'expect';
import { shallow } from 'enzyme';
import React from 'react';
import ProjectFilters from './index';
import Filter from './Filter';

const mock = {
  activeFilter: 'Other',
  clickFunc: () => true
};

describe('<ProjectFilters />', () => {
  it('should render 2 <Filter /> with correct active & last props', () => {
    const wrapper = shallow(
      <ProjectFilters
        onClick={() => true}
        activeFilter={mock.activeFilter}
        handleClick={mock.clickFunc}
      />
    );
    const filterInactive = wrapper.containsMatchingElement(
      <Filter
        handleClick={mock.clickFunc}
        type="Web apps"
        currentFilter={mock.activeFilter}
        isActive={false}
      />
    );
    expect(filterInactive).toBeTruthy();
    const filterActive = wrapper.containsMatchingElement(
      <Filter
        handleClick={mock.clickFunc}
        type="Other"
        currentFilter={mock.activeFilter}
        isActive
        isLast
      />
    );
    expect(filterActive).toBeTruthy();
  });
  // it('should call onClick passed through props', () => {
  // });
});
