import {describe, expect, test, vi} from 'vitest';
import {userEvent, render, screen} from './utils.tsx';
import FormControl from '../src/FormControl.tsx'
import React from 'react';

describe("test FormControl component", () => {
  test("Should call the onChange prop on input change trigger", () => {
    const user = userEvent.setup();
    const mockNameChange = vi.fn();
    render(
      <FormControl
        type="textbox"
        name="Name"
        value="Jack"
        onChange={mockNameChange}
      />
    );
    const button = screen.getByTestId('Name');
    user.type(button, 'new name');
    expect(mockNameChange).toHaveBeenCalled();
  });

});