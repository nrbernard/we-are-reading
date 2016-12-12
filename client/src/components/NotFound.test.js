import React from 'react';
import { shallow } from 'enzyme';
import NotFound from './NotFound';

it('renders a paragraph', () => {
  const notFound = shallow(<NotFound />);
  const text = <p>404 Not Found</p>;

  expect(notFound.contains(text)).toEqual(true);
});
