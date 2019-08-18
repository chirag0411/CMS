import commonApiService from './commonApiServiceCall';
import { AUTH_DATA_V1_SERVER } from '../constants/commonConstants';

const utils = {
    userLogin: (loginData) => {
        return commonApiService.postLoginCall({
            url: AUTH_DATA_V1_SERVER + '/Accounts/Auth',
            body: loginData
        })
    },

};

export default utils;