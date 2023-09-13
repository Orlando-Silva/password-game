import React, { useState } from 'react';
import './Home.css';
import PasswordBox from '../PasswordBox/PasswordBox';
import ValueLength from '../ValueLength/ValueLength';
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
      </div>
      {
        rules.map((r, index) => {
          return (
          <div key={`is-valid-rules-${index}`} data-testid={`is-valid-rules-${index}`}>
            { `Rule #${ index + 1}: ${r.description} - ${ isValid[index] ? 'C' : 'X' }` }
          </div>
          )
        })
      }
    </div>
  );
};

export default Home;
