import { takeLatest, put, call } from 'redux-saga/effects';
import * as api from '../../api';

import {
  CLEAR_CART_FAIL,
  CLEAR_CART_REQUEST,
  CLEAR_CART_SUCCESS,
} from '../actions/product';


function* AddToCartFatchData() {
  try {
    const { data } = yield call(api.clearCart);
    yield put({
      type: CLEAR_CART_SUCCESS,
      payload: { data },

    });
  } catch (e) {
    yield put({
      type: CLEAR_CART_FAIL,
      message: e.message,
    });
  }
}

export default function* watcher() {
  yield takeLatest(CLEAR_CART_REQUEST, AddToCartFatchData);
}
