import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FiEdit, FiDelete } from 'react-icons/fi';
import { deleteExpense, editExpenses } from '../store/actions/wallet/expense';
import styles from '../styles/tailwindStyles';

const TBody = () => {
  const { walletStyles } = styles;
  
  const { expenses } = useSelector((state) => state.wallet);
  const dispatch = useDispatch();
  
  const removeExpense = (id) => {
    const newExpenses = expenses.filter((expense) => expense.id !== id);
    dispatch(deleteExpense(newExpenses));
  };
  
  const renderTBody = () => expenses.map((expense) => {
    const {
      id, description, method, value, tag, exchangeRates, currency,
    } = expense;
    const { ask, name } = exchangeRates[currency];
    const convertedValue = (value * ask).toFixed(2);
    const cointConverted = name.split('/')[0];
    return (
      <tbody className="text-gray-500" key={id}>
        <tr>
          <td className={walletStyles.td}>{description}</td>
          <td className={walletStyles.td}>{tag}</td>
          <td className={walletStyles.td}>{method}</td>
          <td className={walletStyles.td}>{value}</td>
          <td className={walletStyles.td}>{cointConverted}</td>
          <td className={walletStyles.td}>{parseFloat(ask).toFixed(2)}</td>
          <td className={walletStyles.td}>{convertedValue}</td>
          <td className={walletStyles.td}>Real</td>
          <td className="justify-center gap-8 flex px-4 text-center">
            <button
              className={walletStyles.buttonEditDelete('blue')}
              type="button"
              onClick={() => dispatch(editExpenses(true, id))}
              data-testid="delete-btn"
            >
              <FiEdit />
            </button>
            
            <button
              className={walletStyles.buttonEditDelete('red')}
              type="button"
              onClick={() => removeExpense(id)}
              data-testid="edit-btn"
            >
              <FiDelete />
            </button>
          </td>
        </tr>
      </tbody>
    );
  });

  return renderTBody();
};

export default TBody;
