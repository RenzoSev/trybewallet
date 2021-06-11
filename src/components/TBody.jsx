import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteExpense, editExpenses } from '../actions';

const TBody = () => {
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
          <td className="px-4 text-center">{description}</td>
          <td className="px-4 text-center">{tag}</td>
          <td className="px-4 text-center">{method}</td>
          <td className="px-4 text-center">{value}</td>
          <td className="px-4 text-center">{cointConverted}</td>
          <td className="px-4 text-center">{parseFloat(ask).toFixed(2)}</td>
          <td className="px-4 text-center">{convertedValue}</td>
          <td className="px-4 text-center">Real</td>
          <td className="px-4 text-center">
            <button
              type="button"
              onClick={() => removeExpense(id)}
              data-testid="delete-btn"
            >
              Deletar
            </button>
            <button
              type="button"
              onClick={() => dispatch(editExpenses(true, id))}
              data-testid="edit-btn"
            >
              Editar
            </button>
          </td>
        </tr>
      </tbody>
    );
  });

  return renderTBody();
};

export default TBody;
