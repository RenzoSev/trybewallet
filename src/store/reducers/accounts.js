import actions from '../actions'

const INITIAL_STATE = {
  users: [
    {
      id: 0,
      email: 'admin@admin.com',
      password: '123456',
    }
  ],
};

function userAccountReducer(state = INITIAL_STATE, action) {
  switch(action.type) {
    case 'ADD_ACCOUNT':
      return state;
  
    default:
      return state;
  }
}

export default userAccountReducer;
