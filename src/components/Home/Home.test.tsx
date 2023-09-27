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

  test('It matches only with "Must have five characters" rule', () => {
    const password = 'test-password';

    const { getByTestId } = render(<Home/>);
    const passwordInput = getByTestId('password-input');
    fireEvent.change(passwordInput,  { target: { value: password } });

    const rule = getByTestId('is-valid-rules-0');

    expect(rule).toHaveTextContent('C');
  });

  test('It should not match the "Must have five characters" rule', () => {
    const password = 'test';

    const { getByTestId } = render(<Home/>);
    const passwordInput = getByTestId('password-input');
    fireEvent.change(passwordInput,  { target: { value: password } });

    const rule = getByTestId('is-valid-rules-0');

    expect(rule).toHaveTextContent('X');
  });

  test('It matches only with "Must include a digit" rule', () => {
    const password = '1';

    const { getByTestId } = render(<Home/>);
    const passwordInput = getByTestId('password-input');
    fireEvent.change(passwordInput,  { target: { value: password } });

    const rule = getByTestId('is-valid-rules-1');

    expect(rule).toHaveTextContent('C');
  });

  test('It should not match the "Must include a digit" rule', () => {
    const password = 'test';

    const { getByTestId } = render(<Home/>);
    const passwordInput = getByTestId('password-input');
    fireEvent.change(passwordInput,  { target: { value: password } });                

    const rule = getByTestId('is-valid-rules-1');

    expect(rule).toHaveTextContent('X');
  });

});
