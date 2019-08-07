import { takeLatest, put, call } from 'redux-saga/effects';
import * as api from '../../api';
import {
  FIND_DATA_FAIL,
  FIND_DATA_REQUEST,
  FIND_DATA_SUCCESS,
} from "../actions/find";




function* FindDat(action) {
  try {
    const { data } = yield call(api.getFindData,action.payload.search);
    console.log(data,'aasasdaaaasdasdas')
    yield put({
      type: FIND_DATA_SUCCESS,
      payload: { data },

    });
  } catch (e) {
    yield put({
      type: FIND_DATA_FAIL,
      message: e.message,
    });
  }
}

export default function* watcher() {
  yield takeLatest(FIND_DATA_REQUEST, FindDat);
}
