import {takeLatest, put, call} from 'redux-saga/effects';
import * as api from '../../api';

import {
  ADD_TO_CART_FAIL,
  ADD_TO_CART_REQUEST,
  ADD_TO_CART_SUCCESS,
} from '../actions/product';
import {
  CART_ITEM_UPDATE_FAIL, CART_ITEM_UPDATE_REQUEST,
  CART_ITEM_UPDATE_SUCCESS,
  CART_TOTAL_FAIL,
  CART_TOTAL_REQUEST,
  CART_TOTAL_SUCCESS,
} from '../actions/cart';


function* AddToCartFatchData() {
  try {
    const {data} = yield call(api.getCartData);
    const prIds = Object.values(data).map(d => d.product_id)
    const {data: prData} = yield call(api.getProducts, {include: prIds.join(',')});
    // console.log(prData)
    for (const i in data) {
      const {images, regular_price} = prData.find(p => p.id == data[i].product_id) || {}
      data[i].images = images
      data[i].regular_price = regular_price
    }
    // for (const i in data) {
    //   const {price} = prData.find(p => p.ID = data[i].product_id) || {}
    //   data[i].price = price}for (const i in data) {
    //   const {regular_price} = prData.find(p => p.ID = data[i].product_id) || {}
    //   data[i].regular_price = regular_price}
    yield put({
      type: ADD_TO_CART_SUCCESS,
      payload: {data},

    });
  } catch (e) {
    console.warn(e)
    yield put({
      type: ADD_TO_CART_FAIL,
      message: e.message,
    });
  }
}

function* cartcOUNTfATCH() {
  try {
    const {data} = yield call(api.cartCountTotal);
    yield put({
      type: CART_TOTAL_SUCCESS,
      payload: {data},

    });
  } catch (e) {
    yield put({
      type: CART_TOTAL_FAIL,
      message: e.message,
    });
  }
}

function* cartUp(action) {
  try {
    console.log(action.payload)
    const {data} = yield call(api.updateCartItem, action.payload.key, action.payload.quantity);
    yield put({
      type: CART_ITEM_UPDATE_SUCCESS,
      payload: {data},

    });
  } catch (e) {
    yield put({
      type: CART_ITEM_UPDATE_FAIL,
      message: e.message,
    });
  }
}


export default function* watcher() {
  yield takeLatest(ADD_TO_CART_REQUEST, AddToCartFatchData);
  yield takeLatest(CART_TOTAL_REQUEST, cartcOUNTfATCH);
  yield takeLatest(CART_ITEM_UPDATE_REQUEST, cartUp);
}
