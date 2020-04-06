import React from 'react';
import { render, cleanup } from '@testing-library/react';
import App from '../App';

afterEach(cleanup);

test('renders Find an opportunity', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Find an opportunity/i);
  expect(linkElement).toBeInTheDocument();
});
it('should take a snapshot', () => {
  const { asFragment } = render(<App />);
  expect(asFragment(<App />)).toMatchSnapshot();
});
