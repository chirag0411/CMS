import * as types from '../constants/userProfile'
import { createReducer } from 'redux-create-reducer';

const initialState = {
  users: []
}

export default createReducer(initialState, {

  [types.GETUSER + '_PENDING'](state) {
    return {
      ...state,
    };
  },
  [types.GETUSER + '_FULFILLED'](state, action) {
    let users = action.payload.response;
    return {
      ...state,
      users: users
    };
  },
  [types.GETUSER + '_REJECTED'](state, action) {
    return {
      ...state
    };
  },
});
