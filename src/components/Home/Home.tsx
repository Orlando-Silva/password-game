import React, { useState } from 'react';
import './Home.css';


const Home: React.FunctionComponent = () => {

  const rules = [/.{5,}/];
  const [value, setValue] = useState('');
  const [isValid, setIsValid] = useState(false);

  const inputOnChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setValue(event.target.value);
    const rulesResult = rules.every((rule) => {
      return rule.test(event.target.value);
    })
    setIsValid(rulesResult);
  }

  return (
    <div>
      <div>
        <input data-testid="password-input" type="text" onChange={inputOnChange} />
        <span data-testid="password-length">
          {value.length}
        </span>
      </div>
      <div data-testid="is-valid-rules">
        { isValid ? 'C' : 'X' }
      </div>
    </div>
  );
};

export default Home;
