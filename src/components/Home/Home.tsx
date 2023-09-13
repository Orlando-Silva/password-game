import React, { useState } from 'react';
import './Home.css';
import PasswordBox from '../PasswordBox/PasswordBox';
import ValueLength from '../ValueLength/ValueLength';

const Home: React.FunctionComponent = () => {

  const rules = [/.{5,}/];
  const [value, setValue] = useState('');
  const [isValid, setIsValid] = useState(false);

  return (
    <div>
      <div>
        <PasswordBox rules={rules} setValue={setValue} setIsValid={setIsValid}/>
        <ValueLength value={value}/>
      </div>
      <div data-testid="is-valid-rules">
        { isValid ? 'C' : 'X' }
      </div>
    </div>
  );
};

export default Home;
