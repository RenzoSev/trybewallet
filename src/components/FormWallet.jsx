import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import LabelInput from './LabelInput';
import LabelSelect from './LabelSelect';

import elements from '../services/inputs';
import initialExpense from '../services/initialExpense';
import { fetchCurrency } from '../store/actions/wallet/currency';
import { fetchExpenses } from '../store/actions/wallet/expense';
import styles from '../styles/tailwindStyles';

const FormWallet = () => {
  const { walletStyles } = styles;
  
  const [expense, setExpense] = useState(initialExpense);
  const dispatch = useDispatch();
  const globalState = useSelector((state) => state);

  const { wallet } = globalState;
  const { inputs, selects, options } = elements;

  const updatedOptions = [wallet.currencies, ...options];

  const getExpense = ({ target }) => {
    const nexExpense = {
      ...expense,
      id: wallet.expenses.length,
      [target.name]: target.value,
    };

    setExpense(nexExpense);
  };

  useEffect(() => {
    dispatch(fetchCurrency());
  }, []);

  return (
    <form className={walletStyles.form}>
      <div className="flex justify-around">
        {inputs.map((input) => (
          <LabelInput key={ input.control } input={ input } getExpense={ getExpense } />
        ))}

        {selects.map((select, index) => (
          <LabelSelect
            key={ select.control }
            select={ select }
            options={ updatedOptions[index] }
            getExpense={ getExpense }
          />
        ))}
      </div>

      <button 
        type="button" 
        onClick={ () => dispatch(fetchExpenses(expense)) }
        className={walletStyles.button}
      >
        Adicionar despesa
      </button>
    </form>
  );
};

export default FormWallet;
