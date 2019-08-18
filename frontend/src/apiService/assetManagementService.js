import commonApiService from './commonApiServiceCall';
import { RCMS_DATA_V1_SERVER } from '../constants/commonConstants';

const utils = {
    getAllAsset: (data, pageNo, pageSize) => {
        return commonApiService.getCall({
            url: RCMS_DATA_V1_SERVER + '/Accounts/' + data + '/Assets?page=' + pageNo + '&PageSize=' + pageSize
        })
    },

    addAsset: (body, user_sid, account_sid) => {
        return commonApiService.postCall({
            url: RCMS_DATA_V1_SERVER + '/Assets',
            body: body,
            user_sid: user_sid,
            account_sid: account_sid
        })
    },

    deleteAsset: (assetID, user_sid, account_sid) => {
        return commonApiService.deleteCall({
            url: RCMS_DATA_V1_SERVER + '/Assets/' + assetID,
            user_sid: user_sid,
            account_sid: account_sid
        })
    },

};

export default utils;