import { render, fireEvent } from '@testing-library/react';
import ValidRule from './ValidRule';

describe('ValidRule component tests', () => {

    test('It matches all rules', () => {
        const isValidRules = [true];
    
        const { getByTestId } = render(<ValidRule value={isValidRules}/>);
        const rule = getByTestId('is-valid-rules-0');
    
        expect(rule).toHaveTextContent('C');
      });

      test('It should not matches all rules', () => {
        const isValidRules = [false];
    
        const { getByTestId } = render(<ValidRule value={isValidRules}/>);
        const rule = getByTestId('is-valid-rules-0');
    
        expect(rule).toHaveTextContent('X');
      });
});
