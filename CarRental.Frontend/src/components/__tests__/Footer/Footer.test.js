import { render, screen, cleanup } from '@testing-library/react';
import Footer from '../../Footer/Footer';
import '@testing-library/jest-dom';

afterEach(() => {
  cleanup();
});

test('should render Footer component', () => {
  render(<Footer />);
  const footer = screen.getByText('Some interesting text');

  expect(footer).toBeInTheDocument();
});
