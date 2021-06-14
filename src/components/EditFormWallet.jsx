import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import LabelInput from './LabelInput';
import LabelSelect from './LabelSelect';

import elements from '../services/inputs';
import { deleteExpense, editExpenses } from '../store/actions/wallet/expense';
import { fetchCurrency } from '../store/actions/wallet/currency';

import styles from '../styles/tailwindStyles';

const EditFormWallet = () => {
  const { walletStyles } = styles;
  const { inputs, selects, options } = elements;
  
  const dispatch = useDispatch();
  
  const globalState = useSelector((state) => state);
  const { wallet } = globalState;
  
  const initialExpense = { ...wallet.expenses[wallet.id] };
  const [expense, setExpense] = useState(initialExpense);
  
  const updatedOptions = [wallet.currencies, ...options];

  const editExpense = () => {
    const newExpenses = [
      ...wallet.expenses.filter(({ id }) => id !== wallet.id),
      expense,
    ].sort((a, b) => a.id - b.id);
    dispatch(deleteExpense(newExpenses));
    dispatch(editExpenses(false));
  };
  const getExpense = ({ target }) => {
    const newExpense = {
      ...expense,
      [target.name]: target.value,
    };
    setExpense(newExpense);
  };

  useEffect(() => {
    dispatch(fetchCurrency());
  }, []);

  return (
    <form className={walletStyles.editform}>
      <div className="flex justify-around">
        {inputs.map((input) => (
          <LabelInput
            key={input.control}
            input={input}
            getExpense={getExpense}
          />
        ))}
        {selects.map((select, index) => (
          <LabelSelect
            key={select.control}
            select={select}
            options={updatedOptions[index]}
            getExpense={getExpense}
          />
        ))}
      </div>
      <button
        className={walletStyles.button}
        type="button"
        onClick={() => editExpense()}
      >
        Editar despesa
      </button>
    </form>
  );
};

export default EditFormWallet;
