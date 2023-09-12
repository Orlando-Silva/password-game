import { render, fireEvent } from '@testing-library/react';
import ValueLength from './ValueLength';

describe('ValueLength component tests', () => {

  test('It updates word length counter', () => {
    const password = 'test-password';

    const { getByTestId } = render(<ValueLength value={password}/>);
    const passwordLengthSpan = getByTestId('password-length');

    expect(passwordLengthSpan).toHaveTextContent(`${password.length}`);
  });

});
