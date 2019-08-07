import { takeLatest, put, call } from 'redux-saga/effects';
import * as api from '../../api';
import {DEL_CART_ITEM_FAIL, DEL_CART_ITEM_REQUEST, DEL_CART_ITEM_SUCCESS} from "../actions/cart";





function* delCartFetch(action) {
  try {
    const { data } = yield call(api.delCartItem, action.payload.key);

    yield put({
      type: DEL_CART_ITEM_SUCCESS,
      payload: { data },

    });
  } catch (e) {
    yield put({
      type: DEL_CART_ITEM_FAIL,
      message: e.message,
    });
  }
}

export default function* watcher() {
  yield takeLatest(DEL_CART_ITEM_REQUEST, delCartFetch);
}