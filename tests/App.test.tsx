import {describe, expect, test, vi} from 'vitest';
import {userEvent, render, screen} from './utils.tsx';
import App from '../src/App.tsx'
import React, { Dispatch } from 'react';

describe("test App component", () => {
  test("render text", () => {
    render(<App />);
    expect(screen.getByText(/Click on the Vite/i)).toBeDefined();
  });

  test("Should increase the count when button clicked", async () => {
    const incrementCount = vi.fn();
    const handleClick = vi.spyOn(React, "useState");
    const count = 1;
   handleClick.mockImplementation(() => incrementCount);
    render(<App />);
    const button = screen.getByRole('button');
    userEvent.click(button);
    expect(await handleClick).toHaveBeenCalled();
  });
});