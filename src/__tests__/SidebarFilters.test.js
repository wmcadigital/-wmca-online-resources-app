import React from 'react';
// import { act } from 'react-dom/test-utils';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SidebarFilters from '../components/sidebar/SidebarFilters';

Enzyme.configure({ adapter: new Adapter() });

it('renders', () => {
  shallow(<SidebarFilters />);
});
it('display initial filters', () => {
  const wrapper = mount(<SidebarFilters />);
  expect(wrapper.find('label.filter-title')).toHaveLength(7);
});
