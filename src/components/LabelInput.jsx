import React from 'react';
import { string, shape, func } from 'prop-types';
import styles from '../styles/tailwindStyles';

const LabelInput = (props) => {
  const { input, getExpense } = props;
  const { text, type, control, testid } = input;

  return (
      <input
        className={styles.walletStyles.input}
        type={ type }
        id={ control }
        name={ control }
        onChange={ getExpense }
        data-testid={ testid }
        placeholder={text}
        min="0"
        maxLength="8"
      />
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
