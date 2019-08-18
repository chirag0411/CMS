import * as types from '../constants/userProfile';
import api from '../apiService/userProfileService';

export function getAllUsers() {
    return {
        type: types.GETUSER,
        payload: api.getAllUsers().then(response => { return { response: response } })
    };
}