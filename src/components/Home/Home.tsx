import React, { useState } from 'react';
import './Home.css';
import PasswordBox from '../PasswordBox/PasswordBox';
import ValueLength from '../ValueLength/ValueLength';
import ValidRule from '../ValidRule/ValidRule';
import { getRules } from '../../services/RuleService';

const Home: React.FunctionComponent = () => {

  const rules = getRules();

  const [value, setValue] = useState('');
  const [isValid, setIsValid] = useState<boolean[]>([]);

  return (
    <div className='home-container'>
      <div>
        <PasswordBox rules={rules} setValue={setValue} setIsValid={setIsValid}/>
        <ValueLength value={value}/>
        <ValidRule value={isValid}/>
      </div>
    </div>
  );
};

export default Home;
