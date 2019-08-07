
import {
  CLEAR_CART_FAIL,
  CLEAR_CART_REQUEST,
  CLEAR_CART_SUCCESS,
}
  from '../actions/product';


const initialState = {
  cartClearF: [],

};
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case CLEAR_CART_REQUEST: {
      return { ...state, cartClearF: initialState.cartClearF };
    }
    case CLEAR_CART_SUCCESS: {
      return { ...state, cartClearF: action.payload.data };
    }
    case CLEAR_CART_FAIL: {
      return { ...state, cartClearF: initialState.cartClearF };
    }
    default: {
      return state;
    }
  }
}
