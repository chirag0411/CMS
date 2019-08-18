import api from '../apiService/accountService';
import * as types from '../constants/account';
import Cookies from 'universal-cookie';
const cookies = new Cookies();

export function userLogin(loginData) {
    return {
        type: types.USERLOGIN,
        payload: api.userLogin(loginData)
            .then((response) => {
                if (response && response.access_Token != null) {
                    cookies.set('access_Token', 'Bearer ' + response.access_Token, { path: '/' }, { maxAge: 36000 });
                }
                if (response && response.refresh_Token != null) {
                    cookies.set('refresh_Token', response.refresh_Token, { path: '/' }, { maxAge: 36000 });
                }

                if (response && response.user_sid != null) {
                    cookies.set('user_sid', response.user_sid, { path: '/' }, { maxAge: 36000 });
                }
                if (response && response.account_usersid != null) {
                    cookies.set('account_usersid', response.account_usersid, { path: '/' }, { maxAge: 36000 });
                }

                if (response && response.email_address != null) {
                    cookies.set('email_address', response.email_address, { path: '/' }, { maxAge: 36000 });
                }
                if (response && response.accounts != null) {
                    cookies.set('accounts', response.accounts, { path: '/' }, { maxAge: 36000 });
                }

                if (response && response.default_account != null) {
                    cookies.set('default_account', response.default_account, { path: '/' }, { maxAge: 36000 });
                }
                return response;
            }).catch((error) => {
                cookies.remove('access_Token', { path: '/' });
                cookies.remove('refresh_Token', { path: '/' });
                window.location.href = "/";
            })
    };
}


/* export function userLogin(loginData) {
    return (dispatch) => {
        dispatch({
            type: types.USERLOGIN,
            payload: api.userLogin(loginData)
                .then((response) => {
                    if (response && response.access_Token != null) {
                        cookies.set('access_Token', 'Bearer ' + response.access_Token, { path: '/' }, { maxAge: 36000 });
                    }
                    if (response && response.refresh_Token != null) {
                        cookies.set('refresh_Token', response.refresh_Token, { path: '/' }, { maxAge: 360000 });
                    }
                    return response;
                }).catch((error) => {
                    cookies.remove('access_Token', { path: '/' });
                    cookies.remove('refresh_Token', { path: '/' });
                    window.location.href = "/";

                    dispatch({
                        type: types.LOGINFAIL,
                        payload: error
                    });
                })
        });
    }
} */
