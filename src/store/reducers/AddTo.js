
import {
  FETCH_ADDTO_REQUEST,
  FETCH_ADDTO_SUCCESS,
  FETCH_ADDTO_FAIL,
}
  from '../actions/product';


const initialState = {
  addToCartData: [],

};
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_ADDTO_REQUEST: {
      return { ...state, addToCartData: initialState.addToCartData };

    }
    case FETCH_ADDTO_SUCCESS: {
      return { ...state, addToCartData: action.payload.data };
    }
    case FETCH_ADDTO_FAIL: {
      return { ...state, addToCartData: initialState.addToCartData };
    }
    default: {
      return state;
    }
  }
}
