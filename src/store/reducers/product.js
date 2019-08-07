import {
  FETCH_PRICE_SUCCESS,
  FETCH_PRODUCTS_FAIL,
  FETCH_PRODUCTS_REQUEST,
  FETCH_PRODUCTS_SUCCESS, FETCH_SINGLE_FAIL,
  FETCH_SINGLE_PRODUCT, FETCH_SINGLE_SUCCESS,
} from '../actions/product';

const initialState = {
  products: [],
  single: {},
  page: 0,
  price: {},
};
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_PRODUCTS_REQUEST: {
      return { ...state, products: initialState.products, page: action.payload.data.page };

    }
    case FETCH_PRODUCTS_SUCCESS: {
      return { ...state, products: action.payload.data };
    }
    case FETCH_PRODUCTS_FAIL: {
      return { ...state, products: initialState.products };
    }

    case FETCH_SINGLE_PRODUCT: {
      return { ...state, single: initialState.single };
    }
    case FETCH_SINGLE_SUCCESS: {
      return { ...state, single: action.payload.data };
    }
    case FETCH_SINGLE_FAIL: {
      return { ...state, single: initialState.single };
    }
    case FETCH_PRICE_SUCCESS: {
      return { ...state, price: action.payload };
    }


    default: {
      return state;
    }
  }
}
