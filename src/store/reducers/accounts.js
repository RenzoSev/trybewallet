import actions from '../actions';
import { defineState } from 'redux-localstore';

const DEFAULT_STATE = {
  users: [
    {
      id: 0,
      email: 'admin@admin.com',
      password: '123456',
      name: 'Renzo Sevilha',
    }
  ],
};

const INITIAL_STATE = defineState(DEFAULT_STATE)('accounts');

function userAccountReducer(state = INITIAL_STATE, action) {
  switch(action.type) {
    case actions.ADD_ACCOUNT:
      return state;
  
    default:
      return state;
  }
}

export default userAccountReducer;
