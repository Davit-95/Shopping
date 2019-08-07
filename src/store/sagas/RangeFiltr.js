import { takeLatest, put, call } from 'redux-saga/effects';
import * as api from '../../api';
import { FETCH_FILTRE_PRICE_REQUEST, FETCH_FILTRE_PRICE_SUCCESS, FETCH_FILTRE_PRICE_FAIL } from '../actions/product';


function* handleFiltrRangeFetch(action) {
  try {
    const { data } = yield call(api.getFiltrePrice, action.payload.value);
    yield put({
      type: FETCH_FILTRE_PRICE_SUCCESS,
      payload: { data },

    });
  } catch (e) {
    yield put({
      type: FETCH_FILTRE_PRICE_FAIL,
      message: e.message,
    });
  }
}

export default function* watcher() {
  yield takeLatest(FETCH_FILTRE_PRICE_REQUEST, handleFiltrRangeFetch);
}
