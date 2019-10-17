import React from 'react';
import { shallow, mount, render } from 'enzyme';
import App from '../client/src/components/App.jsx';

test('there are reviews, filtered reviews, and search', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.state().reviews).toBeDefined();
  expect(wrapper.state().filteredReviews).toBeDefined();
  expect(wrapper.state().search).toBeDefined();
});