import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import App from '../App';
import Sidebar from '../components/sidebar/Sidebar';
import Results from '../components/results/Results';
// import { initialState } from '../store';

Enzyme.configure({ adapter: new Adapter() });

describe('App component', () => {
  let wrapper;

  beforeEach(() => {
    // not mocking!!
    jest.mock('../store', () => {
      return {
        reducer: jest.fn(),
        GlobalState: jest.fn(),
        GlobalDispatch: jest.fn(),
        initialState: {
          allJobs: [],
          selectedJobs: [],
          showResults: true,
          secondFilterJobs: [],
          currentPage: 0
        }
      };
    });
    wrapper = shallow(<App />);
  });

  it('well, should render', () => {
    expect(wrapper).not.toBeNull();
  });
  it('should render Sidebar component', () => {
    expect(wrapper.find(Sidebar).length).toBe(1);
  });
  it('should not render Results component on initial render', () => {
    expect(wrapper.find(Results)).toHaveLength(0);
  });
});
