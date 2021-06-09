import React from 'react';
import { string, shape, func } from 'prop-types';

const LabelInput = (props) => {
  const { input, getExpense } = props;
  const { text, type, control, testid } = input;

  return (
    <label htmlFor={ control }>
      {text}
      <input
        type={ type }
        id={ control }
        name={ control }
        onChange={ getExpense }
        data-testid={ testid }
      />
    </label>
  );
};

export default LabelInput;

LabelInput.propTypes = {
  input: shape({
    text: string,
    testid: string,
    control: string,
    type: string,
  }),
  getExpense: func,
}.isRequired;
