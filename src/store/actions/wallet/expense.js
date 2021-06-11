import actions from '../';
import currencyAPI from '../../../services/api';

const addExpenses = (payload) => ({
  type: actions.ADD_EXPENSES,
  payload,
});

export const editExpenses = (edit, id = 0) => ({
  type: actions.EDIT_EXPENSES,
  edit,
  id,
});

export const deleteExpense = (payload) => ({
  type: actions.DELETE_EXPENSE,
  payload,
});

export const fetchExpenses = (expense) => async (dispatch) => {
  const exchangeRates = await currencyAPI();
  const updatedExpense = {
    ...expense,
    exchangeRates,
  };

  dispatch(addExpenses(updatedExpense));
};
