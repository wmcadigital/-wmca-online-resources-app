import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import App from '../App';
import Sidebar from '../components/sidebar/Sidebar';
import Results from '../components/results/Results';

Enzyme.configure({ adapter: new Adapter() });

describe('App componetn', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it('well, should render', () => {
    expect(wrapper).not.toBeNull();
  });
});
