import { defineState } from 'redux-localstore';
import actions from '../actions';

const DEFAULT_STATE = {
  email: '',
  password: '',
};

const INITIAL_STATE = defineState(DEFAULT_STATE)('user');

function userLoginReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case actions.USER_LOGIN:
      return action.payload;

    default:
      return state;
  }
}

export default userLoginReducer;
