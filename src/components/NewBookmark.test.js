import React from 'react';
import { shallow } from 'enzyme';
import NewBookmark from './NewBookmark';

it('renders a form', () => {
  const wrapper = shallow(<NewBookmark />);

  expect(wrapper.type()).toEqual('form');
});
