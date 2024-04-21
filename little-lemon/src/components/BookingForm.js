import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import BookingForm from './BookingForm';

describe('BookingForm component', () => {
  it('renders without crashing', () => {
    render(<BookingForm availableTimes={['07:00 - 10:00', '11:00 - 14:00', '17:00 - 21:00']} />);
  });

  it('updates state when inputs change', () => {
    render(<BookingForm availableTimes={['07:00 - 10:00', '11:00 - 14:00', '17:00 - 21:00']} />);
    
    fireEvent.change(screen.getByLabelText('First name'), { target: { value: 'John' } });
    fireEvent.change(screen.getByLabelText('Last name'), { target: { value: 'Doe' } });
    fireEvent.change(screen.getByLabelText('Email'), { target: { value: 'john@example.com' } });

    expect(screen.getByLabelText('First name').value).toBe('John');
    expect(screen.getByLabelText('Last name').value).toBe('Doe');
    expect(screen.getByLabelText('Email').value).toBe('john@example.com');
  });

  it('displays validation feedback when inputs are invalid', () => {
    render(<BookingForm availableTimes={['07:00 - 10:00', '11:00 - 14:00', '17:00 - 21:00']} />);
    
    fireEvent.change(screen.getByLabelText('First name'), { target: { value: '' } });
    fireEvent.change(screen.getByLabelText('Last name'), { target: { value: '' } });
    fireEvent.change(screen.getByLabelText('Email'), { target: { value: 'invalid-email' } });

    expect(screen.getByText('Please enter your first name.')).toBeInTheDocument();
    expect(screen.getByText('Please enter your last name.')).toBeInTheDocument();
    expect(screen.getByText('Please provide a valid email.')).toBeInTheDocument();
  });

  it('checks if unit tests for form component and validation are added', () => {
    const testFiles = [
      'BookingForm.test.js',
      'BookingFormValidation.test.js'
    ];
    
    const vscodeQueryResults = testFiles.map((file) => screen.queryByText(file));
    const areUnitTestsAdded = vscodeQueryResults.every((result) => result !== null);

    expect(areUnitTestsAdded).toBeTruthy();
  });
});
