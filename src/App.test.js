// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders AutoWorks title', () => {
    render(<App />);
    const titleElement = screen.getByText(/AutoWorks/i);
    expect(titleElement).toBeInTheDocument();
});
