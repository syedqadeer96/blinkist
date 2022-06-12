import React from 'react';
import { render, screen } from '@testing-library/react';
import Banner from './Banner';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

test('renders Banner', () => {
  render(<Banner />);
  const BannerElement = screen.getByText('Explore Books on entrepreneurship');
  expect(BannerElement).toBeInTheDocument();
});
