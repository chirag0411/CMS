import api from '../apiService/assetManagementService';
import * as types from '../constants/assetManagement';

export function getAllAsset(default_account, pageNo, pageSize) {
    return {
        type: types.GETALLASSET,
        payload: api.getAllAsset(default_account, pageNo, pageSize).then(response => { return { response: response } })
    };
}

export function addAsset(body, user_sid, account_sid) {
    return {
        type: types.ADDASSET,
        payload: api.addAsset(body, user_sid, account_sid).then(response => { return { response: response } })
    };
}

export function deleteAsset(assetID, user_sid, account_sid) {
    return {
        type: types.DELETEASSET,
        payload: api.deleteAsset(assetID, user_sid, account_sid).then(response => { return { response: response } })
    };
}