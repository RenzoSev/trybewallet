import React from 'react';
import { string, shape, func } from 'prop-types';
import styles from '../styles/tailwindStyles';

const LabelSelect = (props) => {
  const { select, options, getExpense } = props;
  const { text, control } = select;

  return (
    <label htmlFor={ control }>
      <select
        className={styles.walletStyles.select}
        id={ control }
        name={ control }
        onChange={ getExpense }
      >
        <option disabled>{text}</option>
        {options.map((value) => (
          <option key={ value }>
            {value}
          </option>
        ))}
      </select>
    </label>
  );
};

export default LabelSelect;

LabelSelect.propTypes = {
  select: shape({
    text: string,
    testid: string,
    control: string,
  }),
  getExpense: func,
}.isRequired;
