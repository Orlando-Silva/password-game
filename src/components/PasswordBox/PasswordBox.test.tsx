import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import PasswordBox from './PasswordBox';

describe('PasswordBox component tests', () => {

  const rules = [
    { 
      expression: /.{5,}/,
      description: 'Must have five characters'
    }
  ];
  
  test('It matches all rules', () => {
    const password = 'test-password';

    const setValue = jest.fn();
    const setIsValid = jest.fn();
    const { getByTestId } = render(<PasswordBox rules={rules} setValue={setValue} setIsValid={setIsValid}/>);
    const passwordInput = getByTestId('password-input');
    fireEvent.change(passwordInput,  { target: { value: password } });

    expect(setIsValid).toBeCalledWith([true]);
  });

  test("It shouldn't matches all rules", () => {
    const password = 'test';

    const setValue = jest.fn();
    const setIsValid = jest.fn();
    const { getByTestId } = render(<PasswordBox rules={rules} setValue={setValue} setIsValid={setIsValid}/>);
    const passwordInput = getByTestId('password-input');
    fireEvent.change(passwordInput,  { target: { value: password } });

    expect(setIsValid).toBeCalledWith([false]);
  });

  test("It should call setValue", () => {
    const password = 'test-password';

    const setValue = jest.fn();
    const setIsValid = jest.fn();
    const { getByTestId } = render(<PasswordBox rules={rules} setValue={setValue} setIsValid={setIsValid}/>);
    const passwordInput = getByTestId('password-input');
    fireEvent.change(passwordInput,  { target: { value: password } });

    expect(setValue).toBeCalledWith(password);
  });

});
