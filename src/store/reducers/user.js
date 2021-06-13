import { defineState } from 'redux-localstore';
import actions from '../actions';

const DEFAULT_STATE = {
  email: null,
  password: null,
  redirect: false,
};

const INITIAL_STATE = defineState(DEFAULT_STATE)('user');

function userLoginReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case actions.USER_LOGIN:
      return action.payload;

    case actions.USER_REDIRECT:
      return { ...state, redirect: !state.redirect };

    case actions.USER_REMOVE:
      return { ...state, email: null, password: null };

    default:
      return state;
  }
}

export default userLoginReducer;
