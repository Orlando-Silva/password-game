import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Home from './Home';

describe('Home component tests', () => {
  
  test('Renders expected components', () => {
    const { getByTestId } = render(<Home/>);
    const passwordInput = getByTestId('password-input');
    const passwordLengthSpan = getByTestId('password-length');

    expect(passwordInput).toBeInTheDocument();
    expect(passwordLengthSpan).toBeInTheDocument();
  });

  test('It updates word length counter', () => {
    const password = 'test-password';

    const { getByTestId } = render(<Home/>);
    const passwordInput = getByTestId('password-input');
    fireEvent.change(passwordInput,  { target: { value: password } });
    const passwordLengthSpan = getByTestId('password-length');

    expect(passwordLengthSpan).toHaveTextContent(`${password.length}`);
  });

  test('It matches all rules', () => {
    const password = 'test-password';

    const { getByTestId } = render(<Home/>);
    const passwordInput = getByTestId('password-input');
    fireEvent.change(passwordInput,  { target: { value: password } });

    const rule = getByTestId('is-valid-rules-0');

    expect(rule).toHaveTextContent('C');
  });

  test("It shouldn't matches all rules", () => {
    const password = 'test';

    const { getByTestId } = render(<Home/>);
    const passwordInput = getByTestId('password-input');
    fireEvent.change(passwordInput,  { target: { value: password } });

    const rule = getByTestId('is-valid-rules-0');

    expect(rule).toHaveTextContent('X');
  });

});
