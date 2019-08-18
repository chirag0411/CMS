import * as types from '../constants/account';
import { createReducer } from 'redux-create-reducer';

const initialState = {
    usersProfile: {},
    isLoggedIn: false,
    onLogin: false
}

export default createReducer(initialState, {

    [types.USERLOGIN + '_PENDING'](state) {
        return {
            ...state,
            onLogin: true
        };
    },
    [types.USERLOGIN + '_FULFILLED'](state, action) {
        let userLoginData = action.payload;
        return {
            ...state,
            isLoggedIn: true,
            usersProfile: userLoginData,
            onLogin: false
        };
    },
    [types.USERLOGIN + '_REJECTED'](state, action) {
        return {
            ...state,
            isLoggedIn: false,
            usersProfile: {},
            onLogin: false
        };
    },

    [types.LOGINFAIL](state, error) {
        return {
            ...state,
            isLoggedIn: false,
            usersProfile: {},
            onLogin: false
        };
    },

});
