import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import FirstNameInput from './FirstNameInput';

describe('FirstNameInput', () => {
    it('renders with the correct value', () => {
        render(<FirstNameInput value="Svitlana" onChange={() => {}} />);
        const inputElement = screen.getByLabelText(/first name/i);
        expect(inputElement.value).toBe('Svitlana');
    });

    it('calls onChange when the input value changes', () => {
        const handleChange = jest.fn();
        render(<FirstNameInput value="" onChange={handleChange} />);
        const inputElement = screen.getByLabelText(/first name/i);
        fireEvent.change(inputElement, { target: { value: 'Jane' } });
        expect(handleChange).toHaveBeenCalledTimes(1);
    });

    it('displays an error message when there is an error', () => {
        const errorMessage = 'First name is required';
        render(<FirstNameInput value="" onChange={() => {}} error={errorMessage} />);
        expect(screen.getByText(errorMessage)).toBeInTheDocument();
    });
});
