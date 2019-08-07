
import {
  ADD_TO_CART_FAIL, ADD_TO_CART_REQUEST, ADD_TO_CART_SUCCESS,
}
  from '../actions/product';
import {
  CART_ITEM_UPDATE_FAIL, CART_ITEM_UPDATE_REQUEST,
  CART_ITEM_UPDATE_SUCCESS,
  CART_TOTAL_FAIL,
  CART_TOTAL_REQUEST,
  CART_TOTAL_SUCCESS,
} from '../actions/cart';


const initialState = {
  cartProducts: [],
  cartTotal: [],
  cartUp: [],

};
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TO_CART_REQUEST: {
      return { ...state, cartProducts: initialState.cartProducts };
    }
    case ADD_TO_CART_SUCCESS: {
      return { ...state, cartProducts: action.payload.data };
    }
    case ADD_TO_CART_FAIL: {
      return { ...state, cartProducts: initialState.cartProducts };
    }

    case CART_TOTAL_REQUEST: {
      return { ...state, cartTotal: initialState.cartTotal };
    }
    case CART_TOTAL_SUCCESS: {
      return { ...state, cartTotal: action.payload.data };
    }
    case CART_TOTAL_FAIL: {
      return { ...state, cartTotal: initialState.cartTotal };
    }


    case CART_ITEM_UPDATE_REQUEST: {
      return { ...state, cartUp: initialState.cartUp };
    }
    case CART_ITEM_UPDATE_SUCCESS: {
      return { ...state, cartUp: action.payload.key || action.payload.quantity };
    }
    case CART_ITEM_UPDATE_FAIL: {
      return { ...state, cartUp: initialState.cartUp };
    }
    default: {
      return state;
    }
  }
}
