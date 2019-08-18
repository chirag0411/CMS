import { combineReducers } from 'redux';
import userLogin from './userLogin';
import userProfile from './userProfileReducer';
import assetManagement from './assetManagement';

export default combineReducers({
  userLogin,
  userProfile,
  assetManagement
})
