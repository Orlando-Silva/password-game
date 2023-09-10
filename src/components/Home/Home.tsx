import React, { useState } from 'react';
import './Home.css';


const Home: React.FunctionComponent = () => {

  const [value, setValue] = useState('');
  const [hasFiveCharacters, setHasFiveCharacters] = useState(false);

  const inputOnChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setValue(event.target.value);
    setHasFiveCharacters(/.{5,}/.test(event.target.value));  
  }

  return (
    <div>
      <div>
        <input data-testid="password-input" type="text" onChange={inputOnChange} />
        <span data-testid="password-length">
          {value.length}
        </span>
      </div>
      <div data-testid="five-characters-rule">
        { hasFiveCharacters ? 'C' : 'X' } Digite um password com 5 caracteres.
      </div>
    </div>
  );
};

export default Home;
