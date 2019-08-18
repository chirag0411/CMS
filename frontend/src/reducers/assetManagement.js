import * as types from '../constants/assetManagement'
import { createReducer } from 'redux-create-reducer';

const initialState = {
  allAsset: [],
  getAllAssetMeta: {},
  onUpdate: false,
  onDelete: false,
  onLoad: false
}

export default createReducer(initialState, {

  [types.GETALLASSET + '_PENDING'](state) {
    return {
      ...state,
      onLoad: true,
      onUpdate: false,
      onDelete: false
    };
  },
  [types.GETALLASSET + '_FULFILLED'](state, action) {
    let allAsset = action.payload.response;
    return {
      ...state,
      allAsset: allAsset.results,
      getAllAssetMeta: allAsset.meta,
      onLoad: false,
      onUpdate: false,
      onDelete: false
    };
  },
  [types.GETALLASSET + '_REJECTED'](state, action) {
    return {
      ...state,
      onLoad: false
    };
  },

  [types.ADDASSET + '_PENDING'](state) {
    return {
      ...state,
      onLoad: true,
    };
  },
  [types.ADDASSET + '_FULFILLED'](state, action) {
    return {
      ...state,
      onLoad: false,
      onUpdate: true
    };
  },
  [types.ADDASSET + '_REJECTED'](state, action) {
    return {
      ...state,
      onLoad: false
    };
  },

  [types.DELETEASSET + '_PENDING'](state) {
    return {
      ...state,
      onLoad: true,
    };
  },
  [types.DELETEASSET + '_FULFILLED'](state, action) {
    return {
      ...state,
      onLoad: false,
      onDelete: true
    };
  },
  [types.DELETEASSET + '_REJECTED'](state, action) {
    return {
      ...state,
      onLoad: false
    };
  },

});
