import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';

it('renders the title', () => {
  const wrapper = shallow(<Header />);
  const title = <h1 className="display-3">What are we reading?</h1>;

  expect(wrapper.contains(title)).toEqual(true);
});
