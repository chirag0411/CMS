import commonApiService from './commonApiServiceCall';

const utils = {
  getAllUsers: () => {
    return commonApiService.getCall({
      url: 'users'
    })
  },

};

export default utils;