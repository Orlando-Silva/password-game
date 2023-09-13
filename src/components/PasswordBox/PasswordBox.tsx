import React, { useState } from 'react';
import { Rule } from '../../services/RuleService';

interface PasswordBoxProps {
  rules: Rule[],
  setValue: React.Dispatch<React.SetStateAction<string>>,
  setIsValid: React.Dispatch<React.SetStateAction<boolean[]>>
}

const PasswordBox: React.FunctionComponent<PasswordBoxProps> = ({ rules, setValue, setIsValid }) => {
  const inputOnChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setValue(event.target.value);
    const rulesResult = rules.map((rule) => {
        return rule.expression.test(event.target.value)    
    });
    setIsValid(rulesResult);
  }

  return (
    <input data-testid="password-input" type="text" onChange={inputOnChange} />
  );
};

export default PasswordBox;
