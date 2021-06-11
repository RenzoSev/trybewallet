import actions from '../actions';

const INITIAL_STATE = {
  loading: false,
  error: '',
  currencies: [],
  expenses: [],
  edit: false,
  id: 0,
};

function userWalletReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case actions.REQUEST_CURRENCIES:
      return { ...state, loading: true };

    case actions.WALLET_CURRENCIES:
      return { ...state, loading: false, currencies: action.payload };

    case actions.FAILED_CURRENCIES:
      return { ...state, loading: false, error: action.payload };

    case actions.ADD_EXPENSES:
      return { ...state, expenses: [...state.expenses, action.payload] };

    case actions.EDIT_EXPENSES:
      return { ...state, edit: action.edit, id: action.id };

    case actions.DELETE_EXPENSE:
      return { ...state, expenses: action.payload };

    default:
      return state;
  }
}

export default userWalletReducer;
