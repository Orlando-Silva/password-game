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

  test('It matches 5 character rule', () => {
    const password = 'test-password';

    const { getByTestId } = render(<Home/>);
    const passwordInput = getByTestId('password-input');
    fireEvent.change(passwordInput,  { target: { value: password } });

    const rule = getByTestId('five-characters-rule');

    expect(rule).toHaveTextContent('C Digite um password com 5 caracteres.');
  });

  test("It shouldn't matches 5 character rule", () => {
    const password = 'test';

    const { getByTestId } = render(<Home/>);
    const passwordInput = getByTestId('password-input');
    fireEvent.change(passwordInput,  { target: { value: password } });

    const rule = getByTestId('five-characters-rule');

    expect(rule).toHaveTextContent('X Digite um password com 5 caracteres.');
  });

});
