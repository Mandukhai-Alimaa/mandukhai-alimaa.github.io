import { render, screen } from '@testing-library/react';
import App from './components/App';

test('renders app component', () => {
  render(<App />);
  // Test that the app renders by checking for the header
  expect(document.querySelector('header')).toBeInTheDocument();
});
