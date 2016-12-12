import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import List from './List';
import NotFound from './NotFound';
import items from '../fixtures/data';

it('renders a list with multiple child components', () => {
  const wrapper = shallow(<List items={items} />);
  const listItems = wrapper.find('ul').children();

  expect(listItems.length).toBe(items.length);
});
