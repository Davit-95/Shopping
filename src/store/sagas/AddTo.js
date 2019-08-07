import { takeLatest, put, call } from 'redux-saga/effects';
import * as api from '../../api';
import {
  FETCH_ADDTO_REQUEST,
  FETCH_ADDTO_SUCCESS,
  FETCH_ADDTO_FAIL,
} from '../actions/product';



function* AddToCartFatch(action) {
  try {
    const { data } = yield call(api.addToCartFetch, action.payload.id);
    // console.log(data);
    // yield put(fetchCart());
    yield put({
      type: FETCH_ADDTO_SUCCESS,
      payload: { data },

    });
  } catch (e) {
    yield put({
      type: FETCH_ADDTO_FAIL,
      message: e.message,
    });
  }
}

export default function* watcher() {
  yield takeLatest(FETCH_ADDTO_REQUEST, AddToCartFatch);
}
