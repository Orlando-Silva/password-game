import React, { useState } from 'react';

interface PasswordBoxProps {
  rules: RegExp[],
  setValue: React.Dispatch<React.SetStateAction<string>>,
  setIsValid: React.Dispatch<React.SetStateAction<boolean>>
}

const PasswordBox: React.FunctionComponent<PasswordBoxProps> = ({ rules, setValue, setIsValid }) => {
  const inputOnChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setValue(event.target.value);
    const rulesResult = rules.every((rule) => {
      return rule.test(event.target.value);
    })
    setIsValid(rulesResult);
  }

  return (
    <input data-testid="password-input" type="text" onChange={inputOnChange} />
  );
};

export default PasswordBox;
