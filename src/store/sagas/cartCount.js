import { takeLatest, put, call } from 'redux-saga/effects';
import * as api from '../../api';

import { CART_COUNT_FAIL, CART_COUNT_REQUEST, CART_COUNT_SUCCESS } from '../actions/product';


function* cartCountF() {
  try {
    const { data } = yield call(api.cartItem);
    yield put({
      type: CART_COUNT_SUCCESS,
      payload: { data },

    });
  } catch (e) {
    yield put({
      type: CART_COUNT_FAIL,
      message: e.message,
    });
  }
}

export default function* watcher() {
  yield takeLatest(CART_COUNT_REQUEST, cartCountF);
}
