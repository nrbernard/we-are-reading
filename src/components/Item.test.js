import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import Item from './Item';
import items from '../../lib/data';

it('renders the title', () => {
  const item = items[0];
  const wrapper = shallow(<Item item={item} />);
  const title = <a href={item.url}>{item.title}</a>;

  expect(wrapper.contains(title)).toEqual(true);
});
