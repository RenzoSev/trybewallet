import React from 'react';
import { string, shape, func } from 'prop-types';

import { IoIosArrowDown } from 'react-icons/io';
import styles from '../styles/tailwindStyles';

const LabelSelect = (props) => {
  const { select, options, getExpense } = props;
  const { text, control } = select;

  return (
    <div className={styles.walletStyles.label}>
      <select
        className={styles.walletStyles.select}
        id={control}
        name={control}
        onChange={getExpense}
      >
        <option disabled selected>
          {text}
        </option>
        {options.map((value) => (
          <option key={value} value={value}>
            {value}
          </option>
        ))}
      </select>

      <label htmlFor={control}>
        <IoIosArrowDown className="text-sm text-gray-100 opacity-80" />
      </label>
    </div>
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
