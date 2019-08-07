

import { CART_COUNT_FAIL, CART_COUNT_REQUEST, CART_COUNT_SUCCESS } from '../actions/product';

const initialState = {
  cartCountItem: [],

};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case CART_COUNT_REQUEST: {
      return { ...state, cartCountItem: initialState.cartCountItem };
    }
    case CART_COUNT_SUCCESS: {
      return { ...state, cartCountItem: action.payload.data };
    }
    case CART_COUNT_FAIL: {
      return { ...state, cartCountItem: initialState.cartCountItem };
    }
    default: {
      return state;
    }
  }
}
