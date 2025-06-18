import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('theme toggle button exists and changes theme', () => {
  render(<App />);
  
  // Check if theme toggle button is present
  const themeToggle = screen.getByTitle(/switch to/i);
  expect(themeToggle).toBeInTheDocument();
  
  // Check initial state is day theme
  const appContainer = document.querySelector('.app');
  expect(appContainer).toHaveClass('day-theme');
  
  // Click the toggle button
  fireEvent.click(themeToggle);
  
  // Check if theme changed to night
  expect(appContainer).toHaveClass('night-theme');
  
  // Click again to switch back
  fireEvent.click(themeToggle);
  
  // Check if theme changed back to day
  expect(appContainer).toHaveClass('day-theme');
});

test('theme toggle button shows correct icons for day and night', () => {
  render(<App />);
  
  const themeToggle = screen.getByTitle(/switch to/i);
  
  // Should show moon icon for day mode (to switch to night)
  expect(themeToggle).toHaveTextContent('🌙');
  
  // Click to switch to night
  fireEvent.click(themeToggle);
  
  // Should show sun icon for night mode (to switch to day)
  expect(themeToggle).toHaveTextContent('☀️');
});