import { takeLatest, put, call } from 'redux-saga/effects';
import * as api from '../../api';
import {
  FETCH_FILTRE_COLOR_REQUEST,
  FETCH_FILTRE_COLOR_SUCCESS,
  FETCH_FILTRE_COLOR_FAIL,
} from '../actions/product';


function* handleFiltrRangeFetch( ) {
  try {
    const { data } = yield call(api.getFiltreColor);
    // console.log(data);
    yield put({
      type: FETCH_FILTRE_COLOR_SUCCESS,
      payload: { data },

    });
  } catch (e) {
    yield put({
      type: FETCH_FILTRE_COLOR_FAIL,
      message: e.message,
    });
  }
}

export default function* watcher() {
  yield takeLatest(FETCH_FILTRE_COLOR_REQUEST, handleFiltrRangeFetch);
}
