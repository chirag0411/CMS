import request from 'request-promise';
import { SERVER_ADDR } from '../constants/commonConstants';
import Cookies from 'universal-cookie';
const cookies = new Cookies();


const access_Token = function () {
    if (cookies.get('access_Token')) {
        return cookies.get('access_Token');
    } else return '';
}


const commonApiService = {

    getCall: (apiObj) => {
        return request({
            url: apiObj.url,
            method: 'GET',
            json: true,
            contentType: "application/json; characterset=utf-8",
            headers: { "Authorization": access_Token() }
        });
    },

    postLoginCall: (apiObj) => {
        return request({
            url: apiObj.url,
            method: 'POST',
            body: apiObj.body,
            json: true,
            contentType: "application/json; characterset=utf-8",
            headers: {
                "Authorization": access_Token()
            }
        });
    },

    postCall: (apiObj) => {
        return request({
            url: apiObj.url,
            method: 'POST',
            form: apiObj.body,
            contentType: "application/json; characterset=utf-8",
            headers: {
                "Authorization": access_Token(),
                "account_SID": apiObj.account_sid,
                "serviceBin_SID": "SB32B4D86B-9501-43C8-8753-46608AF8C49E",
                "chatAccount_SId": "",
            }
        });
    },

    deleteCall: (apiObj) => {
        return request({
            url: apiObj.url,
            method: 'DELETE',
            json: true,
            contentType: "application/json; characterset=utf-8",
            headers: {
                "Authorization": access_Token(),
                "account_SID": apiObj.account_sid,
                "serviceBin_SID": "SB32B4D86B-9501-43C8-8753-46608AF8C49E",
                "chat_Account_Sid": "",
            }
        });
    },

    patchCall: (apiObj) => {
        return request({
            url: SERVER_ADDR + apiObj.url,
            method: 'PATCH',
            body: apiObj.body,
            json: true,
            contentType: "application/json; characterset=utf-8",
            headers: { "Authorization": access_Token() }
        });
    }
};

export default commonApiService;