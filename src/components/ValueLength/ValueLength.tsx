import React from 'react';

interface ValueLengthProps {
  value: string
}

const ValueLength: React.FunctionComponent<ValueLengthProps> = ({ value }) => {
  return (
    <span data-testid="password-length">{value.length}</span>
  );
};

export default ValueLength;
