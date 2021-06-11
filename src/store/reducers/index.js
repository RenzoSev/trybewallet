import { combineReducers } from 'redux';

import user from './user';
import wallet from './wallet';
import accounts from './accounts';

const rootReducer = combineReducers({ user, wallet, accounts });

export default rootReducer;
